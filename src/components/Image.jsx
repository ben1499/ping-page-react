import React from "react";  

function Image() {
    return (
        <div>
            <img className="dash-image" src={require("../images/illustration-dashboard.png")} alt="Illustration Dashboard Image" />
        </div>
    );
}

export default Image;