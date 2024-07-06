import React, { useState, useEffect } from "react";
import "../assets/styles/Typewriter.css";
const Typewriter = () => {
  const fullText = "full-stack developer";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const blink = text === fullText || text === "";

  useEffect(() => {
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(150);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      setTimeout(() => setIsDeleting(false), 1500);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <div className="typewriter">
      <h1 className={blink ? "blink" : ""}>{text}</h1>
    </div>
  );
};

export default Typewriter;
