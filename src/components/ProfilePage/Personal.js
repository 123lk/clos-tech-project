import React, {Component} from 'react';

class Personal extends Component {
  render () {
    //issues with passing down props, starts as undefined.  Timing issue?  ComponentWillMount()?
    // console.log(this.props.personal);
    return (
      <div className='Personal'>
      <h4>Personal</h4>
      </div>
    );
  }
}

export default Personal;