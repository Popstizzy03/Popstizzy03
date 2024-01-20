#include <iostream>
#include <string>
#include <sstream> 
double performOperation(double num1, double num2, char operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 != 0) {
                return num1 / num2;
            } else {
                std::cerr << "Error: Division by zero." << std::endl;
                return 0.0;
            }
        default:
            std::cerr << "Error: Invalid operation." << std::endl;
            return 0.0;
    }
}

int main() {
    std::cout << "Welcome to the Arithmetic Tutor <Enter exit to quit>" << std::endl;

    while (true) {
        std::string input;
        std::cout << "Enter an arithmetic expression (e.g., 2 + 3): ";
        std::getline(std::cin, input);

        if (input == "exit") {
            std::cout << "Goodbye!" << std::endl;
            break;
        }

        double num1, num2;
        char operation;
        std::istringstream iss(input);
        iss >> num1 >> operation >> num2;
        if (iss.fail()) {
            std::cerr << "Error: Invalid input format. Try again." << std::endl;
            continue;
        }

        double result = performOperation(num1, num2, operation);

        std::cout << "Result: " << result << std::endl;
    }

    return 0;
}
