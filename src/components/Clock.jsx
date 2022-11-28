import { useState, useEffect } from 'react';

function addZero(num) {
  return num.toString().padStart(2, 0);
}

function Clock() {
  const [timeObj, setTimeObj] = useState(new Date());

  const hours = timeObj.getHours();
  const min = timeObj.getMinutes().toString().padStart(2, 0);
  const sec = timeObj.getSeconds();

  useEffect(() => {
    const intv1 = setInterval(() => {
      setTimeObj(new Date());
    }, 1000);
    // sunaikinant sita komponenta mes isvalom is atminties intervalo kartojima
    return () => {
      clearInterval(intv1);
      console.log('iterval cleared');
    };
  }, []);

  return (
    <h2 className='card'>
      {addZero(hours)}:{min}:{addZero(sec)}
    </h2>
  );
}

export default Clock;
