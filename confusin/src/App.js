import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import  {DISHES} from './shared/dishes';
import { render } from 'react-dom';
import { Component } from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state= {
      dishes:DISHES
    };
  }
  render(){
    return (
      <div>
        <Navbar dark color="info">
          <div className="container">
  
            <NavbarBrand href="/">Despacito</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
  
}

export default App;
