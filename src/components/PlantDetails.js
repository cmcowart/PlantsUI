import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function PlantDetails({ plant, plantType, plantLocation }) {
  return (
    <Stack>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {plant.name} ({plantType.name} - {plantLocation.description})
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => {}}>
          Water Plant
        </Button>
        <Button variant="contained" onClick={() => {}}>
          Fertilize Plant
        </Button>
        <Button variant="contained" onClick={() => {}}>
          Remove Plant
        </Button>
      </Stack>
    </Stack>
  );
}
