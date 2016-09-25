/* eslint class-methods-use-this: 0 */

import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { AProjects } from '../api/projects.js';
import Project from './Project.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hideCompleted: false,
    };
  }

  renderProjects() {
    const filteredProjects = this.props.projects;
    return filteredProjects.map(project =>
      (
      <Project key={project.idaProject} project={project} />
      )
    );
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>项目列表 ({this.props.projectsCount})</h1>
          <AccountsUIWrapper />
        </header>

        <ul>
          {this.renderProjects()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsCount: PropTypes.number.isRequired,
  currentUser: PropTypes.shape({
  }),
};

export default createContainer(() => {
  Meteor.subscribe('tasks');
  Meteor.subscribe('allProjects');

  return {
    projects: AProjects.find({}, {
    }).fetch(),
    projectsCount: AProjects.find({
    }).count(),
    currentUser: Meteor.user(),
  };
}, App);
