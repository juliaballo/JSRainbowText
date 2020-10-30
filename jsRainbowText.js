const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const letters = document.getElementsByTagName("span");
for (let i = 0; i < colors.length; i++) {
    letters[i].style.color = colors[i];
}