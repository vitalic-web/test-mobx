import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import TestContext from '../contexts/TestContext';

const MobxElement = observer(() => {
  const mainStore = useContext(TestContext);
  const increase = () => mainStore.timerStore.increaseTimer();
  const addToFav = () => mainStore.otherStore.addToFavourite({ start: 3, finish: 4 })

  return (
    <div>
      <p>State from timerStore: {mainStore.timerStore.secondsPassed}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={addToFav}>Add to favourites</button>
    </div>
  )
});

export default MobxElement;