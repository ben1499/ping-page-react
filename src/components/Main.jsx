import React, { useState } from "react";

function Main() {
    const [inputText, setInputText] = useState("");
    const [infoText, setInfoText] = useState("");

    function handleChange(event) {
        const text = event.target.value;
        setInputText(text);
    }

    function handleClick(event) {
        event.preventDefault();
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!regex.test(inputText)) {
            setInfoText("Please provide a valid email address");
        } else {
            setInfoText("");
        }
    }


    return (
        <main>
            <div className="title-text">
                <h1>We are launching <strong>soon!</strong></h1>
                <p>Subscribe and get notified</p>
            </div>
            <form className="main-form" action="">
                <input className="cus-input" onChange={handleChange} value={inputText} type="text" placeholder="Your email address..."/>
                <button className="btn-cus" onClick={handleClick} type="submit">Notify Me</button>
                <span className="error-msg">{infoText}</span>
            </form>
            
        </main>
        
    );
}

export default Main;