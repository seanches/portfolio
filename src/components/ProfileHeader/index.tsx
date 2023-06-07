import Div from "common/Div";
import { FC } from "react";
import styles from "./styles";
import { IProfileProperties } from "./types";
import { Avatar, Box, Button, Icon, Typography } from "@mui/material";

const ProfileHeader: FC<IProfileProperties | any> = (properties) => {
      return (
      <Div >
        <Div sx={styles.profileCover} id='profileCover'>

        </Div>
        <Div sx={styles.profileHeader} id='profileHeader'>
          <Div sx={styles.profileHeaderAvatar} id='profileHeaderAvatar'>
            <Div sx={styles.userAvatar} id='userAvatar'>
              <Box sx={{ display: 'flex', alignItems: 'center', margin: '0px 0px'}}>
                <Avatar src={'/static/images/cards/contemplative-reptile.jpg'} /* alt={{'kek'}} */ sx={{width: '150px', height: '150px', border: '50%'}} />
              </Box>
            </Div>
          </Div>
          <Div sx={styles.profileHeaderWrapper} id='userInfo'>
            <Div sx={styles.profileInfo} id='profileInfo'>
              <Box><h2 style={{marginTop:'0', marginBottom:'0'}}>Александр Пыщ-пыщин</h2></Box>
              <Box><Typography>lol kek</Typography></Box>
              <Box><Typography>lol kek</Typography></Box>
            </Div>
            <Div sx={styles.profileHeaderAction} id='userAvatar'>
            </Div>
          </Div>
        </Div>
      </Div>
    );
  };

export default ProfileHeader;
