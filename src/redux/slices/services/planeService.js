import axios from 'axios';

export const getAllPlanes = async () => {
  const res = await fetch('http://localhost:8000/api/planes/');
  if (!res.ok) {
    throw new Error('Could not fetch Error');
  }
  const planes = await res.json();
  console.log(planes);

  return planes;
};

export const getPlane = async (id) => {
  const res = await fetch(`http://localhost:8000/api/planes/${id}`);
  if (!res.ok) {
    throw new Error('Could not fetch Error');
  }
  const plane = await res.json();
  console.log(plane);

  return plane;
};

export const createNewPlane = async (data) => {
  const res = await fetch(`http://localhost:8000/api/planes`, {
    method: 'POST',
    body: data,
  });

  const plane = await res.json();
  console.log(plane);

  // const plane = await axios.post(`http://localhost:8000/api/planes`, data);
  // console.log(plane.data);
  return plane;
};

// export const getAllPlanes = async () => {
//   const planes = await axios.get('http://localhost:8000/api/planes/');
//   return planes.data;
// };
