const sanitizeTitle = (data, index) => {
  const sansAccent = (dat) => {
    var accent = [
      /[\300-\306]/g,
      /[\340-\346]/g, // A, a
      /[\310-\313]/g,
      /[\350-\353]/g, // E, e
      /[\314-\317]/g,
      /[\354-\357]/g, // I, i
      /[\322-\330]/g,
      /[\362-\370]/g, // O, o
      /[\331-\334]/g,
      /[\371-\374]/g, // U, u
      /[\321]/g,
      /[\361]/g, // N, n
      /[\307]/g,
      /[\347]/g, // C, c
    ];
    var noaccent = [
      "A",
      "a",
      "E",
      "e",
      "I",
      "i",
      "O",
      "o",
      "U",
      "u",
      "N",
      "n",
      "C",
      "c",
    ];

    let str = dat;
    for (var i = 0; i < accent.length; i++) {
      str = str.replace(accent[i], noaccent[i]);
    }

    return str;
  };
  const stro = data.toLowerCase();
  let tot = [];
  const newData = stro.split(" ");
  for (let elem of newData) {
    if (elem !== "-") {
      tot.push(elem);
    }
  }
  const final = tot.join("-");
  //console.log(f);
  const sanit = sansAccent(final);
  return sanit;
};

export default sanitizeTitle;
