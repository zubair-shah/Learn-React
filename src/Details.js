import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Caroousel";
import Errorboundries from "./Errorboundries";
export class Details extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { loading: true };
  // }

  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    this.setState({ loading: false, ...json.pets[0] });
  }

  render() {
    if (this.state.loading) {
      return <h3> Loading ...</h3>;
    }

    // throw new Error(" your app is crashed");
    const { name, breed, city, state, description, animal, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {" "}
            {breed} - {animal} - {city} , {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrapdDetails = () => {
  const params = useParams();

  return;
  <Details params={params} />;
  // <Errorboundries>
  // </Errorboundries>;
};

export default WrapdDetails;
