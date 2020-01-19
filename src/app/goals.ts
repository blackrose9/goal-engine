import { Goal } from './goal';

export class Goals{
   goals:Goal[]=[
     new Goal(1,"Watch Fresh Prince of Belair", "It's on Netflix", new Date(2020,3,14)),
     new Goal(2, "Buy Groceries", "Naivas is right there", new Date(2020,3,14)),
     new Goal(3, "Vaccuum carpet", "Dust is bad for your health", new Date(2020,3,14)),
     new Goal(4, "Look for sleeping bag", "I wonder if Bob got a new one", new Date(2020,3,14)),
     new Goal(5, "Plant Beans", "They might be weaveled but they can still grow!", new Date(2019,0,18)),
     new Goal(6, "Exterminate unwanted bug life", "I can do a cleaner job of getting rid of lesser creatures", new Date(2019,0,18))
   ];
}