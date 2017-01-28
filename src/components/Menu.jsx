import React from 'react'
import Scroll from 'react-scroll'

const Link = Scroll.Link

class Menu extends React.Component {

  render() {
    return (
      <div className="menu">
        <Link activeClass="active-link" to="create-task" spy={true} offset={-90}
         smooth={true} duration={800} delay={200} onSetActive={this.handleSetActive}>
         Create Task
        </Link>
       	<Link activeClass="active-link" to="tasks-list" spy={true} offset={-60}
       		smooth={true} duration={800} delay={200} onSetActive={this.handleSetActive}>
       		Tasks List
       	</Link>
       	<Link activeClass="active-link" to="join-the-project" spy={true} offset={-200}
       		smooth={true} duration={800} delay={200} onSetActive={this.handleSetActive}>
       		Join the Project
       	</Link>
      </div>
    );
  }
}

export default Menu;