import React from 'react'
import Scroll from 'react-scroll'

const Link = Scroll.Link

class Menu extends React.Component {

  render() {
    return (
      <div className="menu">
        <Link activeClass="active-link" to="submit_job" spy={true} offset={-90}
         smooth={true} duration={800} delay={200} onSetActive={this.handleSetActive}>
         Submit job
        </Link>
       	<Link activeClass="active-link" to="jobs_list" spy={true} offset={-60}
       		smooth={true} duration={800} delay={200} onSetActive={this.handleSetActive}>
       		Jobs list
       	</Link>
       	<Link activeClass="active-link" to="join_the_project" spy={true} offset={-200}
       		smooth={true} duration={800} delay={200} onSetActive={this.handleSetActive}>
       		Join the Project
       	</Link>
      </div>
    );
  }
}

export default Menu;