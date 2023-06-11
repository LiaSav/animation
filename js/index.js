const sketchPaths = document.querySelectorAll('.sketch__path');

for (let i = 0; i < sketchPaths.length; i++) {
    sketchPaths[i].style.cssText = `stroke-dasharray: ${Math.ceil(sketchPaths[i].getTotalLength())}px;
        stroke-dashoffset: ${Math.ceil(sketchPaths[i].getTotalLength())}px;
        animation: anim-line 2s ease forwards 1.5s;
    `;
};
