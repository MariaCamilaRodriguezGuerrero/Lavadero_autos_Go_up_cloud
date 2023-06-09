const getDate = () => {
  var today = new Date();
  const year = today.getFullYear();
  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  let hours = today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  let minutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  let seconds =
    today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

export default getDate;
