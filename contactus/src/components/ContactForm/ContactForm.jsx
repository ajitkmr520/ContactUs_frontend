import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {useState} from "react";

const ContactForm = () => {
  const[name, setName]=useState('');
  const[email, setEmail]=useState('');
  const[text, setText]=useState('');

   
  const onSubmit=(event)=>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPOORT CHAT" icon={<MdMessage fontSize="24 px"/>} />
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24 px"/>} />
        </div>
        <Button isOutline={true} text="VIA EMAIL" icon={<HiMail fontSize="24 px"/>} />
        <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <input rows="20" name="text"/>
            </div>
            <div className={styles.top_btn} style={{display: "flex", justifyContent: "end"}}>
                <Button text="SUBMIT BUTTON"/>
            </div>
            <div>{name +  " " + email + " " + text }</div>
        </form>
        </div>
      <div>
        <img src="./images/Service 24_7-pana 1.svg" alt="contact image" />
      </div>
    </section>
  )
}

export default ContactForm
