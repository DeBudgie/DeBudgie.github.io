/*Find text*/
function findText(e) {
  if (window.getSelection) {
    var selectedText = window.getSelection().toString();
    showText.innerHTML += " " + selectedText;
  }
  else if (document.selection) {
    document.selection.createRange(0).text;
  }
}

/*Reload page*/
function refreshPage(){
  window.location.reload();
} 

/*Modal - Code from worksheet*/
let modal = document.getElementById("modalDialog");

let showModalButton = document.getElementById("showModal");

showModalButton.addEventListener("click", () => {
  modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});

/*Random array - Code from worksheet*/
let randBFour = document.getElementById("nextStory");
let randEFour = document.getElementById("story");

randBFour.addEventListener("click", () => {
  randEFour.textContent = nameArray[getRandomIntRange(0, 9)];
});

let nameArray = [
  "The wooden doll had no peace. My dears, if ever you are a doll, hope to be a rag doll, or a wax doll, or a doll full of sawdust apt to ooze out, or a china doll easy to break—anything in the world rather than a good strong wooden doll with a painted head and movable joints, for that is indeed a sad thing to be. Many a time the poor wooden doll wished it were a tin train, or a box of soldiers, or a woolly lamb, or anything on earth rather than what it was. It never had any peace; it was taken up and put down at all manners of odd moments, made to go to bed when the children went to bed, to get up when they got up, be bathed when they were bathed, dressed when they were dressed, taken out in all weathers, stuffed into their satchels when they went to school, left about in corners, dropped on stairs, forgotten, neglected, bumped, banged, broken, glued together,—anything and everything it suffered, until many a time it said sadly enough to its poor little self, I might as well be a human being at once and be done with it! And then it fell to thinking about human beings; what strange creatures they were, always going about, though none carried them save when they were very little; always sleeping and waking, and eating and drinking, and laughing and crying, and talking and walking, and doing this and that and the other, never resting for long together, or seeming as if they could be still for even a single day. They are always making a noise, thought the wooden doll; they are always talking and walking about, always moving things and doing things, building up and pulling down, and making and unmaking for ever and for ever, and never are they quiet. It is lucky that we are not all human beings, or the world would be worn out in no time, and there would not be a corner left in which to rest a poor doll's head.",
  "They were all very sad, and the girl in the pink frock was crying bitterly, for they had been to the woods, and on the way home the wooden horse had fallen over on one side and broken off his head. Don't cry so, pray don't cry so, the little one said, as she knelt down in front of her sister, and tried to kiss her. And oh, sister, said the brother, it would have been far worse if he had lost his tail too. Besides, perhaps he does not mind much; it is not as if he were alive. Ah, yes, sobbed the tall girl. But when you are as old as I am you will know that it is a terrible thing to lose your head, even if it is only wooden.",
  "All the wood had been blue with violets, but now they were nearly gone. The birds sang louder and louder to keep them and to call them back, but soon there was not a violet left in all the wood from end to end. The snowdrops died, and the primrose faded, the cowslips and blue-bells vanished, the thorn grew white with blossom, the wild honeysuckle filled the wood with its fragrance, and soon the fruit began to ripen.",
  "The blackbirds and the swallows and the chaffinches, and all the birds they knew, gathered round the garden trees and bushes, and forgot the woods, until suddenly one day they espied a little child. She was sitting on a chair under a tree; she had a little table before her and a pink ribbon round her hat; she was eating fruit with a large silver spoon. The birds were afraid, and held aloof until a sparrow chirped and the child looked up, and when they saw how blue her eyes were, they sang out bravely and fluttered round her, thinking that she had brought them news from the violets. But she never looked up again, though the birds crowded on to the branch above her, and perched upon the table, and rubbed their little beaks against her plate. She just held on her hat with one hand, and with the other went on taking up fruit with a silver spoon. Ah, dear child, a swallow twittered, perhaps you do not know what is written in your eyes; so many of us carry secrets that we ourselves know last of all.",
  "Two little maids went out one day, And really it was shocking! They met poor Tommy on the way, With holes in either stocking. They sat down on a low stone seat, And to and fro kept rocking, While they knitted, swift and neat, Each of them a stocking. And sweet they sang a little song, The dickie-birds kept mocking; And Tommy wished that all day long They'd sit and knit a stocking.",
  "The children were very much puzzled what to do, for it was Midsummer-night, and they knew that there was a dream belonging to it; but how to come across it they could not tell. They knew that the dream had something to do with fairies, a queen, and all manner of lovely things; but that was all. At first they thought they would sit up with the doors and windows open, and the dog on the steps ready to bark if he saw anything unusual. Then they felt sure that they could not dream while they were wide-awake, so three of them went to bed, and one dozed in a corner of the porch, with her clothes on. Presently the dog barked, and two children in their night-gowns ran out to see, and one took off her night-cap and looked out of window; but it was only old Nurse coming back from a long gossip with the village blacksmith's wife and mother-in-law. So the dog looked foolish, and Nurse was angry, and put them all to bed without any more ado. Oh, they cried, but the fairies, and the queen, and the flowers! What shall we do to see them? Go to sleep, said Nurse, and the dream may come to you;—you can't go to a dream, she added, for you see she was just a peasant woman, and had never travelled far, or into any land but her own. So the children shut their eyes tightly and went to sleep, and I think that they saw something, for their eyes were very bright next morning, and one of them whispered to me, softly, The queen wore a wreath of flowers last night, dear mother, and, oh, she was very beautiful.",
  "My baby brother's fat, as fat As any boy can be, And he is just the sweetest duck That ever you did see. I count the dimples in his hands A dozen times a-day, And often wonder when he coos What he would like to say. I comb the down upon his head—He hasn't any hair,—It must be cold without, and yet He never seems to care. It is so nice to see him kick ,He has such pretty feet; I think if we might eat him up It would be quite a treat.",
  "It was the most tiresome kite in the world, always wagging its tail, shaking its ears, breaking its string, sitting down on the tops of houses, getting stuck in trees, entangled in hedges, flopping down on ponds, or lying flat on the grass, and refusing to rise higher than a yard from the ground. I have often sat and thought about that kite, and wondered who its father and mother were. Perhaps they were very poor people, just made of newspaper and little bits of common string knotted together, obliged to fly day and night for a living, and never able to give any time to their children or to bring them up properly. It was pretty, for it had a snow-white face, and pink and white ears; and, with these, no one, let alone a kite, could help being pretty. But though the kite was pretty, it was not good, and it did not prosper; it came to a bad end, oh! a terrible end indeed. It stuck itself on a roof one day, a common red roof with a broken chimney and three tiles missing. It stuck itself there, and it would not move; the children tugged and pulled and coaxed and cried, but still it would not move. At last they fetched a ladder, and had nearly reached it when suddenly the kite started and flew away—right away over the field and over the heath, and over the far far woods, and it never came back again—never—never. Dear, that is all. But I think sometimes that perhaps beyond the dark pines and the roaring sea the kite is flying still, on and on, farther and farther away, for ever and for ever.",
  "Get into the boat and away to the west, See-saw! see-saw! For they've cut down the tree with the poor linnet's nest, See-saw! see-saw! The bulrushes nod and the water-lilies sigh, See-saw! see-saw! And all of us know the sad reason why, See-saw! see-saw! For, oh! the tree—the tree's cut down, And every one of its leaves are brown; And in the field the children play, But the little linnet has flown away: Oh, dear! oh, dear! oh, dear!",
  "Let us write a book, they said; but what shall it be about? A fairy story, said the elder sister. A book about kings and queens, said the other. Oh, no, said the brother, let's write about animals. We will write about them all, they cried together. So they put the paper, and pens, and ink ready. The elder sister took up a fairy story and looked at it, and put it down again.",
  "Let us write a book, they said; but what shall it be about? A fairy story, said the elder sister. A book about kings and queens, said the other. Oh, no, said the brother, let's write about animals. We will write about them all, they cried together. So they put the paper, and pens, and ink ready. The elder sister took up a fairy story and looked at it, and put it down again. I have never known any fairies, she said, except in books; but, of course, it would not do to put one book inside another—anyone could do that. I shall not begin to-day, the little one said, for I must know a few kings and queens before I write about them, or I may say something foolish. I shall write about the pig, and the pony, and the white rabbit, said the brother; but first I must think a bit. It would never do to write a book without thinking. Then the elder sister took up the fairy story again, to see how many things were left out, for those, she thought, would do to go into her book. The little one said to herself, Really, it is no good thinking about kings and queens until I have known some, so I must wait; and while the brother was considering about the pig, and the pony, and the white rabbit, he fell asleep. So the book is not written yet, but when it is we shall know a great deal.",
  "The sandy cat sat by the kitchen fire. Yesterday it had had no supper; this morning everyone had forgotten it. All night it had caught no mice; all day as yet it had tasted no milk. A little grey mouse, a saucerful of milk, a few fish or chicken bones, would have satisfied it; but no grey mouse, with its soft stringy tail behind it, ran across the floor; no milk was near, no chicken bones, no fish, no anything. The serving-maid had been washing clothes, and was hanging them out to dry. The children had loitered on their way to school, and were wondering what the master would say to them. The father had gone to the fair to help a neighbour to choose a horse. The mother sat making a patchwork quilt. No one thought of the sandy cat; it sat by the fire alone and hungry. At last the clothes were all a-drying, the children had been scolded, and sat learning a lesson for the morrow. The father came from the fair, and the patchwork quilt was put away. The serving-maid put on a white apron with a frill, and a clean cap, then taking the sandy cat in her arms, said, Kitty, shall we go into the garden? So they went and walked up and down, up and down the pathway, till at last they stopped before a rose tree; the serving-maid held up the cat to smell the roses, but with one long bound it leaped from her arms and away—away—away. Whither? Ah, dear children, I cannot tell, for I was not there to see; but if ever you are a sandy cat you will know that it is a terrible thing to be asked to smell roses when you are longing for a saucerful of milk and a grey mouse with a soft stringy tail."
];

let usedNameArray = [];

function displayArray(){
  shuffleArray(nameArray);
  listP1.innerHTML = nameArray;
  listP1.innerHTML = nameArray.shift();
  let newName = nameArray.shift();
  listP1.innerHTML = newName;
  usedNameArray.push(newName);
  if(nameArray.length > 0){
    let newName = nameArray.shift();
    randEFour.textContent = newName;
    usedNameArray.push(newName);
  } else {
    nameArray = usedNameArray;
    usedNameArray = [];
    let newName = nameArray.shift();
    randEFour.textContent = newName;
    usedNameArray.push(newName);
  }
  console.log(nameArray);
  console.log(usedNameArray);
}

function getRandomIntRange(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function shuffleArray(array){
  array.sort(() => Math.random() - 0.5);
}
