const boxes = document.querySelectorAll(".box");

checkBoxes()
window.addEventListener("scroll", checkBoxes)


function checkBoxes() {
    const triggerPoint = (window.innerHeight / 5) * 4

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerPoint) {
            box.classList.add("show")

            // REMOVE ELSE IF YOU DONT WANT THEM TO MOVE BACK ON SCROLL UP
        } else {
            box.classList.remove("show")
        }
    })
}