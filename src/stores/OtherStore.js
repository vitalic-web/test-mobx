import { makeAutoObservable } from "mobx";

class OtherStore {
  someState = 12;
  isOpen = true;
  favourite = [{
    start: 1,
    finish: 2
  }];

  constructor() {
    makeAutoObservable(this);
  }

  increaseStae() {
    this.someState += 2;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  addToFavourite(favRoute) {
    this.favourite.push(favRoute);
  }
};

export default OtherStore;