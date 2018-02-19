import React from "react";

import Fleet from "./fleet";
import Reservations from "./limoanywhere"

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    nextProps.toggleReservation ? this.initReserve() : null;
  }
  initReserve = () => {
    this.setState({ reserve: true });
  };

  render() {
    return (
      <section ref="test">
        {this.state.reserve
          ? <Reservations />
          : <Fleet onReserve={this.initReserve} />}
      </section>
    );
  }
}

export default Reservation;
