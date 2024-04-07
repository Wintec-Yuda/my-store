import styles from "./Input.module.scss";

type Proptypes = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
};

const Input = (props: Proptypes) => {
  const { label, name, type, placeholder } = props;

  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} id={name} placeholder={placeholder} className={styles.container__input} />
    </div>
  );
};

export default Input;
