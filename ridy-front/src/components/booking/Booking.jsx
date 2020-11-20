import React, { useState, Fragment } from "react";
import "../../style/css/booking.css";

const Booking = ({ location }) => {
  const { ride } = location.state;
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
    <div>
      <div className="container-content-image">
        <div className="confirmation">
          <h1>Want to book your trusty steed?</h1>
          <p>
            Buckle up with <strong>{ride.name}</strong> for {ride.price} golden
            coin
            {ride.price > 1 && "s"} per day!
          </p>
          <div className="booking-recap">
            <div className="ride-recap">
              <img className="horse-pic" src={ride.photo} alt={ride.name} />
              <div className="descriptionDetails-booking">
                <div className="descriptionLogo">
                  <img
                    className="image-icone"
                    src="https://www.flaticon.com/svg/static/icons/svg/3004/3004571.svg"
                    alt="age"
                  />
                  {ride.age} long and difficult winter{ride.age > 1 && "s"}
                </div>
                <div className="descriptionLogo">
                  <img
                    className="image-icone"
                    src="https://www.flaticon.com/svg/static/icons/svg/615/615075.svg"
                    alt="seats"
                  />
                  {ride.seat} {ride.seat === 1 ? "vassal is" : "vassals are"}{" "}
                  allowed for the ride.
                </div>
                <div className="descriptionLogo">
                  <img
                    className="image-icone"
                    src="https://www.flaticon.com/svg/static/icons/svg/1616/1616487.svg"
                    alt="fuel"
                  />
                  Fresh {ride.fuel}.{" "}
                  {ride.category === "horse" || "pony"
                    ? "That's the secret recipe to empower your mount!"
                    : "That's how to make your engine going faster"}
                </div>
                <div className="descriptionLogo">
                  <img
                    className="image-icone"
                    src="https://www.flaticon.com/svg/static/icons/svg/1020/1020258.svg"
                    alt="location"
                  />
                  {ride.place}
                </div>
              </div>
            </div>

            <div className="form">
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Your information</legend>

                  <div className="personal-info">
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
                      <button
                        type="submit"
                        className="colorButton form-button-desktop"
                      >
                        Book now!
                      </button>
                    </div>
                  </div>
                  <div className="booking-info">
                    <div className="form-data">
                      <label class="input-label" htmlFor="date">
                        <p>Departing</p>
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
                        <p>Returning</p>
                        <input type="date" id="date" name="date" required />
                      </label>
                    </div>
                    <div className="form-data">
                      <label htmlFor="message">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          onChange={handleChange}
                          value={form.message}
                        ></textarea>
                      </label>
                    </div>
                    <div className="form-data">
                      <button
                        type="submit"
                        className="colorButton form-button-mobile"
                      >
                        Book now!
                      </button>
                    </div>
                    <p>{validForm}</p>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
