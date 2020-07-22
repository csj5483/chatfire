import React from 'react';
import firebase from '../Services/firebase';

class ChatPage extends React.Component {
  state = {
    write: false,
    wantGen: this.props.location.state.wantG,
    currentGen: this.props.location.state.currentG,
    uId: firebase.database().ref('user').push().getKey(),
  };

  entry = (event) => {
    let result = this.state.write;
    firebase
      .database()
      .ref('user')
      .child(this.state.currentGen)
      .child(this.state.uId)
      .set(
        {
          wantGender: this.state.wantGen,
        },
        function (error) {
          if (error) {
            console.log('error');
            result = false;
          } else {
          }
        }
      );

    console.log(result);
  };

  render() {
    return (
      <div>
        {this.entry()}
        <p>
          {(() => {
            if (this.state.write) {
              return <h2>hi</h2>;
            }
          })()}
        </p>
      </div>
    );
  }
}
export default ChatPage;
