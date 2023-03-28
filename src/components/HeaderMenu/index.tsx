
import { FC } from 'react';
import muiSx from 'mui-sx';

import { Typography } from '@mui/material';
import Div from 'common/Div';

import styles from './styles';
import { IHeaderMenuProperties } from './types';
import { NameItemMenu } from 'components/App/types';

const HeaderMenu: FC<IHeaderMenuProperties> = (properties) => {
  const { currentItemMenu, onChangeItemMenu } = properties;

  const handleOnClick = (newItem: NameItemMenu) => () => {
    onChangeItemMenu(newItem);
  }

  return (
    <Div sx={styles.root}>
      <Typography sx={muiSx(styles.menuItem, {
          condition: currentItemMenu === NameItemMenu.WORKS,
          sx: styles.selectItem
        })}
        onClick={handleOnClick(NameItemMenu.WORKS)}
      >
        Работы
      </Typography>
      <Typography sx={muiSx(styles.menuItem, {
          condition: currentItemMenu === NameItemMenu.BLOG,
          sx: styles.selectItem
        })}
        onClick={handleOnClick(NameItemMenu.BLOG)}
      >
        Блог
      </Typography>
      <Typography sx={muiSx(styles.menuItem, {
          condition: currentItemMenu === NameItemMenu.CONTACTS,
          sx: styles.selectItem
        })}
        onClick={handleOnClick(NameItemMenu.CONTACTS)}
      >
        Контакты
      </Typography>
    </Div>
  );
};

export default HeaderMenu;
