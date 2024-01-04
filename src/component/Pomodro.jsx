import React, { useState, useEffect } from "react";
import "./Pomodro.css";
const PomodoroTimerApp = () => {
  const [timer, setTimer] = useState(25 * 60); // 25 minutes in seconds
  const [isBreak, setIsBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTimer(25 * 60);
    setIsBreak(false);
    setIsActive(false);
  };

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setIsActive(false);

      if (isBreak) {
        // Break is complete, reset for next work session
        setTimer(25 * 60);
        setIsBreak(false);
      } else {
        // Work session is complete, start break
        setTimer(5 * 60);
        setIsBreak(true);
        setIsActive(true);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timer, isBreak]);

  return (
    <div className="wrapper">
        <div className="cnt-box">
        <div className="child-wrapper">
        <h1>{isBreak ? "Break Timer" : "Pomodoro Timer"}</h1>
        <p>
          {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
        </p>
        <button className="btn-start" onClick={startTimer} disabled={isActive}>
          Start
        </button>
        <button className="btn-pause" onClick={pauseTimer} disabled={!isActive}>
          Pause
        </button>
        <button className="btn-reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
        </div>
      
    </div>
  );
};

export default PomodoroTimerApp;
