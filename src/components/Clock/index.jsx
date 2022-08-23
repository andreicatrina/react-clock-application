import React, { useEffect, useState } from "react";
import s from "./s.module.css";

const Clock = () => {
  const [clockState, setClockState] = useState();
  const [clockState1, setClockState1] = useState();
  const [clockState2, setClockState2] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.getHours());
      setClockState1(date.getMinutes());
      setClockState2(date.getSeconds());
    }, 1000);
  }, []);

  return (
    <body>
      <div className={s.ClockDiv1}>{clockState}</div>
      <div className={s.ClockDiv2}>:</div>
      <div className={s.ClockDiv3}>{clockState1}</div>
      <div className={s.ClockDiv4}>:</div>
      <div className={s.ClockDiv5}>{clockState2}</div>
    </body>
  );
};

export default Clock;
