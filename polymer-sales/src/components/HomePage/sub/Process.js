import { useRef } from 'react';

function Process() {
    const ref = useRef();
    window.addEventListener('scroll', (e) => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const texts = document.getElementsByClassName("process-item");
        const images = document.getElementsByClassName("process-image");
        try {
            const offset = scrollTop - ref.current.offsetTop;
            if (offset <= 0.25*ref.current.clientHeight) {
                texts[1].classList.remove('active');
                texts[2].classList.remove('active');
                images[1].classList.add('hidden-img');
                images[2].classList.add('hidden-img');

                texts[0].classList.add('active');
                images[0].classList.remove('hidden-img');
            }
            if (offset > 0.25*ref.current.clientHeight && offset < 0.5*ref.current.clientHeight) {
                texts[0].classList.remove('active');
                texts[2].classList.remove('active');
                images[0].classList.add('hidden-img');
                images[2].classList.add('hidden-img');

                texts[1].classList.add('active');
                images[1].classList.remove('hidden-img');
            } else if (offset >= 0.5*ref.current.clientHeight) {
                texts[0].classList.remove('active');
                texts[1].classList.remove('active');
                images[0].classList.add('hidden-img');
                images[1].classList.add('hidden-img');

                texts[2].classList.add('active');
                images[2].classList.remove('hidden-img');
            }
        } catch (e) {}
    });

    return (
        <div>
            <div className="process-container" ref={ref}>
                <div className="process">
                    <div className="flex flex-row align-center" style={{height: "100%"}}>
                        <div style={{width: "100%"}}>
                            <h1>Crowdsourcing for Streamlined Insights</h1>
                            <div className="flex flex-row align-center main" style={{padding: "0 2rem", justifyContent: "space-between", columnGap: "1rem"}}>
                                <div className="flex flex-col" style={{maxWidth: "700px"}}>
                                    <div className="process-item active">
                                        <h2>1. Design Your Experiment</h2>
                                        <p>Input the products and price points to test. Choose filters (e.g., demographics, shopping history) to select panel participants. Polymer does the rest and your experiment is ready to launch.</p>
                                    </div>

                                    <div className="process-item">
                                        <h2>2. Panelists Shop</h2>
                                        <p>Thousands of survey participants “shop” on a simulated marketplace, exactly as they would in real life. Polymer varies the prices shown and measures how buying behavior changes.</p>
                                    </div>

                                    <div className="process-item">
                                        <h2>3. Analyze Data and Export Results</h2>
                                        <p>Polymer displays key data such as optimal price and elasticity through an interactive dashboard. Results can be exported to Excel or converted into a Powerpoint presentation.</p>
                                    </div>
                                </div>

                                <div className="image-container">
                                    <div>
                                        <img className="process-image" src={require('./assets/filters.png')} />
                                        <img className="hidden-img process-image" src={require('./assets/marketplace.png')} />
                                        <img className="hidden-img process-image" src={require('./assets/results.png')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden mobile-friendly process-container">
                <div className="process main">
                    <h1>Crowdsourcing for Streamlined Insights</h1>
                    <div style={{marginBottom: "3rem"}}>
                        <div className="process-item">
                            <h2>1. Design Your Experiment</h2>
                            <p>Input the products and price points to test. Choose filters (e.g., demographics, shopping history) to select panel participants. Polymer does the rest and your experiment is ready to launch.</p>
                        </div>

                        <div className="image-container">
                            <div className="image-holder">
                                <img className="process-image" src={require('./assets/filters.png')} />
                            </div>
                        </div>
                    </div>

                    <div style={{marginBottom: "3rem"}}>
                        <div className="process-item">
                            <h2>2. Panelists Shop</h2>
                            <p>Thousands of survey participants “shop” on a simulated marketplace, exactly as they would in real life. Polymer varies the prices shown and measures how buying behavior changes.</p>
                        </div>

                        <div className="image-container">
                            <div className="image-holder">
                                <img className="process-image" src={require('./assets/marketplace.png')} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="process-item">
                            <h2>3. Analyze Data and Export Results</h2>
                            <p>Polymer displays key data such as optimal price and elasticity through an interactive dashboard. Results can be exported to Excel or converted into a Powerpoint presentation.</p>
                        </div>

                        <div className="image-container">
                            <div className="image-holder">
                                <img className="process-image" src={require('./assets/results.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;
