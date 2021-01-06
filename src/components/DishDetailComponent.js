import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderComment = (comments) => {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        )
    }
    renderDish = (dish) => {
        if (dish == null) {
            return (<div>
            </div>)
        }
        else {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                )
        }
    }
    render() {
        if (this.props.dish == null) {
            return (
                <div>
                </div>
                )
        }
       const dishDisplay = this.renderDish(this.props.dish);
       const commentDisplay = this.renderComment(this.props.dish.comments);
        return (
            <div className="row">
                {dishDisplay}
                {commentDisplay}
            </div>
            )
    }
}
export default DishDetail;