import { AuthForm } from "@/components/auth";
import styles from "./Login.module.scss"

const Auth = () => {
  return (
    <div className={styles.login}>
      <AuthForm />
    </div>
  );
};

export { Auth };
