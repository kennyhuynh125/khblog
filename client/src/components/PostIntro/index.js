import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Button, Col} from 'reactstrap';

class PostIntro extends Component {
    render() {
        const STYLE = {
            padding: '10px',
        };
        return (
            <Col lg="12" style={STYLE}>
                <Card body outline color="secondary">
                    <CardTitle>{this.props.title}</CardTitle>
                    <Link to={`/post/${this.props.id}`}><Button color="primary">Read More</Button></Link>
                </Card>
            </Col>
        )
    }
}

export default PostIntro;