let listDiv = document.querySelector(".rsrv-list");

async function getReservations() {
  const res = await axios.get("http://localhost:3000/api/reservation");
  return res.data.data.data;
}

function getOutputHTML(data) {
  let outputHTML = "";
  data.forEach((rsrv) => {
    outputHTML += `
    <li>
        <p><b>Name:</b> ${rsrv.name}</p>
        <p><b>Contact:</b> ${rsrv.contact}</p>
        <p><b>Details:</b> ${rsrv.details}</p>
    </li>
    `;
  });
  return outputHTML;
}

async function renderResrvations() {
  const data = await getReservations();
  const outputHTML = getOutputHTML(data);
  listDiv.innerHTML = outputHTML;
}

renderResrvations();
