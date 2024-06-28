import React from "react";

import AddPlantTypeButton from "./AddPlantTypeButton";

import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default class PLantTypeList extends React.Component {
  render() {
    const { handleAddPlantType, plantTypes } = this.props;
    return (
      <Stack>
        <AddPlantTypeButton handleAddPlantType={handleAddPlantType} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Added On</TableCell>
                <TableCell align="center">Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {plantTypes.map((plantType) => (
                <TableRow
                  key={plantType.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {plantType.name}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(plantType.addedAt).toLocaleString()}
                  </TableCell>
                  <TableCell align="center"> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    );
  }
}
