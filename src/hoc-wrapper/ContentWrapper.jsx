import React from 'react';

import styles from './ContentWrapper.module.css';

const ContentWrapper = ({ children, style }) => {
  return <div className={`${styles.wrapper} ${style}`}>{children}</div>;
};

export default ContentWrapper;
