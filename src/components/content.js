import React, { Component } from 'react';
import marked from 'marked';

class ContentArea extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '', edit: false, post: '' };
    this.checkEnter = this.checkEnter.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }
  checkEnter(e) {
    // if enter is pressed
    if (e.keyCode === 13 && !e.shiftKey) {
      // change edit mode
      this.setState({ edit: false });
      let updatedField;
      console.log(this.props.field);
      if (this.props.field === 'tags') {
        updatedField = e.target.value.split(' ');
      } else {
        updatedField = e.target.value;
      }

      // also update post when enter is pressed
      const updated = {
        ...this.props.post,
        [this.props.field]: updatedField,
      };
      console.log(updated);
      console.log(this.props.post.id);
      this.props.updatePost(updated, this.props.post.id);
    } else {
      this.setState({ text: e.target.value });
    }
  }
  changeMode() {
    this.setState({ edit: true });
  }
  render() {
    if (this.state.edit === true) {
      return (
        <div className="input">
          <textarea className="post-input" onChange={this.checkEnter} onKeyDown={this.checkEnter}
            defaultValue={this.props.post[this.props.field]}
          />
          <p> Use Shift+Enter</p>
        </div>
      );
    } else {
      return (
        <div className="post-text" onClick={this.changeMode} dangerouslySetInnerHTML={{ __html: marked(this.props.post[this.props.field] || '') }} />
      );
    }
  }
}
export default ContentArea;
