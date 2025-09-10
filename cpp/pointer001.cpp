// Basic pointer

#include <iostream>
using namespace std;

int main() {
   
	int var = 20;
	int* ptr = &var;

	cout << "Value of var: " << var << endl;
	cout << "Address of var: " << &var << endl;
	cout << "Pointer of address: " << ptr << endl;
	cout << "Pointer value: " << *ptr << endl;

	return 0;
}
