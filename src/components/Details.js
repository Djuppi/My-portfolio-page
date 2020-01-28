import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { te } from 'date-fns/locale';

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: []
        }
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;
        fetch('./projects.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            
            const projects = data.projects
            const project = projects.find(project => project.id === parseInt(id) )
            this.setState({project}) 
            
        })
        
        
    }

    handleGoBackClick = () => {
        const {history} = this.props;
        history.go(-1);
    } 

    

    render() {
        const { history } = this.props;
        const { 
            id, 
            name, 
            projectForm, 
            year, 
            description, 
            techniques = [], 
            image,
            fullProject
        } = this.state.project;

        const technique = techniques.join(', ')
        console.log(technique)
        
        return(
            <div className="details">
                <IoIosArrowBack className="back" onClick={this.handleGoBackClick.bind(this)} />
                <img src={image} alt={name}/>
                <h1 className="detailsName">{name}</h1>
                <p className="detailsDescription">{description}</p>
                <p className="detailsYear">Produced: {year}</p>
                <p className="detailsTechniques"><strong>Techniques used:</strong> {technique}</p>
                <a href={fullProject} target="blank"><button className="btn-flat">See full project</button></a>
            </div>
        )
    }
}

export default Details; 