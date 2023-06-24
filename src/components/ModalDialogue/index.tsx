import React, { useState } from 'react';
import { Avatar, Drawer } from '@mui/material';

type Friend = {
  id: number;
  name: string;
  avatar: string;
};

const friends: Friend[] = [
  { id: 1, name: 'Друг 1', avatar: '/path/to/avatar1.png' },
  { id: 2, name: 'Друг 2', avatar: '/path/to/avatar2.png' },
  // Добавьте остальных друзей с их аватарками
];

const drawerWidth = 320;

const chatPanelStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  display: 'flex',
  gap: '1rem',
};

const avatarStyle: React.CSSProperties = {
  width: '4rem',
  height: '4rem',
  cursor: 'pointer',
};

const drawerStyle: React.CSSProperties = {
  width: `${drawerWidth}px`,
};

const chatContainerStyle: React.CSSProperties = {
  padding: '2rem',
};

const PopupChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  const handleAvatarClick = (friend: Friend) => {
    setSelectedFriend(friend);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFriend(null);
  };

  return (
    <>
      <aside style={chatPanelStyle}>
        {friends.map((friend) => (
          <Avatar
            key={friend.id}
            alt={friend.name}
            src={friend.avatar}
            style={avatarStyle}
            onClick={() => handleAvatarClick(friend)}
          />
        ))}
      </aside>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        classes={{
          paper: 'drawer',
        }}
        PaperProps={{
          style: drawerStyle,
        }}
      >
        {selectedFriend && (
          <div style={chatContainerStyle}>
            <div>
              Чат с {selectedFriend.name}
              <button onClick={handleClose}>Закрыть</button>
            </div>
            <div className="chat-messages">
              {/* Здесь может быть компонент переписки */}
            </div>
            <div className="chat-footer">
              <textarea placeholder="Введите сообщение..."></textarea>
              <button>Отправить</button>
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default PopupChat;