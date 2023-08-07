/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (map.has(diff)) {
      return [map.get(diff), i]
    }
    map.set(nums[i], i)
  }
  return Array.from(map) as []
}
// @lc code=end

const nums = [1,2,5,8,18]
const target = 20;
const arr = twoSum(nums,target)
console.log('🚀 ~ file: 1.两数之和.ts:24 ~ arr:', arr)

