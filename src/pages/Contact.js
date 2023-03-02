import React from "react";
import "./Contact.css";
const Contact = () => {
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
                            <span className="input">
                                <input
                                    type="text"
                                    name="cf-name"
                                    required
                                    className="input_field"
                                    id="cf-name"
                                />
                                <label className="input_label" for="cf-name">
                                    Name
                                </label>
                            </span>
                        </div>
                        <div className="col-md-6 mb-50">
                            <span className="input">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="input_field"
                                    id="cf-email"
                                />
                                <label className="input_label" for="cf-email">
                                    Email
                                </label>
                            </span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-50">
                            <span className="input">
                                <input type="text" name="phone" required className="input_field" />
                                <label className="input_label">Phone</label>
                            </span>
                        </div>
                        <div className="col-md-6 mb-50">
                            <span className="input">
                                <input type="text" name="email" required className="input_field" />{" "}
                                <label className="input_label">Subject</label>
                            </span>
                        </div>
                    </div>

                    <div className="col-md-12 text-center mb-5">
                        <span className="input">
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
                        </span>

                        <button type="submit" className="submit-btn ">
                            Send Message
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
