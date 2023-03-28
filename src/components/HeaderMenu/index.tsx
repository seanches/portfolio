
import { FC } from 'react';
import muiSx from 'mui-sx';

import { Typography } from '@mui/material';
import Div from 'common/Div';

import styles from './styles';
import { IHeaderMenuProperties } from './types';
import { NameItemMenu } from 'components/App/types';
import { itemNames } from './constants';

const HeaderMenu: FC<IHeaderMenuProperties> = (properties) => {
  const { currentItemMenu, onChangeItemMenu } = properties;

  const handleOnClick = (newItem: NameItemMenu) => () => {
    onChangeItemMenu(newItem);
  }

  return (
    <Div sx={styles.root}>
      {itemNames.map((item) => (
        <Typography key={item.value} sx={muiSx(styles.menuItem, {
          condition: currentItemMenu === item.value,
          sx: styles.selectItem
          })}
          onClick={handleOnClick(item.value)}
        >
          {item.label}
        </Typography>
      ))}
    </Div>
  );
};

export default HeaderMenu;
