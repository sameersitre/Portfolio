import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AnimatingText from '../../common/animatingText';
import Appbar from '../../common/appbar';
import profileimage from '../../assets/profileimage.png'
import styles from '../../styles/root.module.css'
export default function Homepage(props) {
  const pages = ['Home', 'About', 'Portfolio'];

  return (
    <React.Fragment>
      <Appbar />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: 50, marginTop: 50, backgroundColor: '#F4F4F4' }}>
        <img
          className={styles.folioImg}

          src={profileimage}
          width={100} height={100}

        />
        <AnimatingText />
      </div>
      <Box sx={{ my: 2 }}>
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </Box>

    </React.Fragment>
  );
}