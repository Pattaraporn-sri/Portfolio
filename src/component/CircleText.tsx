interface CircleTextProps {
  text: string;
  id: string;
  direction: "top" | "bottom";
}

function CircleText({ text, id, direction }: CircleTextProps): JSX.Element {
  const pathData =
    direction === "top"
      ? "M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
      : "M 100,100 m -75,0 a 75,75 0 0,0 150,0";

  return (
    <svg className="w-48 h-48" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id={id} d={pathData} />
      </defs>
      <text className="text-2xl fill-amber-700" fontSize="12" textAnchor="middle">
        <textPath href={`#${id}`} startOffset={direction === "top" ? "25%" : "50%"}>
          {text}
        </textPath>
      </text>
    </svg>
  );
}

export default CircleText;
