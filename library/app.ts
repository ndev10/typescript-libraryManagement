enum Category {Biography, Poetry, Fiction, History, Children }

function GetAllBooks () {
    let books = [
		{ title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
		{ title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
		{ title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
		{ title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }	
	];
	return books;
}

function LogFirstAvailable(books) : void {
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

function GetBookTitleByCategory(categoryFilter : Category) : Array<string> {
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

LogFirstAvailable(GetAllBooks());

const poetryBooks: string[] = GetBookTitleByCategory(Category.Fiction);
LogTitles(poetryBooks);
