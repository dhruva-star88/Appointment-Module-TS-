import React, { useState } from 'react';
import './contactform.css';

interface FormData {
  fullName: string;
  contactNumber: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Handle form submission (e.g., send to API or log)
    console.log('Form submitted successfully!', formData);
    
    // Reset form
    setFormData({
      fullName: '',
      contactNumber: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-data">
          <div className='full-name'>
            <label htmlFor="fullName" className='ph-full-name'></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder='Full Name*'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className='contact-number'>
            <label htmlFor="contactNumber" className='ph-contact-number'></label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              placeholder='Contact No*'
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className='message'>
            <label htmlFor="message" className='ph-message'></label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder='Type your query here...'
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="submit-btn">
          <button className="submit" type="submit">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
