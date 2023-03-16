import React, { useState } from 'react'
import './main.scss';

export default function JoinHydra() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`First Name: ${firstName}`);
        console.log(`Last Name: ${lastName}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        console.log(`Message: ${message}`);
    };

    return (
        <div className='reg-form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>JOIN HYDRA</h1>
                    <hr/>
                    <p>Let’s Build Your VR Experience</p>
                </div>
                <div className='inp-divs'>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        placeholder="First Name"
                    />

                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        placeholder="Last Name"
                    />
                </div>

                <div className='inp-divs'>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                    />

                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="Phone Number"
                    />
                </div>

                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    placeholder="Subject"
                />

                <textarea
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell Us Something..."
                />

                <button type="submit">SEND TO HYDRA</button>
            </form>
        </div>

    );
}


