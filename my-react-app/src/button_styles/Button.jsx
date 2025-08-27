import styles from "./ButtonBlue.module.css";
import styles1 from "./ButtonRed.module.css";

function Button({ variant = "blue", label = "Click Me" }) {
  const styleMap = {
    blue: styles.button,
    red: styles1.button,
  };

  return <button className={styleMap[variant]}>{label}</button>;
}

export default Button;
