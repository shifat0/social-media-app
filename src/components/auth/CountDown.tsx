import React, { useState, useEffect } from "react";

interface CountdownProps {
  minutes: number;
}

interface TimeLeft {
  minutes?: number;
  seconds?: number;
}

export default function Countdown({ minutes }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference =
      minutes * 60 * 1000 - (new Date().getTime() - startTime.getTime());
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor(difference / (1000 * 60)),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [startTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof TimeLeft;
    if (!timeLeft[key]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[key]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="text-center">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-red-400">Time's up!</span>
      )}
    </div>
  );
}
