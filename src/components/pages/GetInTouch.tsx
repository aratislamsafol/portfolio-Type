import ContactInfo from "../contact/ContactInfo";
import style from '../../assets/css/module/getintouch.module.scss';
import Form from "../contact/Form";
export default function GetInTouch() {
  return (
    <div className="container">
        <h1 className="title">Get In Touch</h1>
        <div className={style.content}>
            <ContactInfo />
            <div className={style.wrapper}>
                <h2 style={{padding: '20px 20px 0 20px'}}>Say Something</h2>
                <Form />
            </div>
        </div>
        
        <div style={{height:'350px', width:'100%', padding:'30px 0'}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58441.13427718633!2d90.41624589999999!3d23.727013100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1700042557519!5m2!1sen!2sbd" style={{height:'100%', width:'100%'}} loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
