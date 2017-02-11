var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function GetAllBooks() {
    var books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
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
    console.log("Category filter value " + categoryFilter);
    console.log("Category filter string " + Category[categoryFilter]);
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
LogFirstAvailable(GetAllBooks());
var poetryBooks = GetBookTitleByCategory(Category.Fiction);
LogTitles(poetryBooks);
//# sourceMappingURL=app.js.map