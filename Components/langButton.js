import styles from './buttons.module.css'
const LangButton = ({ lang, onClick }) => {
  return (

    <button onClick={onClick} className={styles.langButton}>
      {lang=="EN"?"AR":"EN"} </button>
  );
};
export default LangButton;