/* @flow */

import React from 'react';

import ExampleBox from '../ExampleBox';
import KeyHandler, {KEYPRESS} from '../../../../lib';

type State = {
  showMenu: boolean,
};

export default class Component extends React.Component<{||}, State> {
  state: State = { showMenu: false };

  render() {
    const { showMenu } = this.state;

    return (
      <ExampleBox>
        <KeyHandler keyEventName={KEYPRESS} keyValue="s" onKeyHandle={this.toggleMenu} />
        <h2>Component example:</h2>

        <p>Press <code>s</code> to <strong>toggle</strong> the menu.</p>

        {showMenu &&
          <ol>
            <li>hello</li>
            <li>world</li>
          </ol>
        }

        <p>
          Code:
        </p>
        <pre>
          {`
  <KeyHandler
    keyEventName={KEYPRESS}
    keyValue="s"
    onKeyHandle={this.toggleMenu}
  />`}
        </pre>
      </ExampleBox>
    );
  }

  toggleMenu = (event: KeyboardEvent) => {
    event.preventDefault();

    this.setState({ showMenu: !this.state.showMenu });
  };
}
