import * as React from 'react';

interface IAppProps {}

interface IAppState {
  counter: number;
}

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  private handleClick = () => {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <React.Fragment>
        <h3>Hallo Welt</h3>
        <p>Counter value is {this.state.counter}</p>
        <button onClick={this.handleClick}>Klick mich</button>
      </React.Fragment>
    )
  }
}

export default App;

export const component = <App/>;
