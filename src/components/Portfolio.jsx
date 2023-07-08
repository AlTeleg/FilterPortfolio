import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';


export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All'
    };
  }

  onSelectFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  }

  render() {
    const { filters, projects } = this.props;
    const { selectedFilter } = this.state;
    const filteredProjects = selectedFilter !== 'All'
      ? projects.filter(project => project.category === selectedFilter)
      : projects;

    return (
      <div className='projects-div'>
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}