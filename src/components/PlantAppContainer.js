import React from "react";
import Stack from "@mui/material/Stack";

import PlantList from "./PlantList";
import PlantTypeList from "./PlantTypeList";

import {
  createPlant,
  createPlantAction,
  createPlantType,
  getPlantActionTypes,
  getPlantLocations,
  getPlantReport,
  getPlantTypes,
} from "../api/Rest";

export default class PlantAppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      plants: [],
      plantActionTypes: [],
      plantTypes: [],
      plantLocations: [],
    };

    this.handlePlantTypeFormSubmission =
      this.handlePlantTypeFormSubmission.bind(this);
    this.handlePlantFormSubmission = this.handlePlantFormSubmission.bind(this);
    this.handleAddPlantAction = this.handleAddPlantAction.bind(this);
  }

  loadPlantActionTypes() {
    getPlantActionTypes()
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            plantActionTypes: result,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        },
      );
  }

  loadPlants() {
    getPlantReport()
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
    getPlantTypes()
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
    getPlantLocations()
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

    createPlant(newPlant).then(
      () => this.loadPlants(),
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

    createPlantType(plantName).then(
      () => this.loadPlantTypes(),
      (error) => {
        this.setState({
          error,
        });
      },
    );
  }

  addPlantAction(plantAction) {
    this.setState({
      plants: [],
    });

    createPlantAction(plantAction).then(
      () => this.loadPlants(),
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
    this.loadPlantActionTypes();
    this.loadPlantLocations();
  }

  handlePlantTypeFormSubmission(plantName) {
    this.addPlantType(plantName);
  }

  handlePlantFormSubmission(newPlant) {
    this.addNewPlant(newPlant);
  }

  handleAddPlantAction(plantAction) {
    this.addPlantAction(plantAction);
  }

  render() {
    const { error, plants, plantActionTypes, plantTypes, plantLocations } =
      this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (
      plantLocations.length === 0 ||
      plantTypes.length === 0 ||
      plantActionTypes === 0 ||
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
            plantActionTypes={plantActionTypes}
            plantTypes={plantTypes}
            plantLocations={plantLocations}
            handleAddPlant={this.handlePlantFormSubmission}
            handleAddPlantAction={this.handleAddPlantAction}
          />
        </Stack>
      );
    }
  }
}
