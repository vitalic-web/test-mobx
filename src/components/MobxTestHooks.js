import { observer, useLocalObservable } from 'mobx-react-lite';

const MobxTestHooks = observer(() => {
  const timer = useLocalObservable(() => ({
    secondsPassed: 0,
    increaseTimer() {
      this.secondsPassed++
    },
    decreaseTimer() {
      this.secondsPassed--
    }
  }));

  const increase = () => timer.increaseTimer();
  const decrease = () => timer.decreaseTimer();

  return (
    <div>
      <h3>Mobx Hooks</h3>
      <p>State: {timer.secondsPassed}</p>
      <button onClick={increase} >Increment</button>
      <button onClick={decrease} >Decrement</button>
    </div>
  )
});

export default MobxTestHooks;