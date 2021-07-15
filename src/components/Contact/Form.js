import React, { useState } from 'react'

const Form = () => {
    const [data, setdata] = useState({
        name: "",
        phnNo: "",
        email: "",
        msg: "",
      });
    
      const [error, seterror] = useState({})
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({
          ...data,
          [name]: value,
        });
        console.log(e.target.value);
      };
    
      const handleSubmit=(e)=>{
    e.preventDefault();
      }
    return (
        <>
            <div className="contact-form ">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  onChange={handleChange}
                  value={data.name}
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  onChange={handleChange}
                  value={data.phnNo}
                  name="phnNo"
                  placeholder="Phone No"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  onChange={handleChange}
                  value={data.email}
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div class="mb-3">
                <textarea
                  onChange={handleChange}
                  value={data.msg}
                  rows="3"
                  name="msg"
                  placeholder="Message Here"
                  required
                />
              </div>
              <button type="submit" className="submit_btn">
                Submit
              </button>
            </form>
          </div> 
        </>
    )
}

export default Form
