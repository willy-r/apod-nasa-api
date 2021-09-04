initialConfigs();

$('#random-header').click(displayRandomPicture);

function initialConfigs() {
  const url = getURL();

  handleData(url, (data) => {
    displayPictureOfTheDay(data);
    setInputDateConfigs(data);
  });
}

function displayRandomPicture() {
  const url = getURL(true);

  handleData(url, displayPictureOfTheDay);
}

function displayPictureOfTheDay(data) {
  // If it's random data, returns an Array, so gets the JSON.
  if (Array.isArray(data))
    data = data[0];

  setContents(data);
}

function setContents(data) {
  // Defines the date and the media content.
  $('#date').text(getFormattedDate(data.date));
  
  if (data.media_type === 'image') {
    const altText = data.copyright ? `${data.title} by ${data.copyright}` : data.title;

    $('#media-img').attr({ src: data.url, alt: altText });
    $('#hdr-img').attr('href', data.hdurl).show();
  } else {
    $('#media-img').hide();
    $('#media-video').attr('src', data.url).show();
  }
  
  // Defines the title, the explanation and the credits.
  $('#title').text(data.title);
  $('#explanation').text(data.explanation);
  
  if (data.copyright) {
    $('#copy-owner').text(data.copyright);
    $('.credits').first().show();
  }
}

function setInputDateConfigs(data) {
  $('#input-date').attr({ max: data.date, value: data.date });
}
