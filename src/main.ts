const viettel = ["032", "033", "034", "035", "036", "037", "038", "039"];
const mobiphone = ["070", "079", "077", "076", "078"];
const vinaphone = ["083", "084", "085", "081", "082"];
const phoneArray = [
  "0321234567",
  "0772234567",
  "0833234567",
  "0364234567",
  "0395234567",
  "0826234567",
];

const phonePrefix: string[] = [];
phoneArray.forEach((numb) => {
  phonePrefix.push(numb.substring(0, 3));
});

for (let phone = 0; phone < phonePrefix.length; phone++) {
  for (let provider = 0; provider < viettel.length; provider++) {
    if (phonePrefix[phone] === viettel[provider]) {
      console.log(`Số ${phoneArray[phone]} thuộc nhà mạng Viettel`);
    }
  }
  for (let provider = 0; provider < mobiphone.length; provider++) {
    if (phonePrefix[phone] === mobiphone[provider]) {
      console.log(`Số ${phoneArray[phone]} thuộc nhà mạng Mobiphone`);
    }
  }
  for (let provider = 0; provider < vinaphone.length; provider++) {
    if (phonePrefix[phone] === vinaphone[provider]) {
      console.log(`Số ${phoneArray[phone]} thuộc nhà mạng Vinaphone`);
    }
  }
}
