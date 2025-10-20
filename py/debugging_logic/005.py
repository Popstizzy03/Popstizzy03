# Update line 7 so pests don't harm the plant when the temperature is below 15 °C.
daily_visitors = ["🐝", None, "🐛", "🐛", None, "🐝", "🐝"]
daily_temps = [12, 18, 21, 14, 16, 22, 24]
flowers = 1
for visitor in daily_visitors:
  if visitor == "🐝":
    flowers += 3:
  if visitor == "🐛" && if temp >= 15:
    flowers -= 2
  print("Flowers:", flowers)
