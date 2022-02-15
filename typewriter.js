const sentence = "hello there from lighthouse labs";

let count = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count += 50)
};


