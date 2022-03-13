
const Leg = (props) => {
    return (
      <div>
      <img alt="placeholder" src={require("../assets/leg/" + props.leg + ".png")} className="leg" />
    </div>
    )
}

export default Leg;
