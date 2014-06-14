#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      Kappy
#
# Created:     13/06/2014
# Copyright:   (c) Kappy 2014
# Licence:     <your licence>
#-------------------------------------------------------------------------------
import random

#Asks the player if they'd like to play again
def playAgain() :
    print('Do you want to play again? (Yes or No)')
    return input().lower().startswith('y')
    print()

#Class to create a card
class Card :
    def __init__(self, rank, suit) :
        self.rank = rank
        self.suit = suit

    def Rank(self) :
        return "Ace Two Three Four Five Six Seven Eight Nine Ten Jack Queen King".split()[self.rank]

    def Suit(self) :
        return "Hearts Spades Clubs Diamonds".split()[self.suit]

    def __str__(self) :
        return self.Rank() + " of " + self.Suit()

#Class for card stacks (discard pile and the stack you're using
class cardStack :
    def __init__(self) :
        self.cards = []

    def add(self, card) :
        self.cards.append(card)

    def Rank(self) :
        cardRank = 0
        for card in self.cards :
            cardRank = card.rank
        return cardRank

    def Show(self, show_only = None) :
        if not show_only :
            for k in self.cards :
                print (k)
        else :
            if isinstance(show_only, int) :
                print (self.cards[show_only])
            elif isinstance(show_only, (list,tuple)) :
                for idx in show_only :
                    print (self.cards[idx])

#Creates the deck the player will use
class deck :
    def __init__(self ):
        self.cards = []
        for i in range(4) :
            for j in range(13) :
                self.cards.append(Card(j, i))
        self.shuffle()

    def shuffle(self ) :
        random.shuffle(self.cards)

    def peek(self) :
        topCard = self.cards.pop()
        self.cards.append(topCard)
        return topCard

    def pop(self) :
        return self.cards.pop()

#Initialize variables
d1 = deck()
d2 = deck()

discardPile = cardStack()

p1Wins = 0
p2Wins = 0

finished = False

while True :
    #In war, two players draw a card from their deck. Whomever
    #has the highest card wins the round. In the case of a tie,
    #play simply continues to the next round
    print("--------------- START ---------------")

    while(d1.cards) : #only need to check if one deck is empty
        player1Card = d1.peek()
        player2Card = d2.peek()

        print("Player 1's card:", player1Card)
        print("Player 2's card:", player2Card)
        print()

        discardPile.add(d1.pop())
        discardPile.add(d2.pop())

        if(player1Card.Rank() > player2Card.Rank()) :
            print("Player 1 wins this round!")
            p1Wins += 1
        elif(player2Card.Rank() > player1Card.Rank()) :
            print("Player 2 wins this round!")
            p2Wins += 1
        else :
            print("Tie! Moving to next round...")

        print()

        #input()

    print("Decks are empty!")
    print()

    print("Player 1's wins:", p1Wins)
    print("Player 2's wins:", p2Wins)
    print()

    if(p1Wins > p2Wins) :
        print("Player 1 Wins!!!")
    elif(p2Wins > p1Wins) :
        print("Player 2 Wins!!!")
    else :
        print("It's a Tie!!!")

    print()

    finished = True

    #Reset the game if the player wishes
    if(finished) :
        if(playAgain()) :
            finished = False

            d1 = deck()
            d2 = deck()

            discardPile = cardStack()

            p1Wins = 0
            p2Wins = 0

            print()
        else :
            break