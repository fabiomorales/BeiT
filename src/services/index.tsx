const fetchData = async () => {
  try {
    const response = await fetch(
      'https://5fe904a22e12ee0017ab4c4f.mockapi.io/items',
      // 'https://my.api.mockaroo.com/epilist?key=52d6c330',
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
