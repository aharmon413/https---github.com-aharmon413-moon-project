import Moon from './components/Moon';
import DateAndTime from './components/DateAndTime';
import InfoPanel from './components/InfoPanel';
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
    </main>
  );
}

export default App;