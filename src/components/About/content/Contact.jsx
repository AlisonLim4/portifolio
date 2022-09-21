import React from 'react';
import styles from './Contact.module.css';
import Button from '../../Button/Button';
const Contact = (setValue) => {
  // function sendEmail(e) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       'gmailMessage',
  //       'template_i6amadv',
  //       form.current,
  //       'h8bgj0NIr9g8ab_QG',
  //     )
  //     .then(
  //       (result) => {
  //         alert('Mensagem enviada com sucesso!');
  //       },
  //       (error) => {
  //         alert(error.message);
  //       },
  //     );
  //   e.target.reset();
  // }
  function handleSubmit(event) {
    console.log(event);
  }
  return (
    <div className={styles.contact}>
      <form onSubmit={handleSubmit}>
        <h2>Send a message</h2>
        <label htmlFor="name">
          _name:
          <input
            id="name"
            type="text"
            onChange={setValue}
            // onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor="email">
          _email:
          <input
            id="email"
            type="email"
            onChange={setValue}
            // onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label htmlFor="message">
          _message:
          <textarea
            id="menssage"
            onChange={setValue}
            // onChange={({ target }) => setMessage(target.value)}
          ></textarea>
        </label>
        <Button content={'submit-message'} />
      </form>
    </div>
  );
};

export default Contact;
