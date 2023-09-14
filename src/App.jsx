import { useEffect } from "react";
import { Card } from "./components/Card/Card";
import "./styles.css";
import { useFetch } from "./utilites/useFetch";

export const App = () => {
  const { status, info, getData } = useFetch({
    url: `/ejemplo.json`,
    defaultVal: [],
  });

  

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="container">
      <Card isLoading={status} name={info.name} title={info.title} description={info.description} date={info.date} mainImg={info.mainImg} personImg={info.personImg} />
    </div>
  );
};
