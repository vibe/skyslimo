import React, { PropTypes } from "react";
import withRefnux from "../helpers/withRefnux";
import getInitialState from "../store/getInitialState";

const shell = Page =>
  class App extends React.Component {
    static async getInitialProps(context) {
      const { store } = context;

      const pageProps = Page.getInitialProps
        ? await Page.getInitialProps(context)
        : {};

      return {
        ...pageProps
      }
    }

    render() {
      return <Page />;
    }
  };

const app = page => withRefnux(getInitialState, shell(page));

export default app;
