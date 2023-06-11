import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const ICanHelp = () => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      city:city,
      name: name,
      surname: surname,
      phone: phone,
      address: address,
      message: message,
    };

    axios
      .post("http://localhost:5000/messages", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      setIsSubmitted(true);
      toast.success("Form sent successfully!");
        setCity("")
        setName("")
        setSurname("")
        setPhone("")
        setAddress("")
        setMessage("")
  };

  return (
    <div className="container col-6">
      <h1>I can Help</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="city"></label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="City"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname"></label>
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Enter your surname"
            required
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone"></label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address"></label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message"></label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="Enter your messages here"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {/* {isSubmitted && (
        <div className="confirmation">
          <p>Formunuz başarıyla gönderildi!</p>
          <button onClick={() => setIsSubmitted(false)}>Tekrar Gönder</button>
        </div>
      )} */}
      <ToastContainer />
    </div>
  );
};


export default withAuthenticationRequired(ICanHelp, {
  onRedirecting: () =>" <Loading... />",
});
