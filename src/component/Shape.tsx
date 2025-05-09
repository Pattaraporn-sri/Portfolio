import React, { useEffect } from "react";
// import "./shape.css";

// กำหนด props ที่จะรับเข้าไปในคอมโพเนนต์
interface ShapeProps {
    butterflyImage: string;
  }

const Shape :React.FC<ShapeProps> = ({ butterflyImage }) => {
  useEffect(() => {
    const container = document.querySelector(".shape-container") as HTMLElement;

    if (!container) {
      console.error("Element .shape-container not found.");
      return; // ออกจากฟังก์ชันหาก container เป็น null
    }

    let butterfly = 0;
    let animationFrameId: number; // เก็บค่า ID ของ animation frame

    const animate = () => {
      butterfly += 0.01; // เพิ่มค่า butterfly ทีละน้อย
      if (butterfly > 1) butterfly = 0; // รีเซ็ตค่าเมื่อเกิน 1

      // อัปเดตตัวแปร CSS
      container.style.setProperty("--butterfly", butterfly.toString());

      animationFrameId = requestAnimationFrame(animate); // เรียกฟังก์ชันนี้ซ้ำ
    };

    animationFrameId = requestAnimationFrame(animate); // เริ่มแอนิเมชัน

    return () => cancelAnimationFrame(animationFrameId); // ล้างแอนิเมชันเมื่อคอมโพเนนต์ถูก unmount
  }, []);

  return (
    <div className="shape-container shape-container--with-indicators">
      <div className="shape">
        <img src={butterflyImage} alt="Butterfly" />
      </div>
    </div>
  );
};

export default Shape;
