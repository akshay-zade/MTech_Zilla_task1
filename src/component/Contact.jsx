import React, { useRef } from "react";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "./Contact.css";
import FileUpload from "./FileUpload";

const Contact = () => {
  const showAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "Your Form submitted successful!",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked OK
        console.log("User clicked OK");
      }
    });
  };

  const form = useRef();


  return (
    <>
      {/* <section className='contact' id='contact'>
      <article className='form'>
        <h2>Leave us your information</h2>
        <form method='post' ref={form} >

          <input
           type='text' 
           placeholder='Your Full Name (Required)' 
           name='name'
           required 
           />
          <input 
          type='email' 
          placeholder='Your Email (Required)' 
          name='email'        
          required 
          />
          <input
           type='text'
           placeholder='Cover letter' 
           name='subject'  
            />
          <textarea 
          placeholder='Your Message' 
          name='message'  
           ></textarea>
          <input type='submit' value='Submit' onClick={showAlert} />
        </form>
      </article>
      
    </section> */}

      <section class="wrapper border rounded p-4 bg-dark">
        <h1 class="text-white">Apply Today</h1>
        <p class="text-white">Fill the data below.</p>
        <form action="" >
          <div class="pb-2">
            <input
              type="text"
              placeholder="First Name"
              class="form-control"
              id="firstname"
              required
            />
          </div>
          <div class="pb-2">
            <input
              type="text"
              placeholder="Last Name"
              class="form-control"
              id="lastname"
              required
            />
          </div>
          <div class="pb-2">
            <input
              type="email"
              placeholder="Email Address"
              class="form-control"
              id="email"
              required
            />
          </div>

          <div class="form-floating pb-2">
            <textarea
              class="form-control"
              placeholder="Cover Letter"
              id="floatingTextarea"
              
            ></textarea>

            <label for="floatingTextarea">Cover Letter</label>
          </div>

            <FileUpload />
    
          <div>
            <button type="button" class="btn btn-secondary" onClick={showAlert}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
