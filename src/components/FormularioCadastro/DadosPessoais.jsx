import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import validacoesCadastro from "../../contexts/validacoesCadatstro.js";
import useErros from "../../hooks/useErros.js";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(validacoesCadastro);
  const [erros, validarCampos] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (erros.cpf.valido === true) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(event) => {
          setNome(event.target.value);
        }}
        required
      />

      <TextField
        value={sobrenome}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        required
      />

      <TextField
        value={cpf}
        id="cpf"
        label="CPF"
        name="cpf"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        required
      />
      <FormControlLabel
        control={
          <Switch
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            checked={promocoes}
          />
        }
        label="Receber promoções"
      />
      <FormControlLabel
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            checked={novidades}
          />
        }
        label="Receber novidades"
      />

      <Button variant="contained" type="submit" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
