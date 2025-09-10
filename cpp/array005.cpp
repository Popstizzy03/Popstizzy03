// Array Length

#include <iostream>
using namespace std;

int main() {
   
	int numbers[] = {5, 10, 15, 20};
	int length = sizeof(numbers) / sizeof(numbers[0]);

	cout << "Length of the array: " << length << endl;

	return 0;
}
