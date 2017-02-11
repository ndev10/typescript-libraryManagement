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
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
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
    if (categoryFilter === void 0) { categoryFilter = Category.Fiction; }
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
// Demo1
/*LogFirstAvailable(GetAllBooks());
const poetryBooks: string[] = GetBookTitleByCategory(Category.Poetry);
LogTitles(poetryBooks);*/
//Demo2 functions default parameter values
/*LogFirstAvailable();
const fictionBooks:string[] = GetBookTitleByCategory();
fictionBooks.forEach((val,indx,arr) => console.log(++indx + " " + val));*/
// Demo3 Optional parameter
/*CreateCustomer("dev");
CreateCustomer("Dev",22);
CreateCustomer("Dev",22,"Pune");*/
// Demo4 var args 
/*const checkoutBooks: string[] = GetCheckoutBooks("Lib1",1,2,3);
checkoutBooks.forEach(title => console.log(title));*/
// Demo5 lamdas exmpamle
/*let IdGenerator : (chars: string, nums: number) => string;
IdGenerator = (name:string, id:number) => id + name;

let myId = IdGenerator("dev",123);
console.log(myId);*/
// Demo 6 method overloading
//let checkedOutBooks = GetTitles('false');
var checkedOutBooks = GetTitles('James Joyce');
checkedOutBooks.forEach(function (title) { return console.log(title); });
//# sourceMappingURL=app.js.map