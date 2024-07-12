// pointer to structure

#include <iostream>
using namespacec std;

   struct Person {
      string name;
      int age;
   };

int main() {
 
	Person person1 = {"Alice", 30};
	Person* ptr = &person1;

	cout << "Name: " << ptr->name << endl;
	cout << "Age: " << ptr->age << endl;

	return 0;
}
