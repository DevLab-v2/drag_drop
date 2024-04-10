
let newX = 0,
  newY = 0,
  startX = 0,
  startY = 0;

const card = document.getElementById("card");

card.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  card.style.top = card.offsetTop - newY + "px";
  card.style.left = card.offsetLeft - newX + "px";

  console.log(startX, startY);
  console.log(newX, newY);
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
}

// Random color generation function
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// let cardIdCounter = 0;

// // Function to generate a new card
// function generateCard() {
//   const newCard = document.createElement("div");
//   const cardId = "card_" + cardIdCounter++;
//   newCard.id = cardId;

//   newCard.classList.add("card");
//   newCard.style.backgroundColor = getRandomColor();

//   // Add a delete button to the card
//   const deleteButton = document.createElement("button");
//   deleteButton.innerText = "Delete";
//   deleteButton.classList.add("delete-btn");
//   deleteButton.addEventListener("click", () => deleteCard(cardId));
//   newCard.appendChild(deleteButton);

//   // Add event listeners for dragging
//   newCard.addEventListener("mousedown", mouseDown);

//   // Add the new card to the container
//   document.getElementById("container").appendChild(newCard);
// }

// // Function to delete a card
// function deleteCard(cardId) {
//   const cardToRemove = document.getElementById(cardId);
//   if (cardToRemove) {
//     cardToRemove.remove();
//     removeCardFromLocalStorage(cardId);
//   }
// }

// // Event listener for "New Card" button
// const generateButton = document.getElementById("generate_card");
// generateButton.addEventListener("click", generateCard);

// // Variables to track mouse position and dragging
// let startX = 0,
//   startY = 0,
//   offsetX = 0,
//   offsetY = 0,
//   isDragging = false,
//   currentCard = null;

// // Function to handle mouse down event
// function mouseDown(e) {
//   isDragging = true;
//   startX = e.clientX;
//   startY = e.clientY;
//   offsetX = e.target.offsetLeft;
//   offsetY = e.target.offsetTop;
//   currentCard = e.target;

//   // Add event listeners for mousemove and mouseup events on the current card
//   currentCard.addEventListener("mousemove", mouseMove);
//   currentCard.addEventListener("mouseup", mouseUp);
// }

// // Function to handle mouse move event
// function mouseMove(e) {
//   if (!isDragging || e.target !== currentCard) return;

//   const newX = e.clientX - startX;
//   const newY = e.clientY - startY;

//   const newOffsetX = offsetX + newX;
//   const newOffsetY = offsetY + newY;

//   // Update the card's position
//   currentCard.style.left = newOffsetX + "px";
//   currentCard.style.top = newOffsetY + "px";
// }

// // Function to handle mouse up event
// function mouseUp(e) {
//   isDragging = false;

//   // Remove event listeners for mousemove and mouseup events on the current card
//   currentCard.removeEventListener("mousemove", mouseMove);
//   currentCard.removeEventListener("mouseup", mouseUp);
// }
