# Toggle mode between happy and not happy
daily_weather = ["cloudy", "cloudy", "sunny", "sunny"]
is_happy = False
for weather in daily_weather:
  print(weather, is_happy)
  is_happy = not is_happy
