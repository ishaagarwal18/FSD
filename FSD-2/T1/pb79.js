// Write a node.js script to create two listeners for a common event call 
// their respective callbacks. Print number of events associated with an 
// emitter. Remove one of the listeners & call remaining listners again. 
// Print number of remaining listners also

const EventEmitter = require('events');
const emitter = new EventEmitter();

const listener1 = () => {
    console.log("Listener 1 executed");
};

const listener2 = () => {
    console.log("Listener 2 executed");
};

emitter.on('myEvent', listener1);
emitter.on('myEvent', listener2);

console.log("Number of listeners:", emitter.listenerCount('myEvent'));

console.log("\nCalling all listeners:");
emitter.emit('myEvent');

emitter.removeListener('myEvent', listener1);

console.log("\nAfter removing listener1:");
console.log("Number of listeners:", emitter.listenerCount('myEvent'));

console.log("\nCalling remaining listeners:");
emitter.emit('myEvent');