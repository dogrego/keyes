const revealContent = document.querySelector('.content-holder');
const hideDescription = document.querySelector('.description');
const displayKeycode = document.querySelector('.content-holder .keycode');
const displayKey = document.querySelector('.card:nth-child(1) .event-description');
const displayCode = document.querySelector('.card:nth-child(2) .event-description');
const displayWhich = document.querySelector('.card:nth-child(3) .event-description');
const displayLocation = document.querySelector('.card:nth-child(4) .event-description');
const handleClick = document.querySelector('.cards')

window.addEventListener('keydown', (newKey) => {
  revealContent.classList.remove('hide');
  hideDescription.classList.add('hide');
  displayKeycode.innerHTML = newKey.keyCode;
  displayKey.innerHTML = newKey.key;
  displayCode.innerHTML = newKey.code;
  displayWhich.innerHTML = newKey.which;
  displayLocation.innerHTML = newKey.location;
  if (displayCode.innerHTML === 'Space') {
    displayKey.innerHTML = '⌴';
  }
})

  handleClick.addEventListener('click', (event) => {
    let parent = event.target.parentElement;
    let index = Array.prototype.indexOf.call(parent.children, event.target);
    if (event.target.parentElement.classList.contains('card')) {
      parent = event.target.parentElement.parentElement;
      index = Array.prototype.indexOf.call(parent.children, event.target.parentElement);
    }
    const textArea = document.createElement('textarea');
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'abssolute';
    if (document.querySelector('.card:nth-child(' + (index + 1) + ') .event-description').innerText === '⌴') {
      textArea.value = " ";
    } else {
      textArea.value = document.querySelector('.card:nth-child(' + (index + 1) + ') .event-description').innerText;
    }
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    document.querySelector('.card:nth-child(' + (index + 1) + ') .copy').innerText = 'Copied';
    setTimeout(() => {
      document.querySelector('.card:nth-child(' + (index + 1) + ') .copy').innerText = 'Click to Copy';
    },2000)
  })