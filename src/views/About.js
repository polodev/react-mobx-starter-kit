import React from 'react';
import {Menu} from '../components'

class About extends React.Component {
   render() {
      return (
         <div>
            <Menu {...this.props} />
            <div className="container">
              <div className="row">
                <div className="jumbotron">
                  <h1>This is the About page</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam pariatur porro molestias itaque tempore, incidunt, aliquid non sed accusantium beatae molestiae. Expedita sint odit laborum odio fugit ipsa dolor?</p>
                </div>
              </div>
            </div>
         </div>
      );
   }
}
export default About;
