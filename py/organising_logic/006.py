# Complete the program. The lights are blinking. Count how many times they are on.
lights_on = False
count = 0
for seconds in range(11):
  if lights_on:
    count += 1
  lights_on = not lights_on
print(count)
