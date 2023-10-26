#Scrolling Numbers
# Programming challerge description:
# You have been given a special kind of lock to open called a "Scrolling Combination Lock" The lock has 9 keys numbered from 1 to 9.
# Additionally, there are two numbers printed beow the keys suggesting a range of values. To open the lock, you must enter all the numbers in the range that are "Scatting Numbers"

# A Scrolling Number is a number that has two characterisitics:

# No digits repeat themselves.
# All digits in the number "scroll" through themselves.
# How To Scroll:

# Beginning with the leftmost digit, take that digit's value D and move D digits to the right. When scrolling, if the last digit of the number is reached, wrap back to the leftmost digit as many times as needed to move to total of D digits. After scrolling to a new digit, repeat the process using the new digits's value for D.

# A Scrolling Number will visit every digit exactly once and end at the leftmost digit.

# For example, consider the Scrolling Number 6231.

# Start with the digit 6.
# Advance 6 steps, wrapping around once, to the digit 3.
# From 3 advance to 2, again wrapping around once
# From 2 advance to 1
# From 1 advance to 6 in a final wrap
# Input:
# The input is the range of integers to consider for the lock, expressed in the format A, B
# Each integer A and B is 1 <= A <= B <= 10000.

# Output:
# Print all Scrolling Numbers between A and B inclusive, each on a single line. These are the combinations that will open the lock.

def scatteringNo(start, num):
  def scrolling(n):
    seen = set()
    moveSteps = 0
    
    while True:
      moveSteps = (moveSteps + int(n[moveSteps])) % len(n)

      if len(seen) == len(n):
        return True
      if n[moveSteps] in seen:
        return False
      
      seen.add(n[moveSteps])

  res = []
  for n in range(start, end + 1):
    s = str(n)
    if len(set(s) < len(s)):
      continue
    if scrolling(str(n)):
      res.append(n)

    return res

print(scatteringNo(100, 500))