import React from "react";

const Contact = () => {
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Please Describe Your Orders with correct Housing address!!</span>

                </div>
            </div>
            <div className="c-right">
                <form>
                    <input type="text" name="from_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <input type="text" name="address" className="user" placeholder="Address" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />

                </form>
            </div>
        </div>
    )
}

export default Contact; 