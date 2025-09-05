class Book {
  constructor(author){
    this.author = author
  }

  get writer(){
    return this.author;
  }

  set writer (updatedWriter){
    this.author = updatedWriter;
  }
}

const chamber = new Book("chamber");
console.log(chamber.writer)
