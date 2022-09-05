import { Button, TextField } from "@mui/material";
import React from "react";

function DadosDeEntrega() {
  return (
    <form>
      <TextField id="cep" label="CEP" type="number" required margin="normal" fullWidth />
      <TextField id="endereco" label="endereco" type="text" required margin="normal" fullWidth />
      <TextField id="numero" label="Número" type="number" required margin="normal" />
      <TextField id="cidade" label="Cidade" type="text" required margin="normal" />
      <TextField id="uf" label="UF" type="text" required margin="normal" />
      <Button type="submit" variant="contained" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosDeEntrega;
