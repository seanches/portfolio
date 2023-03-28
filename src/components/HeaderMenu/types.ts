import { NameItemMenu } from 'components/App/types';

export interface IHeaderMenuProperties {
  currentItemMenu: NameItemMenu;
  onChangeItemMenu: (newItem: NameItemMenu) => void;
}