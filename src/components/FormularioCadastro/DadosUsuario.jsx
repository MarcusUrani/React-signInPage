import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import validacoesCadastro from "../../contexts/validacoesCadatstro.js";
import useErros from "../../hooks/useErros.js";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(validacoesCadastro);

  const [erros, validarCampos] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (erros.senha.valido === true) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          event.stopPropagation();
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="E-mail"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={senha}
        onChange={(event) => {
          event.stopPropagation();
          setSenha(event.target.value);
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        onBlur={validarCampos}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
