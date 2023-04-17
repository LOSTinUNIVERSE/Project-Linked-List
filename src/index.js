
const Node = (value) => ({ value })


function append(value,) {
    let newNode = Node(value)
    if (!this.head) {
        this.head = newNode
        newNode.next = null
        const lastChild = newNode
        this.lastChild = lastChild
    }

    else {
        newNode = this.lastChild
    }
}
const LinkedList = () => ({ head: null, append })

const test2 = LinkedList()
test2.append('g')
test2.append('b')
// test2.append('bbb')

console.log(test2);
