import React, { Fragment, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const formularios = [
    <DadosUsuario aoEnviar={proximaEtapa} />,
    <DadosPessoais aoEnviar={proximaEtapa} validarCpf={validarCpf} />,
    <DadosEntrega aoEnviar={aoEnviar} />,
  ];

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }
  return <Fragment>{formularios[etapaAtual]}</Fragment>;
}

export default FormularioCadastro;
