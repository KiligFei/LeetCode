/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const str = x.toString();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};
// @lc code=end

