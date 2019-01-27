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

    // Post to Database
    new = e => {
        this.setState({loading: true});
        e.preventDefault();
        let title = this.state.title;
        let description = this.state.picture;
        let picture = this.state.picture;
        const {currentUser} = fire.auth();
        fire
        .database()
        .ref(`feed/`)
        .push({title, description, picture, user: currentUser.email})
        .then(() => {
            this.setState({loading: false})
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.handleChange}
                   name="title" className="form-control mb-2" placeholder="title" required/>
                <input value={this.state.picture} onChange={this.handleChange} 
                   name="picture" className="form-control mb-2" placeholder="Picture URL" required/>
                <textarea row="9" value={this.state.description} onChange={this.handleChange}
                   name="description" className="form-control mb-2" placeholder="Description" required/>
                <Button color="dark" onClick={this.new} className="mb-5" block>
                    SUBMIT
                </Button>
            </div>
        );
    }
}

export default Home;