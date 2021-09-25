"use strict";
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((api) => api.text())
  .then((post) => {
    const posts = JSON.parse(post);
    for (var i = 0; i < posts.length; i++) {
      document.getElementById("fetch-api").innerHTML += `
      <div class="title-wrap">
      <p class="title">userID: <span class="normal">${posts[i].userId} <button><a href="user.html?userId=${posts[i].userId}">DETAIL USERID</a></button></span></p></br>
      <p class="title">Id: <span class="normal">${posts[i].id} <button><a href="detail.html?Id=${posts[i].id}">DETAIL ID</a></button></span></p></br>
      <p class="title">Title: <span class="normal">${posts[i].title}</span></p></br>
      <p class="title">body: <span class="normal">${posts[i].body}</span></p></br>
      </div>`;
    }
  })
  .catch((err) => console.log("lỗi error", err));
