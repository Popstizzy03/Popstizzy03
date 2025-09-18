# Complete the program. Turn off silent mode, and keep it off.
silent_mode = True
for minute in range(6):
  if silent_mode:
    print("silent")
  else:
    print("ring")
  # the completion part
  silent_mode = False
