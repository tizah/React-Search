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
    title: "php",
    url: "www.msdn.com",
    author: "Might Super Eagle",
    numb_comments: 4,
    points: 8,
    objectID: 2
  },
  {
    title: "Perl",
    imageurl:
      "data:image/jpeg;base64,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",
    url: "www.msdn.com",
    author: "Mighty Eagle Mc Neecen",
    numb_comments: 4,
    points: 8,
    objectID: 2
  },
  {
    title: "React",
    url: "www.msdn.com",
    author: "Jobber Man (Andela)",
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
