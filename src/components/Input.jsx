import { useRef, useState } from "react";

const Input = () => {

   // const [nome, setNome] = useState("");
   const nome = useRef("");
   console.log("Re-renderizou")


    return (  
        <>
            <input 
                type="text"
                placeholder="Digite um nome"
                //onChange={(e) => nome.current = e.target.value}
                ref={nome}
            />
            {/* <button onClick={() => console.log(nome.current)}>Mostrar</button> */}
            <button onClick={() => console.log(nome.current.value, nome.current.type)}>Mostrar</button>
            <h1>{nome.current}</h1>
        </>
    );
}
 
export default Input;