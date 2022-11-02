const myEvent = new Event('myCustomEvent', { cancelable: false, bubbles: true});
const button = document.querySelector("#btn-1");

button.addEventListener("myCustomEvent", e => {
    console.log("Button", e.defaultPrevented);
    e.preventDefault();
});

document.addEventListener("myCustomEvent", e => {
    console.log("Document", e.defaultPrevented);
})

button.dispatchEvent(myEvent);

// ------------------------

const myEvent2 = new CustomEvent("myCustomEvent2", { detail: { hello: "World" }});
const button2 = document.querySelector("#btn-2");

button2.addEventListener("myCustomEvent2", e => {   
    console.log("Button", e.detail); 
});

button2.dispatchEvent(myEvent2);

// ------------------------

const button3 = document.querySelector("#btn-3");
const MAX_DOUBLE_CLICK_TIME = 500;
let lastClick = 0;

button3.addEventListener("custom:doubleClick", e => {
    console.log("Double click", e.detail.timeBetweenClicks);        
});

button3.addEventListener('click', e => {
    const timeBetweenClicks = e.timeStamp - lastClick;
    if(timeBetweenClicks > MAX_DOUBLE_CLICK_TIME){
        lastClick = e.timeStamp;
        return;
    }

    const doubleClickEvent = new CustomEvent("custom:doubleClick", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
            timeBetweenClicks
        },
    });

    e.target.dispatchEvent(doubleClickEvent);
    lastClick = 0;
});