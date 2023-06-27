import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../hoc-wrapper/ContentWrapper';

import styles from './OrderPage.module.css';
import Button from '../components/Button/Button';

const OrderPage = () => {
  const navigate = useNavigate();
  return (
    <ContentWrapper style={styles.order}>
      <h1>Ваш заказ будет доставлен</h1>
      <Button wrapperStyles={styles.button} makeSort={() => navigate('/')}>
        На Главную
      </Button>
    </ContentWrapper>
  );
};

export default OrderPage;
