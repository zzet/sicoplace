/** @jsx React.DOM */

var Example = React.createClass({
  handleCancel: function() {
    if (confirm('Are you sure you want to cancel?')) {
      this.refs.modal.close();
    }
  },
  render: function() {
    var modal = null;
    modal = (
      <BootstrapModal
      ref="modal"
      confirm="OK"
      cancel="Cancel"
      onCancel={this.handleCancel}
      onConfirm={this.closeModal}
      title="Hello, Bootstrap!">
      This is a React component powered by jQuery and Bootstrap!
      </BootstrapModal>
    );
    return (
      <div className="example">
      {modal}
      <BootstrapButton onClick={this.openModal}>Open modal</BootstrapButton>
      </div>
    );
  },
  openModal: function() {
    this.refs.modal.open();
  },
  closeModal: function() {
    this.refs.modal.close();
  }
});
