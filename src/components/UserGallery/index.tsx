import React, { useState } from 'react';
import { Tabs, Tab, Grid, Button, List, ListItem, Card, CardContent, Typography, Box, CardMedia, Dialog, DialogTitle, DialogContent } from '@mui/material';
import Div from 'common/Div';
import { images } from './constants';

interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <>{children}</>}
    </div>
  );
};

const UserGallery: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ borderRadius: 3, backgroundColor: '#f5f5f5' }}>
      <Grid sx={{ width: '340px', height: '50px' }}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="Изображения" />
          <Tab label="Аудио" />
        </Tabs>
      </Grid>
      <Grid sx={{ width: '540px', height: '350px' }}>
        <TabPanel value={selectedTab} index={0}>
          <Grid container spacing={2} style={{ padding: '10px', justifyContent: 'space-between' }}>
            {images.map((image, index) => (
              <Grid item xs={12} sm={12} md={4}>
                <Card>
                  <CardMedia
                    style={{ height: 150, width: 150 }}
                    image={image.src}
                    title={image.alt}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', padding: '15px', justifyContent: 'space-between' }}>
            <Button variant="contained">Добавить</Button>
            <Button variant="contained" onClick={handleOpenDialog}>Открыть галерею</Button>
          </Box>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Галерея</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                {images.map((image, index) => (
                  <Grid item xs={12} sm={12} md={4}>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: 150 }}
                        image={image.src}
                        title={image.alt}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </DialogContent>
          </Dialog>
        </TabPanel>

        <TabPanel value={selectedTab} index={1}>
          <List>
            {/* Заглушки для аудиозаписей */}
            <ListItem>
              <Typography variant="body2" color="textSecondary">Аудиозапись 1</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2" color="textSecondary">Аудиозапись 2</Typography>
            </ListItem>
          </List>
        </TabPanel>
      </Grid>
    </Box>
  );
};

export default UserGallery;