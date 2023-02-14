import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
    return (
        <Container>
            <h1 className="text-center my-2">Contact Me</h1>
            <form className="contact_form" method="POST">
                <div className="form_name">
                    <input type="text" placeholder="Name" name="First Name" required />
                    <input type="text" placeholder="email" name="email" required />
                </div>
                <div className="form_name">
                    <input type="number" placeholder="Your phone" name="phone" required />
                    <input type="text" placeholder="Subject" name="Email Address" required />
                </div>

                <textarea rows="5" name="Message" placeholder="Message" required></textarea>
                <div style={{ textAlign: "center" }}>
                    <button type="submit" className="submit-btn ">
                        Send Message
                    </button>
                </div>
            </form>
        </Container>
    );
};

export default Contact;
