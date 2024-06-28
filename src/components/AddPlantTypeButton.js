import * as React from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PlantTypeForm from "./PlantTypeForm";
import { ModalStyle } from "../constants/Styles";

export default function AddPlantTypeButton({ handleAddPlantType }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (newPlantTypeName) => {
    handleClose();
    handleAddPlantType(newPlantTypeName);
  };

  return (
    <Stack>
      <Button variant="contained" onClick={handleOpen}>
        Add Plant Type
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <PlantTypeForm closeAction={handleFormSubmit} />
        </Box>
      </Modal>
    </Stack>
  );
}
