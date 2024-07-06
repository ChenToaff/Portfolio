import React, { useState } from "react";

const Contact = () => {
  const emailAddress = "ChenToaff@gmail.com";
  const [emailText, setEmailText] = useState(emailAddress);

  // Function to copy email to clipboard and show "Copied!"
  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        setEmailText("Copied!");
        setTimeout(() => setEmailText(emailAddress), 3000); // Reset after 3 seconds
      })
      .catch((err) => console.error("Failed to copy email: ", err));
  };

  return (
    <section
      id="contact"
      className="site-section bg-white py-20 text-center min-h-screen"
    >
      <div className="container mx-auto">
        <h1 className="text-5xl my-5">Get in touch!</h1>

        <div className="flex justify-center gap-x-9 my-9">
          <a href="mailto:chentoaff@gmail.com" target="_blank">
            <i className="fa fa-envelope text-4xl"></i>
          </a>
          <a href="http://linkedin.com/in/chentoaff" target="_blank">
            <i className="fa fa-linkedin text-4xl"></i>
          </a>
        </div>
        <div
          className="text-2xl md:text-5xl cursor-pointer"
          onClick={copyEmailToClipboard}
        >
          {emailText}
        </div>
        <div className="my-3 md:text-3xl text-gray-400">(Click to copy)</div>
      </div>
    </section>
  );
};

export default Contact;
