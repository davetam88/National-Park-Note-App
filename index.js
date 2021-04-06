'use strict';

function formatParkInfoQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}


function buildMorePictureElement(imagePtr) {
  let htmlCode = `
		<div class="item">
		<h4 class="overlay-title-container"> ${imagePtr.title}</h4>
        <img src="${imagePtr.url}" alt="${imagePtr.title}">
		<h4>${imagePtr.caption}</h4>

            <button class="btn-go-back 0" type="button">Go Back</button>
    </div>`;

  return (htmlCode);
}


function buildParkInfoItemElement(responseJson, idx) {
  let siteAddress = "";

  if (responseJson.data[idx].addresses.length === 0)
    siteAddress = 'No Address Information For This Park, Sorry';
  else
  {
    siteAddress = `
	  ${responseJson.data[idx].addresses[0].line1}
	  ${responseJson.data[idx].addresses[0].city},  ${responseJson.data[idx].addresses[0].stateCode} ${responseJson.data[idx].addresses[0].postalCode} 
	  `;
  }
  let fullName = responseJson.data[idx].fullName;
  let htmlCode = `
  <div class="item">
    <div class="park-info-title-container">
      <h3>${responseJson.data[idx].fullName}</h3>
    </div>
    <img src="${responseJson.data[idx].images[0].url}" alt="${fullName}">
      <p>${responseJson.data[idx].description}</p>
      <p><b>WebLink</b> : <a href="${responseJson.data[idx].url}"> ${responseJson.data[idx].fullName}</a>
        <p><b>HQ Address</b> : ${siteAddress}</p>
        <button class="btn-generic ${idx}" type="button">More Picture</button>
        <button class="btn-generic ${idx}" type="button">Video</button>
  </div>`;

  return (htmlCode);
}



function displayParksInfo(responseJson, stateCode, activities) {


  const dataLen = responseJson.data.length;
  // if there are previous results, remove them
  $('#js-results').empty();
  // remove previous error if any.
  $('#js-error-message').text("");

  let htmlCode = `
	  <h3 class="overlay-section-heading">
There Are <em>${dataLen}</em> Parks That Matches Your Search Criteria<br>
						 <em>StateCode = ${stateCode}  :  Activity = ${activities}</em>
</h3>
		<div class="group-container wrap">
	  `;

  for (let idx = 0; idx < dataLen; idx++)
  {
    htmlCode = htmlCode + buildParkInfoItemElement(responseJson, idx);
    //  showNpsData(responseJson, i);
    NewData[idx] = new Object();
    NewData[idx].index = idx;
    NewData[idx].responseJson = responseJson.data[idx];
  }
  EntryData.stateCode = stateCode;
  EntryData.activities = activities;
  EntryData.ResponseJson = responseJson;

  // close the group-container div
  // page for park info
  htmlCode += `</div>`;

  $('#js-results').append(htmlCode);
  $('#js-results').removeClass('hidden');

}


function displayMorePicture(responseJson) {

  // if there are previous results, remove them
  $('#js-results').empty();
  // remove previous error if any.
  $('#js-error-message').text("");

  let imageLen = responseJson.images.length;
  // show the park name 
  let htmlCode = `
<h3 class="overlay-section-heading">
There are <em>${imageLen}</em> Pictures for <em>${responseJson.fullName}</em>, Enjoy !!
</h3>
		<div class="group-container wrap">
	  `;

  for (let idx = 0; idx < imageLen; idx++)
  {
    htmlCode = htmlCode + buildMorePictureElement(responseJson.images[idx]);
  }
  // close the group-container div
  htmlCode += `</div>`;
  $('#js-results').append(htmlCode);
  $('#js-results').removeClass('hidden');

}


function displayParkVideoList(responseJson, parkName) {

  // if there are previous results, remove them
  $('#js-results').empty();
  // remove previous error if any.
  $('#js-error-message').text("");

  let numVideos = responseJson.items.length;

  let htmlCode = `
<h3 class="overlay-section-heading">
	  There Are <em>${numVideos}</em> Videos for <em>${parkName}</em><br> Click on The Picture to Watch, Enjoy!!
</h3>
		<div class="group-container wrap">
	  `;

  let itemList = "";
  for (let idx = 0; idx < numVideos; idx++)
  {
    let videoTitle = responseJson.items[idx].snippet.title;
    let videoSmallPic = responseJson.items[idx].snippet.thumbnails.medium.url;
    let videoDescription = responseJson.items[idx].snippet.description;

    // do one item list
    itemList = itemList + `<div class="item">
		<h4 class="overlay-title-container">${videoTitle}</h4>
														   <br>
           <a  href='https://www.youtube.com/watch?v=${responseJson.items[idx].id.videoId}' target='_blank'>
            <img  src='${videoSmallPic}' alt="${videoTitle}"> 
</a>
		<h4>${videoDescription}</h4>											
	<br>
            <button class="btn-go-back 0" type="button">Go Back</button>
    </div>`;
  }

  htmlCode += itemList;

  // close the group-container div
  htmlCode += `
</div>`;
  // create page for more picture 
  $('#js-results').append(htmlCode);
  $('#js-results').removeClass('hidden');

}

function generateItemElement(item) {

  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

function getParkInfos(stateCode, activities, maxResults = 3) {

  const api_key = 'nC3wQoBberQTpH9oGy9RZd3WPZRbbUw3eTCblSCb';
  const searchURL = 'https://developer.nps.gov/api/v1/parks';

  const paramsNormal = {
    api_key: api_key,
    stateCode: stateCode,
    q: activities,
    limit: maxResults
  };

  const paramsAllActivities = {
    api_key: api_key,
    stateCode: stateCode,
    limit: maxResults
  };


  let paramsUse = paramsNormal;
  if (activities === "All")
  {
    paramsUse = paramsAllActivities;
  }

  const queryString = formatParkInfoQueryParams(paramsNormal);
  const parkURL = searchURL + '?' + queryString;


  fetch(parkURL)
    .then(response => {
      if (response.ok)
      {
        return response.json();
      }
      let errmsg = `${response.status} : ${response.statusText}`;
      throw new Error(errmsg);
    })
    .then(responseJson => displayParksInfo(responseJson, stateCode, activities))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}


function getVideoInfos(parkName) {
  const api_key = "AIzaSyBGEUctjgxxWPlw7PsY4TaLe01zwsGg3p0";
  const searchURL = `https://www.googleapis.com/youtube/v3/search`;
  const searchString = parkName.replace(/ /g, "+");
  let maxResults = 6; // don't get too many

  // for youtbue.
  const params = {
    key: api_key,
    q: searchString,
    part: "snippet",
    maxResults: maxResults
  };

  const queryString = formatParkInfoQueryParams(params)
  let videoURL = searchURL + '?' + queryString;

  fetch(videoURL)
    .then(response => {
      if (response.ok)
      {
        return response.json();
      }
      let errmsg = `${response.status} : ${response.statusText}`;
      throw new Error(errmsg);
    })

    .then(responseJson => displayParkVideoList(responseJson, parkName))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong, ErrorMsg/ErrorCode : ${err.message}`);
    });
}

function getItemIdFromElement(item) {
  return (item.classList[1]);
}

function handleMorePictureClicked() {
  $('.cls-results').on('click', '.btn-generic', event => {
    const idx = getItemIdFromElement(event.currentTarget);
    // get the image from the store and ren
    let responseJson = NewData[idx].responseJson;
    displayMorePicture(responseJson);
  });
}

function handleGoBackButtonClicked() {
  $('.cls-results').on('click', '.btn-go-back', event => {
    displayParksInfo(EntryData.ResponseJson, EntryData.stateCode, EntryData.activities);
  });
}

function handleVideoClicked() {
  $('.cls-results').on('click', '.btn-generic', event => {
    const idx = getItemIdFromElement(event.currentTarget);
    // get the park info from the big data
    let parkName = NewData[idx].responseJson.fullName;
    // get info and display it
    getVideoInfos(parkName);
  });

}

const NewData = {};
const EntryData = {};
// var..

function watchForm() {
  $('#js-form').submit(event => {
    event.preventDefault();

    let stateCode = $('#js-state-name').val();
    let activities = $('#js-activities').val();
    const zipCode = $('#zip-code').val();
    const maxResults = 30;
    getParkInfos(stateCode, activities, maxResults);
  });

}


function StartApp() {

  const stateCode = "AL";
  const activities = "All";
  // const activities = "Bike";

  EntryData.stateCode = stateCode;
  EntryData.activities = activities;
  const maxResults = 20;

  handleMorePictureClicked();
  handleGoBackButtonClicked();
  handleVideoClicked();

  getParkInfos(stateCode, activities, maxResults);
  watchForm();
}

$(StartApp);

