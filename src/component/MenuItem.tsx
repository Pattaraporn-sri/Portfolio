import React from "react";

interface MenuItemProps {
  label: string;
  targetId: string;
}

function MenuItem({ label, targetId }: MenuItemProps): JSX.Element {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="mt-1 cursor-pointer hover:text-yellow-600 transition duration-200"
      onClick={handleClick}
    >
      {label}
    </div>
  );
}

export default MenuItem;
