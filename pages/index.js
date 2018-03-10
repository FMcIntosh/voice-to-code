import { Component } from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Router from 'next/router';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { color: '' };
  }

  componentDidMount() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

    this.recognition = new SpeechRecognition();
    //this.recognition.continuous = false;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.recognition.onresult = (event, obj = this) => {
      var last = event.results.length - 1;
      obj.setState({ color: event.results[last][0].transcript });

      console.log('Confidence: ' + event.results[0][0].confidence);

      obj.speak(event.results[last][0].transcript);
    };

    this.recognition.onspeechend = () => {
      this.recognition.stop();
    };

    this.recognition.onnomatch = () => {
      diagnostic.textContent = "I didn't recognise that color.";
    };

    this.recognition.onerror = event => {
      diagnostic.textContent = 'Error occurred in this.recognition: ' + event.error;
    };
  }

  speak = text => {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }

    const voices = synth.getVoices();

    if (text !== '') {
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.voice = voices[4];
      utterThis.pitch = 1;
      utterThis.rate = 1;
      synth.speak(utterThis);
    }
  };

  render() {
    return (
      <Grid container direction="column" align="center">
        <h2>Click start to have your speech recorded to text</h2>
        <StyledField id="oppenness" multiline value={this.state.color} margin="dense" />
        <Button
          primary
          onClick={() => {
            this.recognition.start();
            this.setState({ color: '' });
          }}
        >
          Start
        </Button>
      </Grid>
    );
  }
}

const StyledField = styled(TextField)`
  width: 40%;
  margin-top: 200px;
`;
