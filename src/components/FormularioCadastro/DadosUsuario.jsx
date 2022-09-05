import { Button, TextField } from "@mui/material";
import React from "react";

function DadosUsuario() {
  return (
    <>
      <TextField id="email" label="email" type="email" margin="normal" fullWidth />
      <TextField id="senha" label="senha" type="password" margin="normal" fullWidth />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </>
  );
}

export default DadosUsuario;
