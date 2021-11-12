import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import validacoesCadastro from "../../contexts/validacoesCadatstro.js";
import useErros from "../../hooks/useErros.js";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const validacoes = useContext(validacoesCadastro);

  const [erros, validarCampos] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (erros.cep.valido === true) {
          aoEnviar({ cep, endereco, numero, estado, cidade });
        }
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          event.stopPropagation();
          setCep(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cep.valido}
        helperText={erros.cep.texto}
        id="cep"
        name="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={endereco}
        id="endereco"
        name="endereco"
        label="Endereço"
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
        name="numero"
        type="number"
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
        name="estado"
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
        name="cidade"
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
