import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const PageNotFound = () => {
  return (
    <div className={styles.not__found}>
      Not found page!!
      <Link to="/">Back to home</Link>
    </div>
  );
};

export { PageNotFound };
