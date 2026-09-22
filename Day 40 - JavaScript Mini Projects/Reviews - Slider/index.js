const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let image = document.querySelector("img");
let name = document.querySelector("#name");
let role = document.querySelector(".role");
let info = document.querySelector("p");

let prev = document.querySelector("#prv");
let random = document.querySelector("#rnd");
let next = document.querySelector("#nxt");

let currentValue = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

console.log(currentValue);
// console.log(currentValue, "!@!");

function showPerson(currentValue) {
    const item = reviews[currentValue];

    image.src = item.img;
    name.textContent = item.name;
    role.textContent = item.job;
    info.textContent = item.text;
}

next.addEventListener("click", () => {
    currentValue++;

    if (currentValue > reviews.length - 1) {
      currentValue = 0;
    }

    showPerson(currentValue);
});

prev.addEventListener("click", () => {
    currentValue--;

    if (currentValue < 0) {
      currentValue = reviews.length - 1;
    }

    showPerson(currentValue);
});

random.addEventListener("click", () => {
    currentValue = Math.floor(Math.random() * reviews.length);

    console.log(currentValue);
    // console.log(currentValue, "!@!");

    showPerson(currentValue);
});
