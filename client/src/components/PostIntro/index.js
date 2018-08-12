import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, Button, Col } from 'reactstrap'

class PostIntro extends Component {
    render() {
        return (
            <Col lg="6" >
                <Card body outline color="secondary">
                    <CardTitle>{this.props.title}</CardTitle>
                    <p>{this.props.date}</p>
                    <CardText>{this.props.post}</CardText>
                    <Link to={`/post/${this.props.id}`}><Button color="primary">Read More</Button></Link>
                </Card>
            </Col>
        )
    }
}

export default PostIntro;