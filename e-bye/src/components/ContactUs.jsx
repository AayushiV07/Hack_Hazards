import React, { useState } from 'react';


function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    query: ''
  });

  const { firstName, lastName, phoneNumber, email, query } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you can send the form data to your backend or handle it accordingly
      console.log(formData);
      // For example, if you're using Axios:
      // await axios.post('/api/contact', formData);
      alert('Form submitted successfully!');
    } catch (err) {
      console.error('Error submitting form: ', err);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-tertiary">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-tertiary focus:outline-none focus:border-secondary"
              required
            />
          </div>
          <div>
            <label className="block text-tertiary">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-tertiary focus:outline-none focus:border-secondary"
              required
            />
          </div>
          <div>
            <label className="block text-tertiary">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-tertiary focus:outline-none focus:border-secondary"
              required
            />
          </div>
          <div>
            <label className="block text-tertiary">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-tertiary focus:outline-none focus:border-secondary"
              required
            />
          </div>
          <div>
            <label className="block text-tertiary">Your Query</label>
            <textarea
              name="query"
              value={query}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-tertiary focus:outline-none focus:border-secondary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-pink transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
