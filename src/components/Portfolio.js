import React from 'react';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'




class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
        }
    }

    componentDidMount = () => {
        fetch('./projects.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            this.setState({projects: data.projects}) 
        })
    }

    handleClick = (id) => {
        const {history} = this.props;
        history.push(`details/${id}`)
    }

    render() {
        const { projects } = this.state;


        const allProjects = projects.map(project => {
            return(
                <li key={project.id} onClick={this.handleClick.bind(this, project.id)} >
                    <img  src={project.image} alt={project.id}  />
                </li>
            )
        })
        return(
            <div className="portfolio">
                <h1>Portfolio</h1>
                <h2>Here is some of my projects I've done in my time as a developer.</h2>
                <ul>
                    {allProjects}
                </ul>
            </div>
        )
    }
}

export default Portfolio;