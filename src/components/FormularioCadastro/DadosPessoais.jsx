import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validarCpf }) {
  let [nome, setNome] = useState("");
  let [sobrenome, setSobrenome] = useState("");
  let [cpf, setCpf] = useState("");
  let [promocoes, setPromocoes] = useState(true);
  let [novidades, setNovidades] = useState(false);
  let [erros, setErros] = useState({ cpf: { valido: true }, texto: "" });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
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
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const valido = validarCpf(event.target.value);
          setErros({ cpf: valido });
        }}
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
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
