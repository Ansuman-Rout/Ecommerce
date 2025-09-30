import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../components/css/register.css'
import Banner from '../components/Banner';
const RegisterHere = () => {
  const initialState = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
    gender: "",
    hobbies: [],
    address: "",
    developer: "",
    terms: ""
  };

  const [formdata, setFormdata] = useState(initialState);
  const [errors, setErrors] = useState({}); // State to store validation errors

  const handleInputs = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "terms") {
      setFormdata({
        ...formdata,
        [name]: checked ? value : ""
      });
    } else if (type === "checkbox" && name === "hobbies") {
      let arr = formdata.hobbies;
      let itemExist = arr.indexOf(value);
      if (itemExist === -1) {
        arr.push(value);
      } else {
        arr.splice(itemExist, 1);
      }
      setFormdata({
        ...formdata,
        hobbies: arr
      });
    } else {
      setFormdata({
        ...formdata,
        [name]: value
      });
    }

    // Clear errors for the current field when the user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formdata.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formdata.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = "Email is invalid";
    }

    // Mobile validation
    if (!formdata.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(formdata.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }

    // Password validation
    if (!formdata.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formdata.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password validation
    if (!formdata.cpassword.trim()) {
      newErrors.cpassword = "Confirm Password is required";
    } else if (formdata.cpassword !== formdata.password) {
      newErrors.cpassword = "Passwords do not match";
    }

    // Gender validation
    if (!formdata.gender) {
      newErrors.gender = "Gender is required";
    }

    // Hobbies validation
    if (formdata.hobbies.length === 0) {
      newErrors.hobbies = "At least one hobby is required";
    }

    // Address validation
    if (!formdata.address.trim()) {
      newErrors.address = "Address is required";
    }

    // Developer validation
    if (!formdata.developer) {
      newErrors.developer = "Position is required";
    }

    // Terms validation
    if (!formdata.terms) {
      newErrors.terms = "You must confirm that all data are correct";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", formdata);
      // You can send the form data to an API or perform other actions here
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <>
        <Banner title="Register"/>
        <div className='container py-5'>
        <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Register Today</h3>
              <p>Fill in the data below.</p>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formdata.name}
                    onChange={handleInputs}
                  />
                  {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    value={formdata.email}
                    onChange={handleInputs}
                  />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>

                {/* Mobile */}
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    value={formdata.mobile}
                    onChange={handleInputs}
                  />
                  {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
                </div>

                {/* Password */}
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formdata.password}
                    onChange={handleInputs}
                  />
                  {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    value={formdata.cpassword}
                    onChange={handleInputs}
                  />
                  {errors.cpassword && <p className="text-danger">{errors.cpassword}</p>}
                </div>

                {/* Gender */}
                <div className="col-md-12 mt-3">
                  <label className="mb-3 mr-1 mx-2">Gender: </label>
                  <input
                    type="radio"
                    id="male"
                    className="btn-check"
                    name="gender"
                    value="Male"
                    onChange={handleInputs}
                  />
                  <label className="btn btn-sm btn-outline-secondary mx-2" htmlFor="male">Male</label>

                  <input
                    type="radio"
                    id="female"
                    className="btn-check"
                    name="gender"
                    value="Female"
                    onChange={handleInputs}
                  />
                  <label className="btn btn-sm btn-outline-secondary mx-2" htmlFor="female">Female</label>

                  <input
                    type="radio"
                    id="secret"
                    className="btn-check"
                    name="gender"
                    value="Secret"
                    onChange={handleInputs}
                  />
                  <label className="btn btn-sm btn-outline-secondary mx-2" htmlFor="secret">Secret</label>
                  {errors.gender && <p className="text-danger">{errors.gender}</p>}
                </div>

                {/* Hobbies */}
                <div className="col-md-12 mt-3">
                  <label className="mx-2">Hobbies:</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="cooking"
                      name="hobbies"
                      value="Cooking"
                      onChange={handleInputs}
                    />
                    <label className="form-check-label" htmlFor="cooking">Cooking</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="eating"
                      name="hobbies"
                      value="Eating"
                      onChange={handleInputs}
                    />
                    <label className="form-check-label" htmlFor="eating">Eating</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="sleeping"
                      name="hobbies"
                      value="Sleeping"
                      onChange={handleInputs}
                    />
                    <label className="form-check-label" htmlFor="sleeping">Sleeping</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="walking"
                      name="hobbies"
                      value="Walking"
                      onChange={handleInputs}
                    />
                    <label className="form-check-label" htmlFor="walking">Walking</label>
                  </div>
                  {errors.hobbies && <p className="text-danger">{errors.hobbies}</p>}
                </div>

                {/* Address */}
                <div className="col-md-12 mt-3">
                  <label htmlFor="message" className="form-label mx-2">Your Message:</label>
                  <textarea
                    id="message"
                    name="address"
                    value={formdata.address}
                    onChange={handleInputs}
                    className="form-control border-secondary rounded-3 shadow-sm"
                    rows="5"
                    placeholder="Type your message..."
                  />
                  {errors.address && <p className="text-danger">{errors.address}</p>}
                </div>

                {/* Developer Position */}
                <div className="col-md-12">
                  <select
                    name="developer"
                    onChange={handleInputs}
                    className="form-select mt-3"
                  >
                    <option value="">Position</option>
                    <option value="Junior Web Developer">Junior Web Developer</option>
                    <option value="Senior Web Developer">Senior Web Developer</option>
                    <option value="Project Manager">Project Manager</option>
                  </select>
                  {errors.developer && <p className="text-danger">{errors.developer}</p>}
                </div>

                {/* Terms */}
                <div className="col-md-12 mt-3">
                  <input
                    name="terms"
                    className="form-check-input"
                    type="checkbox"
                    value="Yes"
                    onChange={handleInputs}
                  />
                  <label className="form-check-label mx-2" htmlFor="terms">I confirm that all data are correct</label>
                  {errors.terms && <p className="text-danger">{errors.terms}</p>}
                </div>

                {/* Submit Button */}
                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default RegisterHere;