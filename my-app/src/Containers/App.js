import React, { Component } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";

import Person from "../Components/Persons/Person/Person";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : " lightgreen")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "001", name: "Max", age: 28 },
      { id: "002", name: "Manu", age: 29 },
      { id: "003", name: "Stephanie", age: 26 },
      { id: "004", name: "Max", age: 27 },
      { id: "005", name: "sonali", age: 30 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  // function App() {             funcation Method

  nameChangedHandler = (event, id = "004") => {
    // console.log(event.target.value, id);
    const personIndex = this.state.persons.findIndex((element) => {
      return element.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  ageChangedHandler = (event, id) => {
    // console.log(event.target.value, id);
    const personIndex = this.state.persons.findIndex((element) => {
      return element.id === id;
    });

    const sunday = {
      ...this.state.persons[personIndex],
    };

    sunday.age = Number(event.target.value);

    const persons = [...this.state.persons];
    persons[personIndex] = sunday;

    this.setState({ persons: persons });
  };

  deletePersonHandlar = (personIndex) => {
    // const Persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {};

    let per = null;
    if (this.state.showPersons) {
      per = (
        <div>
          {this.state.persons.map((item, index) => {
            return (
              <Person
                key={item.id}
                click={() => this.deletePersonHandlar(index)}
                name={item.name}
                age={item.age}
                changed={(event) => this.nameChangedHandler(event, item.id)}
                changedAge={(event) => this.ageChangedHandler(event, item.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 4) {
      classes.push("red"); //classes=['red']
    }
    if (this.state.persons.length <= 3) {
      classes.push("bold"); //classes=['red','bold']
    }
    return (
      <div className="App">
        <h1> hi i am react app</h1>
        <p className={classes.join(" ")}> this is work it</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {per}
      </div>
    );
  }
}

export default App;
