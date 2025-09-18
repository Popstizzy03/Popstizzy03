# What happens if we reverse the order of the conditional chain?
daily_weather = ["cloudy", "cloudy", "sunny", "sunny"]
leaves = 91
is_happy = False
for weather in daily_weather:
  if weather == "sunny" or is_happy:
    leaves += 2
  elif weather == "sunny" and is_happy:
    leaves += 5
  print("🌿", leaves)
  is_happy = not is_happy
