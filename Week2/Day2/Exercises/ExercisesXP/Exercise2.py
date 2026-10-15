my_list = [2, 3, 1, 2, "four", 42, 1, 5, 3, "imanumber"]

total = 0

for item in my_list:
    try:
        item = int(item)
        total += item
    except:
        pass

print(f"Total: {total}")
    