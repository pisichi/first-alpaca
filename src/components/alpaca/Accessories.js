const Accessories = (props) => {
  if (props.accessories === "none") {
    return <div></div>;
  } else {
    return (
      <div>
        <img
          alt="placeholder"
          src={require(`../assets/accessories/${props.accessories}.png`)}
          className="accessories"
        />
      </div>
    );
  }
};

export default Accessories;
