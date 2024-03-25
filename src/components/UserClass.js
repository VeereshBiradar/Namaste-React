import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            count: 0,
            count2 : 34
        }
        console.log("Child Constructor")
    }

    componentDidMount(){
        console.log("Child componentDidMount()")
      }

    render(){

        const {name, location} = this.props;
        const { count, count2 } = this.state;

        console.log('Child render')
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h2>Locaion: {location}</h2>
                <h3>Profession: Software Engineer</h3>
                <h4>Count: {count}, Count2: {count2}</h4>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2
                    })
                }}>Count Increase</button>
            </div>
        )
    }
}


export default UserClass;