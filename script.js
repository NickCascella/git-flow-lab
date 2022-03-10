const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "bee.jpeg",
  },
  {

    author: "Kourosh",
    poem: "Hamster is big \n Hamster is fat \n He holds a hamster \n Hamster in hand ",
    image: "kouroshpic.jpg",
  },
  {
    author: "Sandro",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "cloud9.png",
  },
  {
    author: "Nick",
    poem: "I'm hungry",
    image: "testImg.jpeg",
  },
  {
    author: "Ben",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Poets all smell like poo",
    image: "earnings.jpg",
  },
  {
    author: "Lauren",
    poem: "Roses are red \n Violets are blue \n Coding is fun \n You should think so too!",
    image: "code.jpg",
  },

  // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
