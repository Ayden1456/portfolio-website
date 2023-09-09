let colorSwitchingButton = document.getElementById('color-switch');
let root = document.querySelector(':root');
let color = "light";

const loadColors = (colors) => {
    for (const property of colors) {
        root.style.setProperty(...property);
    }
}


const changeColor = () => {
    if (color === "light") color = "dark";
    else if (color === "dark") color = "light";
    loadColors(colors[color]);
}

const changeIcon = () => {
    colorSwitchingButton.classList.remove(...colorSwitchingButton.classList);
    colorSwitchingButton.classList.add(color);
}

loadColors(colors['light']);
changeIcon();
colorSwitchingButton.addEventListener('click', () => { changeColor(); changeIcon(); });

