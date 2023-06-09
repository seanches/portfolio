const styles = {
  root: {
    width: 'inherit',
    height: 'inherit',
  },
  headerMenu: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 1,
  },
  containerMain: {
    display: 'flex',
    justifyContent: 'center',
  },
  profileLayout: {
    width: '1106px',
    height: '1500px',
    display: 'flex',
    padding: '30px',
    backgroundColor: 'gray',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  profileHeader: {
    width: '911px',
    minHeight: '350px', 
    marginBottom: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: 3, 
  },
  thewall: {
    width: '911px',
    height: '1280px',
    display: 'flex',
    backgroundColor: 'yellow',
  },
  inner: {
    width: '550px',
    height: '1463px',
    backgroundColor: 'purple',
  },
  stickyScroll: {
    width: '345px',
    height: '1186px',
    backgroundColor: 'blue',
    marginLeft: '15px'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: '164px',
  },
  mediaContent: {
    width: '550px',
    height: '450px',
    backgroundColor: 'grey',

  },
  gap: {
    width: '345px',
    height: '16px',
    
  },
};
  
export default styles;