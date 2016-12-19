import 'isomorphic-fetch';
import React, { Component, PropTypes } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';

class SingleArticlePage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: [],
      isEditing: false,
    };
    this.setTitle = this.setTitle.bind(this);
    this.setTags = this.setTags.bind(this);
    this.setContent = this.setContent.bind(this);
    this.onClickDel = this.onClickDel.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    // fetch with id
    if(this.props.id === '') {
      return;
    }

    fetch(`/api/articles/${this.props.id}`)
    .then((res) => res.json())
    .then((json) => { 
      this.setState({ title: json.title, content: json.content, tags: json.tags });
    });
  }

  componentDidUpdate() {
    // fetch with id
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

  onClickDel() {
    const confirm = window.confirm('Delete this article...?');
    if (confirm) {
      fetch('/api/articles/' + this.props.id, {
        method: 'DELETE'
      }).then( document.location.href = "#/articles");
    }
  };

  onClickEdit() {
    const isEditing = this.state.isEditing;
    const {title, content, tags} = this.state;
    if (isEditing) {
      fetch('/api/articles/' + this.props.id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          content: content,
          tags: tags,
        }),
      });
    }
    this.setState({isEditing: !isEditing});
  };

  renderTitle() {
    const title = this.state.title;
    if(this.state.isEditing){
      return (
        <input 
          type="text" 
          className="form-control"
          value={title}
          onChange={this.setTitle}>
        </input>
      );
    }
    else {
      return <h1>{title}</h1>;
    }
  };

  renderTags() {
    const tags = this.state.tags;
    if(this.state.isEditing){
      return <TagsInput value={tags} onChange={this.setTags} />;
    }
    else {
      return (
        <div>
          { tags.map((tag, i) => { 
              <button key={i}
                type="button"
                className="btn btn-secondary btn-sm">#{tag}
              </button>
            })
          }
        </div>
      );
    }
  };

  renderContent() {
    const content = this.state.content;
    if(this.state.isEditing){
      return (
        <ReactQuill
          theme="snow"
          value={content}
          onChange={this.setContent} 
        />
      );
    }
    else {
      return <div className="jumbotron" dangerouslySetInnerHTML={{__html: content}}/>;
    }
  };

  render() {
    const { isEditing } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              {this.renderTitle()}
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-md-12">
            {this.renderTags()}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {this.renderContent()}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-info"
              role="button"
              onClick={this.onClickEdit}
            >{isEditing ? 'Confirm' : 'Edit'}</button>
            {isEditing ? null :
            <button
              className="btn btn-warning"
              role="button"
              onClick={this.onClickDel}
            >Delete</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SingleArticlePage;
