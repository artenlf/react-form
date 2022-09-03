import * as React from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function FormularioCadastro() {
  return (
    <form>
      <TextField id="nome" label="Nome" margin="normal" fullWidth />
      <TextField id="sobrenome" label="Sobrenome" margin="normal" fullWidth />
      <TextField id="cpf" label="CPF" margin="normal" fullWidth />
      <FormControlLabel control={<Switch defaultChecked />} label="Promoções" />
      <FormControlLabel control={<Switch defaultChecked />} label="Newsletter" />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
