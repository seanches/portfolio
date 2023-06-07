import * as React from 'react';
import { Avatar, Typography, Box } from '@mui/material';

const FriendList: React.FC = () => {
  const friends = [
    { id: 1, name: 'Петя Иванов', avatarUrl: '/static/images/cards/contemplative-reptile.jpg' },
    { id: 2, name: 'Коля Сидоров', avatarUrl: '/static/images/cards/contemplative-reptile.jpg' },
    { id: 3, name: 'Васян Тагильский', avatarUrl: '/static/images/cards/contemplative-reptile.jpg' },
  ];

  return (
    <Box sx={{ p: 3, borderRadius: 3, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6">Друзья</Typography>
      {friends.map((friend) => (
        <Box key={friend.id} sx={{ display: 'flex', alignItems: 'center', margin: '0px 0px'}}>
          <Avatar src={friend.avatarUrl} alt={friend.name} sx={{}} />
          <Typography style={{margin: '10px'}}>{friend.name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FriendList;