import React from 'react';
class ChatPage extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.location.state.wantG}</h2>
        <h2>{this.props.location.state.currentG}</h2>
      </div>
    );
  }
}
export default ChatPage;
