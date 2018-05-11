import React, { Component } from 'react';
// import ReactDOM  from 'react-dom';

class LinkCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' }
  }

  handleSubmit(event) {
    event.preventDefault();

    // console.log(this.refs.link.value);

    Meteor.call('links.insert', this.refs.link.value, (error) => {
      if(error) {
        this.setState({ error: 'Enter a valud URL' });
      }
      else {
        this.setState({ error: '' });
        this.refs.link.value = '';
      }

      console.log(error);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input className="form-control" ref="link" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-success">Shorten!</button>
      </form>
    );
  }
};

export default LinkCreate;
