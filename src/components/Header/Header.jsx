import React from 'react';

import styles from './Header.module.css';
import ContentWrapper from '../../hoc-wrapper/ContentWrapper';

import WaveImg from '../../assets/wave.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <ContentWrapper style={styles.content}>
        <h1 className={styles.title}>{`Путешествуйте с \n Комфортом`}</h1>
        <p
          className={
            styles.desc
          }>{`С нашей компанией вы забудете обо всем, кроме\n путешествий высокого уровня`}</p>
      </ContentWrapper>
      <img src={WaveImg} alt="wave" className={styles.wave} />
    </div>
  );
};

export default Header;
