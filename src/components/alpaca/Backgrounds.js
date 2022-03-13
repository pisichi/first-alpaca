const Backgrounds = (props) => {
  return (
    <div>
      <img
        alt="placeholder"
        src={require("../assets/backgrounds/" + props.background + ".png")}
        className="background"
      />
    </div>
  );
};

export default Backgrounds;
