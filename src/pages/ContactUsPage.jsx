import React from "react";
import  "../styling/ContactPageStyling.css"

const ContactUsPage = () => {
  return (
    <div className="contact-whole-container">
      <div className="about-container">
        <h1 className="about-h1">Contact us</h1>
          <p className="about-p">
            We'd love to hear from you! Whether you have questions, feedback,
            or need assistance, feel free to reach out to us using the information below.
          </p>
        </div> 
        <div className="contact-box">
          <p>
          <b>Email</b> <br />
          For general inquiries: info.randomstuff@hello.sel<br />
          For support: support@randomstuff.com<br />
          For business inquiries: randomstuff@hello.sel</p>
        </div>
        <div className="contact-box">
          <p><b>Phone</b> <br />
          Customer Support: +46 (701) 693 485 <br />
          Business Inquiries: +46 (987) 654-321</p>
        </div>
        <div className="contact-box">
          <p><b>Address:</b> <br />
          RandomStuff Headquarters<br />
          123 Fun Street, Suite 456<br />
          Happy Town, HT 12345<br />
          Sweden
          </p>
        </div>
        <div className="contact-box">
          <p><b>Social Media:</b> <br />
          Follow us on social media for the latest updates and news!<br />
          Facebook: facebook.com/randomstuffTwitter: twitter.com/randomstuffInstagram: <br />
          instagram.com/randomstuffLinkedIn: linkedin.com/company/randomstuff
          </p>
        </div>
        <div className="contact-box">
          <p><b>Business Hours:</b> <br />
          Monday to Friday: 9:00 AM - 6:00 PM (EST)<br />
          Saturday: 10:00 AM - 4:00 PM(EST)<br />
          Sunday: Closed
          </p>
        </div>
    </div>
  );
};

export default ContactUsPage;
