import styles from "./LoginForm.module.css";

import { useState } from "react";

function LoginForm() {
  const [user, setUser] = useState();

  return (
    <div className={styles.container}>
      <form>
        <label>Name</label>
        <input type="text" name="username" placeholder="Enter you name"></input>
      </form>
    </div>
  );
}

export default LoginForm;
