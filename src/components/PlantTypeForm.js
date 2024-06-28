import * as React from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function PlantTypeForm({ closeAction }) {
  const [plantTypeName, setPlantTypeName] = React.useState(null);

  const handlePlantTypeNameChange = (e) => {
    setPlantTypeName(e.target.value);
  };

  const handleFormSubmission = () => {
    closeAction(plantTypeName);
  };

  return (
    <Stack spacing={2}>
      <TextField
        id="addPlantTypeName"
        label="Name"
        variant="standard"
        onChange={handlePlantTypeNameChange}
      />
      <Button variant="contained" onClick={handleFormSubmission}>
        Submit
      </Button>
    </Stack>
  );
}
