const userProfile = {
  name: "Isa",
  birthYear: 2008,
  isDeveloper: true,
  hobbies: ["chess", "coding", "Football"],
};

document.getElementById("submit").addEventListener("click", () => {
  userProfile.name = document.getElementById("name").value;
  console.log(userProfile.name);
  userProfile.birthYear = document.getElementById("birth").value;
  const currentYear = new Date().getFullYear();
  const age = Number(currentYear - userProfile.birthYear);
  console.log(age);
  const ageInMonths = age * 12;
  const TotalHobby = userProfile.hobbies.length;
  console.log(`How many Hobbys: ${TotalHobby}`);
  console.log(userProfile);
});

const listHobby = document.getElementById("listHobby");
const inputItem = document.getElementById("inputItem");
const addItem = document.getElementById("addItembtn");

addItem.addEventListener("click", () => {
  const ItemAdd = inputItem.value.trim();
  const newLi = document.createElement("li");
  newLi.textContent = ItemAdd;
  listHobby.appendChild(newLi);
});

const remove = document.getElementById("remove");

remove.addEventListener("click", () => {
  if (listHobby.lastElementChild) {
    listHobby.removeChild(listHobby.lastElementChild);
  }
});
