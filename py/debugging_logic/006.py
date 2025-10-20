# What happens when this code runs?
daily_visitors = ["🐝", None, "🐛", "🐛", None, "🐝", "🐝"]
daily_temps = [12, 18, 21, 14, 16, 22, 24]
flowers = 1
for visitor, temp in zip(daily_visitors, daily_temps):
  if temp >= 15:
    if visitor == "🐝":
      flowers += 3
    if visitor == "🐛":
      flowers -= 2
  print("Flowers:", flowers)
# Answer: Bees don't help the plant when it's cold
