import React from 'react';
import { Component } from 'react';

import { DISHES } from '../shared/dishes.js';
import DishDetail from './DishDetailComponent.js';
import Menu from './MenuComponents.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent.js';
import Header from './HeaderComponent';
import Contact from './ContactComponent.js';
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }
    selectDish = (dish) => {
        this.setState({selectedDish:dish})
    }
    render() {
        
        return (
            <div>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route path='/home' component={() =><Home/>} />
                        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                        <Route path="/aboutus" component={() => <About />} />
                        <Route path="/contactus" component={() => <Contact />} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
            <Footer />
            </div>
            
            )
    }
}
export default Main;