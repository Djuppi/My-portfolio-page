import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h2>About me</h2>
                <div>
                    <img src="./media/aske-banner.jpg"></img>
                    <h3>Aske Djupnes Ammentorp</h3>
                    <p>I'm a JavaScript developer, educated from <a href="http://www.academy.no" target="blank">Academy Norway</a>. I went through 12 weeks of JavaScript bootcamp, which ended up in a group exam  </p>
                </div>
            </div>
        )
    }
}

export default About;