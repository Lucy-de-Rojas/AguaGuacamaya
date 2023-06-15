import React from 'react';
import styles from '../styles/Header.module.scss';



const Header = ():React.JSX.Element => {



        return (<h1>
                aguaguacamaya
                <span className={styles.blue}>/</span>
                <span className={styles.white}>stock</span>


        </h1>);
}



export default Header;