/** @jsx React.DOM */

var CommentForm = React.createClass({

  getInitialState: function() {
    return { author: "", text: "", created_at: new Date() };
  },

  handleSubmit: function() {
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();

    if (!text || !author) {
      return false;
    }

    this.props.onCommentSubmit({author: author, text: text});

    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    this.setState({ author: "", text: "", created_at: new Date() });

    return false;
  },

  handlePreview: function() {
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    var created_at = new Date();

    if (!text || !author) {
      return false;
    }

    this.setState({ author: author, text: text, created_at: created_at });

    return false;
  },

  render: function() {
    if (this.state.text != "" && this.state.author != "") {
      preview = (
        <div className="comment-preview">
          <h4>Preview your comment</h4>
          <Comment author={this.state.author} created_at={this.state.created_at}> {this.state.text} </Comment>
        </div>
      );
    };
    if (this.state.text == "" && this.state.author == "") {
      preview = "";
    };

    return (
      <div>
        <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="author" className="col-sm-2 control-label">Your name</label>
            <div className="col-sm-10">
              <input className="form-control" type="text" placeholder="Your name" ref="author" onChange={this.handlePreview} id="author" />
            </div>
          </div>

          <div className="form-group">
            <label for="message" className="col-sm-2 control-label">Message</label>
            <div className="col-sm-10">
              <textarea className="form-control" placeholder="Say something..." ref="text" onChange={this.handlePreview} id="message"/>
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-default" type="submit">Post</button>
            </div>
          </div>
        </form>
        { preview }
      </div>
    );
  }
});
