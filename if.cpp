#include <iostream>

int main() {
    int number = 18;
    if (number > 0) {
        if (std::cout) {
            std::cout << "number is positive" << std::endl;
        } else {
            std::cerr << "Error: Output stream is in a bad state." << std::endl;
        }
    }

    return 0;
}
