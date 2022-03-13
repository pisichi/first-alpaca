
const Mouth = (props) => {
  return (
    <div>
      <img alt="placeholder" src={require(`../assets/mouth/${props.mouth}.png`)} className="mouth" />
    </div>
  );
};

export default Mouth;
