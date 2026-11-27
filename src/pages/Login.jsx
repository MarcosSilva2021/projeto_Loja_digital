import { InputText} from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const {register, handleSubmit} = useForm();

    function logar(dados){
        console.log(dados);
    }

   /* const [products, setProducts] = useState(localProducts);

    async function fazerLogin() {
        try {
        const request = await localAPI.get("/login");

        if (request.data.success && request.data.data.length > 0){
            setProducts(request.data.data);
        }

        }catch (error){
        console.log("Erro ao buscar logar", error);
        }
    }

    useEffect(() => {
        fazerLogin();
    }, []); */

    return (
        <>
            <div>
                <h3>Tela de Login</h3>
                <form onSubmit={handleSubmit(logar)}>
                    <label htmlFor="email">Email</label>
                        <InputText 
                            id="email" 
                            type="email" 
                            placeholder=" email@email.com " 
                            {...register('email', { required: true })}
                        />
                    
                    <label htmlFor="password">Senha</label>
                        <IconField>
                            <InputIcon 
                                className= {`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                            />
                            <InputText 
                                id="senha"
                                type={ mostrarSenha ? 'text' : 'password'}
                                placeholder=" ****** "
                                {...register('senha', { required: true })}
                            />
                        </IconField>
                    <Button label='Entrar' type='submit' />
                </form>
            </div>
        </>
      );
}
 
export default Login;