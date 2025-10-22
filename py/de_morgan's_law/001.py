# Increase flowers by 3 if a bee (🐝) or a butterfly (🦋) visits. Otherwise increase by 1.
daily_friends = ["?", "🐝", "?", "🦋", "?", "🦋", "🐝"]
flowers = 8
for friend in daily_friends:
  if friend == "🐝" or friend == "🦋":
    flowers += 3
  else:
    flowers += 1
print(friend,"Flowers:", flowers)
