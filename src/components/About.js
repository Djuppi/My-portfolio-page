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
                        <p>I'm a JavaScript developer, educated from <a href="http://www.academy.no" target="blank">Academy Norway</a>. I went through 12 weeks of JavaScript bootcamp, which ended up in a group exam  </p>

                    <div classname="skills">
                        <DiJsBadge />
                        <DiCss3 /> 
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