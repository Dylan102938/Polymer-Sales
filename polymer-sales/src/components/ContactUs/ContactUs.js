import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './ContactUs.css';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
    const clearLoading = () => {
        document.getElementById('loading').classList.add('invisible');
        setTimeout(() => {
            document.getElementById('loading').classList.add('hidden');
        }, 500);
    }

    useEffect(() => {
        setTimeout(() => {
            clearLoading();
        }, 500);
    }, []);

    const mail_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const toastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const handleSubmit = event => {
        event.preventDefault();
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('loading').classList.remove('invisible');

        const body = {
            workEmail: document.getElementsByName('work-email')[0].value,
            firstName: document.getElementsByName('first-name')[0].value,
            lastName: document.getElementsByName('last-name')[0].value,
            company: document.getElementsByName('company')[0].value,
            industry: document.getElementsByName('industry')[0].value,
            jobTitle: document.getElementsByName('job-title')[0].value,
            message: document.getElementsByName('message')[0].value
        }

        for (let k in body) {
            if (!body[k]) {
                toast.error("Please fill out all form fields!", toastOptions);
                clearLoading();
                return;
            }
        }

        if (!body.workEmail.toLowerCase().match(mail_format)) {
            toast.error("Please enter a valid email!", toastOptions);
            clearLoading();
            return;
        }

        fetch("/send-mail", {
            method: "post",
            body: JSON.stringify({
                workEmail: document.getElementsByName('work-email')[0].value,
                firstName: document.getElementsByName('first-name')[0].value,
                lastName: document.getElementsByName('last-name')[0].value,
                company: document.getElementsByName('company')[0].value,
                industry: document.getElementsByName('industry')[0].value,
                jobTitle: document.getElementsByName('job-title')[0].value,
                message: document.getElementsByName('message')[0].value
            }),
            mode: "cors",
            headers: new Headers({
                "Content-type": "application/json"
            })
        }).then(response => {
            clearLoading();
            response.json().then(json => {
                if (json.success === 1) {
                    toast.success('Email sent successfully!', toastOptions);
                } else {
                    toast.error('Email couldn\'t send!', toastOptions);
                }
            }).catch(e => {
                toast.error('Something went wrong. Please try again later.', toastOptions);
            });
        }).catch(e => {
            clearLoading();
            toast.error('Something went wrong. Please try again later.', toastOptions);
        });
    }
    
    return (
        <div>
            <NavBar />
            <div className="contact-us">
                <div className=" flex flex-col align-center header">
                    <h1>Talk to Sales</h1>
                    <p>Get Set Up with Polymer Today</p>
                </div>
                <div className="flex flex-row align-center main contact-container" style={{padding: "0 2rem"}}>
                    <div style={{width: "50%"}} className='contact-info'>
                        <h2>Ask How We Can Help You:</h2>
                        <div>
                            <h3>See our platform in action</h3>
                            <p>Request a personalized demo, or request a trial of Polymer's platform.</p>
                        </div>
                        <div>
                            <h3>Find the best plan for you</h3>
                            <p>Consult an associate to understand our array of custom enterpise plans and find the best fit for you.</p>
                        </div>
                        <div>
                            <h3>Understand how we integrate with your business</h3>
                            <p>Explore how our data pipelines seamlessly turn raw crowdsourced data into meaningful insights.</p>
                        </div>
                    </div>

                    <div className="contact-form-container" style={{width: "50%", position: "relative"}}>
                        <div className="contact-form">
                            <form>
                                <h2 style={{marginBottom: '2rem', marginTop: 0}}>Get in Touch</h2>
                                <input type='email' name='work-email' className='form-control input-themed' placeholder='Work Email' />
                                <div className='flex flex-row form-row'>
                                    <div className='col'>
                                        <input type='text' name='first-name' className='form-control input-themed' placeholder='First Name' />
                                    </div>

                                    <div className='col'>
                                        <input type='text' name='last-name' className='form-control input-themed' placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className='flex flex-row form-row'>
                                    <div className='col'>
                                        <input type='text' name='company' className='form-control input-themed' placeholder='Company' />
                                    </div>

                                    <div className='col'>
                                        <input type='text' name='industry' className='form-control input-themed' placeholder='Industry' />
                                    </div>
                                </div>
                                <input type='text' name='job-title' className='form-control input-themed' placeholder='Job Title' />
                                <textarea name='message' className='form-control input-themed message' placeholder='Message' />
                                <input type='submit' name='submit' className='custom-btn submit-form' value='Submit' onClick={handleSubmit} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default ContactUs;