import './ProductInfo.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import solutions from '../../img/solutions.svg';
import { Link } from 'react-router-dom';

import simpleStats from '../../img/simple-stats.svg';
import transparency from '../../img/transparency.svg';
import exportFindings from '../../img/export-findings.svg';


const ProductCard = props => {
    return (
        <div className="card">
            <div className="img-container" style={props.additionalStyles}>
                <img src={props.img} />
            </div>
            <h2 className="text-gradient">{props.cardTitle}</h2>
            <ul>
                {
                    props.listItems.map(listItem => <li>{listItem}</li>)
                }
            </ul>
        </div>
    )
}

const EstimatorCard = props => {
    return (
        <div className="card">
            <div className="img-container" style={props.additionalStyles}>
                <div className="img-container-inside">
                    <img src={props.img} />
                </div>
            </div>
            <h2 className="text-gradient">{props.cardTitle}</h2>
            <ul>
                {
                    props.listItems.map(listItem => <li>{listItem}</li>)
                }
            </ul>
        </div>
    )
}


function ProductInfo() {
    return (
        <div>
            <NavBar />
            <div className='product-info'>
                <div className="flex flex-col header">
                    <div className="flex flex-row main" style={{
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        padding: "80px 2rem",
                        boxSizing: "border-box"
                    }}>
                        <div>
                            <h1>Solutions</h1>
                            <p>Learn more about our offerings</p>
                            <Link to='/contact-us'>
                                <button className="custom-btn" style={{
                                    backgroundColor: 'var(--blue)',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    marginTop: '40px'
                                }}>Contact Us</button>
                            </Link>
                        </div>
                        <div style={{width: '45%'}}>
                            <img src={solutions} style={{width: '100%'}}/>
                        </div>
                    </div>
                </div>

                <div className="price-elasticity-estimator main" id="prod-marketplace">
                    <span className="text-gradient">Use Cases</span>
                    <h1>Product Marketplace Sandbox</h1>
                    <p>
                        Predict how customers will react when you or your competitors adjust their prices and be ready to respond.
                        Our built-in marketplace features allows real consumers to shop in a controlled environment, truly revealing how price points impact buying decisions.
                    </p>

                    <div className="card-container" style={{marginTop: "3rem"}}>
                        <ProductCard
                            img={require("../../img/ecommerce.jpg")}
                            cardTitle="Custom Simulated Platform"
                            listItems={
                                [
                                    "Available to port frontend designs of Amazon, Etsy, or your own custom marketplace.",
                                    "Customize the amount of information shown to respondents and any frontend designs to your marketplace.",
                                    "Copy-paste your product link(s) and we'll have the marketplace ready in less than 3 minutes."
                                ]
                            } />
                        <ProductCard
                            img={require("../../img/statistics.jpg")}
                            cardTitle="Better Reliability"
                            listItems={
                                [
                                    "Respondents experience no bias when shopping. Price changes are presented to each customer once and only once.",
                                    "Product ordering on the marketplace can be fixed or random, eliminating price anchoring.",
                                    "Access to a full range of e-commerce features and a realistic marketplace allow for more meaningful statistical insights."
                                ]
                            } />
                        <ProductCard
                            img={require("../../img/happy-office.jpg")}
                            cardTitle="Get Faster Results"
                            listItems={
                                [
                                    "Access to millions of survey respondents to get insights as quickly possible.",
                                    "Marketplace results are ported to the analytics dashboard live, allowing instant feedback.",
                                    "Filter with hundreds of participant filters to reach your target demographic."
                                ]
                            } />
                    </div>
                </div>

                <div className="price-elasticity-estimator main" id="estimator" style={{marginTop: 0, paddingTop: 0}}>
                    <span className="text-gradient">Use Cases</span>
                    <h1>Price Elasticity Estimator</h1>
                    <p>
                        How are sales affected when product prices are increased by 10%? Uncover small price adjustments that boost sales.
                        Access your raw study data, useful insights, and export your results all in one convenient analytics dashboard.
                        Conduct pricing analytics without the hassle of data scaffolding and pipelining. 
                    </p>

                    <div className="card-container" style={{marginTop: "3rem"}}>
                        <EstimatorCard
                            img={simpleStats}
                            cardTitle="Simplified Statistics"
                            listItems={
                                [
                                    "Access all the stats you need to help you make pricing decisions on one platform, including point-wise price elasticity, variance, maximum error rate, confidence intervals, etc.",
                                    "Use your own metrics with an easy-to-use function builder and display those results on your dashboard as well.",
                                ]
                            }
                            additionalStyles={{
                                padding: "20px",
                                boxSizing: "border-box",
                                height: ""
                            }}
                        />
                        <EstimatorCard
                            img={transparency}
                            cardTitle="Full Transparency"
                            listItems={
                                [
                                    "We provide full access to the raw user data that generate the statistics our platform provides.",
                                    "Easily work with data from different studies by downloading as Excel or working on our platform-provided editor.",
                                    "Direct pipelines to connect to your data solution provider of choice."
                                ]
                            }
                            additionalStyles={{
                                padding: "20px",
                                boxSizing: "border-box"
                            }}
                        />
                        <EstimatorCard
                            img={exportFindings}
                            cardTitle="Export Your Findings"
                            listItems={
                                [
                                    "Pipeline your data directly into beautiful reports using our custom builder and export them for presentation.",
                                    "Supported data formats include pdf, jpg, png, ppt, etc."
                                ]
                            }
                            additionalStyles={{
                                padding: "20px",
                                boxSizing: "border-box",

                            }}
                        />
                    </div>
                </div>

                <div className="callback">
                    <div className="main flex flex-row align-center">
                        <div>
                            <h1>See What Polymer Can Do For You</h1>
                            <Link to="/contact-us">
                                <button className="custom-btn" style={{marginTop: "40px"}}>Get Started Today</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductInfo;