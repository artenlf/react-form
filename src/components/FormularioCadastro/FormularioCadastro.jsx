import { Typography } from "@mui/material";
import React, { useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximaEtapa} />;
      case 1:
        return <DadosPessoais aoEnviar={proximaEtapa} validarCPF={validarCPF} />;
      case 2:
        return <DadosDeEntrega aoEnviar={aoEnviar} />;
      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}

export default FormularioCadastro;
