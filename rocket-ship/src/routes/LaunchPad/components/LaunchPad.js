import React, {useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

  useEffect(() => {
    setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);
  }, [rerenderCount]);

  return (
    <div className="launchpad">
      <Switch>
        <Route exact path="/class">
          <ClassRocket />
        </Route>
        <Route exact path="/func">
          <FunctionalRocket />
        </Route>
        <Route path="/">
          <Redirect to="/class" />
        </Route>
      </Switch>
    </div>
  );
}
