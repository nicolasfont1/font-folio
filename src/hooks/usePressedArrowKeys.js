import { useEffect, useState } from "react";

export default function usePressedArrowKeys() {
  const [pressLeftArrow, setPressLeftArrow] = useState("");
  const [pressUpArrow, setPressUpArrow] = useState("");
  const [pressDownArrow, setPressDownArrow] = useState("");
  const [pressRightArrow, setPressRightArrow] = useState("");
  const [pressEnterKey, setPressEnterKey] = useState("");
  
  const handlePressedArrowKeys = (event) => {
    if (event.type === "keydown" && event.key === "ArrowLeft") {
      setPressLeftArrow("translate-y-1");
    } else if (event.type === "keyup" && event.key === "ArrowLeft") {
      setPressLeftArrow("");
    }
    if (event.type === "keydown" && event.key === "ArrowUp") {
      setPressUpArrow("translate-y-1");
    } else if (event.type === "keyup" && event.key === "ArrowUp") {
      setPressUpArrow("");
    }
    if (event.type === "keydown" && event.key === "ArrowDown") {
      setPressDownArrow("translate-y-1");
    } else if (event.type === "keyup" && event.key === "ArrowDown") {
      setPressDownArrow("");
    }
    if (event.type === "keydown" && event.key === "ArrowRight") {
      setPressRightArrow("translate-y-1");
    } else if (event.type === "keyup" && event.key === "ArrowRight") {
      setPressRightArrow("");
    }
    if (event.type === "keydown" && event.key === "Enter") {
      setPressEnterKey("translate-y-1");
    } else if (event.type === "keyup" && event.key === "Enter") {
      setPressEnterKey("");
    }
  };
  
  useEffect(() => {
    window.addEventListener("keydown", handlePressedArrowKeys);
    window.addEventListener("keyup", handlePressedArrowKeys);
    return () => {
      window.removeEventListener("keydown", handlePressedArrowKeys);
      window.removeEventListener("keyup", handlePressedArrowKeys);
    };
  }, []);

  return {pressLeftArrow, pressUpArrow, pressDownArrow, pressRightArrow, pressEnterKey}
}