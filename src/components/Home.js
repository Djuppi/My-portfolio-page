import React from 'react';
import {Button} from 'react-bootstrap'
import {IoIosArrowForward} from 'react-icons/io'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePortfolioClick(){
        const { history } = this.props;
        history.push('/portfolio')
    }
    render() {
        return(
            <div className="home">
                <div className="home-intro">
                    <h2>Junior Webdeveloper based in Oslo, Norway. Educated and hired by Academic Work, Norway.</h2>
                </div>
                
                <div className="home-portfolio">
                        <img className="profilePic" src="./media/aske.jpg" />
                        <p className="summary">JavaScript specialised junior developer, with skills in ReactJS, Node.js and PostgreSQL.</p>
                        <div>
                    <h4>See what i have done so far</h4>
                    <p className="shortProject">Mostpart of my projects are programmed in ReactJS, but involves different kid of techniques.</p>
                    </div>
                    <Button onClick={this.handlePortfolioClick.bind(this)} className="btn-flat" variant="flat">Portfolio <IoIosArrowForward /></Button>
                </div>
            </div>
        )
    }
}

export default Home;