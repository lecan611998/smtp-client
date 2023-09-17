import "./styles.css";
import { sendMail, sendMailClient } from "./email";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="button" value="Send Email" onClick={sendMail} />
      <input type="button" value="Send" onClick={sendMailClient} />
    </div>
  );
}
