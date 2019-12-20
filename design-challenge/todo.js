class ToDoList {
    constructor(){
        this.allActivities = [];
        this.finishedActivities = [];
    }
    
    addActivity(activity){
        this.allActivities.push(activity);
    }
    
    deleteActivity(activity){
      if (this.allActivities.includes(activity)){
        let index = this.allActivities.indexOf(activity);
        this.allActivities.splice(index, 1);
      }
    }
    
    finished(activity){
        let index = this.allActivities.indexOf(activity);
        this.finishedActivities.push(this.allActivities.splice(index, 1));
    }
}