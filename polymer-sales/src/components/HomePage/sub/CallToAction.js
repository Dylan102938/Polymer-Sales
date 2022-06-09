import React, { Component } from 'react';

function CallToAction() {
    return (
        <div className='main flex flex-row align-center call-to-action'>
            <div style={{width: "80%"}}>
                <h2>Ready to Try Polymer?</h2>
                <p>Contact Sales and Get a Free Trial Today</p>

                <button className='btn'>Book a Free Demo</button>
            </div>

            <img src={require('../../../img/call-to-action.png')} style={{width: '30%'}} />
        </div>
    )
}

export default CallToAction;