#include <stdio.h>
#include <math.h>

int main() {
    const double PI = 3.14159;
    double r;

    printf("Enter the radius of the circle\n");
    scanf("%lf", &r);

    double a = PI * r * r;

    printf("The area is %.2f\n", a);

    return 0;
}
