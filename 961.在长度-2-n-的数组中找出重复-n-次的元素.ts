/*
 * @lc app=leetcode.cn id=961 lang=typescript
 *
 * [961] 在长度 2N 的数组中找出重复 N 次的元素
 */

// @lc code=start
function repeatedNTimes(nums: number[]): number {
  const count = nums.length / 2;
  const map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  for (let [key, value] of map.entries()) {
    if (value === count) {
      return key;
    }
  }
}
// @lc code=end
