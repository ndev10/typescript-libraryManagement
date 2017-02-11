import { Category } from './enums';
import { Book,DamageLogger,Author,Librarian } from './interfaces';
import { UniversityLibrarian,ReferenceItem } from './classes';
import refBook from './encyclopedia';
import { CalculateLateFee as CalcFee, MaxBooksAllowed } from './lib/utilityFunctions';
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


// Demo1: Inheritance
let encylopedia = new refBook("Encyclopedia",2000,2);
encylopedia.printItem();
encylopedia.printCitation();

let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
}

// Demo2 Import functions as module.

let maxBookAllowed: number = MaxBooksAllowed(2);
console.log(maxBookAllowed);

let fee: number = CalcFee(2);
console.log(fee);

let myPaper = new Newspaper('The Gazette', 2016);
myPaper.printCitation();

class Novel extends class { title: string } {
    mainCharacter: string;
}

let favoriteNovel = new Novel();