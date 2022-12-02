import { useEffect, useState } from "react";

export const Calculator = () => {
  const [minutes, SetMinutes] = useState(0);
  const [hour, SetHour] = useState('hh');
  const [minute, SetMinute] = useState('mm');
  const [outputHour, SetOutputHour] = useState(0);
  const [outputMinutes, SetOutputMinutes] = useState(0);
  useEffect(() => {
    SetOutputHour((Math.floor(minutes / 60)));
    SetOutputMinutes(minutes % 60);
  }, [minutes])

  function countTime() {
    SetMinutes(prev => prev += (Number(hour) * 60) + Number(minute));
    SetHour('');
    SetMinute('');
  }

  function clear() {
    SetMinutes(0);
    SetHour('');
    SetMinute('');
    SetOutputHour(0);
    SetOutputMinutes(0);
  }
  return (
    <>
      <div className="sessionTime container">
        <div className='sessionTime__number'></div>
        <div className='sessionTime__info'>
          <section>Time</section>

          <input
            type="number"
            placeholder='hh'
            value={hour}
            onChange={(event) => SetHour(Number(event.target.value))}
            className="input-time"
          />

          <input
            type="number"
            placeholder='mm'
            value={minute}
            onChange={(event) => SetMinute((event.target.value) >= 60 ? alert('wrong minutes') : Number(event.target.value))}
            className="input-time"
          />
        </div>

        <button onClick={() => countTime()}>Add</button>
      </div>

      <div>{outputHour} hour(s) and {outputMinutes} minutes</div>

      <button onClick={() => clear()}>Clear</button>
    </>
  );
};
