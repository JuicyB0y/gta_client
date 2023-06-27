import React, { useCallback, useState } from 'react';
import styles from './CreatePlane.module.css';
import ContentWrapper from '../hoc-wrapper/ContentWrapper';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPlane } from '../redux/slices/singlePlaneSlice';

const CreatePlane = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.singlePlane);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState('');
  const [planeImage, setPlaneImage] = useState(null);

  const handleCreatePlane = useCallback(() => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('capacity', capacity);
    formData.append('planeImage', planeImage);

    //  это информация по formData
    //  for (let pair of formData.entries()) {
    //    console.log(pair[0] + ', ' + pair[1]);
    //  }

    dispatch(createPlane(formData)).then((res) => {
      console.log(res);
      if (!res.error) {
        navigate(`/plane/${res.payload._id}`, { replace: true });
      }
    });
  }, [name, description, price, capacity, planeImage]);

  return (
    <ContentWrapper style={styles.createPlane}>
      <Button
        makeSort={() => navigate(-1)}
        isBackButton={true}
        wrapperStyles={styles.backButtonContainer}>
        Назад
      </Button>

      <form className={styles.form}>
        <h1 className={styles.title}>Создать самолет</h1>

        <div className={`${styles.container} ${styles.containerClassName}`}>
          <input
            type="text"
            name="name"
            placeholder="Название самолета"
            onChange={(e) => setName(e.target.value)}
          />
          {errors && errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className={`${styles.container} ${styles.containerClassName}`}>
          <input
            type="text"
            name="price"
            placeholder="Цена самолета"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={`${styles.container} ${styles.containerClassName}`}>
          <input
            type="text"
            name="capacity"
            placeholder="Вместимость самолета"
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>

        <div className={`${styles.container} ${styles.containerClassName}`}>
          <input
            type="text"
            name="description"
            placeholder="Описание самолета"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className={`${styles.container} ${styles.containerClassName}`}>
          <input
            type="file"
            name="planeImage"
            placeholder="Картинка самолета"
            onChange={(e) => setPlaneImage(e.target.files[0])}
          />
        </div>

        <Button wrapperStyles={styles.buttonWrapper} makeSort={handleCreatePlane}>
          Создать
        </Button>
      </form>
    </ContentWrapper>
  );
};

export default CreatePlane;
