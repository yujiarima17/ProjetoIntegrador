import React, { useState, useMemo } from "react";
import "./SobreNos.css";
import programador from "../images/imgSobreNos.png";
import Leo from "../images/Leo.jpg";
import Yuji from "../images/Yuji.jpeg";
import Luigi from "../images/Luigi.jpg";
import Oda from "../images/Oda.png";
import Cadu from "../images/Cadu.jpg";
import Rafael from "../images/Rafael.jpg";
import "../Component/Navabar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../images/toSalvo-Branco.png";
import { GlobalStyle } from "../GlobalStyle";

const SobreNos = () => {


  const sair = () => {
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("email");
    localStorage.removeItem("curso");
  };

  const loggedIn = useMemo(() => {
    const isLoggedIn = localStorage.getItem("loginStatus");
    if (isLoggedIn) {
      return (

        <div className="user">
          <i className="bi bi-person-circle"></i>
          <p>{localStorage.getItem("email")}</p>
        </div>

      );
    }
    return <Link to="/Office365" className="link"><button>Login</button></Link>;
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="root-main-home">
        <div className="header d-flex">
          <Navbar className="nav w-100 sobreNos" expand="lg">
            <Navbar.Brand href="#home" className="logo">
              <Link to="/" className="link">
                <img src={logo} alt="" />
              </Link>
            </Navbar.Brand>
            <Nav
              className="justify-content-center align-items-center "
              id="nav-items"
            >
              {localStorage.getItem("loginStatus") ? (
                <>
                  <Link className="link texto" to="/Notas">
                    Notas
                  </Link>
                  <Link className="link texto" to="/Ciência_da_Computação">
                    Calculadora
                  </Link></>

              ) : <Link className="link texto" to="/Office365">
                Calculadora
              </Link>}
              <Link to="/SobreNos" className="link texto">
                Quem Somos
              </Link>

              {loggedIn}

              <Link to="/" className="link">
                <i
                  className="bi bi-box-arrow-left sobreNos"
                  onClick={sair}
                ></i>
              </Link>
            </Nav>
          </Navbar>
        </div>
        <div className="main-content-home">
          <div className="membros-section">
            <div className="team-members">
              <div className="member">
                <img src={Leo} alt="Membro 1" />
                <div className="bio">

                  <h3>Leonardo</h3>
                </div>
                <div className="icons">
                  <a href="https://www.linkedin.com/in/leonardo-ribeiro-27509a271/"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/TheRibeiro"><i className="bi bi-github"></i></a>

                </div>

              </div>
              <div className="member">
                <img src={Yuji} alt="Membro 2" />
                <div className="bio">

                  <h3>Yuji</h3>
                </div>

                <div className="icons">
                  <a href="https://www.linkedin.com/in/yuji-arima-7b7059209/"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/yujiarima17"><i className="bi bi-github"></i></a>

                </div>
              </div>
              <div className="member">
                <img src={Luigi} alt="Membro 3" />
                <div className="bio">

                  <h3>Luigi</h3>
                </div>

                <div className="icons">
                  <a href="https://www.linkedin.com/in/luigi-ishii-055136236/"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/luigishii"><i className="bi bi-github"></i></a>

                </div>
              </div>

              <div className="member">
                <img src={Oda} alt="Membro 4" />
                <div className="bio">

                  <h3>Henrique</h3>
                </div>

                <div className="icons">
                  <a href="https://www.linkedin.com/in/henrique-yui-oda-279847212/"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/henriqueoda"><i className="bi bi-github"></i></a>

                </div>
              </div>
              <div className="member">
                <img src={Cadu} alt="Membro 5" />
                <div className="bio">

                  <h3>Cadu</h3>
                </div>

                <div className="icons">
                  <a href="https://www.linkedin.com/in/cadu-dias-45b596238/"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/Cadub"><i className="bi bi-github"></i></a>

                </div>
              </div>
              <div className="member">
                <img src={Rafael} alt="Membro 6" />
                <div className="bio">

                  <h3>Rafael</h3>
                </div>

                <div className="icons">
                  <a href="https://www.linkedin.com/in/rafael-carrasco-66b7581a3/"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/RafCarrasco"><i className="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>
          <main>
            <div className="texto">
              <section><p>
                SOMOS UM GRUPO DE ALUNOS DE CIÊNCIA DA COMPUTAÇÃO
                QUE POR MEIO DA NECESSIDADE DE UM MÉTODO QUE FACILITASSE</p></section>
              <section> <p>
                O CÁLCULO DE NOTAS PARA A VERIFICAÇÃO DA APROVAÇÃO DOS
                ALUNOS, DECIDIMOS CRIAR O “TÔ SALVO?”, UM PROJETO REALIZADO
              </p>

              </section>
              <section>
                <p>PARA OTIMIZAR TEMPO E CUSTO DO CÁLCULO,  PARA QUE DESTA FORMA
                  NÃO “QUEBREM A CABEÇA” ASSIM COMO O INDIVÍDUO DA FIGURA AO LADO.</p>
              </section>
            </div>
            <div className="img-space">
              <img src={programador} alt="" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SobreNos;