import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardHeader, CardText, CardImg, Button } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Card className="col-md-4 col-sm-12 m-3" onClick={() => this.props.selectDish(dish)}>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}
export default Menu;