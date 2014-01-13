/** @jsx React.DOM */

var Data = { state: 'hidden' }
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var checker = function(){
  return Data;
};


React.renderComponent(
  <CommentBox url="api/comments" pollInterval={2000} />,
  document.getElementById('comments_place')
);

var example = Example({});

var ModalTrigger = React.createClass({
  handleClick: function(e) {
    $(this.refs.payload.getDOMNode()).modal();
  },
  render: function() {
    var Trigger = this.props.trigger;
    return (<div onClick={this.handleClick}>
            <Trigger/>
            <Modal ref="payload"
            header={this.props.header}
            body={this.props.body}
            footer={this.props.footer}>
            </Modal>;
            </div>);
  },
});

var Modal = React.createClass({
  componentDidMount: function() {
    // Initialize the modal, once we have the DOM node
    // TODO: Pass these in via props
    $(this.getDOMNode()).modal({background: true, keyboard: true, show: false});
  },
  componentWillUnmount: function() {
    $(this.getDOMNode()).off('hidden');
  },
  // This was the key fix --- stop events from bubbling
  handleClick: function(e) {
    e.stopPropagation();
  },
  render: function() {
    var Header = this.props.header;
    var Body = this.props.body;
    var Footer = this.props.footer;
    return (
      <div onClick={this.handleClick} className="modal fade" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
      <div className="modal-content">
      <Body className="modal-header"/>
      </div>
      </div>
      </div>
    );
  }
});

// todo: http://clozeit.wordpress.com/2014/01/08/bootstrap-modals-and-popover-in-react-js/
React.renderComponent(
  <ModalTrigger />,
  document.getElementById('modal_place')
);

var myExampleClickHandler = function (element) {
  console.log('Clicked element:', element);
  example.openModal();
  document.getElementById('test').click();
}


var myDomOutline = DomOutline({ onClick: myExampleClickHandler });

Start outline:
  myDomOutline.start();

Stop outline (also stopped on escape/backspace/delete keys):
  myDomOutline.stop();
