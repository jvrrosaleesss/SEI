const tracks = [
  "5sIBOrRLBI6ypREdEPj2wQ",
  "2vO1wr5wIEHqQmY4jWbuhi",
  "35hYk23wFUOsHoQfljbz80",
  "78jDZMtebvn4FgOd8NgZRO",
  "7x011H8oZwGYBuXQQfGpu4",
  "6N6q3sjuenff6vQpalPHuH",
  "4E5rL7YL0hVUPqeMSpjEF2",
  "3zwmW1gM4E8FlHXV5nE16u",
  "7wFEzF8FbofVlQS1OcbghM",
  "1sBTQCKkwXX8NPQE8qSqcP",
  "0aym2LBJBk9DAYuHHutrIl",
  "7iN1s7xHE4ifF5povM6A48",
  "0RXrJeprxWsCFM6iAdEApU",
  "7nb2hZWBxeG38lwcRjFqn4",
  "1XDhtruuYxKHxqXE3olScy",
  "6KGGhJoXrztLp8ZT91zizs",
  "12jjuxN1gxlm29cqL5M6MW",
  "0O7lENhqOySbsL743G7PqD",

  "26LELuiC7gAN0IjILbam2I",
  "0GIdaVAY3go0PhjNFmAyfA",
  "2EDXuNWn8sYH8k2KF8AmzP",
  "3MK6pVyk4dexZGlR7NokJr",
  "60cjWFWxGrR5ODt5bqxqIP",
  "2Z47ERn17AGWMwLUqGIq8b",
  "64HBLJQcr4KpIuCT9W72Fq",
  "2vPZ4Lklyu75zBR3SgbFNI"
];

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let order = JSON.parse(localStorage.getItem("order") || "null");
let index = parseInt(localStorage.getItem("index") || "0", 10);

if (!order || !Array.isArray(order) || order.length !== tracks.length) {
  order = shuffle(tracks);
  index = 0;
}

if (index >= order.length) {
  order = shuffle(tracks);
  index = 0;
}

const track = order[index];

localStorage.setItem("order", JSON.stringify(order));
localStorage.setItem("index", String(index + 1));

document.getElementById("player").innerHTML = `
<iframe style="border-radius:12px"
  src="https://open.spotify.com/embed/track/${track}"
  width="100%" height="152" frameborder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
</iframe>`;
