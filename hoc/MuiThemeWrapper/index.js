import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import primary from 'material-ui/colors/blueGrey';
import secondary from 'material-ui/colors/red';
import error from 'material-ui/colors/red';

const decorator = ComposedComponent => {
  const theme = createMuiTheme({
    palette: {
      primary: primary,
      secondary: secondary,
      error: error
    }
  });

  // const theme = createMuiTheme({
  //   palette: {
  //     primary: primary,
  //     secondary: {
  //       ...indigo,
  //       A200: '#536dfe',
  //     },
  //     error: red,
  //   },
  // });

  return class extends Component {
    static async getInitialProps(ctx) {
      const { req } = ctx;
      const isServer = !!req;
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

      let pageProps = {};

      if (ComposedComponent.getInitialProps) {
        pageProps = await ComposedComponent.getInitialProps(ctx);
      }

      return {
        ...pageProps,
        isServer,
        userAgent
      };
    }

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <MuiThemeProvider theme={theme}>
            <ComposedComponent {...this.props} />
          </MuiThemeProvider>
        </div>
      );
    }
  };
};

export default decorator;
