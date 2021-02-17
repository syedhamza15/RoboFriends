import React, {Component} from 'react';
import BackgroundColorChanger from '../components/BackgroundColorChanger';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'



class App extends Component{

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: '',
            color1:'#071b52',
            color2:'#008080',
            
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
        .then(users=> this.setState({robots: users}))
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})


    }
    colorChange1=(event)=>{
        this.setState({color1 : event.target.value});
    }
    colorChange2=(event)=>{
        this.setState({color2 : event.target.value});

    }
    randomBgcolorGen = () =>{
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    randomBg= () =>{
        this.setState({color1: this.randomBgcolorGen(), color2: this.randomBgcolorGen() });
    }

    render(){
        const {color1, color2, robots, searchfield} = this.state;
        document.body.style.background= `linear-gradient(to left, ${color1} , ${color2})`; 
        const filteredRobots = robots.filter(robot =>{
        return (robot.name.toLowerCase().includes(searchfield.toLowerCase())
        );
        
    })
    if(robots.length===0){
        return (
        <div className="vh-100 dt w-100 flex items-center justify-center">
        <h1 className="tc f2 v-mid">Loading</h1>
        </div>
        )
    }
        return(
            
            <div className="tc" style={{overflow:'hidden', height:'100vh'}}>
                <h1 className="f2-l f2-m f4">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                
                <BackgroundColorChanger onInputChange1={this.colorChange1} onInputChange2={this.colorChange2} color1={color1} color2={color2} randomColor={this.randomBg}/>
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
            
        );
    }
    
}
export default App;