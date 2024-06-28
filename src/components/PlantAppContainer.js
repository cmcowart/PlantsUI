import React from "react";
import Stack from "@mui/material/Stack";

import PlantList from "./PlantList";
import PlantTypeList from "./PlantTypeList";

export default class PlantAppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      plants: [],
      plantTypes: [],
      plantLocations: [],
    };

    this.handlePlantTypeFormSubmission =
      this.handlePlantTypeFormSubmission.bind(this);
    this.handlePlantFormSubmission = this.handlePlantFormSubmission.bind(this);
  }

  loadPlants() {
    const PLANT_URL = "http://localhost:8080/plants";
    fetch(PLANT_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            plants: result,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        },
      );
  }

  loadPlantTypes() {
    const PLANT_URL = "http://localhost:8080/plant-types";
    fetch(PLANT_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            plantTypes: result,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        },
      );
  }

  loadPlantLocations() {
    const PLANT_URL = "http://localhost:8080/plant-locations";
    fetch(PLANT_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            plantLocations: result,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        },
      );
  }

  addNewPlant(newPlant) {
    this.setState({
      plants: [],
    });

    const PLANT_URL = "http://localhost:8080/plants/create";
    fetch(PLANT_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    }).then(
      (result) => this.loadPlants(),
      (error) => {
        this.setState({
          error,
        });
      },
    );
  }

  addPlantType(plantName) {
    this.setState({
      plantTypes: [],
    });

    const PLANT_URL = "ttp://localhost:8080/plant-types/create";
    fetch(PLANT_URL, {
      method: "POST",
      body: plantName,
    }).then(
      (result) => this.loadPlantTypes(),
      (error) => {
        this.setState({
          error,
        });
      },
    );
  }

  componentDidMount() {
    this.loadPlants();
    this.loadPlantTypes();
    this.loadPlantLocations();
  }

  handlePlantTypeFormSubmission(plantName) {
    this.addPlantType(plantName);
  }

  handlePlantFormSubmission(newPlant) {
    this.addNewPlant(newPlant);
  }

  render() {
    const { error, plants, plantTypes, plantLocations } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (
      plantLocations.length === 0 ||
      plantTypes.length === 0 ||
      plants.length === 0
    ) {
      return <div>Loading...</div>;
    } else {
      return (
        <Stack spacing={2}>
          <PlantTypeList
            plantTypes={plantTypes}
            handleAddPlantType={this.handlePlantTypeFormSubmission}
          />
          <PlantList
            plants={plants}
            plantTypes={plantTypes}
            plantLocations={plantLocations}
            handAddPlant={this.handlePlantFormSubmission}
          />
        </Stack>
      );
    }
  }
}
