const scriptContent = `
    JavaScript is a versatile language. Many developers use JavaScript for web development.
    JavaScript can be used both on the client side and server side.`;
const regex = /JavaScript/gi;

const matches = [...scriptContent.matchAll(regex)];

matches.forEach((match) => {
  console.log("Match found:", match[0]);
});

const digitScriptContent = "234 klknknkn 23423 nnnnn 2 jiii 1 nnnnn 3 nknkn 4";
let matches2 = [...digitScriptContent.matchAll(/\d+/g)];

matches2.forEach((match) => {
  console.log("Match found:", match[0]);
});
// match all word in string starting with Capital letter
const regex2 = /\b[A-Z]\w*/g;
const matches3 = [...scriptContent.matchAll(regex2)];
matches3.forEach((match) => {
  console.log("Match found:", match[0]);
});
// match one or more digits
const regex3 = /\d+/g;
const matches4 = [...digitScriptContent.matchAll(regex3)];
matches4.forEach((match) => {
  console.log("Match found:", match[0]);
});

// sample phonumber
const phoneNumber = "(123) 456-7890";
const regex1 = /\((\d{3})\) (\d{3})-(\d{4})/;
const match = phoneNumber.match(regex1);
if (match) {
  console.log("match found:", match[0]);
  console.log("match group 1:", match[1]);
  console.log("match group 2:", match[2]);
  console.log("match group 3:", match[3]);
} else {
  console.log("no match found");
}
const email = "abc@gmail.com";
// capture domain name and username
const regex4 = /(\w+)@(\w+)\.com/;
const match2 = email.match(regex4);
if (match2) {
  console.log("match found:", match2[1]);
  console.log("match group 2:", match2[2]);
}
// match word if it is at the beginning of the string
const wordRegex = /^\w+/;
const match3 = email.match(wordRegex);
if (match3) {
  console.log("match found:", match3[0]);
}
// match word if it is at the end of the string
const wordRegex2 = /\w+$/;
const match4 = email.match(wordRegex2);
if (match4) {
  console.log("match found:", match4[0]);
}


// validate password at least one uppercase letter
const password = "password123";
if (password.match(/[A-Z]/)) {
  console.log("password is valid");
} else {
  console.log("password is invalid");
}
// validate URL
const url = "https://www.google.com";
if (url.match(/^https?:\/\//)) {
  console.log("url is valid");
} else {
  console.log("url is invalid");
}