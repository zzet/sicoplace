/** @jsx React.DOM */

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

React.renderComponent(
  <CommentBox url="api/comments" pollInterval={2000} />,
  document.getElementById('comments_place')
);
