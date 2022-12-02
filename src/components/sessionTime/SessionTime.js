import { clear } from '@testing-library/user-event/dist/clear';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import './sessionTime.scss';

export const SessionTime = () => {
  const [hourStart, SetHourStart] = useState('');
  const [minuteStart, SetMinuteStart] = useState('');
  const [hourFinish, SetHourFinish] = useState('');
  const [minuteFinish, SetMinuteFinish] = useState('');
  const [counterHours, SetCounterHours] = useState(0);
  const [counterMinutes, SetCounterMinutes] = useState(0);
  const [time, SetTime] = useState(0)

  useEffect(() => {
    SetCounterHours((Math.floor(time / 60)));
    SetCounterMinutes(time % 60)
  }, [time])

  function settterHour(n, fun) {
    n.replace(/[^0-9]/g, '');

    if (Number(n) > 24 || n.includes('.')) {
      alert('Wrong hour formate');
    }
    if (Number(n) <= 24) {
      if (fun === 'start') {
        SetHourStart(Number(n));
      } else {
        SetHourFinish(Number(n))
      }
    }
  }

  function settterMinute(n, fun) {
    n.replace(/[^0-9]/g, '');

    if (Number(n) >= 60 || n.includes('.')) {
      alert('Wrong minute formate');
    }
    if (Number(n) < 60) {
      if (fun === 'start') {
        SetMinuteStart(Number(n));
      } else {
        SetMinuteFinish(Number(n))
      }
    }
  }

  function counterHour(n) {
    if ((String(hourStart).length === n.length && (Number(n) < hourStart))) {
      alert('Wrong hour formate -');
    }

    settterHour(n, 'end')
  }

  function counterMinute(n, i) {
    settterMinute(n, 'end');

  }

  function countTime() {
    let count = 0;
    let start = (hourStart * 60) + minuteStart;
    let finish = (hourFinish * 60) + minuteFinish;
    let hour = time;

    for (let i = start; i < finish; i++) {
      count++;
    }

    SetTime(prev => prev += count);
    SetHourStart('hh');
    SetMinuteStart('mm');
    SetHourFinish('hh');
    SetMinuteFinish('mm');
  }

  function clear() {
    return (
      SetHourStart('hh'),
      SetMinuteStart('mm'),
      SetHourFinish('hh'),
      SetMinuteFinish('mm'),
      SetCounterHours(0),
      SetCounterMinutes(0),
      SetTime(0)
    )

  }

  return (
    <>
      <div className="sessionTime container">
        <div className='sessionTime__number'></div>
        <div className='sessionTime__info'>
          <section>Start !</section>

          <input
            type="number"
            placeholder='hh'
            value={hourStart}
            onChange={(event) => settterHour(event.target.value, 'start')}
            className="input-time"
          />

          <input
            type="number"
            placeholder='mm'
            value={minuteStart}
            onChange={(event) => settterMinute(event.target.value, 'start')}
            className="input-time"
          />
        </div>

        <div className='sessionTime__info'>
          <section>Finish</section>

          <input
            type="number"
            placeholder='hh'
            value={hourFinish}
            onChange={(event) => counterHour(event.target.value)}
            className="input-time"
          />

          <input
            type="number"
            placeholder='mm'
            value={minuteFinish}
            onChange={(event) => counterMinute(event.target.value)}
            className="input-time"
          />
          <button onClick={() => countTime()}>Add</button>
        </div>

      </div>

      {/* } */}
      <div>{`${counterHours} hour(s) and ${counterMinutes} minutes`}</div>
      <button onClick={() => clear()}>Clear</button>
    </>
  );
};
