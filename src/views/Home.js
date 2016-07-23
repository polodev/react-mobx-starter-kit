import React from 'react';
import {Menu} from '../components'

class Home extends React.Component {
   render() {
      return (
         <div>
          <Menu {...this.props} />
          <div className="container">
            <div className="row">
              <div className="col-xs-4">
                <h1 className="text-center">Hello world</h1>
                <p className="well">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi quas architecto blanditiis qui unde, rem amet maiores officia itaque quia voluptas maxime ullam, molestiae porro libero labore mollitia corporis.</p>
              </div>
              <div className="col-xs-4">
                <h1 className="text-center">Hello world</h1>
                <p className="well">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi quas architecto blanditiis qui unde, rem amet maiores officia itaque quia voluptas maxime ullam, molestiae porro libero labore mollitia corporis.</p>
              </div>
              <div className="col-xs-4">
                <h1 className="text-center">Hello world</h1>
                <p className="well">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi quas architecto blanditiis qui unde, rem amet maiores officia itaque quia voluptas maxime ullam, molestiae porro libero labore mollitia corporis.</p>
              </div>
            </div>
          </div>
         </div>
      );
   }
}

export default Home;

