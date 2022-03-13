const Eyes = (props) => {
  return (
    <div>
      <img alt="placeholder" src={require("../assets/eyes/" + props.eyes + ".png")} className="eyes" />
    </div>
  );
};

export default Eyes;
