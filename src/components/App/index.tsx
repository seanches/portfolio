import { ThemeProvider } from '@mui/material/styles';

import Div from 'common/Div';
import styles from './styles';
import HeaderMenu from 'components/HeaderMenu';
import Sidebar from 'components/Sidebar';
import ProfileHeader from 'components/ProfileHeader';
import UserLocals from 'components/FriendList';
import UserGallery from 'components/UserGallery';
import theme from 'utils/theme';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Div sx={styles.root}>
        <Div sx={styles.headerMenu}>
          <HeaderMenu />
        </Div>
      <Div sx={styles.containerMain} id='wrapper'>
       <Div sx={styles.profileLayout} id='user_profile'>
        <Div sx={styles.flexContainer}>
          <Sidebar /> 
        </Div>
         <Div sx={styles.flexContainer}>
          <Div sx={styles.profileHeader} id='profileHeader'>
            <ProfileHeader />
          </Div>
          <Div sx={styles.thewall} id='profileMain'>
            <Div sx={styles.inner} id='kek'>
              <Div sx={styles.mediaContent} id='userMediaContent'>
                <UserGallery />
              </Div>
            </Div>
            <Div sx={styles.stickyScroll} id='lol'>
              <UserLocals />
            </Div>
  
          </Div>
         </Div>
       </Div>
      </Div>
      </Div>
    </ThemeProvider>
  );
}

export default App;
