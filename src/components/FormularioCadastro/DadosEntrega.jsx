import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar}) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          event.stopPropagation();
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={endereco}
        id="endereco"
        label="endereco"
        type="text"
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          event.stopPropagation();
          setEndereco(event.target.value);
        }}
        fullWidth
      />
      <TextField
        value={numero}
        id="numero"
        label="Número"
        type="text"
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          event.stopPropagation();
          setNumero(event.target.value);
        }}
      />
      <TextField
        value={estado}
        id="estado"
        label="Estado"
        type="text"
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          event.stopPropagation();
          setEstado(event.target.value);
        }}
      />
      <TextField
        value={cidade}
        id="cidade"
        label="Cidade"
        type="text"
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          event.stopPropagation();
          setCidade(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
