const Nose = (props) => {
  return (
    <div>
      <img alt="placeholder" src={require("../assets/nose/" + props.nose + ".png")} className="nose" />
    </div>
  );
};

export default Nose;
