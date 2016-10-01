class Movie {
  constructor() {
    this.attributes = new Array();
    this.observers = new Array();
  }
  play(){
    let title = this.attributes['title'];
    this.observers.forEach(function(item, index, array){
      item.notifyPlay(title);
    });
  }

  stop(){
    let title = this.attributes['title'];
    this.observers.forEach(function(item, index, array){
      item.notifyStop(title);
    });
  }
  set(key, value){
    this.attributes[key] = value;
  }
  get(key){
    return this.attributes[key];
  }
  addObserver(o){
    this.observers.push(o);
  }
};//End Movie

class Observer {
  constructor() {

  };
  notifyStop(t){
    console.log(t + "stopped");
  };
  notifyPlay(t){
    console.log("Playing " + t);
  };
};//End Observer

{
  let o1 = new Observer();
  let m1 = new Movie();
  m1.set('title','terminator');
  m1.addObserver(o1);

  m1.play();
  m1.stop();
}
