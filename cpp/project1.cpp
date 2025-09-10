#include <iostream>
#include <ctime>
#include <string>
using namespace std;

int main() {
   string name;
   cout << "Enter your name: ";
   getline(cin, name);

   time_t currentTime = time(nullptr);
   tm* localTime = localtime(&currentTime);

   string greeting;
   if (localTime->tm_hour < 12) {
      greeting = "Good Morning, ";
   } else if (localTime->tm_hour < 18) {
      greeting = "Good Afternoon, ";
   } else {
     greeting = "Good Evening, ";
   }

   cout << greeting << name << "! It's nice to meet you." << endl;

   return 0;
}
