/** @jsx React.DOM */

var converter = new Showdown.converter();

var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="scp comment">
        <Avatar />
        <div class="media-body">
          <a href="#" className="scp pull-right">
            <span className="scp badge">{this.props.created_at}</span>
          </a>
          <h4 className="scp media-heading">{this.props.author}</h4>
          <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
      </div>
    );
  }
});
