import { useState } from "react";
import * as React from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let tempNome = event.target.value;
          if (tempNome.length >= 3) {
            tempNome = tempNome.substring(0, 3);
          }
          setNome(tempNome);
        }}
        id="nome"
        label="Nome"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        margin="normal"
        fullWidth
      />
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
