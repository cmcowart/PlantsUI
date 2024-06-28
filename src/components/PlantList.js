import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import AddPlantButton from "./AddPlantButton";
import { ModalStyle } from "../constants/Styles";
import PlantDetails from "./PlantDetails";

export default function PlantList({
  handAddPlant,
  plants,
  plantTypes,
  plantLocations,
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState({});
  const [selectedPlantType, setSelectedPlantType] = React.useState({});
  const [selectedPlantLocation, setSelectedPlantLocation] = React.useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getPlantTypeForId = (plantTypeId) => {
    return plantTypes.filter((plantType) => plantType.id === plantTypeId)[0];
  };

  const getPlantLocationForId = (plantLocationId) => {
    return plantLocations.filter(
      (plantLocation) => plantLocation.id === plantLocationId,
    )[0];
  };

  const handlePlantClick = (plant) => {
    setSelectedRow(plant);
    setSelectedPlantType(getPlantTypeForId(plant.plantTypeId));
    setSelectedPlantLocation(getPlantLocationForId(plant.plantLocationId));
    handleOpen();
  };

  return (
    <Stack>
      <AddPlantButton
        handleAddPlant={handAddPlant}
        plantTypes={plantTypes}
        plantLocations={plantLocations}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Last Watered</TableCell>
              <TableCell align="center">Last Fertilized</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plants.map((plant) => (
              <TableRow
                key={plant.id}
                onClick={() => handlePlantClick(plant)}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {plant.name}
                </TableCell>
                <TableCell align="center">
                  {getPlantTypeForId(plant.plantTypeId).name}
                </TableCell>
                <TableCell align="center">
                  {getPlantLocationForId(plant.plantLocationId).description}
                </TableCell>
                <TableCell align="center"> </TableCell>
                <TableCell align="center"> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <PlantDetails
            plant={selectedRow}
            plantType={selectedPlantType}
            plantLocation={selectedPlantLocation}
          />
        </Box>
      </Modal>
    </Stack>
  );
}
