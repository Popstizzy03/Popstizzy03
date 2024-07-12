// Pointer aritmetic

#include <iostream>
using namespace std;

int main() {
 
	int numbers[5] = {10, 20, 30, 40, 50};
	int* ptr = numbers;

	cout << "First element: " << *ptr << endl;
	ptr++;
	cout << "Second element: " << *ptr << endl;
	ptr += 2;
	cout << "Fourth element: " << *ptr << endl;

	return 0;
}
