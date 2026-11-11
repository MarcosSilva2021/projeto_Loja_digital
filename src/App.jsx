import Banner from "./components/Banner";
import Card from "./components/Card";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <FormaDeBolo sabor="laranja" cobertura="Chocolate" />
      <FormaDeBolo sabor="milho" cobertura="Moranguuu" />
      <Card />
      <Banner />
    </>
  );
}
export default App;