import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlanes, sortPlanesByAsc, sortPlanesByDesc } from '../../redux/slices/planeSlice';

import Spinner from '../Spinner/Spinner.jsx';
import ContentWrapper from '../../hoc-wrapper/ContentWrapper';
import PlaneItem from '../PlaneItem/PlaneItem';

import styles from './Planes.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);
  console.log(planes);
  const [sort, setSort] = useState(false);

  //   const isMounted = useRef(false);

  useEffect(() => {
    dispatch(getPlanes());
  }, []);

  const makeSort = () => {
    setSort(!sort);
    if (sort) {
      dispatch(sortPlanesByAsc());
    } else {
      dispatch(sortPlanesByDesc());
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.sort}>
            <ContentWrapper style={styles.planesHeader}>
              <Button wrapperStyles={styles.sortBtn} makeSort={() => makeSort()}>
                Сортировать по цене {`${sort ? '+' : '-'}`}
              </Button>
              <Link to="/create-plane" className={styles.createPlane}>
                Добавить самолёт
              </Link>
            </ContentWrapper>
          </div>
          <ContentWrapper style={styles.wrapper}>
            {planes && planes.map((item) => <PlaneItem key={item.name} {...item} />)}
          </ContentWrapper>
        </>
      )}
    </>
  );
};

export default Planes;
