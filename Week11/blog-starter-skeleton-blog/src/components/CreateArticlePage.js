import 'isomorphic-fetch';
import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';

class CreateArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: [],
    };

    this.setTitle = this.setTitle.bind(this);
    this.setTags = this.setTags.bind(this);
    this.setContent = this.setContent.bind(this);
    this.onCluckSubmit = this.onCluckSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({title: '', content: '', tags: []});
  }

  setTitle(e) {
    this.setState({ title: e.target.value });
  }

  setTags(tags) {
    this.setState({ tags: tags });
  }

  setContent(content) {
    this.setState({ content: content });
  }

  onCluckSubmit() {
    const confirm = window.confirm('Submit to create a new article？');
    if (confirm) {
      // fetch here
      const {title, content, tags} = this.state;
      fetch("/api/articles/", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ 
          title: title,
          content: content,
          tags: tags
        })
      })
      .then( () => this.resetState())
      .then( () => document.location.href= "#/articles");
    }
  }

  render() {
    const {title, content, tags} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-info pull-right"
              role="button"
              onClick={this.onCluckSubmit}
            >submit</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              value={title} onChange={this.setTitle}
              placeholder="create a title..."></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TagsInput value={tags} onChange={this.setTags}/> 
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ReactQuill theme="snow" value={content} onChange={this.setContent}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticlePage;
