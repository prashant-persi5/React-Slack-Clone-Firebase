import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{user}] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db
        .collection('rooms')
        .doc(channelId)
        .collection('messages')        
        .add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userImage: user.photoURL
        });
      setInput("");
    }
  }

  return (
    <div className="chatInput">
      <form>
        <input 
          type="text" 
          placeholder={`Type a message in #${channelName?.toLowerCase()}`}
          onChange={(e) => setInput(e.target.value)} />
        <Button type="submit" onClick={sendMessage}>SEND</Button>
      </form>
    </div>
  )
}

export default ChatInput;
