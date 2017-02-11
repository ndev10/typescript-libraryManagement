import { Category } from './enums';
import { Book,DamageLogger,Author,Librarian,Magazine } from './interfaces';
import { UniversityLibrarian,ReferenceItem } from './classes';
import refBook from './encyclopedia';
import { CalculateLateFee as CalcFee, MaxBooksAllowed,Purge } from './lib/utilityFunctions';
import Shelf from './shelf';
function GetAllBooks () : Book[] {
    let books = [
		{ id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
		{ id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
		{ id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
		{ id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }	
	];
	return books;
}

function LogFirstAvailable(books = GetAllBooks()) : void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
   
    
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Number of Books : " + numberOfBooks)
    console.log("First Availabe book is " + firstAvailable);
}

function GetBookTitleByCategory(categoryFilter : Category = Category.Fiction) : Array<string> {
    console.log("Category filter value " + categoryFilter);
    console.log("Category filter string " + Category[categoryFilter]);

    const filteredTitles = [];
    const allBooks = GetAllBooks();
    for (let currentBook of allBooks) {
       if(currentBook.category === categoryFilter) {
			filteredTitles.push(currentBook.title);
		}
    }

    return filteredTitles;
}

function LogTitles(titles : string[]) {
    for (let title of titles) {
        console.log(title);
    }
}

function CreateCustomer(name: string, age?: number, city?: string) : void {
    console.log("---------------------------");
    console.log("name is " + name);

    if (age) {
        console.log("age is " + age);
    }

     if (city) {
        console.log("city is " + city);
    }
}

function GetBookById(id: number) : Book {
    const allBooks= GetAllBooks();
    return allBooks.filter(book => book.id === id) [0];
}

function GetCheckoutBooks(customer: string, ... bookIds: number[]): string[] {
    console.log("Checkout for customer " + customer);

    let booksCheckout: string[] = [];

    bookIds.forEach(bookId => {
        let book = GetBookById(bookId);
        if (book.available) {
            booksCheckout.push(book.title);
        }
    });

    return booksCheckout;

}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
	const allBooks = GetAllBooks();
	const foundTitles: string[] = [];
	
	if(typeof bookProperty == 'string') {
		// get all books by a particular author
		for(let book of allBooks) {
			if(book.author === bookProperty) {
				foundTitles.push(book.title);
			}
		}
	}
	
	else if(typeof bookProperty == 'boolean') {
		// get all books based on specified availability
		for(let book of allBooks) {
			if(book.available === bookProperty) {
				foundTitles.push(book.title);
			}
		}
	}
	return foundTitles;
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

let inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }];


// Demo 1 Generic Arrays
/*let purgedBooks: Array<Book> = Purge(inventory);
purgedBooks.forEach(book => console.log(book.title));

let purgedNums: Array<number> = Purge<number>([1, 2, 3, 4]);
console.log(purgedNums);*/

// Demo2 Generic Classes
let bookShelf: Shelf<Book> = new Shelf<Book>();

inventory.forEach(book => bookShelf.add(book));
let firstBook: Book = bookShelf.getFirst();
bookShelf.printTitles();
let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);

let magazines: Array<Magazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
let firstMagazine: Magazine = magazineShelf.getFirst();
let magazine = magazineShelf.find('Five Points');
console.log(`${magazine.title} (${magazine.publisher})`);
