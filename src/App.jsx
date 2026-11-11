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
      <Card
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZisGfsSaFDhPfR0nAxS6T3OxUznRS6nOtliXwsoXXw&s=10"} 
        title={"Noticia 1"} 
        category={"esporte"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptates accusantium obcaecati harum ullam saepe cupiditate quos maxime officiis? Accusantium illum ipsa perspiciatis facere harum nemo beatae blanditiis rem quaerat?"}
        tipo ={"A"}
      />
      <Card
         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZisGfsSaFDhPfR0nAxS6T3OxUznRS6nOtliXwsoXXw&s=10"} 
        title={"Futurooo"} 
        category={"Tecnologia"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptates accusantium obcaecati harum ullam saepe cupiditate quos maxime officiis? Accusantium illum ipsa perspiciatis facere harum nemo beatae blanditiis rem quaerat?"}
      />
      <Card
         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZisGfsSaFDhPfR0nAxS6T3OxUznRS6nOtliXwsoXXw&s=10"} 
        title={"Cinema"} 
        category={"Filmes"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptates accusantium obcaecati harum ullam saepe cupiditate quos maxime officiis? Accusantium illum ipsa perspiciatis facere harum nemo beatae blanditiis rem quaerat?"}
      />
      <Banner />
    </>
  );
}
export default App;

