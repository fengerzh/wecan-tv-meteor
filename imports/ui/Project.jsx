import React, { Component, PropTypes } from 'react';

export default class Project extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <li>
        <span className="text">
          <strong>{this.props.project.groupName}</strong>: {this.props.project.proName}
        </span>
      </li>
    );
  }
}

Project.propTypes = {
  project: PropTypes.shape({
    proName: PropTypes.string,
    groupName: PropTypes.string,
  }).isRequired,
};
