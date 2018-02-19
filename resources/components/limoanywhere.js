import React from "react";
import Content from "../layouts/content";
import Iframe from "./iframe";

class LimoAnywhere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }
  componentDidMount() {}
  initCallback = () => {
    this.setState({ ready: true });
  };
  render() {
    return (
      <Content title="Reserve" id="reserve">
        <div className="limoanywhere">

          {this.state.ready
            ? null
            : <div className="loading">
                <span>Loading Reservation System...</span>
              </div>}

          <div className={`${this.state.ready ? "ready" : "notReady"}`}>
            <Iframe
              id="limoanywhere"
              src={`https://book.mylimobiz.com/v4/skyslimo?"?refererUrl="skyslimo.com"`}
              style={{ width: "100%", minHeight: 775 }}
              iframeResizerOptions={{
                initCallback: this.initCallback
              }}
            />
          </div>

        </div>
        <style jsx>
          {
            `
            .limoanywhere {
                padding: 30px;
                text-align: center;
             }
             .limoanywhere :global(#limoanywhere) {
             }
             .annouce {
              background: #ECC8C5;
              color: #B23230;
              border: 2px solid #e42525;
              padding: 5px;
              margin-bottom: 5px;
              display: inline-block;
             }
             .ready {
              visibility: visible;
              opacity: 1;
              transition: all .3s;
             }
             .notReady {
                visibility: hidden;
                opacity: 0;
                transition: all .3s;
             }
             .loading {
                text-align: center;
                padding: 50px;
                font-size: 20px;
             }
          `
          }
        </style>
      </Content>
    );
  }
}

export default LimoAnywhere;
