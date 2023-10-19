const input = document.getElementById("inp");
const btn = document.getElementById("btn");
const boxs = document.querySelectorAll(".box");
let drag = null;
btn.onclick = () => {
    if (input.value != "") {
        boxs[0].innerHTML += `<p class="item" draggable="true">${input.value}</p>`;
    }
    input.value = "";

    dragItem();
};

function dragItem() {
    let items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.addEventListener("dragstart", () => {
            drag = item;
            item.style.opacity = ".5";
        });
        item.addEventListener("dragend", () => {
            drag = null;
            item.style.opacity = "1";
        });
        boxs.forEach((box) => {
            box.addEventListener("dragover", (e) => {
                e.preventDefault();
                box.style.background = "#090";
            });
            box.addEventListener("dragleave", () => {
                box.style.background = "white";
            });
            box.addEventListener("drop", () => {
                box.appendChild(drag);
                box.style.background = "white";
            });
        });
    });
}
