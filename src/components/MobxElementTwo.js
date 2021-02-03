import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import TestContext from '../contexts/TestContext';

const MobxElementTwo = observer(() => {
  const mainStore = useContext(TestContext);
  const decrease = () => mainStore.timerStore.decreaseTimer();

  return (
    <div>
      <p>State useContext: {mainStore.timerStore.secondsPassed}</p>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
});

export default MobxElementTwo;