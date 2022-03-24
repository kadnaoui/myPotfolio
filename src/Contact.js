import React from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    let [form, setForm] = React.useState({
        name: '',
        email: '',
        subject: '',
        text: ''
    })
    function change(e) {
        let value = e.target.value;
        let id = e.target.id;

        setForm({ ...form, [id]: value })
        console.log(form)


    }
    const form1 = React.useRef();
    function sendEmail(e) {

        e.target.reset()
        e.preventDefault();

        emailjs.sendForm('service_bcskqwo', 'template_mj1fmbu', form1.current, 'user_AQSkmzrJvb1dD4QWoYIXk')
            .then((result) => {
                return alert('email sent')
            }, (error) => {
                console.log(error.text);
            });
        setForm({
            name: '',
            email: '',
            subject: '',
            text: ''
        })
    }
    return (

        <div id="cntct" className="cntct">
            <div className="intro">
                <h1>Feel Free To Contact Me</h1>
                <p>Please fill the form and I'll contact you as soon as i can </p>
            </div>
            <form id="contact" ref={form1} onSubmit={sendEmail}>
                <div className="contact1">
                    <div className="inputs">
                        <label htmlFor="name" className="form-label">Full Name:</label>
                        <input type="text" className="form-control" value={form.name} id="name" name="name" onChange={change} required />
                    </div>
                    <div className="inputs">
                        <label htmlFor="email" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={change} required />
                    </div>
                    <div className="inputs">
                        <label htmlFor="subject" className="form-label">Subject:</label>
                        <input type="text" className="form-control" id="subject" name="subject" value={form.subject} onChange={change} required />
                    </div>


                </div>
                <div className="contact2">
                    <label htmlFor="text" className="form-label">Text:</label>
                    <textarea id="text" className="form-control-lg" value={form.text} name="text" rows={5} onChange={change} ></textarea>

                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                </div>
            </form>

        </div>

    )
}