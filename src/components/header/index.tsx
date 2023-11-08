import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import { ShowToastButton } from "../ui/ToastContainer";
import styles from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { logout } from "../../state/features/authSlice";
import { LangSwitch } from "../lang";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <>
        <LangSwitch />
        <ShowToastButton />
      </>
      {user?.username ? (
        <div className={styles.account}>
          {user?.username}
          <Button
            variant="ghost"
            onClick={handleLogout}
            title="logout"
            className="underline ml-2"
          >
            {t("home:log__out")}
          </Button>
        </div>
      ) : (
        <Link to="/auth">
          <Button title="login">{t("home:log__in")}</Button>
        </Link>
      )}
    </div>
  );
};

export { Header };
