import './whats-happening.css';
import '../HomeScreen/home.css';
import React from "react";
import { useState } from "react";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const tuitClickHandler = () => {
        console.log(whatsHappening);
    };


    const formatted = (
        <div className="row mt-1 mb-2">
            <div className="col-1">
                <img src="/images/elon.jpg" className="wd-rounded-follow float-start"
                    width="50px" height="50px" alt="elon"></img>
            </div>
            <div className="col-11 wd-col-pad-left">
                <div>
                    <textarea className="ml-3 wd-width-100 wd-whats-happening-textarea fw-bold"
                        placeholder="What's happening?"
                        value={whatsHappening}
                        onChange={(event) => setWhatsHappening(event.target.value)}>
                    </textarea>
                </div>
                <div className="row my-2">
                    <div className="col-4 p-0 m-0">
                        <div className="d-flex wd-whats-happening-icon-color">
                            <div className="mx-2"><i className="far fa-image"></i></div>
                            <div className="mx-2"><i className="far fa-chart-bar"></i></div>
                            <div className="mx-2"><i className="far fa-smile"></i></div>
                            <div className="mx-2"><i className="far fa-calendar"></i></div>
                        </div>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-2">
                        <button className="btn btn-primary wd-follow-button"
                            onClick={tuitClickHandler}>
                            Tweet
                        </button></div>
                </div>
            </div>
        </div>
    )

    return formatted


}
export default WhatsHappening;