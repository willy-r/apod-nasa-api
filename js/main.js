displayData();

$('#random-header').first().click(() => displayData(true));

function displayData(random, date) {
  const url = getValidURL(random, date);
  
  $.get({
    url: url,
    success: (data) => displayPictureOfTheDay(data),
  });
}

function getValidURL(random, date) {
  const url = new URL('https://api.nasa.gov/planetary/apod');
  url.searchParams.set('api_key', 'eLUJnfWa4uDNrxc9hb5uO9oo4FJ0U3O7ZrsbMJaK');

  if (random)
    url.searchParams.set('count', 1);
  else if (date)
    url.searchParams.set('date', date);

  return url;
}

function displayPictureOfTheDay(data) {
  setContents(data);
}

function setContents(data) {
  data = getSanatizedData(data);

  $('.figure').first().html(`
    <figcaption>
      <strong>Day</strong>: <u>${data.date}</u>
    </figcaption>
    ${data.mediaHTML}
  `);
}

function getSanatizedData(data) {
  if (Array.isArray(data))
    data = data[0];
  
  let mediaHTML,
      copyrightOwner = data.copyright;

  if (data.media_type === 'image') {
    const altText = copyrightOwner ? `${data.title} by ${copyrightOwner}` : data.title; 
    
    mediaHTML = `<img class="media" src="${data.url}" alt="${altText}">`;
  } else
    mediaHTML = `<iframe class="media" src="${data.url}" frameborder="0" allowfullscreen></iframe>`;

  return {
    mediaHTML: mediaHTML,
    copyrightOwner: copyrightOwner,
    title: data.title,
    urlHDR: data.hdurl,
    date: getFormattedDate(data.date),
  }
}

function getFormattedDate(date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'Octuber', 'November', 'December',
  ];
  date = date.split('-');

  return `${months[Number(date[1]) - 1]} ${date[2]}, ${date[0]}`;
}
