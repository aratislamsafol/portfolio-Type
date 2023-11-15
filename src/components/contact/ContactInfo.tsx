import style from './contact.module.scss';
export default function ContactInfo() {
  return (
    <div className={style.contact_box}>
        <div className={style.container}>
            <div className={style.contact_content}>
                <h2>What’s your story? Get in touch</h2>
                <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                <h3><i className="fa-solid fa-location-dot"></i>123 Stree New York City , United States Of America 750065.</h3>
                <h3><i className="fa-solid fa-envelope"></i>support@domain.com</h3>
                <h3><i className="fa-solid fa-mobile"></i>+044 9696 9696 3636</h3>
            </div>
        </div>
    </div>
  )
}
