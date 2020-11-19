import React, { useState } from 'react';
import '../../assets/css/booking.css';

const Booking = () => {
  const [form, setForm] = useState({ lastname: '', firstname: '', email: '', DaysNumber:"", message:"" });
  const [validForm, setValidForm] = useState('');
  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidForm = () => {
    setValidForm(
      `Félicitation ${form.firstname}, votre monture est en préparation, son propriétaire vous contactera par mail dès qu'il sera de toute beauté !`
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
      handleValidForm()
      
      };

    setForm({ ...form, lastname: '', firstname: '', email: '', DaysNumber:"", message:""  });
  };

  return (
    <div className="form">
      <h1>Réserver cett belle monture maintenant !</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Vos Informations</legend>

          <div className="form-data">
            <label htmlFor="firstname">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Votre prénom"

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
                placeholder="Votre nom"

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
                placeholder="Votre e-mail"
                onChange={handleChange}
                value={form.email}
                required
              />
            </label>
          </div>
          <div className="form-data">
            <label htmlFor="message">
              <input
                type="textarea"
                id="message"
                name="message"
                placeholder="Message"
                onChange={handleChange}
                value={form.message}
                
              />
            </label>
          </div>
          <div className="form-data">
            <button type="submit" className="colorButton form-button">
              Réserver
            </button>
          </div>
          <p>
            {validForm}
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Booking;
