let fullname = document.querySelector(".rsrv-name");
let contact = document.querySelector(".rsrv-contact");
let details = document.querySelector(".rsrv-details");
let output = document.querySelector(".output");
let form = document.querySelector(".rsrv-form");

form.addEventListener("submit", addNewReservation);

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

async function addNewReservation(e) {
  e.preventDefault();
  const rsrv_name = fullname.value;
  const rsrv_contact = contact.value;
  const rsrv_details = details.value;
  if (!rsrv_contact || !rsrv_name) {
    output.innerHTML = "<p>Resrvation Must have a name and contact!</p>";
    return;
  }

  try {
    const res = await axios.post("http://localhost:3000/api/reservation", {
      name: rsrv_name,
      contact: rsrv_contact,
      details: rsrv_details,
    });
    if (res.status === 201) {
      output.innerHTML = "<p>Resrvation Added!</p>";
    }
  } catch (err) {
    console.log(err);
    output.innerHTML = "<p>Reservation Adding Failed!</p>";
  }
}
