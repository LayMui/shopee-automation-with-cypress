Feature: search 
In order to search for my shopping item
As a online shopper Alice
Alice wants to able to do a search and get the result
    Background
        Given Alice is at shopee 

    Scenario Outline: Search For item
        When she search for the item 
        | item |
        | mask |
        Then she should able to get the result on that item
        
       