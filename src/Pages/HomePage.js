import React, { useState } from "react";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const HomePage = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [gender, setgender] = useState('');
  const [terms, setterms] = useState(false);
 

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === ""){
      toast.warn("Please input your name")
    }
    else if(email === ""){
      toast.warn("Please enter your email")
    }
    else if(password === ""){
      toast.warn("Password is Required")
    }
    else{
      localStorage.setItem('name',name)
      localStorage.setItem('email',email)
      localStorage.setItem('password',password)
      localStorage.setItem('gender',gender)
      localStorage.setItem('terms',terms)
      toast.success("User Signed Up!")
    }
  };

  return (
    <>
      <Header />
      <div className="container content mt-4">
        <h5> 📝 Add New User</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                value = {name}
                onChange = {e => setname(e.target.value)}
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                value = {email}
                onChange = {e => setemail(e.target.value)}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value = {password}
                onChange = {e => setpassword(e.target.value)}
                id="exampleInputPassword1"
              />
            </div>
            {/* radios button inpput ================== */}
            <div className="d-flex flex-row">
              Gender :
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Male"
                  defaultChecked = {gender === "Male"}
                  onClick = { e=> setgender(e.target.value)}
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Female"
                  defaultChecked = {gender === "Female"}
                  onClick = { e=> setgender(e.target.value)}
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={terms}
                onChange = {e => setterms(e.target.value)}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I Accept all the Terms And Conditions
              </label>
            </div>
            <button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* col-md-6 ends */}

          {/* <div className="col-md-4 ">
            <div className="profile_section">
              <p>Select Profile Picture :</p>
              <img
                src={
                  localStorage.getItem("img")
                    ? localStorage.getItem("img")
                    : profilePIcDefault
                }
                alt="profile_pic"
                className="img-thumbnail"
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
