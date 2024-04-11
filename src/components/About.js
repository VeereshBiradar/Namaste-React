import { Component } from "react";
import { User } from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

export class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Know about me then click on the page </h1>
        <div>
          LoggedInUser:{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Veeresh Biradar (ClassBased)"} location={"Bidar"} />
      </div>
    );
  }
}
