daily_worms = [True, False, True, True, False]
daily_rain = [True, False, True, False, True]
for worms, rain in zip(daily_worms, daily_rain):
  if rain:
    print("rain", end = " ")
