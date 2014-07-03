#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      staff
#
# Created:     27/06/2014
# Copyright:   (c) staff 2014
# Licence:     <your licence>
#-------------------------------------------------------------------------------

def main():
    x = 5
    b = 9
    y = True
    something = 2.4

    z = add(x, b)

    print("Hello world!")
    print(z)

    #Comment
    if(x == b):
        print("LOL")

    i = 0
    arr = []

    while(i < 10):
        arr.append(i)
        i += 1

    print(arr)

def add(a, b):
    return a + b

if __name__ == '__main__':
    main()
