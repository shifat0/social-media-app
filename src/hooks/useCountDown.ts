import { useState, useEffect } from "react";

interface CountdownProps {
  minutes: number;
}

interface TimeLeft {
  minutes?: number;
  seconds?: number;
}

export default function useCountdown({
  minutes,
}: CountdownProps): TimeLeft | null {
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

  return Object.keys(timeLeft).length ? timeLeft : null;
}
