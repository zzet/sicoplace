/** @jsx React.DOM */

var CommentList = React.createClass({

  render: function() {
    var data = [
      {author: "Pete Hunt", text: "This is one comment"},
      {author: "Jordan Walke", text: "This is *another* comment"}
    ];
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <li className="scp media">
          <Comment author={comment.author} created_at={comment.created_at}>{comment.text}</Comment>
        </li>
      );
    });

    return (
      <div className="scp commentList">
        <ul className="scp media-list">
          {commentNodes}
        </ul>
      </div>
    );
  }
});
