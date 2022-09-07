import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class Errorboundries extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error. Oh no. what are we going on . JK.
          <Link to="/">Click</Link>
          to go back to the homepage. or wait five seconds we will do it for
          you.
        </h2>
      );
    }
  }
}


export default Errorboundries;