import * as React from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PlantForm from "./PlantForm";
import { ModalStyle } from "../constants/Styles";

export default function AddPlantButton({
  handleAddPlant,
  plantTypes,
  plantLocations,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (newPlant) => {
    handleClose();
    handleAddPlant(newPlant);
  };

  return (
    <Stack>
      <Button variant="contained" onClick={handleOpen}>
        Add Plant
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <PlantForm
            closeAction={handleFormSubmit}
            plantTypes={plantTypes}
            plantLocations={plantLocations}
          />
        </Box>
      </Modal>
    </Stack>
  );
}
