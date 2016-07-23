import React from 'react';
import {Menu} from '../components'
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {CounterStore} from '../store/'
let counterStoreObj = new CounterStore(); //you can pass something to Store from here

@observer
class App extends React.Component {
   render() {
      return (
         <div>
            <Menu {...this.props} />
            <div className="container">
              <div className="row">
                <div className="text-center">
                  <h1>Simple Counter</h1>
                  <div>
                    <button onClick={this.onReset}>
                      Seconds passed: {counterStoreObj.timer}
                    </button>
                    <DevTools />
                  </div>
                </div>
              </div>
            </div>
         </div>
      );
   }
   onReset = () => {
    counterStoreObj.resetTimer();
  }
}

export default App;
