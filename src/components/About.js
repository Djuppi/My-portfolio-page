import React from 'react';
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
            <div className="about">
                <h2>About me</h2>
                <div>
                    <img src="./media/aske-banner.jpg"></img>
                    <h3>Aske Djupnes Ammentorp</h3>
                        <p>I'm a JavaScript junior developer, educated at <a href="http://www.academy.no" target="blank">Academy Norway</a>. I went through 12 weeks of JavaScript bootcamp, which ended up in a group exam. During the education I learned skills based on JavaScript; ex. NodeJS, ReactJS, PostgreSQL Database and more. I chose the JavaScript course, because I wanted to develop my skills in programming, and Academy helped to kickstart my career in programming. 
                        Before i began my journey into the IT-world, I was a gymnastics coach at Oslo turnforening. With a bachelor degree in Sport and Health, I have a big insight in the world of sports.  </p>

                    <div classname="skills">
                    <i class="devicon-javascript-plain"></i>
                    <i class="devicon-css3-plain-wordmark colored"></i>
                        <DiHtml5 /> 
                        <DiSass /> 
                        <DiMaterializecss /> 
                        <DiHeroku /> 
                        <DiNodejs /> 
                        <DiPostgresql /> 
                        <DiReact /> 
                        <DiGit /> 
                        <DiGithubBadge />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;