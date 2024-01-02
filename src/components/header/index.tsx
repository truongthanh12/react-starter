import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { logout } from "@/state/features/authSlice";
import { memo } from "react";
import { Button } from "@/components/ui/button";
import Image from "../ui/image";
import Logo from "@app/assets/images/logo.svg" 

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <Image src={Logo} alt="logo VieON" />
        </Link>
      </div>
      {user?.username ? (
        <div className={styles.account}>
          {user?.username}
          <Button
            variant="outline"
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

export default memo(Header);
