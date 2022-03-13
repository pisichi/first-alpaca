const Hair = (props) => {
    return (
      <div>
      <img
        alt="placeholder"
        src={require(`../assets/hair/${props.hair}.png`)}
        className="hair"
      />
    </div>
    )
}

export default Hair;
