import React, {Component} from 'react';
import Facebook from './Facebook';
import Twitter from './Twitter';

class Social extends Component {
  render () {
    return (
      <div className='Social'>
      <h4>Social</h4>
      <Facebook />
      <Twitter />
      </div>
    );
  }
}

export default Social;