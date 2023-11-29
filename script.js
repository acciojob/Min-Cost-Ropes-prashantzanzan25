class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let smallestChildIndex = currentIndex;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
        smallestChildIndex = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
        smallestChildIndex = rightChildIndex;
      }

      if (currentIndex !== smallestChildIndex) {
        [this.heap[currentIndex], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[currentIndex]];
        currentIndex = smallestChildIndex;
      } else {
        break;
      }
    }
  }
}

function mincost(arr) {
  const minHeap = new MinHeap();

  // Insert all ropes into the min heap
  for (const ropeLength of arr) {
    minHeap.insert(ropeLength);
  }

  let totalCost = 0;

  // Connect ropes until only one is left
  while (!minHeap.isEmpty()) {
    const firstMin = minHeap.extractMin();
    const secondMin = minHeap.extractMin();

    const currentCost = firstMin + secondMin;
    totalCost += currentCost;

    if (!minHeap.isEmpty()) {
      minHeap.insert(currentCost);
    }
  }

  return totalCost;
}

module.exports = mincost;
