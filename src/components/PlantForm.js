import * as React from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PlantForm({ closeAction, plantTypes, plantLocations }) {
  const [plantName, setPlantName] = React.useState(null);
  const [plantType, setPlantType] = React.useState(null);
  const [plantLocation, setPlantLocation] = React.useState(null);

  const handlePlantNameChange = (e) => {
    setPlantName(e.target.value);
  };

  const handlePlantLocationChange = (e) => {
    setPlantLocation(e.target.value);
  };

  const handlePlantTypeChange = (e) => {
    setPlantType(e.target.value);
  };

  const handleFormSubmission = () => {
    closeAction({
      name: plantName,
      plantLocationId: plantLocation,
      plantTypeId: plantType,
    });
  };

  return (
    <Stack spacing={2}>
      <TextField
        id="addPlantName"
        label="Name"
        variant="standard"
        onChange={handlePlantNameChange}
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="plantTypeSelect">Plant Type</InputLabel>
          <Select
            labelId="plant-type-select-label"
            id="plant-type-simple-select"
            value={plantType}
            label="Age"
            onChange={handlePlantTypeChange}
          >
            {plantTypes.map((plantType) => (
              <MenuItem key={plantType.id} value={plantType.id}>
                {plantType.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="plantLocationSelect">Plant Location</InputLabel>
          <Select
            labelId="plant-type-select-label"
            id="plant-type-simple-select"
            value={plantLocation}
            label="Age"
            onChange={handlePlantLocationChange}
          >
            {plantLocations.map((plantLocation) => (
              <MenuItem key={plantLocations.id} value={plantLocation.id}>
                {plantLocation.description}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" onClick={handleFormSubmission}>
        Submit
      </Button>
    </Stack>
  );
}
