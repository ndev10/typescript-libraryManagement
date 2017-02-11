"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Encyclopedia = (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear, edition) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: " + this.edition + " (" + this.year + ")");
    };
    return Encyclopedia;
}(ReferenceItem));
exports.Encyclopedia = Encyclopedia;
//# sourceMappingURL=classes.js.map