// initilizing structures

#include <iostream>
using namespace std;

struct Car {
   string brand;
   int year;
};

int main() {
   Car car1 = {"Toyota", 2020};

   cout << "Brand: " << car1.brand << endl;
   cout << "Year: " << car1.year << endl;

   return 0;
}
