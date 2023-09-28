
//sentences
const text=["The rain was coming. Everyone thought this would be a good thing. It hadn't rained in months and the earth was dry as a bone. It wasn't a surprise that everyone thought a good rain was what was needed, but they never expected how much rain would actually arrive. Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day. She could feel it in her bones and it wasn't the way she wanted the day to begin.",
"I'm heading back to Colorado tomorrow after being down in Santa Barbara over the weekend for the festival there. I will be making October plans once there and will try to arrange so I'm back here for the birthday if possible. I'll let you know as soon as I know the doctor's appointment schedule and my flight plans. She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.",
"At that moment he had a thought that he'd never imagine he'd consider. I could just cheat, he thought, and that would solve the problem. He tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to. Stormi is a dog. She is dark grey and has long legs. Her eyes are expressive and are able to let her humans know what she is thinking. Her tongue is long, pink, and wet. Her long legs allow her to sprint after other dogs, people or bunnies. She can be a good dog, but also very bad. Her tail wags when happy or excited and hides between her back legs when she is bad. Stormi is a dog I love.",
"It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was. He ordered his regular breakfast. Two eggs sunnyside up, hash browns, and two strips of bacon. He continued to look at the menu wondering if this would be the day he added something new. This was also part of the routine. A few seconds of hesitation to see if something else would be added to the order before demuring and saying that would be all. It was the same exact meal that he had ordered every day for the past two years.",
"The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence. All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty.",
"The opened package of potato chips held the answer to the mystery. Both detectives looked at it but failed to realize it was the key to solve the crime. They passed by it assuming it was random trash ensuring that the case would never be solved. Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
"It was a simple green chair. There was nothing extraordinary about it or so it seemed. It was the type of chair one would pass without even noticing it was there, let alone what the actual color of it was. It was due to this common and unassuming appearance that few people actually stopped to sit in it and discover its magical powers. Her hair was a tangled mess which she tried to make presentable by putting in a lump on the top of her head. It didn't really work although it was a valiant attempt. While most people simply noticed the tangled mess on top of her head, what most people failed to understand that within the tangles mess was an entirely new year. That was her secret. She kept worlds on top of her head.",
"There are only three ways to make this work. The first is to let me take care of everything. The second is for you to take care of everything. The third is to split everything 50 / 50. I think the last option is the most preferable, but I'm certain it'll also mean the end of our marriage. It's never good to give them details, Janice told her sister. Always be a little vague and keep them guessing. Her sister listened intently and nodded in agreement. She didn't fully understand what her sister was saying but that didn't matter. She loved her so much that she would have agreed to whatever came out of her mouth.",
"The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future. After hunting for several hours, we finally saw a large seal sunning itself on a flat rock. I took one of the wooden clubs while Larry took the longer one. We slowly snuck up behind the seal until we were close enough to club it over its head. The seal slumped over and died. This seal would help us survive. We could eat the meat and fat. The fat could be burned in a shell for light and the fur could be used to make a blanket. We declared our first day of hunting a great success.",
"I checked in for the night at Out O The Way motel. What a bad choice that was. First I took a shower and a spider crawled out of the drain. Next, the towel rack fell down when I reached for the one small bath towel. This allowed the towel to fall halfway into the toilet. I tried to watch a movie, but the remote control was sticky and wouldn’t stop scrolling through the channels. I gave up for the night and crawled into bed. I stretched out my leg and felt something furry by my foot. Filled with fear, I reached down and to my surprise, I pulled out a raccoon skin pair of underwear. After my initial relief that it wasn’t alive, the image of a fat, ugly businessman wearing raccoon skin briefs filled my brain. I jumped out of the bed, threw my toothbrush into my bag, and sprinted towards my car. There wasn't a whole lot he could do at that moment. He played the situation again and again in his head looking at what he might have done differently to make the situation better. No matter how many times he relived the situation in his head, there was never really a good alternative course of action. There simply wasn't a whole lot he could have done in that particular moment."];

// generateRandomText();

const index= Math.floor([Math.random()*10]);
const sentences = text[index];


// code
let currentSentenceIndex = 0;
let startTime, endTime;
let timerInterval;

const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const speedElement = document.getElementById("speed");
const accuracyElement = document.getElementById("accuracy");
const resultElement = document.getElementById("result");
const retryButton = document.getElementById("retry-btn");


function startTest() {
  sentenceElement.innerHTML = sentences;
  inputElement.value = "";
  inputElement.disabled = false;
  inputElement.focus();
  startButton.disabled = true;
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);
  setTimeout(endTest, 30000); // End the test after 30 seconds
}


function updateTimer() {
  const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  const remainingTime = 30 - elapsedTime;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}


function endTest() {
  clearInterval(timerInterval);
  endTime = new Date();
  const elapsedTime = Math.floor((endTime - startTime) / 1000);
  const typedSentence = inputElement.value.trim();
  const correctSentence = sentenceElement.textContent.trim();
  
  let speed = 0;
  let typedWords = [];
  if(typedSentence != ""){
    typedWords = typedSentence.split(" ");
  }
  
  const correctWords = correctSentence.split(" ");
  console.log(correctWords);
  let correctCount = 0;
  let ind =0;
  typedWords.forEach((word, index) => {
    if (word === correctWords[index]) {
      correctCount++;
      ind =index;
    }
  });
  if(typedSentence != ""){
    speed = Math.floor(((correctCount) / 30) * 60);
  }
  const accuracy = (correctCount / typedWords.length  ) * 100;
  speedElement.textContent = speed;
  accuracyElement.textContent = accuracy.toFixed(2);
  resultElement.style.display = "block";
  retryButton.focus();
}

startButton.addEventListener("click", startTest);
retryButton.addEventListener("click", () => {
  resultElement.style.display = "none";
  startButton.disabled = false;
  inputElement.value = "";
});