import CodeEditor from 'components/CodeEditor';
import { Component } from 'react';

export default class extends Component {
  state = { loaded: false };

  componentDidMount = () => {
    this.setState({ loaded: true });
  };

  render() {
    console.log(this.state.loaded);
    return this.state.loaded ? <CodeEditor /> : <div />;
  }
}
