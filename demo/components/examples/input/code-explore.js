/* @flow */

import React from 'react';
import ExampleBox from '../ExampleBox';

type State = {
  code: {| code: string, value: string |}[],
};

export default class CodeExplore extends React.Component<{||}, State> {
  state: State = { code: [] };

  render() {
    return (
      <ExampleBox>
        <h2>Input&nbsp;
          <code>KeyboardEvent</code>&nbsp;
          <code>.code</code>&nbsp;
          and <code>.value</code>&nbsp;
          explore:
        </h2>

        <input onKeyPress={this.handleKeyPress} />

        <p>
          Last 3 values (code =&gt; value):
        </p>
        <ol>
          {this.state.code
            .reverse()
            .map((c, i) =>
              <li key={i}>{c.code} =&gt; {c.value}</li>
            )}
        </ol>
      </ExampleBox>
    );
  }

  handleKeyPress = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const {code} = this.state;

    code.push({
      // $FlowFixMe
      code: e.nativeEvent.code,
      value: e.key,
    });
    if (code.length > 3) {
      code.shift();
    }

    this.setState({ code });
  };
}
