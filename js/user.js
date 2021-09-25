"use strict";
function getUserParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const user = urlParams.get("userId");
  return user;
}

function getUser() {
  fetch(`https://jsonplaceholder.typicode.com/users/${getUserParam()}`)
    .then((x) => x.json())
    .then((results) => {
      document.getElementById("main-user").innerHTML = `
          <div class="user-title-wrap">
          <p><span class="user">ID: </span> <span class="normal">${results.id}</span></p></br>
          <p><span class="user">Name: </span> <span class="normal">${results.name}</span></p></br>
          <p><span class="user">Username: </span> <span class="normal">${results.username}</span></p></br>
          <p><span class="user">Email: </span> <span class="normal">${results.email}</span></p></br>
          <p><span class="user">Address: </span>
                                        <p><span class="user-detail">street: </span><span class="normal">${results.address.street}</span></p>
                                        <p><span class="user-detail">suite: </span><span class="normal">${results.address.suite}</span></p>
                                        <p><span class="user-detail">city: </span><span class="normal">${results.address.city}</span></p>
                                        <p><span class="user-detail">zipcode: </span><span class="normal">${results.address.zipcode}</span></p>
                                        <p><span class="user-detail">geo</span>:</p>
                                            <p><span class="user-detail-geo">lat: </span><span class="normal">${results.address.geo.lat}</span></p>
                                            <p><span class="user-detail-geo">lng: </span><span class="normal">${results.address.geo.lng}</span></p>
          </p></br>
          <p><span class="user">Phone: </span> <span class="normal">${results.phone}</span></p></br>
          <p><span class="user">Website: </span> <span class="normal">${results.website}</span></p></br>
          <p><span class="user">Company: </span> <span class="normal"></span>
                                        <p><span class="user-detail">name: </span><span class="normal">${results.company.name}</span></p>
                                        <p><span class="user-detail">catchPhrase: </span><span class="normal">${results.company.catchPhrase}</span></p>
                                        <p><span class="user-detail">bs: </span><span class="normal">${results.company.bs}</span></p>
          </p></br>
          </div>
            `;
    })
    .catch((err) => console.log("can't get user", err));
}

function allPosts() {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${getUserParam()}`)
    .then((x) => x.json())
    .then((results) => {
      for (let i = 0; i < results.length; i++) {
        document.getElementById("main-all-user").innerHTML += `
          <div class="detail-all-posts">
          <p><span class="title">userID: </span> <span class="normal">${results[i].userId}</span></p></br>
          <p><span class="title">Id: </span> <span class="normal">${results[i].id}</span></p></br>
          <p><span class="title">Title: </span> <span class="normal">${results[i].title}</span></p></br>
          <p><span class="title">Body: </span> <span class="normal">${results[i].body}</span></p></br>
          </div>
            `;
      }
    })
    .catch((err) => console.log("loi", err));
}

window.onload = function () {
  getUser();
  allPosts();
};
