import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

const Chat = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [roomMsgs, setRoomMsgs] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
        setRoom(snapshot.data())
      });

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => {
          setRoomMsgs(
            snapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
            }))
          )
        });
    }
  }, [roomId]);

  console.log(roomMsgs);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{room?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMsgs.map(msgs => (
          <Message 
            key={msgs.id}
            message={msgs.message}
            user={msgs.user}
            userImage={msgs.userImage}
            timestamp={msgs.timestamp}
          />
        ))}
      </div>

      <ChatInput channelName={room?.name} channelId={roomId} />
    </div>
  )
}

export default Chat;
