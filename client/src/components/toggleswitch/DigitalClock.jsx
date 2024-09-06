import  { useState, useEffect } from 'react';

const DigitalClock = () => {
  // State to store the current time
  const [time, setTime] = useState(new Date());

  // useEffect hook to update the time every second
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerID);
  }, []);

  // Function to update the time state
  const tick = () => {
    setTime(new Date());
  };

  // Formatting the time as HH:MM:SS
  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h2>Real-Time Digital Clock</h2>
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default DigitalClock;
