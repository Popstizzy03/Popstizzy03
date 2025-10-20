# Loop through both lists at once to write less code
daily_visitors = ["🐝", None, "🐛", "🐛", None, "🐝", "🐝"]
daily_temps = [12, 18, 21, 14, 16, 22, 24]

flowers = 1
for visitor, temp in zip(daily_visitors, daily_temps):
  if visitor == "🐝":
    flowers += 3:
  else:
    flowers -= 2
print("Flowers:", flowers)
