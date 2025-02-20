#include <stdio.h>


int main() {

    float item1 = 5.75;
    float item2 = 10.00;
    float item3 = 100.99;

    /*
    
        %.1 decimal precision
        %1 minimum width
        %- left algin

    */

    print("ITEM 1 : $%8.2f\n", item1);
    print("ITEM 2 : $%8.2f\n", item2);
    print("ITEM 3 : $%8.2f\n", item3);

    return 0;
}
