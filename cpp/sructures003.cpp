// Array of structures

#include <iostream>
using namespace std;

struct Student {
   string name;
   string school;
   int age;
};

int main() {
   Student students[3] = {{"John", "UNZA", 20}, {"Alice", "CBU", 22}, {"Bob", "UNZA", 19}};

   for (int i = 0; i < 3; ++i) {
   
   cout << "Name: " << students[i].name << "School: " << students[i].school << ", Age: " << students[i].age << endl;
   }

   return 0;
}
