import { Component } from "react";
import { User } from "./User";
import UserClass from "./UserClass";

export class About extends Component {
  constructor(props){
    super(props)

    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent  componentDidMount()")
  }

  render(){

    console.log('Parent Render')
    return (
      <div>
         <h1>Know about me then click on the page </h1>
         <UserClass name={'Veeresh Biradar (ClassBased)'} location={'Bidar'}/>
      </div>
    )
  }
}

// const About = () => {
//   return (
//     <>
//       <h1>Know about me then click on the page </h1>
//       {/* <User name={'Veeresh Biradar (Functional)'}/> */}
//       <br/>
//       <UserClass name={'Veeresh Biradar (ClassBased)'} location={'Bidar'}/>
//     </>
//   );
// };
// export default About;
