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
        nextText: 13
      },
    ]
  },
// Interaction Start //
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
        text: 'That simple interactions can create enjoyable work.',
        nextText: 5
      },
      {
        text: 'Digital interaction can be a great tool for reflecting on memories we no longer remember.',
        nextText: 7
      },
      {
        text: 'It is a helpful tool in wanting to inform users about colour In our world.',
        nextText: 11
      },
    ]
  },
  // Interaction End //
  // Bedroom Start //
  {
    id: 5,
    text: 'What kind of interaction did you link to an idea and further its meaning?',
    options: [
      {
        text: 'By using drag and drop, you can move digital items that represent heavy things in reality with ease!',
        nextText: 6
      },
      {
        text: 'Many decorative interactions offer a simple experience, I wanted to see how I could enhance the formula.',
        nextText: 6
      },
    ]
  },
  {
    id: 6,
    text: 'Ooo so what was the setting?',
    options: [
      {
        text: 'Check It out! (Please click Bedroom Scramble within the i button)',
      },
    ]
  },
// Bedroom End //
// Bottle Start //
  {
    id: 7,
    text: 'What kind of memory did you just so happen to magically remember for this work?',
    options: [
      {
        text: 'Well, I knew I went to Japan, but totally forgot all the tiny details.',
        nextText: 8
      },
      {
        text: 'I can only remember this experience through a digital camera so I wanted to reflect that.',
        nextText: 8
      },
      {
        text: 'I wasnt the same person back then. My perspective has changed, I will never be able to remember what my mind was thinking at the time.',
        nextText: 8
      },
    ]
  },
  {
    id: 8,
    text: 'Okay, so Im sensing there is a disconnect between your mind and body.',
    options: [
      {
        text: 'Exactly! Making it an interesting topic to introduce reflection on our past.',
        nextText: 9
      },
    ]
  },
  {
    id: 9,
    text: 'Interesting idea, now I am curious about what kind of interaction you made.',
    options: [
      {
        text: 'Well, you click some pearls to reveal their deeper layers.',
        nextText: 10
      },
    ]
  },
  {
    id: 10,
    text: 'What does that have to do with what we just talked about?',
    options: [
      {
        text: 'Yep… Ill just show you the work. (Please click Bottle within the i button)',
      },
    ]
  },
// Bottle End //
// Colour Start //
{
  id: 11,
  text: 'OH WAIT do you mean there is a colour the computer can make that we cant see!?',
  options: [
    {
      text: 'Probably, but how would I know? I am more interested in our colour fading.',
      nextText: 12
    },
    {
      text: 'Not sure, this work is more about our reality and how items dont come in many colours anymore.',
      nextText: 12
    },
  ]
},
{
  id: 12,
  text: 'I notice that too, so how did you show that?',
  options: [
    {
      text: 'By spinning shapes… yeah that makes no sense, it is better if you just look at it. (Please click Colour View within the i button)',
    },
  ]
},
// Colour End //
// Enviorment Start //
{
  id: 13,
  text: 'Thats pretty neat! Ive also seen a few videos that incorporate digital environments.',
  options: [
    {
      text: 'Exactly! In fact, I remember seeing a video with just that and being in complete awe, wondering how they did that!.',
      nextText: 14
    },
    {
      text: 'Right! I havent really found my style yet, so exploring other techniques is a great way to identify it!.',
      nextText: 14
    },
  ]
},
{
  id: 14,
  text: 'That makes a lot of sense, so tell me, what kind of settings did you make?',
  options: [
    {
      text: 'By creating a digital garden, I was able to reflect on how I perceive a memory.',
      nextText: 15
    },
    {
      text: 'Some aspects of reality can be scary, so why not make a fun environment to reflect on it.',
      nextText: 17
    },
    {
      text: 'Using ideas found in minimalism, I tried highlighting our presentence within a digital environment',
      nextText: 20
    },
  ]
},
// Enviorment End //
// Garden Start //
{
  id: 15,
  text: 'Oh okay, thats interesting! So you took a memory and recreated it?',
  options: [
    {
      text: 'Yes, and I went about exploring how it wont be the same as I remember it.',
      nextText: 16
    },
    {
      text: 'Yep, most memories are remembered through phones or videos, so why not try and remember it through a 3D space.',
      nextText: 16
    },
  ]
},
{
  id: 16,
  text: 'That makes a lot of sense considering we see the past in black and white thanks to film.',
  options: [
    {
      text: 'Exactly! Here let me show it to you. (Please click Garden within the i button)',
    },
  ]
},
// Garden End //
// Haircut Start //
{
  id: 17,
  text: 'So you are trying to expose people to their fears in the digital so they can face them in reality?',
  options: [
    {
      text: 'Not exactly, it is more about highlighting a mini-event that happens within a bigger one.',
      nextText: 18
    },
  ]
},
{
  id: 18,
  text: 'Alright so does it still help to calm nerves? Like its a tiny event in the grand scheme, It never really matters?',
  options: [
    {
      text: 'I guess it can, it is about having fun and trying again until you perfect the problem.',
      nextText: 19
    },
    {
      text: 'It is just a silly little experience that definitely can be interpreted as such. But unlike reality, you can undo the action.',
      nextText: 19
    },
    {
      text: 'Well, it showcases a memory many people might relate with so yeah interacting with it might get the user laughing along.',
      nextText: 19
    },
  ]
},
{
  id: 19,
  text: 'Sounds like fun! May I try?',
  options: [
    {
      text: 'Of course, here you go! (Please click Moving Haircut within the i button)',
    },
  ]
},
// Haircut End //
// World Start //
{
  id: 20,
  text: 'Thats funny I thought you didnt like minimalism?',
  options: [
    {
      text: 'That was before I knew the theory behind it.',
      nextText: 21
    },
    {
      text: 'I now know it is more than just black and white.',
      nextText: 21
    },
  ]
},
{
  id: 21,
  text: 'Huh well, I know the digital isnt real when I am playing a video game, what has that got to do with minimalism?',
  options: [
    {
      text: 'It is all about being aware and reflecting on your movement within the space.',
      nextText: 22
    },
    {
      text: 'Since it is a digital space, It can be coded to our will. We rarely stand back and appreciate that.',
      nextText: 22
    },
    {
      text: 'To indicate that not everything needs to be grand to be appreciated.',
      nextText: 22
    },
  ]
},
{
  id: 22,
  text: 'Thats good and all, but now I have to see what kind of environment you made with that information.',
  options: [
    {
      text: 'An empty world with a couple of cubes, where the shadows appear on the faces and change when the light moves.',
      nextText: 23
    },
  ]
},
{
  id: 23,
  text: 'You have me at a loss…',
  options: [
    {
      text: 'Let me just show you. (Please click World within the i button)',
    },
  ]
},
// World End //
]

startGame()
