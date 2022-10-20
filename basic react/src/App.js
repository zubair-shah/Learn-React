const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "heading" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "havanees",
    }),
    React.createElement(Pet, {
      name: "shital",
      animal: "bird",
      breed: "cocktiel",
    }),
    React.createElement(Pet, {
      name: "Don",
      animal: "Cock",
      breed: "sindhi",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
