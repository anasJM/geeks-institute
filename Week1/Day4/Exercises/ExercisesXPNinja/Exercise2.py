def get_full_name(first_name, last_name, middle_name = None):
    if middle_name:
        fullname = f"{first_name} {middle_name} {last_name}"
    else:
        fullname = f"{first_name} {last_name}"

    return fullname

fullName1 = get_full_name(first_name="john", middle_name="hooker", last_name="lee")
print(fullName1)

fullName2 = get_full_name(first_name="bruce", last_name="lee")
print(fullName2)