import { useState } from 'react';
import './App.css';
import { Calculator } from './components/calculator/Calculator';
import { Head } from './components/head/Head';
import { SessionTime } from './components/sessionTime/SessionTime';

function App() {
  const [timeCalculator, SetTimeCalculator] = useState(true);
  const [sessionTime, SetSessionTime] = useState(false);

  return (
    <div className="App">
      <Head
        timeCalculator={timeCalculator}
        SetTimeCalculator={SetTimeCalculator}
        SetSessionTime={SetSessionTime}
        sessionTime={sessionTime}
      />

      {
        (sessionTime) && <SessionTime />
      }
      {
        (timeCalculator) && <Calculator />
      }
    </div>
  );
}

export default App;
