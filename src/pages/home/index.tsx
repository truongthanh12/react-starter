import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const Home = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  console.log(user, loading)
  return <Fragment></Fragment>;
};

export { Home };
