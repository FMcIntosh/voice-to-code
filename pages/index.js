import { Component } from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import CodeSection from 'components/CodeSection';
import tts from 'util/textToSpeech';
import speechRecognition from 'util/speechRecognition';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { spokenText: '' };
  }

  componentDidMount() {
    this.setState({ SpeechRecognition: new speechRecognition(this.onSpeechResult) });
  }

  onSpeechResult = event => {
    const last = event.results.length - 1;
    const spokenText = event.results[last][0].transcript;
    this.setState({ spokenText });
    tts(spokenText);
  };

  evalCode = () => {
    return eval(`${this.state.spokenText}`);
  };

  render() {
    return (
      <Grid container direction="column" align="center">
        <h2>Click start to have your speech recorded to text</h2>
        <StyledField id="oppenness" multiline value={this.state.spokenText} margin="dense" />
        <Button
          primary
          onClick={() => {
            this.state.SpeechRecognition.start();
            this.setState({ spokenText: '' });
          }}
        >
          Start
        </Button>
        <CodeSection>{this.state.spokenText}</CodeSection>
        output = {this.evalCode()}
      </Grid>
    );
  }
}

const StyledField = styled(TextField)`
  width: 40%;
  margin-top: 200px;
`;
