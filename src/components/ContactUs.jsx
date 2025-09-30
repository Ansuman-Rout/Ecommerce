import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit the data
      console.log("Form submitted:", formData);
      alert("Thank you for contacting us!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  {errors.subject && (
                    <div className="invalid-feedback">{errors.subject}</div>
                  )}
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;