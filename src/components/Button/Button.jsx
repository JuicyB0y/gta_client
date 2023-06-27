import React, { useEffect } from 'react';
import styles from './Button.module.css';
import { useSelector } from 'react-redux';

const Button = ({
  wrapperStyles = '',
  children,
  isBackButton = '',
  insideStyles = '',
  setSort,
  sort,
  makeSort,
}) => {
  //   useEffect(() => {
  //     console.log(sort);
  //   }, [sort]);

  return (
    <div className={wrapperStyles}>
      <span
        onClick={makeSort}
        className={`${isBackButton ? styles.backButton : styles.button} ${insideStyles}`}>
        {children}
      </span>
    </div>
  );
};

export default Button;
