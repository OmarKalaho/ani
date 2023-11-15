import styles from './buttons.module.css'
const Buttons = ({lang}) => {
    return (
      
      <div className={styles.buttonContainer}>
        <a href='https://wa.me/963991708138'>
        {lang =="EN"?"Book a Consultation Service":"حجز خدمة استشارة"}  
        </a>
  
        <a href='https://wa.me/963991708138'> {lang =="EN"?"Book an Interior or Exterior Design Service":"حجز خدمة لتصميم داخلي او خارجي"}</a>
  
        <a> TikTok </a>
  
        <a> Instagram </a>
      </div>
    
    );
  };
  export default Buttons;