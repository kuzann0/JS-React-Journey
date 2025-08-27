import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./button_styles/Button.jsx";
import Student from "./using_props/Student.jsx";

function App() {
  return (
    <>
      <Student name="Kuya Will" age={100} isStudent={false} />
      <Student name="Brad" age={20} isStudent={true} />
      <Student name="Yusho" age={21} isStudent={false} />
      <Student />
    </>
  );
}

export default App;

// Previous runs

/* <Button variant="blue" />
      <Button variant="red" />
      <Button variant="newStyle" /> */

{
  /* <Student name="Kuya Will" age={100} isStudent={false} />
      <Student name="Brad" age={20} isStudent={true} />
      <Student name="Yusho" age={21} isStudent={false} /> */
}
