import Moon from './components/Moon';
import DateAndTime from './components/DateAndTime';
import InfoPanel from './components/InfoPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles/App.scss';

function App() {
  return (
    <main>
      <div className="current-moon">
        <h1>it's da moon</h1>
        <Moon />
        <DateAndTime />
      </div>
      <div className="panels">
        <InfoPanel sectionHeader='Current Phase'/>
        <InfoPanel sectionHeader='During This Phase'/>
        <InfoPanel sectionHeader='Header'/>
        <InfoPanel sectionHeader='Header'/>
      </div>
      <a href="#">{<FontAwesomeIcon icon={faGithub} size='2x' className='icon github' />}</a>
    </main>
  );
}

export default App;