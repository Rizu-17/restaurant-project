let username = document.querySelector(".username");
let body = document.querySelector(".rev-body");
let output = document.querySelector(".output");
let form = document.querySelector(".review-form");

form.addEventListener("submit", addNewReview);

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
