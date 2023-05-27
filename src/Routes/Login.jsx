import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import Logo from "../images/toSalvo-Blue.jpeg";
import { schemaLogin } from "../Schema/schemas";
import "./Login.css";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // utilizado para capturar erroros de dados,
    formState: { isValid },
  } = useForm({
    // apenas verifica os campos quando ocorrer o Submit
    mode: "onSubmit",
    resolver: yupResolver(schemaLogin),
  });

  const form_result = (data) => {
    console.log(data);
  };
  const [showSenha, setSenha] = useState("bi bi-eye-slash");
  const [showInputType, setInputType] = useState("password");

  const handleToggleSenha = () => {
    setSenha((prevState) =>
      prevState === "bi bi-eye-slash" ? "bi bi-eye" : "bi bi-eye-slash"
    );

    setInputType((prevState) =>
      prevState === "password" ? "text" : "password"
    );
  };
  return (
    <>
      <GlobalStyle />
      <div className="login">
        <Link to="/" className="link">
          {" "}
          <i class="bi bi-arrow-left"></i>
        </Link>
        <img src={Logo} alt="" />
        <form onSubmit={handleSubmit(form_result)} className="login-forms">
          <div className="email-campo">
            <label htmlFor="email">
              <i class="bi bi-envelope"></i>Email :
            </label>
            <input
              type="email"
              {...register("email")}
              name="email"
              placeholder="exemplo@maua.br"
            />

            <p className="error-txt">{errors.email?.message}</p>
          </div>

          <div className="senha-campo">
            <label htmlFor="senha">
              <i class="bi bi-lock"></i>Senha :
            </label>
            <span className="campo">
              <i class={showSenha} onClick={handleToggleSenha}></i>
              <input
                type={showInputType}
                {...register("senha")}
                name="senha"
                placeholder="*****"
              />
            </span>
          </div>

          <p className="error-txt">{errors.senha?.message}</p>

          <button type="submit" >
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
