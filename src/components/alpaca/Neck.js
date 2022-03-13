import React from "react";

const Neck = (props) => {
  return (
    <div>
      <img alt="placeholder" src={require(`../assets/neck/${props.neck}.png`)} className="neck" />
    </div>
  );
};

export default Neck;
