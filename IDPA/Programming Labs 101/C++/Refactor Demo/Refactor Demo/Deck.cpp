#include "Deck.h"

Deck::Deck()
   : numCards(52)
{
   this->cards = new Card[this->numCards];

   for(int i = 0; i < this->numCards; i++)
   {
      this->cards[i] = Card();
   }
}

int Deck::getNumCards() const
{
   return this->numCards;
}

void Deck::createDeck()
{
   int k = 0;

   while(k < this->numCards)
   {
      for(int i = 0; i < 4; i++) //For each suit
      {
         for(int j = 1; j < 14; j++) //For each rank
         {
            Card newCard = Card(j, i);
            this->cards[k] = newCard;
            k++;
         }
      }
   }
}

void Deck::printDeck()
{
   for(int i = 0; i < this->numCards; i++)
   {
      this->cards[i].printCard();
   }
}

void Deck::shuffle()
{
   for(int i = 0; i < this->numCards; i++)
   {
      this->cards[i].setDrawnState(false);
   }
}

Card Deck::drawCard()
{
   Card newCard;
   int cardToDraw;
    
   do 
   {
      cardToDraw = (rand() % 52);
      newCard = this->cards[cardToDraw];
   }
   while(newCard.getDrawnState());
    
   this->cards[cardToDraw].setDrawnState(true);
   return newCard;
}

Deck::~Deck(void)
{
   delete this->cards;
}
