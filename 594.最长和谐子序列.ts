/*
 * @lc app=leetcode.cn id=594 lang=typescript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
function findLHS(nums: number[]): number {
  const map = new Map();
  let res = 0;
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const key of map.keys()) {
    if (map.has(key + 1)) {
      res = Math.max(res, map.get(key) + map.get(key + 1));
    }
  }
  return res;
}
// @lc code=end
