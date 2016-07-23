//copied from https://github.com/mobxjs/mobx-react-boilerplate
import { observable } from 'mobx';

class CounterStore {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

export default CounterStore;
