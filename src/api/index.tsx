const fetchData = async () => {
  fetch('https://my.api.mockaroo.com/epilist?key=52d6c330', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => console.error(err));
};

export default fetchData;
