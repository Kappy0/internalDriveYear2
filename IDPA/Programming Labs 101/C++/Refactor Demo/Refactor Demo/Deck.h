#pragma once

#include "Card.h"
#include <stdlib.h>
#include <time.h>

class Deck
{
public:
   //Constructors
   Deck();

   //Accessors
   int getNumCards() const;

   //Methods
   void createDeck();
   void printDeck();
   void shuffle();
   Card drawCard();

   //Destructor
   ~Deck(void);

private:
   Card* cards;
   int numCards;
};

