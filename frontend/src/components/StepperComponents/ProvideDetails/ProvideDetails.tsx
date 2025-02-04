import  "./providedetails.css"
import Attachment from "../../../assets/attachment.png"
import React, { useState } from "react"

export const ProvideDetails = () => {
    // State to track the file name
    const[fileName, setFileName] = useState<String | null>(null);

    // Handle file upload logic
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if(file){
            setFileName(file.name); // Updates the state to uploaded filename
        }
        else{
            setFileName(null); // Updates the filename to null
        }
    }

    // Trigger file input when the icon is clicked
    const triggerFileInput = () => {
        const fileInput = document.getElementById("file-upload") as HTMLInputElement;
        if(fileInput){
            fileInput.click(); // Open file dialog when the icon is clicked
        }
    }


    return(
        <>
        <div className={"provide-details"}>
           <h3>Provide your details</h3>
           <div className="contact-form">
                {/* Name-Section */}
                <div className="name1">
                    <h2>Full Name</h2>
                    <div className="input-group">
                        <input className="fname" type="text" placeholder="First Name*" />
                        <input className="fname" type="text" placeholder="Last Name" />
                    </div>
                </div>

                <div className="dropdown-group">
                    <div className="group">
                        <label>Gender</label>
                        <select>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="group">
                        <label>Location</label>
                        <select>
                            <option>Hyderabad, Telangana</option>
                            <option>Bangalore, Karnataka</option>
                            <option>Other</option>
                    </select>
                    </div>
                </div>

                <div className="dob1">
                    <h2>Date of Birth</h2>
                    <div className="dob-group">
                        <input className="dob-div1" type="text" placeholder="Date" />
                        <input className="dob-div2" type="text" placeholder="Month" />
                        <input className="dob-div3" type="text" placeholder="Year" />
                    </div>
                </div>
                {/* Contact Number */}
                <div className="con-num">
                    <h2>Contact Number</h2>
                    <div className="con-num-inner">
                        <div className="country-num"><p>+91</p></div>
                        <input className="phone-num" type="text" placeholder="Enter 10-digit number" />
                    </div>
                </div>

                <div className="email-div">
                    <h2>Email Address</h2>
                    <input className="email-class" type="email" placeholder="Enter your email address" />
                    <p>We will update the session details via <span>WhatsApp</span> and <span>Email</span>.</p>
                </div>

                <div className="describe">
                    <h2>Describe your concerns</h2>
                    <textarea className="text-area" placeholder="Share what’s bringing you to therapy—your thoughts, concerns, or anything on your mind. Include anything your therapist should know in advance." rows={4}></textarea>
                </div>

                <div className="attach-files">
                    <label htmlFor="file-upload" className="file-upload-label">
                        Attach Files
                    </label>
                    <div className="file-div">
                        <img 
                            src={Attachment} 
                            alt="Attachment" 
                            className="attachment-icon"
                            onClick={triggerFileInput}
                        />
                        <input 
                            type="file" 
                            id="file-upload" 
                            className="file-upload-input"
                            onChange={handleFileChange}
                        />
                        {/* Conditional redering to span the name of the uploaded file or Default Message*/}
                        {fileName? (
                            <span className="file-name">{fileName}</span>
                        ):(
                            <p className="file-name">Share any relevant history or documents.</p>
                        )} 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}