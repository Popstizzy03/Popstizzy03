# Increase leaves by 5 when it's sunny and the plant is happy.
daily_weather = ["cloudy", "cloudy", "sunny", "sunny"]
leaves = 91
is_happy = False
for weather in daily_weather:
  if weather == "sunny" and is_happy:
    leaves += 5
  print("🌿", leaves)
  is_happy = not is_happy
