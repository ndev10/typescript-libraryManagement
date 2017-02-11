import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    
    name: string;
    email: string;
    department: string;
    
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class ReferenceItem {
    private _publisher;
    public static department: string = 'Research';

    constructor(public title: string, protected year: number) {
    }

    printItem() {
        console.log (`${this.title} was published in ${this.year} by publisher ${this.publisher}`);
        console.log(`Department is ${ReferenceItem.department}`);
    }

    get publisher (): string {
        return this._publisher;
    }

    set publisher(publisher: string) {
        this._publisher = publisher;
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
    
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }
    
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

export { UniversityLibrarian,ReferenceItem,Encyclopedia};