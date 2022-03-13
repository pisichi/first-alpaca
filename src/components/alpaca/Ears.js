
const Ears = (props) => {
  return (
    <div>
      <img alt="placeholder" src={require("../assets/ears/" + props.ears + ".png")} className="ears" />
    </div>
  );
};

export default Ears;
