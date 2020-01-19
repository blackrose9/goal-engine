import { Component, OnInit } from "@angular/core";
import { Goal } from "../goal";

@Component({
  selector: "app-goal",
  templateUrl: "./goal.component.html",
  styleUrls: ["./goal.component.css"]
})
export class GoalComponent implements OnInit {
  goals:Goal[]=[
    new Goal(1,"Watch Fresh Prince of Belair", "It's on Netflix", new Date(2020,3,14)),
    new Goal(2, "Buy Groceries", "Naivas is right there", new Date(2020,3,14)),
    new Goal(3, "Vaccuum carpet", "Dust is bad for your health", new Date(2020,3,14)),
    new Goal(4, "Look for sleeping bag", "I wonder if Bob got a new one", new Date(2020,3,14)),
    new Goal(5, "Plant Beans", "They might be weaveled but they can still grow!", new Date(2019,0,18)),
    new Goal(6, "Exterminate unwanted bug life", "I can do a cleaner job of getting rid of lesser creatures", new Date(2019,0,18))
  ];

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

toggleDetails(index){
  this.goals[index].showDescription = !this.goals[index].showDescription;
}
completeGoal(isComplete, index){
  if (isComplete) {
    this.goals.splice(index,1);
  }
}

  constructor() { }

  ngOnInit() {
  }

}
