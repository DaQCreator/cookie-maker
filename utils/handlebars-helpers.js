// Funkcja pomocnicza generowana za pomocą {{upper "string"}} w .hbs
const handlebarsHelpers = {
  findPrice: (entries, selectedItem) => {
    const found = entries.find(el => el[0] === selectedItem);

    if (!found) {
      throw new Error(`Cannot find price of "${selectedItem}".`);
    }

    const [, price] = found;
    return price;

  },

  pricify: price => price.toFixed(2),

  isNotInArray: (array, element) => !array.includes(element),

  isInArray: (array, element) => array.includes(element),

  // Zaprzeczenie umożliwiające negację np. !#if
  not: arg => !arg,

};

module.exports = {
  handlebarsHelpers,
}
