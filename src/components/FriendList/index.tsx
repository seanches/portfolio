import * as React from 'react';
import { Avatar, Typography, Box, Dialog, DialogContent, DialogTitle, List, ListItem } from '@mui/material';
import { friends } from './constants';

const FriendList: React.FC = () => {
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  
  const friendsAmount = friends.length;

return (
    <Box sx={{ p: 3, borderRadius: 3, backgroundColor: '#f5f5f5' }}>
      <Box sx={{display: 'flex'}}>
    <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={handleOpenDialog}>Друзья</Typography>
    <Typography>{friendsAmount}</Typography>
    </Box>
      {friends.map((friend) => (
        <Box key={friend.id} sx={{ display: 'flex', alignItems: 'center', margin: '0px 0px'}}>
          <Avatar src={friend.avatarUrl} alt={friend.name} sx={{}} />
          <Typography style={{margin: '10px'}}>{friend.name}</Typography>
        </Box>
      ))}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Список друзей</DialogTitle>
        <DialogContent>
          <List>
            {friends.map((friend) => (
              <ListItem key={friend.id}>
                <Avatar src={friend.avatarUrl} alt={friend.name} sx={{ marginRight: 10 }} />
                <Typography>{friend.name}</Typography>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
  

export default FriendList;