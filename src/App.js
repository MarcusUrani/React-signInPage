import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto/400.css";
import "./App.css";
import { validaCPF, validaSenha, validaCep } from "./models/cadastro.js";
import validacoesCadastro from "./contexts/validacoesCadatstro.js";

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <validacoesCadastro.Provider
          value={{ cpf: validaCPF, senha: validaSenha, cep: validaCep }}
        >
          <FormularioCadastro aoEnviar={EnviarFormulario} />
        </validacoesCadastro.Provider>
      </Container>
    );
  }
}

function EnviarFormulario(dados) {
  console.log(dados);
}

export default App;
