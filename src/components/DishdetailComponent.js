import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return(
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        let detailCom = comments.map(comment => {
            return (
                <li key={comment.id} >
                    {comment.comment}
                    <br /><br />
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    <br /><br />
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {detailCom}
                </ul>
            </div>
        );
    }

    render() {
        if(this.props.dish) {
            return (
                <div className = 'container'>
                    <div className='row'>
                        <div className= 'col-12 col-md-5 m-1'>
                            {this.renderDish(this.props.dish)}
                        </div>

                        <div className= 'col-12 col-md-5 m-1'>
                        {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                null
            )
        }
    }
}

export default Dishdetail;