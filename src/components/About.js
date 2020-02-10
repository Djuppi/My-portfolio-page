import React, { Fragment } from 'react';
import { 
    DiJsBadge, 
    DiCss3, 
    DiHtml5, 
    DiHeroku, 
    DiNodejs, 
    DiPostgresql, 
    DiReact, 
    DiSass,
    DiMaterializecss,
    DiGit,
    DiGithubBadge
} from 'react-icons/di'

class About extends React.Component {
    render() {
        return (
            <Fragment className="test">
            <div className="about">
                <h2>About me</h2>
                <div>
                    <img src="./media/aske-banner.jpg"></img>
                    <h3>Aske Djupnes Ammentorp</h3>
                        <p>I'm a JavaScript junior developer, educated at <a href="http://www.academy.no" target="blank">Academy Norway</a>. I went through a 12 weeks JavaScript bootcamp, which ended up in a graduation project. During the education I learned skills based on JavaScript or connected to JavaScript; ex. NodeJS, ReactJS, PostgreSQL Database and more. I chose the JavaScript course, because I wanted to develop my skills in programming, and Academy helped to kickstart my career as a devoloper. 
                        Before I began my journey into the IT-world, I was a gymnastics coach at Oslo turnforening. With a bachelor degree in Sport and Health, I have a big insight in the world of sports, and I think that my organisation and leader skills are pretty good. </p>
                </div>
                
            </div>
        </Fragment>
        )
    }
}

export default About;