#  Replace not (friend == "🐝" or friend == "🦋") with an equivalent condition.
daily_friends = ["?", "🐝", "?", "🦋", "?", "🦋", "🐝"]
flowers = 8
for friend in daily_friends:
  if friend != "🐝" and friend != "🦋":
    flowers += 1
  else:
    flowers += 3
  print(friend, "Flowers:", flowers)
