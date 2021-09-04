function getFormattedDate(date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  date = date.split('-');

  return `${months[Number(date[1]) - 1]} ${date[2]}, ${date[0]}`;
}

function getURL(random=false, date='') {
  const url = new URL('https://api.nasa.gov/planetary/apod');
  url.searchParams.set('api_key', 'eLUJnfWa4uDNrxc9hb5uO9oo4FJ0U3O7ZrsbMJaK');

  if (random)
    url.searchParams.set('count', 1);
  else if (date)
    url.searchParams.set('date', date);

  return url.toString();
}
