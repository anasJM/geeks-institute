import { Component } from "react";

class Modal extends Component {
  render() {
    if (!this.props.isOpen) return null;

    return (
      <div className="modal-background">
        <div className="modal-body">
          {this.props.children}
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
