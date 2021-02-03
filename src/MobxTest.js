import { observer } from 'mobx-react-lite';

const MobxTest = observer(({ timer }) => {
  const increase = () => timer.increaseTimer();
  const decrease = () => timer.decreaseTimer();

  return (
    <div>
      <h3>Mobx Class</h3>
      <p>State: {timer.secondsPassed}</p>
      <button onClick={increase} >Increment</button>
      <button onClick={decrease} >Decrement</button>
    </div>
  )
});

export default MobxTest;
