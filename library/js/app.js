"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var enums_1 = require("./enums");
var classes_1 = require("./classes");
var encyclopedia_1 = require("./encyclopedia");
var utilityFunctions_1 = require("./lib/utilityFunctions");
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Number of Books : " + numberOfBooks);
    console.log("First Availabe book is " + firstAvailable);
}
function GetBookTitleByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log("Category filter value " + categoryFilter);
    console.log("Category filter string " + enums_1.Category[categoryFilter]);
    var filteredTitles = [];
    var allBooks = GetAllBooks();
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function CreateCustomer(name, age, city) {
    console.log("---------------------------");
    console.log("name is " + name);
    if (age) {
        console.log("age is " + age);
    }
    if (city) {
        console.log("city is " + city);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function GetCheckoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log("Checkout for customer " + customer);
    var booksCheckout = [];
    bookIds.forEach(function (bookId) {
        var book = GetBookById(bookId);
        if (book.available) {
            booksCheckout.push(book.title);
        }
    });
    return booksCheckout;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        // get all books by a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        // get all books based on specified availability
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
// Demo1: Inheritance
var encylopedia = new encyclopedia_1.default("Encyclopedia", 2000, 2);
encylopedia.printItem();
encylopedia.printCitation();
var Newspaper = (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_1.prototype.printCitation = function () {
        console.log("Newspaper: " + this.title);
    };
    return class_1;
}(classes_1.ReferenceItem));
// Demo2 Import functions as module.
var maxBookAllowed = utilityFunctions_1.MaxBooksAllowed(2);
console.log(maxBookAllowed);
var fee = utilityFunctions_1.CalculateLateFee(2);
console.log(fee);
var myPaper = new Newspaper('The Gazette', 2016);
myPaper.printCitation();
var Novel = (function (_super) {
    __extends(Novel, _super);
    function Novel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Novel;
}((function () {
    function class_2() {
    }
    return class_2;
}())));
var favoriteNovel = new Novel();
//# sourceMappingURL=app.js.map