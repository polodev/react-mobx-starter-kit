import React from 'react';
import {Menu} from '../components'

class App extends React.Component {
   render() {
      return (
         <div>
            <Menu {...this.props} />
            <div className="container">
              <div className="row">
                <div className="text-center">
                  <h1>React Simple starter kit Home Page</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptatem dolore nulla doloremque vitae rerum vero ut, dolorem deserunt temporibus nobis est suscipit magnam soluta placeat, quos distinctio? Dicta, commodi.</p>
                    <div className="center-block">
                      <img src="../static/images/laravel.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
         </div>
      );
   }
}

export default App;
