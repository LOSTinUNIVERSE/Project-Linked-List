
const Node = (value) => ({ value })


function append(value,) {
    const newNode = Node(value)
    if (!this.head) {
        this.head = newNode
        this.tail = newNode
        this.number++
    }
    else {
        this.tail.next = newNode
        this.tail = newNode
        this.number++
    }
}
function prepend(value) {
    const newNode = Node(value)
    newNode.next = this.head
    this.head = newNode
    this.number++
    console.log(this);
}
function count() { console.log(this.number) }
function showHead() { console.log(this.head) }
function showTail() { console.log(this.tail) }

const LinkedList = () => ({ head: null, number: 0, append, prepend, count, showHead, showTail })

const test2 = LinkedList()
test2.append('a')
test2.append('b')
test2.append('c')
test2.prepend('k')
// test2.count()
// test2.showHead()
// test2.showTail()

