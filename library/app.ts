enum Category {Biography, Poetry, Fiction, History, Children }

function GetAllBooks () {
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

// Demo1
/*LogFirstAvailable(GetAllBooks());
const poetryBooks: string[] = GetBookTitleByCategory(Category.Poetry);
LogTitles(poetryBooks);*/

//Demo2 functions default parameter values
/*LogFirstAvailable();
const fictionBooks:string[] = GetBookTitleByCategory();
fictionBooks.forEach((val,indx,arr) => console.log(++indx + " " + val));*/

// Demo3 Optional parameter
CreateCustomer("dev");
CreateCustomer("Dev",22);
CreateCustomer("Dev",22,"Pune");