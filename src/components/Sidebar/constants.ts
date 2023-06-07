import { Message, Movie, People, PersonAdd, PhotoLibrary, RssFeed } from '@material-ui/icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export enum SideMenuItemNames {
  MyPage = 'PAGE',
  Feed = 'FEED',
  Messages = 'MESSAGES',
  Friends = 'FRIENDS',
  Following = 'FOLLOWING',
  Photos = 'PHOTOS',
  Media = 'MEDIA',
}

export const sideItemsList = [
  {
    label: 'Моя страница',
    url: "/user_id",
    icon: AccountCircleIcon
  },
  {
    label: 'Новости',
    url: "/user_id",
    icon: RssFeed 
  },
  {
    label: 'Сообщения',
    url: "/user_id",
    icon: Message 
  },
  {
    label: 'Друзья',
    url: "/user_id",
    icon: People 
  },
  {
    label: 'Подписки',
    url: "/user_id",
    icon: PersonAdd 
  },
  {
    label: 'Фото',
    url: "/user_id",
    icon: PhotoLibrary 
  },
  {
    label: 'Культпросвет',
    url: "/user_id",
    icon: Movie 
  },
];