import React, { Component } from "react";
import Search from "./Search";
import Table from "./Table";
const list = [
  {
    title: "React-App",
    url: "www.google.com",
    author: "Facebook",
    numb_comments: 4,
    points: 8,
    objectID: 1
  },
  {
    title: "C#",
    url: "www.msdn.com",
    author: "Uncle Joe",
    numb_comments: 4,
    points: 8,
    objectID: 2
  },
  {
    title: "Ruby",
    url: "www.ruby.com",
    author: "IoE Developer",
    numb_comments: 4,
    points: 8,
    objectID: 1
  },
  {
    title: "Python",
    url: "www.google.com",
    author: "Kelechi",
    numb_comments: 4,
    points: 8,
    objectID: 1
  },
  {
    title: "TypeScript",
    url: "www.typescript.com",
    author: "David Zagi",
    numb_comments: 7,
    points: 2,
    objectID: 9
  }
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      name: null,
      numberCount: 0,
      searchItem: ""
    };
    //this.onSearchChange = this.onSearchChange.bind(this);
    //this.onDismiss = this.onDismiss.bind(this);
  }

  onBinding() {
    const counter = this.state.numberCount + 1;
    this.setState({ numberCount: counter });
    console.log(this);
  }

  onSubBinding() {
    const counter = this.state.numberCount - 1;
    this.setState({ numberCount: counter });
    console.log(this);
  }
  onDismiss = id => {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);

    this.setState({ list: updatedList });
  };

  onNameDisplay() {
    this.setState({ name: "David Zagi" });
  }

  onSearchChange = event => {
    this.setState({ searchItem: event.target.value });
  };
  render() {
    return (
      <div className="page">
        <div className="interactions">
          <h2>Search Implementation with react</h2>
          <Search
            value={this.state.searchItem}
            onChange={this.onSearchChange}
          />
          <Table
            list={this.state.list}
            pattern={this.state.searchItem}
            onDismiss={this.onDismiss}
          />
        </div>
      </div>
    );
  }
}
