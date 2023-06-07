import Div from 'common/Div';
import styles from './styles';
import { Box, Toolbar, Button, SvgIcon } from '@mui/material';
import { sideItemsList } from './constants';
import { AppBar } from '@material-ui/core';

const Sidebar: React.FC = () => {
  return ( 
    <Box sx={{borderRadius: 3, backgroundColor: '#f5f5f5', margin: '0px 10px' }}>
    <nav>
      <ol style={styles.sidebar}>
      {sideItemsList.map((item) => (
        <li style={styles.listItem}>
          <a href={item.url} style={styles.linkContainer}>
            <Div sx={styles.iconContainer}>
              <SvgIcon component={item.icon} fontSize="small" />
            </Div>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
      </ol>
    </nav>
    </Box>
  );
};

export default Sidebar;
