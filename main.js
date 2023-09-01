const teammates = [
  {
    name: "Bill Mahoney",
    position: "Product Owner",
    image: "/assets/img/photo1.png",
  },
  {
    name: "Saba Cabrera",
    position: "Art Director",
    image: "/assets/img/photo2.png",
  },
  {
    name: "Shae Le",
    position: "Tech Lead",
    image: "/assets/img/photo3.png",
  },
  {
    name: "Skylah Lu",
    position: "UX Designer",
    image: "/assets/img/photo4.png",
  },
  {
    name: "Griff Richards",
    position: "Developer",
    image: "/assets/img/photo5.png",
  },
  {
    name: "Stan John",
    position: "Developer",
    image: "/assets/img/photo6.png",
  },
];

const containerOurTeam = document.querySelector(".container_our_team");

teammates.forEach((teammate, index) => {
  const div = document.createElement("div");
  div.classList.add("container_item");
  if (index === 1 || index === 4) {
    div.innerHTML = `
  <div class="container_person person_center">
    <img src="${teammate.image}" alt="primera foto">
    <p>${teammate.position}</p>
  </div>
  <p>${teammate.position}</p>
  `;
  } else {
    div.innerHTML = `
  <div class="container_person">
    <img src="${teammate.image}" alt="primera foto">
    <p>${teammate.position}</p>
  </div>
  <p>${teammate.position}</p>
  `;
  }

  containerOurTeam.appendChild(div);
});
