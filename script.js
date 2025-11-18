
const removeBtn = document.querySelector('input[type="button"]');

removeBtn.addEventListener("click", () => {
    const select = document.getElementById("colorSelect");

    const selectedIndex = select.selectedIndex;

    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
});
