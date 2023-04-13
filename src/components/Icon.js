import React from "react";
import * as ReactIcons from "react-icons/fa";

const Icon = (props) => {
    const obj = props;
    const { iconName } = obj;
    const icon = React.createElement(ReactIcons[iconName]);
    return (
        <div>{icon}</div>
    )
}

export default Icon;