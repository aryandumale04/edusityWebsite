import React from 'react'
import './Contact.css'
import messge from '../../assets/msg-icon.png'
import mmail from '../../assets/mail-icon.png'
import phn from '../../assets/phone-icon.png'
import locat from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4ade55eb-fe32-4266-a777-a6a0ee2b8569");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return ( 

    <div className='contact' id='Contact'>
        <div className='contact-col'>
            <h3>
                Send Us a Message
                <img src={messge} alt="msg" />
            </h3>
            <p>
            Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community
            </p>
            <ul>
                <li> <img src={mmail} alt="m" />
                    Edusity@edu.in@gmail.com
                </li>
                <li><img src={phn} alt="p" />
                    +1 987-456-2341
                </li>
                <li>
                    <img src={locat} alt="a" />
                77 Massachusetts Ave, Cambridge
                MA 02139, United State
                </li>
            </ul>

        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label >
                    Your Name
                </label>
                <input type='text'name='name'
                placeholder='Enter your Name'
                required/>

                <label >
                    Phone Number
                </label>
                <input type='tel'name='Phone'
                placeholder='Enter your Phone Number'
                required/>

                <label>
                    Write Your Message Here

                </label>
                <textarea name='message' rows='6'
                placeholder='Enter Your Message'
                required> 


                </textarea>
                <button type='submit' className='btn dark-btn'
                >
                    Submit Now
                    <img src={arrow} alt="a" />

                </button>


            </form>
            <span>
                {result}
            </span>

        
        </div>
      
    </div>
  )
}

export default Contact
