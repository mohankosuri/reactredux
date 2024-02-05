import React from 'react';
import { TextField} from '@fluentui/react/lib/TextField';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import Contact from '../images/contact.jpg'

const ContactUs = () => {
  return (
    <div className="container mx-auto mt-4 flex">
      
      <div className="flex-1 pr-4 mt-[70px] ml-10">
        <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          We'd love to hear from you! Fill out the form below to get in touch with our team.
        </p>

        <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <TextField
             
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <TextField
             
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <TextField
             
            id="message"
            multiline rows={4}
            placeholder="Your Message"
          ></TextField>
        </div>

        <div className="flex items-center justify-end">
          <DefaultButton
            className='bg-blue-500 text-white'
            type="submit"
          >
            Send Message
          </DefaultButton>
        </div>
      </form>
      </div>

       
      <div className="flex-1">
        
        <img
          src={Contact}  
          alt="Contact Us"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ContactUs;
