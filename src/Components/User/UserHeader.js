import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const getTitle = (pathname) =>
  ({
    "/conta/estatisticas": "Estatísticas",
    "/conta/postar": "Poste sua foto",
  }[pathname] ?? "Minha Conta");

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();
  React.useEffect(() => {
    setTitle(getTitle(location.pathname));
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
