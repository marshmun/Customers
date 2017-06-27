var customers = document.querySelector('.customers')

function getUserData() {
  fetch("https://randomuser.me/api/?results=12")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var customers = data.results;
      for (var i = 0; i < customers.length; i++) {
        createProfile(customers[i])
      }
    })
}

function createProfile() {
  var profileEverything = document.createElement('div');
  customers.appendChild(profileEverything);

  var customImg = document.createElement("img")
  customImg.classList.add("pic");
  customImg.src = data.picture.large;
  profileEverything.appendChild(customImg);

  var customLi = document.createElement("p");
  customLi.classList.add("names")
  customLi.textContent = data.name.first + " " + data.name.last;
  profileEverything.appendChild(customLi);

  var customEmail = document.createElement("p");
  customEmail.classList.add("email")
  customEmail.textContent = data.email;
  profileEverything.appendChild(customEmail);

  var customAd1 = document.createElement("p")
  customAd1.classList.add("address")
  customAd1.textContent = data.location.street;
  profileEverything.appendChild(customAd1);

  var customeAd2 = document.createElement("p");
  customeAd2.classList.add("addressTwo")
  customeAd2.textContent = data.location.city + ", " + data.location.state + ", " + data.location.postcode;
  profileEverything.appendChild(customeAd2);

  var phoneNumber = document.createElement("p");
  phoneNumber.classList.add("phone")
  phoneNumber.textContent = data.cell;
  profileEverything.appendChild(phoneNumber);
}

getUserData();