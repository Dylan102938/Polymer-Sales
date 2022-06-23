import { HashLink } from 'react-router-hash-link';

function CallToAction() {
    return (
        <div className="main" style={{padding: "0 2rem"}}>
            <div className='flex flex-row align-center call-to-action'>
                <div>
                    <h2>Ready to Try Polymer?</h2>
                    <p>Contact Sales and Get a Free Trial Today.</p>
                    <HashLink to='/contact-us#'>
                        <button className='custom-btn'>Book a Free Demo</button>
                    </HashLink>
                </div>

                <img src={require('../../../img/call-to-action.png')} style={{width: '30%'}} />
            </div>
        </div>
    )
}

export default CallToAction;