const fetchData = async () => {
  try {
    const response = await fetch(
      'https://my.api.mockaroo.com/epilist?key=52d6c330',
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
