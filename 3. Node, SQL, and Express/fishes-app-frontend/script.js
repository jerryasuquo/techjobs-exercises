const container = document.querySelector("#container");
const fishesAPI = "http://localhost:3000/fishes";

fetch(fishesAPI)
  .then((res) => res.json())
  .then((fishes) => {
    fishes.forEach((fish) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<li class="flex" id=${fish.id}>
        <p>${fish.name} : ${fish.type}</p>
        <button class="fish-delete-btns" data-fish-to-delete=${fish.id}>Delete</button>
        </li>
        `
      );
      const fishDeleteBtns = document.querySelectorAll(".fish-delete-btns");
      fishDeleteBtns.forEach((fishDeleteBtn) => {
        fishDeleteBtn.addEventListener("click", deleteFish);
      });
    });
  });

const fshAdditionForm = document.querySelector("#new-fish-form");
const nameIdAttr = document.querySelector("#name");
const typeIdAttr = document.querySelector("#type");

fshAdditionForm.addEventListener("submit", createNewFish);

async function createNewFish(event) {
  try {
    event.preventDefault();

    const newFishObj = {
      name: nameIdAttr.value,
      type: typeIdAttr.value,
    };

    const newlyCreatedFish = await (
      await fetch(fishesAPI, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFishObj),
      })
    ).json();
    console.log(newlyCreatedFish);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function deleteFish(event) {
  try {
    console.log(this.dataset.fishToDelete);
    const deleteMessage = await (
      await fetch(`${fishesAPI}/${this.dataset.fishToDelete}`, {
        method: "DELETE",
        mode: "cors",
      })
    ).json();
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}
