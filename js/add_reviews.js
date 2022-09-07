let username = document.querySelector(".username");
let body = document.querySelector(".rev-body");
let output = document.querySelector(".output");
let form = document.querySelector(".review-form");

form.addEventListener("submit", addNewReview);

// function addNoticeToLocalStorage(title, body) {
//   let data = localStorage.getItem("notices");
//   let notices = JSON.parse(data);
//   notices.push({
//     id: notices.length + 1,
//     title,
//     body,
//   });

//   localStorage.setItem("notices", JSON.stringify(notices));
// }

async function addNewReview(e) {
  e.preventDefault();
  const rname = username.value;
  const rbody = body.value;
  if (!body || !username) {
    output.innerHTML = "<p>Review Must have a name and contact!</p>";
    return;
  }

  try {
    const res = await axios.post("http://localhost:3000/api/review", {
      username: rname,
      body: rbody,
    });
    if (res.status === 201) {
      output.innerHTML = "<p>Review Added!</p>";
    }
  } catch (err) {
    console.log(err);
    output.innerHTML = "<p>Review Adding Failed!</p>";
  }
}
