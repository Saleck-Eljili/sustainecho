import React, { Component }  from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    lists: [],
    mark: "",
  };

  componentDidMount() {
    axios.get(`http://localhost:8000/api/todos/`).then((res) => {
      const lists = res.data;
      this.setState({ lists });
    });
  }

  render() {
    return (
      <div>
        <div>
          {" "}
          <div class="column">
            {this.state.lists.map((list) => (
              <button class="bsp">{list.ville1}</button>
            ))}
            {this.state.lists.map((list) => (
              <button class="bsp2">{list.ville2}</button>
            ))}
            {this.state.lists.map((list) => (
              <button class="bsp3">{list.ville3}</button>
            ))}
          </div>
          <div class="column" id="mt">
            {this.state.lists.map((list) => (
              <button class="bspf1">{list.mark1}</button>
            ))}
            {this.state.lists.map((list) => (
              <button class="bspf1">{list.mark2}</button>
            ))}
            {this.state.lists.map((list) => (
              <button class="bspf2">{list.mark3}</button>
            ))}
            {this.state.lists.map((list) => (
              <button class="bspf1">{list.mark4}</button>
            ))}
            {this.state.lists.map((list) => (
              <button class="bspf1">{list.mark5}</button>
            ))}
            {this.state.lists.map((list) => (
              <button class="bspf2">{list.mark6}</button>
            ))}
            {this.state.lists.map((list) => (
              <button class="bspf1">{list.mark7}</button>
            ))}
            {this.state.lists.map((list) => (
              <button class="bspf1">{list.mark8}</button>
            ))}
          </div>
        </div>
        <div class="column" id="mt">
          {this.state.lists.map((list) => (
            <button class="bspf1">{list.namp1}</button>
          ))}
          {this.state.lists.map((list) => (
            <button class="bspf1">{list.namp2}</button>
          ))}
          {this.state.lists.map((list) => (
            <button class="bspf2">{list.namp3}</button>
          ))}
          {this.state.lists.map((list) => (
            <button class="bspf1">{list.namp4}</button>
          ))}
          {this.state.lists.map((list) => (
            <button class="bspf1">{list.namp5}</button>
          ))}
          {this.state.lists.map((list) => (
            <button class="bspf2">{list.namp6}</button>
          ))}
          {this.state.lists.map((list) => (
            <button class="bspf1">{list.namp7}</button>
          ))}
          {this.state.lists.map((list) => (
            <button class="bspf1">{list.namp8}</button>
          ))}
        </div>
      </div>
    );
  }
}
export default App;