import React, { useState, Fragment } from "react";
import "./booking.css";

const Booking = () => {
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    email: "",
    date: "",
    message: "",
  });
  const [validForm, setValidForm] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidForm = () => {
    setValidForm(
      `Congratulations ${form.firstname}, your ride is sent to preparation, its owner will get in touch with you by e-mail as soon as it is perfectly groomed!`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidForm();

    setForm({
      ...form,
      lastname: "",
      firstname: "",
      email: "",
      date: "",
      message: "",
    });
  };

  return (
    <Fragment>
      <h1>Book your fabulous ride now!</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Your information</legend>

            <div className="form-data">
              <label htmlFor="firstname">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Your first name"
                  onChange={handleChange}
                  value={form.firstname}
                  required
                />
              </label>
            </div>

            <div className="form-data">
              <label htmlFor="lastname">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Your last name"
                  onChange={handleChange}
                  value={form.lastname}
                  required
                />
              </label>
            </div>

            <div className="form-data">
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your e-mail"
                  onChange={handleChange}
                  value={form.email}
                  required
                />
              </label>
            </div>
            <div className="form-data">
              <label class="input-label" htmlFor="date">
                Departing
                <input
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleChange}
                  value={form.date}
                  required
                />
              </label>
              <label class="input-label" htmlFor="date">
                Returning
                <input type="date" id="date" name="date" required />
              </label>
            </div>
            <div className="form-data">
              <label htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  onChange={handleChange}
                  value={form.message}
                ></textarea>
              </label>
            </div>
            <div className="form-data">
              <button type="submit" className="colorButton form-button">
                Book now!
              </button>
            </div>
            <p>{validForm}</p>
          </fieldset>
        </form>
      </div>
    </Fragment>
  );
};

export default Booking;
