function writeCards(names, holiday) {
    const array = []
    for (let i = 0; i < names.length; i++) {
      let card = (`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
      array.push(card)
    }
    return array
};

function countDown(number) {
    let starting_number = number
    while (starting_number >= 0) { console.log(starting_number--) }
};

