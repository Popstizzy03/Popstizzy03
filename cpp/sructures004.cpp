// Nested structures

#include <iostream>
using namespace std;

stuct Date {
   int day;
   int month;
   int year;
};

struct Event {
   string name;
   Date date;
};

int main() {
   
	Event event1 = {"Conference", {25, 7, 2024}};

	cout << "Event: " << event1.name << endl;
	cout << "Date: " << event1.date.day << "/" << event1.date.month << "/" << event1.date.year << endl;

	return 0;
}
