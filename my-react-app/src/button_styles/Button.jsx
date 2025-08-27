import styles from "./ButtonBlue.module.css";
import styles1 from "./ButtonRed.module.css";
import newStyle from "./ButtonNew.module.css";

function Button({ variant = "blue", label = "More Details" }) {
  const styleMap = {
    blue: styles.button,
    red: styles1.button,
    newStyle: newStyle.button,
  };

  return <button className={styleMap[variant]}>{label}</button>;
}

export default Button;
