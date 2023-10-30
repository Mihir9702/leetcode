from typing import List


def combinationSum(candidates, target):
    res = []

    def dfs(nums, target, path):
        if target < 0:
            return
        if target == 0:
            res.append(path)
            return
        for i in range(len(nums)):
            dfs(nums[i:], target - nums[i], path + [nums[i]])

    dfs(candidates, target, [])
    return res


print(combinationSum([2, 3, 6, 7], 7))
