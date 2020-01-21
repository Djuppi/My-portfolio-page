import React from 'react';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="portfolio">
                <h1>Portfolio</h1>
                <p>Here is some of my projects I've done in my time as a developer.</p>
                <ul>
                    <Link to="/portfolio/digipant">
                        <li>
                            <img className="projects digipant" src="./media/projects/digipant.png" />
                            {/* <h4 className="title">digiPant</h4>
                            <p>Ann app that digitilizes the resycling of bottles of cans in Norway.</p>
                            <Button variant="flat" className="small">Read more</Button> */}
                        </li>
                    </Link>

                    <li>
                        <img className="projects" src="./media/projects/Moviedatabase.png" />
                        {/* <h4 className="title">Job Databse</h4>
                        <p>A mockup of an fake jobdatabase.</p>
                        <Button variant="flat" className="small">Read more</Button> */}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Portfolio;