/**
  There are n pieces arranged in a line, and each piece is colored either by 'A' or by 'B'. You are given a string colors of length n where colors[i] is the color of the ith piece.
  Alice and Bob are playing a game where they take alternating turns removing pieces from the line. In this game, Alice moves first.
  Alice is only allowed to remove a piece colored 'A' if both its neighbors are also colored 'A'. She is not allowed to remove pieces that are colored 'B'.
  Bob is only allowed to remove a piece colored 'B' if both its neighbors are also colored 'B'. He is not allowed to remove pieces that are colored 'A'.
  Alice and Bob cannot remove pieces from the edge of the line.
  If a player cannot make a move on their turn, that player loses and the other player wins.
  Assuming Alice and Bob play optimally, return true if Alice wins, or return false if Bob wins.

  @param {string} colors
  @return {boolean}
 */

function winnerOfGame(colors) {
  let aCount = 0;
  let bCount = 0;

  for (let i = 1; i < colors.length - 1; i++) {
    const prev = colors[i - 1];
    const curr = colors[i];
    const next = colors[i + 1];

    if (curr === "A" && prev === "A" && next === "A") aCount++;
    if (curr === "B" && prev === "B" && next === "B") bCount++;
  }

  return aCount > bCount;
}

console.log(winnerOfGame("AAABABB"));

/**
 * Write a function that accepts a String as an argument
 * The function should capitalize ONLY every other letter in the String
 * The function should then return the converted string
 *
 * @param {String} word
 * @returns {String}
 */
function q1(word) {
  const letters = word.split("");
  const upperCasedLetters = letters.map((letter, i) => {
    if (i % 2 == 0) return letter.toUpperCase();
    else return letter.toLowerCase();
  });
  return upperCasedLetters.join("");
}

console.log(q1("word"));
console.log(q1("myWOrd"));
console.log(q1("12345"));

function removeElement(nums) {
  let uniqueIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  nums.splice(uniqueIndex + 1);
  return nums.splice(uniqueIndex);
}

console.log(removeElement([1, 2, 2, 3, 3, 4]));

function majorityElement(nums) {
  const numsSet = new Set(nums);
  const counts = [];
  let count = 0;
  for (const num of numsSet) {
    for (const n of nums) {
      if (n === num) {
        count++;
      }
    }
    counts.push({ num: num, count: count / 2 });
    count = 0;
  }

  counts.sort((a, b) => (a.count > b.count ? 1 : a.count < b.count ? -1 : 0));
  const lastNum = counts[counts.length - 1].num;

  return lastNum;
}

console.log(
  majorityElement([
    1000000000, 1000000000, -1000000000, -1000000000, -1000000000,
  ])
);

/**
 *  You are given an array prices where prices[i] is the price of a given stock on the ith day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    @param {number[]} prices
    @return {number}
 */
const maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const currentProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
};

/**
 * 
  You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
  On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
  Find and return the maximum profit you can achieve.

  @param {number[]} prices
  @return {number}
*/
const maxProfitII = function (prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const prevPrice = prices[i - 1];
    const currentProfit = currentPrice - prevPrice;
    if (currentProfit > 0) maxProfit += currentProfit;
  }

  return maxProfit;
};

/**
 * 
    You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
    Return true if you can reach the last index, or false otherwise.

  * @param {number[]} nums 
    @return {boolean}
 */
function canJump(nums) {
  let maxJump = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxJump < i) return false;
    maxJump = Math.max(maxJump, i + nums[i]);
  }
  return true;
}

console.log(canJump([2, 5, 0, 0]));

/**
 * 
    You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
    Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
    Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

    @param {number[]} nums
    @return {number}
*/
const jump = function (nums) {
  let jumps = 0;
  let currentJumpEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentJumpEnd) {
      jumps++;
      currentJumpEnd = farthest;
    }
  }

  return jumps;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));

function recode(str) {
  // "aaabbcc" -> { a: 3,  b: 2,  c: 2 } -> "a3b2c2"

  let map = {};
  let code = "";

  for (const char of str) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (const char in map) {
    code += char + map[char];
  }

  return code;
}

console.log(recode("aaabbcc"));
console.log(recode("aabbbccc"));

function rotateArray(nums, k) {
  for (let i = 0; i < k; i++) {
    const lastNum = nums.pop();
    nums.unshift(lastNum);
  }

  return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
function strStr(haystack, needle) {
  if (needle === "") return -1;
  if (haystack === needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    const currentChar = haystack[i];
    if (currentChar === needle[0]) {
      const subStr = haystack.substring(i, i + needle.length);
      if (subStr === needle) return i;
    }
  }

  return -1;
}

// two pointers / sliding window
function reverseWords(s) {
  let words = s.trim().split(" ");
  for (let i = 0, j = words.length - 1; i < j; i++, j--) {
    const temp = words[i];
    words[i] = words[j];
    words[j] = temp;
  }

  let str = "";

  words.forEach((word, i) => {
    if (word.length === 0) return;
    if (i === words.length - 1) {
      str += word;
    } else {
      str += word + " ";
    }
  });

  return str;
}

console.log(reverseWords("  hello world  "));

// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

function hIndex(citations) {
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) return i;
  }

  return citations.length;
}

// Two Sum II - Index is Sorted
// - two pointers, left & right incrementing or decrementing based off difference
function twoSum(numbers, target) {
  let n = numbers.length;
  let l = 0,
    r = n - 1;

  for (l, r; l < r; ) {
    let sum = numbers[l] + numbers[r];
    if (sum === target) return [++l, ++r];
    else sum > target ? r-- : l++;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));

const MergeSort = {
  sortList: (head) => {
    if (!head && !head.next) return head;

    // split
    let left = head;
    let right = getMid(head);
    let tmp = right.next;
    right.next = null;
    right = tmp;

    left = this.sortList(left);
    right = this.sortList(right);

    return this.merge(left, right);
  },

  getMid: (head) => {
    let slow = head,
      fast = head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  },

  merge: (left, right) => {
    let dummy = new ListNode();
    let tail = dummy;

    while (left && right) {
      if (left.val < right.val) {
        tail.next = left;
        left = left.next;
      } else {
        tail.next = right;
        right = right.next;
      }
      tail = tail.next;
    }

    if (left) tail.next = left;
    if (right) tail.next = right;

    return dummy.next;
  },
};

let strs = ["Users", "Desktop", "..", "Documents"];
let stack = [];
for (const str of strs) {
  if (str === "..") stack.pop();
  else stack.push(str);
}
console.log(stack);

/**
 * Given word, return the next alphabetically greater
 * string in all permutations of that word. If there is no
 * greater permutation, return the string 'no answer' instead.
 *
 * Ex. word = 'baca'
 * [aabc, aacb, abac, abca, acab, acba, baac, baca, bcaa, caab, caba, cbaa]
 * * temp = a
 * * baca - > bcca -> bcaa
 * * i = 2, j = 3
 * *
 * next greater permutation: 'bcaa'
 *
 * @param {String} word
 * @return {String}
 */
function nextPermutation(word) {
  // sliding window javascript
  word = word.split("");
  // ['b', 'c', 'a', 'a']

  // ! this doesn't work
  for (let i = 1, j = i + 1; j < word.length; i++, j++) {
    let temp = word[i];
    word[i] = word[j];
    word[j] = temp;
  }
  // 'bcaa'
  return word.join("");
}

console.log(nextPermutation("baca"));
