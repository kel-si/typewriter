const sentence = "hello there from lighthouse labs";

let count = 0;
const lastChar = sentence.length * 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count += 50)
};

setInterval(() => {
  process.stdout.write("\n");
  process.exit();
}, lastChar);

