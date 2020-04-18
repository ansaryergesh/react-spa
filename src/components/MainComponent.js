import React, {Component} from 'react';
import Menu from './MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/DISHES';
import Dishdetail from './DishdetailComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  
  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
}

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes}
         onClick = {(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail 
          dish={this.state.dishes.filter((dish) =>dish.id === this.state.selectedDish )[0]} 
        />
      </div>
    );
  }
}

export default MainComponent;
