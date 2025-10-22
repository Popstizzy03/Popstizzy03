# Complete the program. Salad (🥗) and beans (🫘) are vegetarian options. Count the number of vegetarian options in the basket.
basket = ["🥗", "🫘", "🍗", "🥗", "🍗"]
veggie_count = 0
for item in basket:
  if item == "🥗" or item == "🫘":
    veggie_count += 1
print ("Veggies", veggie_count)
