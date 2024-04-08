import styles from "./Input.module.scss";

type Proptypes = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
};

const Input = (props: Proptypes) => {
  const { label, name, type, placeholder, defaultValue, disabled } = props;

  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} id={name} placeholder={placeholder} className={styles.container__input} defaultValue={defaultValue} disabled={disabled} />
    </div>
  );
};

export default Input;
