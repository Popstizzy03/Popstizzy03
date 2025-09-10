def get_user_name():
    name = input("Enter your name: ")
    return name

def greet_user(name):
    print(f"Hello, {name}! Welcome to Github.")

if __name__ == "__main__":
    user_name = get_user_name()

    greet_user(user_name)
