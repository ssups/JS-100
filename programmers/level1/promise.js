const getapi = async () => {
  const data = fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=3a9f5ef2310eb6ef92b112dc4e282243"
  ).then(response => response.json());
  return data;
  // if(data.ok)
};

console.log(getapi());
