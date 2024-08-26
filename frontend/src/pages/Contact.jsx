import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nllb7wh', 'template_bo6d8kq', form.current, {
        publicKey: 'vwyXyAiIQlo7R8fo5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text_para'>
          Got any technical issue? Want to send feedbak about this website?
           Let us know.
        </p>
        <form onSubmit={sendEmail} ref={form} className='space-y-8'>

        <div>
            <label htmlFor="subject" className='form_label'>Name</label>
            <input
            type='text'
            name="from_name"
            id='subject'
            placeholder='Let us know how we can help you'
            className='form_input mt-1'></input>
          </div>
          <div>
            <label htmlFor="email" className='form_label'>Your Email</label>
            <input
            name="from_email"
            type='email'
            id='email'
            placeholder='example@gmail.com'
            className='form_input mt-1'></input>
          </div>


         

          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form_label'>Your Message</label>
            <textarea
            rows='6'
            type='text'
            id='message'
            name='message'
            placeholder='Leave a comment...'
            className='form_input mt-1'></textarea>
          </div>

          <button type='submit' value="Send" className='btn rounded sm:w-fit'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact