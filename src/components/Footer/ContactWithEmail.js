import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

const ContactWithEmail = () => {
    const { register, formState: { errors } } = useForm();
    const [emailValidation, setEmailValidation] = useState(true);
    const [msgValidation, setmsgValidation] = useState(true);
    function sendEmail(e) {
        e.preventDefault();
        //console.log('l',e.target.name.value,'l', e.target.email.value);
        e.target.email.value && e.target.message.value && emailjs.sendForm('service_y2lhzlu', 'template_wcnplr8', e.target, 'user_DItrV1J903IkCPKDjdRkW')
            .then((result) => {
                alert('Your message send successfully. Thank you!');
            }, (error) => {
                alert(error.message);
            });
        e.target.email.value ? setEmailValidation(true) : setEmailValidation(false);
        e.target.message.value ? setmsgValidation(true) : setmsgValidation(false);
        e.target.email.value && e.target.message.value && e.target.reset();
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <div className="row">
                <div className="col-md-6">
                    <label>Name</label> <br />
                    <input className='form-control' {...register("name", { required: true })} />
                    {errors.name && <span>Name is required</span>}<br />
                </div>
                <div className="col-md-6">
                    <label>Email *</label> <br />
                    <input className='form-control' {...register("email", { required: true })} />
                    {emailValidation ? '' : <span style={{ color: 'red' }}>Email is required</span>}<br />
                </div>
            </div>
            <label>Subject</label> <br />
            <input className='form-control' {...register("subject", { required: true })} />
            {errors.subject && <span>Subject is required</span>}<br />
            <label>Message *</label> <br />
            <textarea className='form-control' {...register("message", { required: true })} />
            {msgValidation ? '' : <span style={{ color: 'red' }}>This fiels is required</span>}<br />
            <input className='btn btn-outline-primary' type="submit" value="Send Message" /> <br />
        </form>

    );
};

export default ContactWithEmail;