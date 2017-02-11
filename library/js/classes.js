"use strict";
var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + " by publisher " + this.publisher);
        console.log("Department is " + ReferenceItem.department);
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher;
        },
        set: function (publisher) {
            this._publisher = publisher;
        },
        enumerable: true,
        configurable: true
    });
    return ReferenceItem;
}());
ReferenceItem.department = 'Research';
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map