import React from "react";

function Main() {
    return (
        <main>
            <div className="title-text">
                <h1>We are launching <strong>soon!</strong></h1>
                <p>Subscribe and get notified</p>
            </div>
            <form className="main-form" action="">
                <input class="cus-input" type="text" placeholder="Your email address..."/>
                <button className="btn-cus" type="submit">Notify Me</button>
            </form>
        </main>
        
    );
}

export default Main;