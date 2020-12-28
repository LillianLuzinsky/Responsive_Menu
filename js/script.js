
//Get att the tabs
const tabs = document.querySelectorAll(".tab");

tabs.forEach(clickedTab => {
    //Add onClick event
    clickedTab.addEventListener('click', () => {
        //Remove the active class from all tabs
        tabs.forEach(tab => {
            tab.classList.remove("active");
        })
        //Add the active class on the clicked tab
        clickedTab.classList.add('active');
        const clickedTabBGColor = getComputedStyle(clickedTab).getPropertyValue('color');
        console.log(clickedTabBGColor);
        document.body.style.background = clickedTabBGColor;
    })
})