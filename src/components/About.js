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
                        <p>I'm a JavaScript junior developer, educated at <a href="http://www.academy.no" target="blank">Academy Norway</a>. I went through 12 weeks of JavaScript bootcamp, which ended up in a graduation project. During the education I learned skills based on JavaScript; ex. NodeJS, ReactJS, PostgreSQL Database and more. I chose the JavaScript course, because I wanted to develop my skills in programming, and Academy helped to kickstart my career in programming. 
                        Before i began my journey into the IT-world, I was a gymnastics coach at Oslo turnforening. With a bachelor degree in Sport and Health, I have a big insight in the world of sports. </p>

                    <div>
                    <i class="devicon-javascript-plain"></i>
                    
                    <i class="devicon-sass-original"></i>
                        <DiMaterializecss /> 
                    <i class="devicon-heroku-original-wordmark"></i>
                        <DiNodejs /> 
                        <DiPostgresql /> 
                        <DiReact /> 
                        <DiGit /> 
                    <i class="devicon-github-plain"></i>
                    </div>
                </div>
                
            </div>
            
            {/* <div classsName="resume">
                <h4>EDUCATION</h4>
            </div> */}
        </Fragment>
        )
    }
}

export default About;