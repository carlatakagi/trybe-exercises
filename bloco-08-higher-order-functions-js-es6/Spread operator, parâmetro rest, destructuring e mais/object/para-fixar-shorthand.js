// Altere a função getPosition utilizando a property shorthand .

const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude
});

console.log(getPosition(-19.8157, -43.9542));

const getPosition1 = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition1(-19.8157, -43.9542));