// Structure Functions

#include <iostream>
using namespace std;

struct Rectangle {
   double length;
   double width;

   double area() {
      
	   return length * width;
   }
};

int main() {
   
	Rectangle rect1 = {5.0, 3.0};

	cout << "Area: " << rect1.area() << endl;
	return 0;
}
