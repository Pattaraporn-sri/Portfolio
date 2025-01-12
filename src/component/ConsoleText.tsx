import React, { useEffect, useState } from 'react';

type ConsoleTextProps = {
  words: string[];
  colors?: string[];
};

const ConsoleText: React.FC<ConsoleTextProps> = ({ words, colors = ['#fff'] }) => {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [letterCount, setLetterCount] = useState<number>(1);
  const [x, setX] = useState<number>(1);
  const [waiting, setWaiting] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>(colors[0]);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (!waiting) {
        if (letterCount === 0) {
          setWaiting(true);
          setTimeout(() => {
            const newColors = [...colors];
            const newWords = [...words];

            newColors.push(newColors.shift()!);
            newWords.push(newWords.shift()!);

            setCurrentColor(newColors[0]);
            setCurrentWord(newWords[0]);
            setX(1);
            setLetterCount(1);
            setWaiting(false);
          }, 1000);
        } else if (letterCount === currentWord.length + 1) {
          setWaiting(true);
          setTimeout(() => {
            setX(-1);
            setLetterCount(letterCount - 1);
            setWaiting(false);
          }, 1000);
        } else {
          setLetterCount(letterCount + x);
        }
      }
    }, 120);

    return () => clearInterval(textInterval);
  }, [letterCount, waiting, x, currentWord, colors, words]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 400);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div>
      <span id="text" style={{ color: currentColor }}>
        {currentWord.substring(0, letterCount)}
      </span>
      <span id="console" className={`console-underscore ${visible ? '' : 'hidden'}`}>
        _
      </span>
      <style>{`
        .console-underscore.hidden { visibility: hidden; }
        .console-underscore { display: inline-block; }
      `}</style>
    </div>
  );
};

export default ConsoleText;
