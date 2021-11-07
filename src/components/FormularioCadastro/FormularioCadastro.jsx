import React, { Fragment, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario"

function FormularioCadastro({ aoEnviar, validarCpf }) {
  return (
    <Fragment>
      <DadosPessoais aoEnviar = {aoEnviar} validarCpf = {validarCpf}/>
      <DadosUsuario />
      <DadosEntrega/>
    </Fragment>
  );
}

export default FormularioCadastro;
