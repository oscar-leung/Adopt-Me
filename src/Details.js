import { Component } from "react";
import { render } from "react-dom";
import { withRouter } from "react-router";

class Details extends Component{
  constructor(){
    super();
    this.state = {loading : true};
  }
  
  async componentDidMount(){
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({loading : false}, json.pets[0]));
  }

  render(){
    if(this.state.loading){
      return <h2>loading ...</h2>
    }
    const {animal, breed, city, state, desciption, name } = this.state
    return (
      <div className = "details">
        <div>
        <h1> {name}</h1>
        <h2> {animal} - {breed} - {city} - {state} </h2>
        <button> Adopt {name} </button>
        <p>{desciption}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(Details);

