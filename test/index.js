const data = require('./data');

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.createNew = function () {
    return new MyQueue();
};

MyQueue.prototype.push = function (x) {
    this.stack1.unshift(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // move from stack1 to stack2
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.unshift(this.stack1.shift());
        }
    }

    return this.stack2.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // move from stack1 to stack2
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.unshift(this.stack1.shift());
        }
    }

    return this.stack2[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// const result = run('{()}');

// console.log('result: ', result);

const obj = new MyQueue();

obj.push(1);
obj.push(2);
console.log(obj.peek());
console.log(obj.stack1, obj.stack2);
console.log(obj.push(3));
console.log(obj.stack1, obj.stack2);
console.log(obj.peek());