import { makeAutoObservable } from "mobx";

class TimerStore {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }

  decreaseTimer() {
    this.secondsPassed -= 1;
  }
};

export default TimerStore;