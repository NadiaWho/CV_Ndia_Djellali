import React from 'react'
import Container from '../container/Container.js'
import './SkillsLogos.css'

class SkillsLogos extends React.Component {
    render () {
        return (
            <Container>
            <div className='skills'>
                <ul>
                    <li><i className="fab fa-html5"></i></li>
                    <li><i className="fab fa-css3-alt"></i></li>
                    <li><i className="fab fa-js"></i></li>
                </ul>
                <ul>
                    <li><i className="fab fa-react"></i></li>
                    <li><i className="fab fa-node-js"></i></li>
                    <li><i className="devicon-mysql-plain colored"></i></li>    
                </ul>
                <ul>
                   <li><i className="devicon-bootstrap-plain colored"></i></li>
                   <li><i className="devicon-git-plain colored"></i></li>
                   <li><i className="devicon-travis-plain colored"></i></li>
                   
		
                </ul>
            </div>
            </Container>
        )
    }
}

export default SkillsLogos