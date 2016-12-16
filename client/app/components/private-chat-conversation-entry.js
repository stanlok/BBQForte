import React from 'react';

export default class PrivateChatMessageEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyUp(e) {
    if (e.key === "Enter") {
      var message = this.state.value.trim();
      if (message !== "") {
        this.props.onPost(this.state.value);
        this.setState({ value: "" });
      }
    }
  }

  render() {
    return (
      <div className="panel-footer panel-title-style">
        <div className="media">
          <div className="media-body">
            <div className="input-group">
              <textarea className="form-control chat-box" style={{color: '#ffffff'}} rows={3} placeholder="Enter text here..." value={this.state.value} onChange={(e) => this.handleChange(e)} onKeyUp={(e) => this.handleKeyUp(e)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
