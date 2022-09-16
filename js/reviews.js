let reviews = document.querySelector(".reviews_box_container");

let output = document.querySelector(".output");

async function getReviews() {
  const res = await axios.get("http://localhost:3000/api/review");
  return res.data.data.data;
}

function getOutputHTML(data) {
  console.log(data);
  let outputHTML = "";
  data.forEach((review) => {
    outputHTML += `
    <div class="reviews_box">
          <div class="box-top">
            <div class="profile">
              <div class="user_name">
                <strong>${review.username}</strong>
                <span>@${review.username}</span>
              </div>
            </div>
          </div>
          <div class="customer_review">
            <p>${review.body}</p>
          </div>
        </div>
    `;
  });
  return outputHTML;
}

async function renderReviews() {
  const data = await getReviews();
  const outputHTML = getOutputHTML(data);
  reviews.innerHTML = outputHTML;
}

renderReviews();
