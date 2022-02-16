import Moon from './components/Moon';
import DateAndTime from './components/DateAndTime';
import InfoPanel from './components/InfoPanel';
import './styles/App.scss';

function App() {
  return (
    <main className="App">
      <h1>MoonDash</h1>
      <div className="current-moon">
        <Moon />
        <DateAndTime />
      </div>
      <div className="current-phase">
        <InfoPanel sectionHeader={'Current Phase'}/>
        <InfoPanel sectionHeader={'During This Phase'}/>
      </div>
      <div className="major-phase">
        <InfoPanel sectionHeader={'Header'}/> { /* Next Major Phase */}
        <InfoPanel sectionHeader={'Header'}/> { /* Last Major Phase */}
      </div>
    </main>
  );
}

export default App;