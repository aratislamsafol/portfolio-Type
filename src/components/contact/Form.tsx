import React, { FC, useRef, useState } from 'react';
import Input from '../input/Input';
import EffectButton from '../button/EffectButton';
import style from './form.module.scss';
import emailjs from '@emailjs/browser';

interface FormProps {}

const Form: FC<FormProps> = () => {
  const form = useRef<HTMLFormElement>(null);
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userSubject, setUserSubject] = useState<string>('');
  const [userMessage, setUserMessage] = useState<string>('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userName || !userEmail || !userSubject || !userMessage) {
      console.log('Please fill in all required fields');
      return;
    }
    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      user_subject: userSubject,
      user_message: userMessage
    };

    emailjs
      .send('service_hneax3y', 'template_feu7yfk', templateParams, '8Rvs63pbji9WmvVRW')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'user_name') {
      setUserName(value);
    } else if (name === 'user_email') {
      setUserEmail(value);
    } else if (name === 'user_subject') {
      setUserSubject(value);
    } else if (name === 'user_message') {
      setUserMessage(value);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.form}>
      <div className={style.form_control}>
        <Input type="text" placeholder='Name*' name="user_name" value={userName} onChange={handleInputChange} />
      </div>
      <div className={style.form_control}>
        <Input type="text" placeholder='Email*' name="user_email" value={userEmail} onChange={handleInputChange} />
      </div>
      <div className={style.form_control}>
        <Input type="text" placeholder='Subject*' name="user_subject" value={userSubject} onChange={handleInputChange} />
      </div>

      <div className={style.form_control}>
        <Input type="textarea" placeholder='Your message*' name="user_message" value={userMessage} onChange={handleInputChange} />
      </div>
      <EffectButton type="submit" children="Send" />
    </form>
  );
};

export default Form;