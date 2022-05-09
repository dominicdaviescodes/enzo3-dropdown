const dropdown = document.querySelector('.dropdown-btn');
const blocTop = document.querySelector('.bloc-top');
const allLinks = document.querySelectorAll('.bloc-links li');

// bit of a hack
const allDropHeight = `${dropdown.scrollHeight}px`
const blocTopHeight = `${blocTop.scrollHeight}px`
// default height before clicking
dropdown.style.height = blocTopHeight;

// toggle open/closed
dropdown.addEventListener('click', dropAnim);
// default is false, triggers 2nd option in function.
let toggleIndex = false;

function dropAnim() {
   toggleIndex ?
      (
         dropdown.style.height = blocTopHeight,
         toggleIndex = false
      )
      :
      (
         dropdown.style.height = allDropHeight,
         toggleIndex = true
      )
}