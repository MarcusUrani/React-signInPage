function validaCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O CPF deve ter 11 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validaSenha(senha) {
  if (senha.length < 4 || senha.length > 18) {
    return {
      valido: false,
      texto: "A senha deve ter entre 4 e 18 caracteres.",
    };
  } else {
    return { valido: true, texto: "" };
  }
}

function validaCep(cep) {
  if (cep.length !== 8) {
    return { valido: false, texto: "O CEP deve ter 8 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validaCPF, validaSenha, validaCep };
