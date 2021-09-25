"use strict";
function getIdParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const Id = urlParams.get("Id");
  return Id;
}

function getDetails() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${getIdParam()}`)
    .then((x) => x.json())
    .then((results) => {
      document.getElementById("title-detail").innerHTML = `
        <div class="detail-wrap">
        <p><span class="title">userID: </span> <span class="normal">${results.userId}</span></p></br>
        <p><span class="title">Id: </span> <span class="normal">${results.id}</span></p></br>
        <p><span class="title">Title: </span> <span class="normal">${results.title}</span></p></br>
        <p><span class="title">Comment: </span> <span class="normal">${results.body}</span></p></br>
        </div>
          `;
    })
    .catch((err) => console.log("can't get comment", err));
}

function getAllComment() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${getIdParam()}/comments`)
    .then((x) => x.json())
    .then((results) => {
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        document.getElementById("detail-comment").innerHTML += `
          <div class="detail-wrap-comment">
          <p class="detail"><b>userID: </b> <span class="normal">${results[i].postId}</span></p></br>
          <p class="detail"><b>Id: </b> <span class="normal">${results[i].id}</span></p></br>
          <p class="detail"><b>Name: </b> <span class="normal">${results[i].name}</span></p></br>
          <p class="detail"><b>Email: </b> <span class="normal">${results[i].email}</span></p></br>
          <p class="detail"><b>Comment: </b> <span class="normal">${results[i].body}</span></p></br>
          </div>
            `;
      }
    })
    .catch((err) => console.log("loi", err));
}

window.onload = function () {
  getDetails();
  getAllComment();
};
