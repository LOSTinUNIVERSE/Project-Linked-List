/* eslint-disable no-restricted-syntax */

const Node = (value) => ({ value })


function append(value,) {
    const newNode = Node(value)
    if (!this.head) {
        this.head = newNode
        this.tail = newNode
        this.tail.next = null
        this.number++
    }
    else {
        this.tail.next = newNode
        this.tail = newNode
        newNode.next = null
        this.number++
    }
    // console.log(this);
}
function prepend(value) {
    const newNode = Node(value)
    newNode.next = this.head
    this.head = newNode
    this.number++
    // console.log(this);
}
function count() { console.log(this.number) }
function showHead() { console.log(this.head) }
function showTail() { console.log(this.tail) }

let result = null

const findByIndex = function (value, number = 1, caller = this.head) {
    if (value > this.number) { value = this.number; }
    if (number <= value) {
        number++
        result = caller
        findByIndex(value, number, caller.next)
    }
    if (number == value) console.log(result);
}

function pop(value, number = 0, caller = this.head, parent = this) {
    if (number < value - 1) {
        number++
        if (number == value - 1) {
            caller.next = null
            parent.tail = caller
            parent.number -= 1
        }
        pop(value, number, caller.next, parent)
    }
}
const contains = function (itemToFind, value = this.number, number = 0, caller = this.head) {
    if (number < value) {
        number++
        if (caller.value == itemToFind) return console.log(true, number);;
        contains(itemToFind, value, number, caller.next)
    }
}
const find = function (itemToFind, value = this.number, number = 0, caller = this.head) {
    let findResult = null
    if (number < value) {
        number++
        if (caller.value == itemToFind) { findResult = number; }
        find(itemToFind, value, number, caller.next)
    }
    if (number == value) { console.log(findResult) }
}
const toString = function (value = this.number, number = 0, caller = this.head, string = '') {
    if (number < value) {
        number++
        string += ` (${caller.value}) -> `
        // console.log(string);
        toString(value, number, caller.next, string)
    }
    if (number == value) {
        string += 'null'
        return console.log(string);
    }
}
const LinkedList = () => ({
    head: null, number: 0, append,
    prepend, count, showHead,
    showTail, findByIndex, pop, contains,
    find, toString
})
const test2 = LinkedList()
// test2.append('a')
// test2.append('b')
// test2.append('c')
// test2.prepend('k')
// test2.pop(test2.number)
// test2.findByIndex(4)
// test2.contains('c')
// test2.find('c')
// test2.toString()
// console.log(test2.toString);
