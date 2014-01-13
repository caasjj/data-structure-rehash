var expect = chai.expect;
var assert = chai.assert;

describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    assert.isFalse(linkedList.contains(4));
  });

  it("should remove the tail", function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.removeTail();
    assert.isFalse(linkedList.contains(2));
    expect(linkedList.tail.next).to.equal(null);
  });

  it("should add a value to the head", function() {
    linkedList.addToTail(1);
    linkedList.addToHead(5);
    linkedList.addToHead(3);
    expect(linkedList.head.value).to.equal(3);
    expect(linkedList.head.next.value).to.equal(5);
    expect(linkedList.head.next.next.value).to.equal(1);
    expect(linkedList.tail.value).to.equal(1);
  });

  it("should insert a node between two nodes", function() {
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    linkedList.insertAfter(linkedList.head, 8);
    linkedList.insertAfter(linkedList.head.next, 9);
    linkedList.insertAfter(linkedList.tail, 10);
    expect(linkedList.head.value).to.equal(5);
    expect(linkedList.head.next.value).to.equal(8);
    expect(linkedList.head.next.next.value).to.equal(9);
    expect(linkedList.tail.value).to.equal(10);
    expect(linkedList.tail.previous.value).to.equal(7);
  })

  // add more tests here to test the functionality of linkedList
});
