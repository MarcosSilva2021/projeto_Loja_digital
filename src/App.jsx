import { useEffect } from "react";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/Header";
import Input from "./components/Input";
import Paths from "./Routes/Paths";

const App = () => {

  return (
    <>
      <Header />
      <Paths />
      <Banner />
    </>
  );
}
export default App;

