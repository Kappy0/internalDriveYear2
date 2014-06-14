#pragma once

#include <iostream>

using namespace std;

class Card
{
public:

   //Constructors
   Card();
   Card(int rank, int suit);

   //Accessors
   int getRank() const;
   int getSuit() const;
   bool getDrawnState() const;
   bool getIsFaceCard() const;

   //Setters
   void setDrawnState(bool state);

   //Methods
   void printCard();

private:
   int rank;
   int suit;
   bool isDrawn;
   bool isFaceCard;
};

