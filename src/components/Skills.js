import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h3>My journey as a developer</h3>
                <div className="Html-css">
                    <div className="icons">
                        <i class="devicon-html5-plain-wordmark"></i>
                        <i class="devicon-css3-plain-wordmark"></i>
                    </div>
                    <h4>Before Academy</h4>
                    <p>The beginning of my journey with Html and basic Css dates back to 2014, when I was “hired” as a volunteer at my local Beach Volley Club as a website editor. Back then I had little experience with websites, but took the opportunity to learn some new skills. Basically, my job consisted of creating new pages with information and articles. At Academy I have developed more advanced skills in Html and especially Css.</p>
                </div>
                <div className="Javascript">
                    <div className="icons">
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-react-original"></i>
                        <i class="devicon-nodejs-plain"></i>
                        <i class="devicon-postgresql-plain"></i>    
                    </div>
                    <h4>Academy</h4> 
                    <p>In June 2019, when I applied for a position at Academy, I began learning JavaScript and Web Delopment at Codecademy. My thought was "If I don't get a spot at the JavaScript course at Academy, I will use this course to begin my career as a developer. Fortunately, I was a good fit for the program, and I then spent the summer learning more advanced coding, eager to develop my skills and to be well prepared for the course starting October 2019. At the course I learned a lot of subjects in JavaScript and subjects connected to it, like ReactJS, NodeJS, express, PostgreSQL, github, and more.</p>
                </div>
                <div className="After-course">
                    <div className="icons">
                        <i class="devicon-go-plain"></i>    
                    </div>
                    <h4>After graduation</h4>
                    <p>
                    After the graduation, I had some time working with different projects, where I could choose which techniques I would include in each project. This page is one of them, and is build as a React app and styled with custom Sass. Then I build a mockup of a boardgame webshop that you can read more about at the <Link to="/portfolio">portfolio tab</Link>. At the same time I've begun to learn som new languages. I've looked a little bit at Golang and at the moment I'm trying to learn Elm. I like challenge my self, and explore new topics in the coding world. Stay put here for my first Elm project, hopefully coming soon! </p>
                </div>
            </div>
        )
    }
}
