const progressBar = document.querySelector('.progress-bar');

setInterval(() => {
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;

    if(width < 100) progressBar.style.setProperty('--width', width + 0.5);
}, 1);