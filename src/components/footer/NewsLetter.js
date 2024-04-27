import React, { useRef } from "react";
import { toast } from "react-toastify";
const NewsLetter = () => {
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const notify = () =>
      toast(`${email} subscribed our news letter Successfully`);

    notify();
    e.target.reset();
  };
  return (
    <section className="news-letter-section">
      <div className="col-12 col-sm-12 col-md-12 col-lg-6">
        <h4>Subscribe to our Newsletter</h4>
        <p>Get e-mail updates about our latest shops and special offers</p>
      </div>
      <form
        className="email-form row col-12 col-sm-12 col-md-12 col-lg-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter email address"
          required
        />
        <button type="submit">subscribe</button>
      </form>
    </section>
  );
};

export default NewsLetter;
