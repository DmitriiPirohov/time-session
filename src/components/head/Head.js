import classNames from 'classnames';
import './Head.scss';

export const Head = ({ timeCalculator, SetTimeCalculator, sessionTime, SetSessionTime }) => {
  function activator(str) {
    if (str === 'Session') {
      SetSessionTime(true);
      SetTimeCalculator(false);
    } else {
      SetTimeCalculator(true);
      SetSessionTime(false);
    }
  }

  return (
    <>
      <div className="Head">
        <div
          className={classNames(
            'Head__button',
            (sessionTime) && 'active'
          )
          }
          onClick={() => activator('Session')}
        >
          Session Time
        </div>

        <div
          className={classNames(
            'Head__button',
            (timeCalculator) && 'active'
          )
          }
          onClick={() => activator('Calculator')}
        >
          Time Calculator
        </div>
      </div>
    </>
  );
};
