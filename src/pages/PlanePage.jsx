import React, { useEffect } from 'react';
import Spinner from '../components/Spinner/Spinner';
import styles from './PlanePage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePlane } from '../redux/slices/singlePlaneSlice';
import ContentWrapper from '../hoc-wrapper/ContentWrapper';
import Button from '../components/Button/Button';

const PlanePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const { plane, isLoading } = useSelector((state) => state.singlePlane);

  useEffect(() => {
    dispatch(getSinglePlane(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {plane && (
            <ContentWrapper style={styles.plane}>
              <div className={styles.descContent}>
                <Button makeSort={() => navigate(-1)}>Назад</Button>

                <h1 className={styles.title}>{plane.name}</h1>
                <div className={styles.price}>{plane.price}</div>

                <Button wrapperStyles={styles.buyBtn} makeSort={() => navigate('/order')}>
                  Оформить заказ
                </Button>

                <p className={styles.desc}>{plane.description}</p>
              </div>

              <div className={styles.imageContent}>
                <img className={styles.image} src={plane.planeImage} alt="" />
              </div>
            </ContentWrapper>
          )}
        </>
      )}
    </>
  );
};

export default PlanePage;
