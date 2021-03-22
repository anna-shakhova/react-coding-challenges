import React, { useState, Component } from 'react';
import RocketCore from './RocketCore';

export const FunctionalRocket = React.memo(() => {
  const [initialLaunchTime] = useState(Date.now());

  console.log('Functional component');

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { initialLaunchTime } = this.state;
    console.log('Class component');

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
