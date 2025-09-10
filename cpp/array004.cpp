// Modifying array elements

#include <iostream>
using namespace std;

int main() {
   
	int numbers[3] = {10, 20, 30};
	numbers[1] = 50; // change the second element
	cout << "Updated array: ";

	for (int i = 0; i < 3; ++i) {
	   cout << numbers[i] << " ";
	}

	cout << endl;
	return 0;
}
