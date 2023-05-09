import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import Logo from "../images/logo-mauaBlue.png";
import { schemaLogin } from "../Schema/schemas";
import "./Login.css";
import { yupResolver } from "@hookform/resolvers/yup";

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        // utilizado para capturar erroros de dados,
        formState: { isSubmitted, isValid },
    } = useForm({
        // apenas verifica os campos quando ocorrer o Submit
        mode: "onSubmit",
        resolver: yupResolver(schemaLogin)
    });

    const form_result = (data) => {
        console.log(data);
    };
    return (
        <>
            <GlobalStyle />
            <div className="login">
                <img src={Logo} alt="" />
                <form onSubmit={handleSubmit(form_result)} className="login-forms">
                    <div className="email-campo">
                        <label htmlFor="email"><i class="bi bi-envelope"></i>Email :</label>
                        <input
                            type="email"
                            {...register("email")}
                            name="email"
                            placeholder="exemplo@maua.br"
                        />

                        <p className="error-txt">{errors.email?.message}</p>
                    </div>

                    <div className="senha-campo">
                        <label htmlFor="senha"><i class="bi bi-lock"></i>Senha :</label>
                        <input
                            type="password"
                            {...register("senha")}
                            name="senha"
                            placeholder="*****"
                        />
                    </div>

                    <p className="error-txt">{errors.senha?.message}</p>


                    <button
                        type="submit"
                    >
                        Entrar
                    </button>
                    <div className="opcoes">
                        <ul>
                            <li>Recuperar Senha</li>
                            <li>Cadastrar-se!</li>
                        </ul>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;