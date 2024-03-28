import { Component } from "react";
import { User } from "./User";
import UserClass from "./UserClass";

export class About extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
         <h1>Know about me then click on the page </h1>
         <UserClass name={'Veeresh Biradar (ClassBased)'} location={'Bidar'}/>
      </div>
    )
  }
}
