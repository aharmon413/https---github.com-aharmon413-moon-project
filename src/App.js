import Moon from './components/Moon';
import DateAndTime from './components/DateAndTime';
import InfoPanel from './components/InfoPanel';
import { moonCycle } from './data/mooncycle';
import { majorPhases } from './data/majormoonphases';
import { zodiac } from './data/zodiacsigns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles/App.scss';

function getPhaseName(phase) {
  switch (true) {
    case (phase == 30 || phase == 1): // new moon value can be 1 or 30
      return 'New Moon';
    case (phase <= 8): // waxing crescent is between 2 and 8
      return 'Waxing Crescent';
    case (phase <= 9): // first quarter is between 7 and 9
      return 'First Quarter';
    case (phase <= 14): // waxing gibbous is between 10 and 14
      return 'Waxing Gibbous';
    case (phase <= 16): // full moon is between 15 and 16
      return 'Full Moon';
    case (phase <= 21): // waning gibbous is between 17 and 21
      return 'Waning Gibbous';
    case (phase <= 23): // third quarter is between 22 and 23
      return 'Third Quarter';
    case (phase <= 29): // waning crescent is between 24 and 29
      return 'Waning Crescent';
    default:
      return;
  }
};

// http://www.ben-daglish.net/moon.shtml
// this function uses a known new moon in 1970 and the current date to calculate a value between 1 and 30,
// with various ranges of numbers associated with different moon phases -- see getPhaseName function above
function calcCurrentPhase() { 
  let lp = 2551443;
  let now = new Date();
  let new_moon = new Date(1970, 0, 7, 20, 35, 0);
  let phase = ((now.getTime() - new_moon.getTime()) / 1000) % lp;
  phase = Math.floor(phase / (24 * 3600)) + 1;
  let phaseName = getPhaseName(phase);
  return [now, phaseName];
};

function calcMajorPhases(now) {
  let lastPhase, nextPhase, lastMajorPhase;
  for (let majorPhase of majorPhases) {
    let majorPhaseDate = new Date(`${majorPhase.date} ${majorPhase.time}`);
    if (now > majorPhaseDate) {
      lastMajorPhase = majorPhase; // save this date in case the next date checked is our next major phase. If so, that means this one is the previous major phase.
    } else if (now <= majorPhaseDate) {
      lastPhase = lastMajorPhase;
      nextPhase = majorPhase;
      return [lastPhase, nextPhase];
    }
  }
};

function App() {
  let [now, currentPhaseName] = calcCurrentPhase();
  let [lastPhase, nextPhase] = calcMajorPhases(now);
  let currentPhaseActivities = moonCycle[currentPhaseName].activities.map(item => <li>{item}</li>);
  let lastSign = zodiac[lastPhase.sign].name;
  let nextSign = zodiac[nextPhase.sign].name;

  return (
    <main>
      <div className="current-moon">
        <h1>it's da moon</h1>
        <Moon />
        <DateAndTime />
      </div>
      <div className="panels">
        <InfoPanel sectionHeader={currentPhaseName} sectionContent={moonCycle[currentPhaseName].description} />
        <InfoPanel sectionHeader='During This Phase' sectionContent={currentPhaseActivities} />
        <InfoPanel sectionHeader='Next Major Phase' sectionContent={`${nextPhase.type} Moon on ${nextPhase.date} in`} zodiacSign={`${zodiac[nextSign].symbol} ${nextSign}`} zodiacMessage={zodiac[nextSign].message}/>
        <InfoPanel sectionHeader='Last Major Phase' sectionContent={`${lastPhase.type} Moon on ${lastPhase.date} in`} zodiacSign={`${zodiac[lastSign].symbol} ${lastSign}`} zodiacMessage={zodiac[lastSign].message}/>
      </div>
      <a href="#">{<FontAwesomeIcon icon={faGithub} size='2x' className='icon github' />}</a>
    </main>
  );
}

export default App;