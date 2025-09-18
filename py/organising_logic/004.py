# Increase leaves by 2 when it's either sunny or the plant is happy.
daily_weather = ["cloudy", "cloudy", "sunny", "sunny"]
leaves = 91
is_happy = False
for weather in daily_weather:
  if weather == "sunny" and is_happy:
    leaves += 5
  elif weather == "sunny" or is_happy:
    leaves += 2
  print("🌿", leaves)
  is_happy = not is_happy
