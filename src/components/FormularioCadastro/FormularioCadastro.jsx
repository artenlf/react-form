import React, { useState } from "react";
import { useEffect } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    console.log(dadosColetados);
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosDeEntrega aoEnviar={coletarDados} />,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximaEtapa();
  }

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
