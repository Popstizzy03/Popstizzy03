// Pointer to array

#include <iostream>
using namespace std;

int main() {
  
	int numbers[5] = {1, 2, 3, 4, 5};
	int* ptr = numbers;

	for (int i = 0; i < 5; ++i) {
	   cout << "Value of numbers[" << i << "]: " << *(ptr + 1) << endl;
	}

	return 0;
}
