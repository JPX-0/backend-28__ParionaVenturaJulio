import process from "process";

const count = (qty) => { // 100000000
  const dataRandom = [];
  for(let i = 0; i < qty; i++) {
    dataRandom.push(Math.floor(Math.random() * 1000) + 1);
  }
  console.log("dataRandom: ", dataRandom);
  const dataRepeat = [];
  const dataObject = {};
  for (let i = 0; i < dataRandom.length; i++) {
    const elem = dataRandom[i];
    if(!dataRepeat.includes(elem)) {
      dataRepeat.push(elem);
      dataObject[`${elem}`] = 1;
    } else dataObject[`${elem}`]++;
  }
  console.log("dataRepeat: ", dataRepeat);
  console.log("dataObject: ", dataObject);
};
count(10);

process.on("data", () => {
  // console.log("data: ", data);
  count(1);
  process.send("a");
});