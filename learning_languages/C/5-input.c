#include <stdio.h>

int main() {

    char name[25];
    int age;

    printf("How old are you?\n");
    //V this one stops at the first white space
    //scanf("%d", &age);
    //V this one includes white spaces but also includes the enter character at the end
    fgets(name, 25, stdin);
    //strings logic, learn later

    printf("What's your name?\n");
    scanf("%s", &name);

    printf("Hello, %s. You are %d years old",name, age);

    return 0;
}