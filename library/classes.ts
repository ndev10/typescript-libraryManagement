import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    
    name: string;
    email: string;
    department: string;
    
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

class ReferenceItem {
    private _publisher;
    public static department: string = 'Research';

    constructor(public title: string, private year: number) {
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
}

export { UniversityLibrarian,ReferenceItem};