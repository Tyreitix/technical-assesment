# Keeping a Devlog

## Table of Contents

- [Keeping a Devlog](#keeping-a-devlog)
  - [Table of Contents](#table-of-contents)
  - [Purpose](#purpose)
  - [Structure](#structure)
  - [Quest-Type](#first-step)
  - [Database](#database)
  - [Quest-Router](#quest-router)

## Purpose

The purpose of keeping a devlog is to help us see all the work you put in when attempting at least 4 tasks either in the frontend or backend folders.  For instance, if you don't know anything about web APIs, express, and node and you decide to attempt the backend tasks.  We would like to see in your devlog how you researched those technologies before starting the tasks.  Another example could be your experience of overcoming a bug that took you 2 days to fix, giving you less time to work on other tasks.

We use this devlog to see how you solve problems you run into as you are developing. Research is an essential component to being a member of our team and it is a great way to learn new things! 

## Structure

You can structure this devlog however you like.  You could keep one file and mark the day and any noteworthy thing to write down.  You could also keep a new file for everyday something noteworthy happens.  You can use markdown, txt, word, etc. as long as we can read and access it.


## Learning Curve

For each component of these tasks I first looked through all of the provided code to learn how to procede. I have never used any of these languages before so it is a steep learning curve for me, but seeing preexsisting code allows me to grasps the concepts needed as well as get a hold of the structure needed to complete the tasks. For each file that I created and/or edited, I used the corressponding preexsisting files as templates to assist me with accomplishing the tasks.

Had to take time to learn routing and routing methods since this required the use of them.


## Quest Type

Created a Quest type to store the parameters and functions associate with a quest. I used the code from the Hero.js file as a template to making the code for the Quest.js file.

## Database

Created the Quest Database which stores created quests and allows for the deletion of any current quests. While working on the router I realized that the method within the quest database that returns an array of quests must be linked to a specified hero. So I has to go back and edit that method so the getQuests() method displays the array of quests asscoiated with the specified hero. 

  ## Second Step Thought Process
    I set up the getQuests() in a way that when a particular hero id is entered, the method returns an array of quests with a corresponding heroID

## Quest Router

Created the Quest router which allows for the use of the methods associated with the Quest Database. Using the hero file as a template I used that code to create the different methods. 

For task 1 I started off by using the hero ID entered to ensure that the hero exsists and if they do, all quests linked to them is returned.

Skipped to task 4 as that seemed like the easier task when it came to setting up the method. First I needed to find the hero ID since the task contained a segment which displays whether the hero ID entered was found or not. Then the heroID of the quest and the ID of the hero are compared to ensure that they match up.

For task 3 I started off similarly to task4, needed to setup variables to store the hero and quest IDs entered. Then made made both exsist and the quest ID entered is linked to the hero ID entered. From there the data entered on the webpage is used to update the corresponding attribute of the quest.   

For task 2, I proceeded similarly where I created my variables to store the entered IDs. Then I make sure the entered hero ID is a valid one and if not an error is thrown, if ther hero does exsist then the body of the webpage is used to create a new quest for the hero.