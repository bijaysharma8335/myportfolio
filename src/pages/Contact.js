import React, { useState } from "react";
import FormInput from "../components/FormInput";
import "./Contact.css";
const Contact = () => {
    const [credentials, setCredentials] = useState({
        displayName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const { displayName, email, phone, subject, message } = credentials;

    const handleChange = () => {};
    return (
        <div className="contact_container">
            <div className="page-heading">
                <h2 className="text-center mt-3">Contact Me</h2>
            </div>

            <form className="contact_form" method="POST">
                <div className="container">
                    <div className="subheading">
                        <h3>Lets Talk</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-50">
                            <FormInput
                                name="name"
                                type="text"
                                value={displayName}
                                handleChange={handleChange}
                                label="Name"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-50">
                            <FormInput
                                name="email"
                                type="email"
                                value={email}
                                handleChange={handleChange}
                                label="Email"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-50">
                            <FormInput
                                name="phone"
                                type="number"
                                value={phone}
                                handleChange={handleChange}
                                label="Phone"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-50">
                            <FormInput
                                name="subject"
                                type="text"
                                value={subject}
                                handleChange={handleChange}
                                label="Subject"
                                required
                            />
                        </div>
                    </div>

                    <div className="col-md-12 text-center mb-5">
                        <FormInput
                            name="message"
                            type="text"
                            value={message}
                            handleChange={handleChange}
                            label="How can we help you?"
                            required
                           
                        />
                        {/* <span className="input">
                            <textarea
                                rows="5"
                                name="Message"
                                required
                                className="input_field"
                                id="help-msg"
                            ></textarea>
                            <label className="input_label" for="help-msg">
                                How can we help you?
                            </label>
                        </span> */}
                        <button type="submit" className="submit-btn ">
                            Send Message
                        </button>
                    </div>
                    <div className="row location-iframe">
                        <iframe
                            title="myLocation"
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d971.6583759390658!2d77.58143502916803!3d13.05898479942493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAzJzMyLjQiTiA3N8KwMzQnNTUuMSJF!5e0!3m2!1sen!2sin!4v1679130414425!5m2!1sen!2sin"
                            width={500}
                            height={300}
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
