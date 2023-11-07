import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import { ShowToastButton } from "../ui/ToastContainer";
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
      <ShowToastButton />
      <Link to="/auth">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export { Header };
