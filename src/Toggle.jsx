import { motion } from "framer-motion";
import { useState } from "react";

function Toggle({theme , setTheme}) {
  const isDark = theme == "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  }


  const toggleSwitch = () => setIsOn(!isOn);

  const container = {
    width: 130,
    height: 65,
    backgroundColor: isDark? "#7f6775ff" : "#F75270",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 10,
  };

  const handle = {
    width: 50,
    height: 50,
    backgroundColor: "#67485A",
    borderRadius: "50%",
  };

  return (
    <button
      style={{
        ...container,
        justifyContent: isDark ? "flex-end" : "flex-start"
      }}
      onClick={toggleTheme}
    >
      <motion.div
        style={handle}
        layout
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}

export default Toggle;
