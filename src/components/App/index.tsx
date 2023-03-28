import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

import theme from 'utils/theme';
import Div from 'common/Div';
import styles from './styles';
import HeaderMenu from 'components/HeaderMenu';
import { NameItemMenu } from './types';

function App() {
  const [selectMenuItem, setSelectMenuItem] = useState<NameItemMenu>(NameItemMenu.WORKS);

  const handleChangeItemMenu = (newCurrent: NameItemMenu) => {
    setSelectMenuItem(newCurrent);
  };
  return (
    <ThemeProvider theme={theme}>
      <Div sx={styles.root} >
        <HeaderMenu
          currentItemMenu={selectMenuItem}
          onChangeItemMenu={handleChangeItemMenu}
        />
      </Div>
    </ThemeProvider>
  );
}

export default App;
