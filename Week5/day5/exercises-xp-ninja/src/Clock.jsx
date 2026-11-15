import { useEffect, useState } from "react";

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const tick = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    const intervall = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(intervall);
  }, [currentDate]);

  return (
    <>
      <h1>{currentDate.toLocaleTimeString()}</h1>
    </>
  );
}

export default Clock;
