import './App.css';
import MobxElement from './components/MobxElement';
import TestContext from './contexts/TestContext';
import TimerStore from './stores/TimerStore';
import OtherStore from './stores/OtherStore';
import MobxElementTwo from './components/MobxElementTwo';
import MobxFav from './components/MobxFav';

function App() {
  const mainStore = {
    timerStore: new TimerStore(),
    otherStore: new OtherStore()
  };

  return (
    <TestContext.Provider value={mainStore}>
      <div className="App">
        <MobxElement />
        <MobxElementTwo />
        <MobxFav />
      </div>
    </TestContext.Provider>
  );
}

export default App;
