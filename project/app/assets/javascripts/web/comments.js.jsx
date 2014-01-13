/** @jsx React.DOM */

$(document).ready(function(){

  React.renderComponent(
    <CommentBox url="api/comments" pollInterval={2000} />,
    document.getElementById('comments_place')
  );















  var Modal = React.createClass({
    componentDidMount: function() {
      // Initialize the modal, once we have the DOM node
      // TODO: Pass these in via props
      $(this.getDOMNode()).hide();
    },
    componentWillUnmount: function() {
      $(this.getDOMNode()).hide();
    },
    // This was the key fix --- stop events from bubbling
    handleClick: function(e) {
      e.stopPropagation();
    },
    render: function() {
      return (
        <div className="modal fade" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header"/>
              <div className="modal-body">
                <CommentForm onCommentSubmit={ function(){} } />
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  var ModalTrigger = React.createClass({
    handleClick: function(e) {

      $(this.refs.payload.getDOMNode()).show().css({ 'position': 'fixed', 'top': '30%', 'left': '30%', 'opacity': '0.9' }).attr({'aria-hidden': false});
    },
    render: function() {
      return (
        <div>
          <Modal ref="payload" header={this.props.header} body={this.props.body} footer={this.props.footer}>

          </Modal>
        </div>
      );
    },
  });



  var example = ModalTrigger({});

  React.renderComponent(
    example,
    document.getElementById('modal_place')
  );

  var myExampleClickHandler = function (element) {
    console.log('Clicked element:', element);
    example.handleClick();
    //document.getElementById('test').click();
  }

  var myDomOutline = DomOutline({ onClick: myExampleClickHandler });
  myDomOutline.start();

  //Start outline:

  //Stop outline (also stopped on escape/backspace/delete keys):
  //myDomOutline.stop();
});
