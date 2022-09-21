import React, { useEffect, useState } from 'react';
import styles from './About.module.css';
import {
  RiArrowDownSFill,
  RiTerminalBoxLine,
  RiGamepadFill,
  RiContactsFill,
  RiWhatsappLine,
} from 'react-icons/ri';
import { AiFillSnippets, AiOutlineAudit } from 'react-icons/ai';
import { HiAcademicCap } from 'react-icons/hi';
import { FaMedal, FaUniversity } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Contact from './content/Contact';
import PersonalInfo from './content/PersonalInfo';
import Education from './content/Education';
import Interests from './content/Interests';
import Snippets from './Snippets';
import Button from '../Button/Button';
import emailjs from '@emailjs/browser';

const About = () => {
  const [links, setLinks] = useState('');
  const [content, setContent] = useState(<PersonalInfo />);
  //forms
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  //Date
  const date = Date();

  function handleClick({ target }) {
    const iconeBio = document.querySelector('svg.bio_icon');
    const iconeEducation = document.querySelector('svg.education_icon');
    const iconeInterests = document.querySelector('svg.interests_icon');
    const iconeEmail = document.querySelector('svg.email_icon');
    const iconeTel = document.querySelector('svg.tel_icon');
    const x = document
      .querySelectorAll('p')
      .forEach((p) => p.classList.remove('link_active'));
    // activeLink.forEach((link) => {
    //   link.classList.remove('link_active');
    target.classList.add('link_active');

    //clear icon color
    iconeBio.classList.remove('salmon');
    iconeEducation.classList.remove('green');
    iconeInterests.classList.remove('blue');
    iconeEmail.classList.remove('orange');
    iconeTel.classList.remove('green');

    //color respective icon
    if (target.classList.contains('bio')) {
      iconeBio.classList.add('salmon');
    } else if (target.classList.contains('education')) {
      iconeEducation.classList.add('green');
    } else if (target.classList.contains('interests')) {
      iconeInterests.classList.add('blue');
    } else {
      iconeEmail.classList.add('orange');
      iconeTel.classList.add('green');
    }

    setLinks(target);
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'gmailMessage',
        'template_i6amadv',
        e.target,
        'h8bgj0NIr9g8ab_QG',
      )
      .then(
        (result) => {
          alert('Mensagem enviada com sucesso!');
        },
        (error) => {
          alert(error.message);
        },
      );
    e.target.reset();
  }

  useEffect(() => {
    switch (links.innerText) {
      case 'interests':
        setContent(<Interests />);
        break;
      case 'bio':
        setContent(<PersonalInfo />);
        break;
      case 'education':
        setContent(<Education />);
        break;
      case 'send email': {
        setContent(
          <div className={styles.contact}>
            <form onSubmit={handleSubmit}>
              <h2>Send a message</h2>
              <label htmlFor="name">
                _name:
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={({ target }) => setName(target.value)}
                />
              </label>
              <label htmlFor="email">
                _email:
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={({ target }) => setEmail(target.value)}
                />
              </label>
              <label htmlFor="message">
                _message:
                <textarea
                  id="message"
                  name="message"
                  onChange={({ target }) => setMessage(target.value)}
                ></textarea>
              </label>
              <Button content={'submit-message'} />
            </form>
          </div>,
        );
      }
    }
  }, [links]);

  return (
    <section className={styles.container}>
      <div className={styles.left_side}>
        {/* <div className={styles.lateral_icons}>
          <div className={styles.icon_container}>
            <RiTerminalBoxLine size={'24px'} className="bio_icon" />
          </div>
          <div className={styles.icon_container}>
            <HiAcademicCap size={'24px'} className="education_icon" />
          </div>
          <div className={styles.icon_container}>
            <RiGamepadFill size={'24px'} className="interests_icon" />
          </div>
        </div> */}
        <div className={styles.personal_info}>
          <div className={styles.personal_title}>
            <RiArrowDownSFill />
            <p>personal-info</p>
          </div>

          <div className={styles.topics_folder} id="teste">
            <div className={styles.topic}>
              <AiOutlineAudit className="bio_icon salmon" />
              <p onClick={handleClick} className=" bio link_active">
                bio
              </p>
            </div>
            <div className={styles.topic}>
              <FaMedal className="education_icon" />
              <p onClick={handleClick} className="education">
                education
              </p>
            </div>
            <div className={styles.topic}>
              <RiContactsFill className="interests_icon" />
              <p onClick={handleClick} className="interests">
                interests
              </p>
            </div>
          </div>
          <div className={styles.personal_title}>
            <RiArrowDownSFill />
            <p>contacts</p>
          </div>
          <div className={styles.contacts}>
            <div className={styles.email}>
              <MdEmail size={'20px'} className="email_icon" />
              <p onClick={handleClick}>send email</p>
            </div>
            <div className={styles.tel}>
              <RiWhatsappLine size={'20px'} className="tel_icon" />
              <a href="https://wa.me/5521982113759">(21) 98211-3759</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.title_active}>
          <p>personal-info</p>
        </div>
        <div className={styles.content}>
          <div className={styles.content_container}>
            <div>{content}</div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Snippets
          name={name}
          email={email}
          mensagem={message.slice(0, 35)}
          date={date.slice(0, 10)}
        />
      </div>
    </section>
  );
};
export default About;
