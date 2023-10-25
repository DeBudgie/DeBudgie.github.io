/*Reload page*/
function refreshPage(){
  window.location.reload();
} 

/*Modal*/
let modal = document.getElementById("modalDialog");

let showModalButton = document.getElementById("showModal");

showModalButton.addEventListener("click", () => {
  modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});

/*Text adventure*/
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Hey Dee! Its been a while since we have caught up, how are you doing?',
    options: [
      {
        text: 'Hey Friend! It has been a while, Im doing pretty well, how about you?',
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    text: 'Thanks for asking, Im doing great! I Heard you took an interest in working with 3D.',
    options: [
      {
        text: 'Yes I have, Ive been exploring creating minimal interaction in the digital.',
        nextText: 3
      },
      {
        text: 'Yeah! I love crafting, so making a minimal Environment on my computer just makes sense.',
        nextText: 10
      },
    ]
  },
  {
    id: 3,
    text: 'Oh, interaction? Thats a pretty different partway from video editing.',
    options: [
      {
        text: 'It is, but if Im going to make a career working with computers, then I might as well get a deeper understanding of our interaction with them.',
        nextText: 4
      },
      {
        text: 'Your right, I cant see myself working with this kind of skillset but the theory behind it was very eye-opening.',
        nextText: 4
      },
    ]
  },
  {
    id: 4,
    text: 'Is that so, huh well I never thought about it like that. What kind of insight did you gain?',
    options: [
      {
        text: 'Bedroom',
        nextText: 5
      },
      {
        text: 'Digital interaction can be a great tool for reflecting on memories we no longer remember.',
        nextText: 10
      },
      {
        text: 'It is a helpful tool in wanting to inform users about colour In our world.',
        nextText: 10
      },
    ]
  },
  {
    id: 5,
    text: 'Add',
    options: [
      {
        text: 'Add',
        nextText: 6
      },
    ]
  },
  {
    id: 6,
    text: 'Add',
    options: [
      {
        text: 'Thttps://www.youtube.com/',
      },
    ]
  },
]

startGame()
