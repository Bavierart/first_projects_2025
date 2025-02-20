#include <stdio.h>
#include <stdbool.h>

int main() {

    int number1;
    number1 = 123;

    //2bytes
    //-32,768 to + 32,767 or 0 to + 65,535 unsigned
    short day = 31;
    //4bytes to display unsigned int use %u
    int number2 = 321;
    //8bytes, a normal int is already a long end with U
    long long int ex = 123123131312313U;

    //4bytes / 32 bits of precision
    float ph = 7.5000000;
    //8bytes / 64 bits of precision %lf to display
    double measurement = 7.50000000000001;


    //can also be numbers from -128 to +127
    char grade = "F";
    //unsigned ignores the negatives so it goes to 255
    unsigned charnum = 255; 
    char name[] = "John";

    bool real = true;

    printf("You are %d years old\n", number1);
    printf("Hello, %s\n", name);
    printf("Your grade is %c\n", grade);
    printf("The ph here is %f\n", ph);


    return 0;
}
