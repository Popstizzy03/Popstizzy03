# Replace the condition friend == "🐝" or friend == "🦋" with its negation.
daily_friends = ["?", "🐝", "?", "🦋", "?", "🦋", "🐝"]
flowers = 8
for friend in daily_friends:
  if not (friend == "🐝" or friend == "🦋)":
    flowers += 1
  else:
    flowers += 3
print(friend,"Flowers", flowers)
