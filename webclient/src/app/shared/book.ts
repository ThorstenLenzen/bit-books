export class Book {

  // Book-Factory
  static empty(): Book {
    return new Book('000', '', '');
  }

  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public rating = 0
  ) {
  }

  rateUp() {
    if (this.rating < 5) {
      this.rating++;
    }
  }

  rateDown() {
    if (this.rating > 0) {
      this.rating--;
    }
  }
}
