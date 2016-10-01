export class Movie {
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

module.exports = Movie;
