import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  WATER_ACTION_ID,
  FERTILIZED_ACTION_ID,
  REMOVE_ACTION_ID,
} from "../constants/Values";

export default function PlantDetails({
  closeDetailsModal,
  handleAddPlantAction,
  plant,
  plantType,
  plantLocation,
}) {
  const handleAction = (actionTypeId) => {
    closeDetailsModal();
    handleAddPlantAction({
      plantId: plant.id,
      actionTypeId,
    });
  };

  return (
    <Stack>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {plant.name} ({plantType.name} - {plantLocation.description})
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => handleAction(WATER_ACTION_ID)}
        >
          Water Plant
        </Button>
        <Button
          variant="contained"
          onClick={() => handleAction(FERTILIZED_ACTION_ID)}
        >
          Fertilize Plant
        </Button>
        <Button
          variant="contained"
          onClick={() => handleAction(REMOVE_ACTION_ID)}
        >
          Remove Plant
        </Button>
      </Stack>
    </Stack>
  );
}
