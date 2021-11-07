import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto/400.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro aoEnviar={EnviarFormulario} validarCpf = {validaCPF}/>
      </Container>
    );
  }
}

function EnviarFormulario(dados) {
  console.log(dados);
}

function validaCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido: false, texto: "O CPF deve ter 11 dígitos."}
  } else {
    return { valido: true, texto: "" };
  }
}

export default App;
