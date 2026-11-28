import { InputText} from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/AuthContext';
import { localAPI } from '../services';
import { LoginContainer, LoginCard, FormGroup, ErrorMessage , SubmitButtonWrapper} from '../styles/LoginStyles';


const Login = () => {

    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [erroLogin, setErroLogin] = useState("");
    const [carregando, setCarregando] = useState(false);

    const {register, handleSubmit} = useForm();
    const { salvarSessao } = useContext(Context);
    const navigate = useNavigate();

    async function logar(dados){
        setErroLogin("");
        setCarregando(true);

        try {
            const response = await localAPI.post("/login", {
                email: dados.email,
                password: dados.senha // Ajuste para "senha" se o seu backend esperar esse nome
            });

            const tokenRecebido = response.data.token || response.data.data?.token;

            if (tokenRecebido) {
                salvarSessao(tokenRecebido);
                navigate('/users');
            } else {
                setErroLogin("Token não recebido pelo servidor.")
        }
        }catch (error){
            setErroLogin(error.response?.data?.message || "Email ou senha inválidos.");
        } finally {
            setCarregando(false);
        }

    }

    return (
        <LoginContainer>
            <LoginCard>
                <h3>Acesse sua conta</h3>
                <p className="subtitulo">Novo cliente? Então registre-se aqui.</p>

                <form onSubmit={handleSubmit(logar)}>
                    <FormGroup>
                        <label htmlFor="email">Login *</label>
                        <InputText 
                            id="email" 
                            type="email" 
                            placeholder="Insira seu login ou email" 
                            {...register('email', { required: true })}
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <label htmlFor="senha">Senha *</label>
                        <IconField iconPosition="right" className="w-full">
                            <InputIcon 
                                className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                            />
                            <InputText 
                                id="senha"
                                type={mostrarSenha ? 'text' : 'password'}
                                placeholder="Insira sua senha"
                                {...register('senha', { required: true })}
                            />
                        </IconField>
                    </FormGroup>

                    {erroLogin && <ErrorMessage>{erroLogin}</ErrorMessage>}

                    <SubmitButtonWrapper>
                        <Button 
                            label={carregando ? 'Entrando...' : 'Acessar Conta'} 
                            type='submit' 
                            disabled={carregando} 
                        />
                    </SubmitButtonWrapper>
                </form>
            </LoginCard>
        </LoginContainer>  
      );
};
 
export default Login;