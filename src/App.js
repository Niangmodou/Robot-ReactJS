import React, {Component} from 'react';
import CardList from './CardList';
//import { robots } from './robots';
import Searchbox from './Searchbox';


class App extends Component{
    
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({robots:users});
            });
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filterrobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        
        return ( 
            <div className="tc">
                <h1>Robo Friends</h1>
                < Searchbox searchchange={this.onSearchChange}/>
                <CardList robots={ filterrobots }/> 
            </div>
        );
    }

}


export default App;
