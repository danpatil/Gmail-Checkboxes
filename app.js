const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastchecked;

function handleClick(e) {
    inBetween = false;
    if(e.shiftKey && this.checked) {
        // loop over all checkboxes
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastchecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastchecked = this;
}

checkboxes.forEach(box => box.addEventListener('click', handleClick));