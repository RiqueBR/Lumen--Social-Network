import React, { Component } from 'react';
import fire from './fire';
import {Card, CardImg, CardText, CardTitle, CardBody, CardSubtitle, 
CardFooter, CardColumns, Button, Container, Row, Col} from 'reactstrap';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            title: '',
            description: '',
            picture: '',
            list: [],
            keys: [],
            show: false
        }
    }
    
    // Form Handle
    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value});
    };



    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.handleChange}
                   name="title" className="form-control mb-2" placeholder="title" required/>
                <input value={this.state.picture} onCHange={this.handleChange} 
                   name="picture" className="form-control mb-2" placeholder="Picture URL" required/>
                <textarea row="9" value={this.state.description} onChange={this.handleChange}
                   name="description" className="form-control mb-2" placeholder="Description" required/>

            </div>
        );
    }
}

export default Home;