import React, {Component} from "react";
import RobotStore from "../stores/RobotStore";

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            type:"",
            name:"",
            mass: 0
        };
    }

    componentDidMount(){
        this.store = new RobotStore();
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        let item = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label> 
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required>
                        </input>
                    <br></br>
                    <label>Type</label>
                        <input
                            id="type"
                            type="text"
                            name="type"
                            value={this.state.type}
                            onChange={this.handleChange}
                            required>
                        </input>
                    <br></br>
                    <label>Weight</label>
                        <input
                            id="mass"
                            type="number"
                            name="mass"
                            value={this.state.mass}
                            onChange = {this.handleChange}
                            required>
                        </input>
                    <br></br>
                    <input
                        type="submit"
                        value="add"
                        onClick = {() => {
                            if(this.state.type!=="" && this.state.name!==""){
                            item.onAdd({
                                name: this.state.name,
                                type: this.state.type,
                                mass: this.state.mass
                            })}
                        }}>
                    </input>
                </form>
            </div>
        )
    }
}

export default Form;