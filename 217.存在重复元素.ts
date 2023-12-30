/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const map = new Map()
  for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i])){
      return true
    }else{
      map.set(nums[i], i)
    }
  }
  return false
};
// @lc code=end

