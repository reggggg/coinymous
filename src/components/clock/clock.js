import React, {Component} from 'react';
import '../../css/clock/clock.css';
import $ from "jquery";

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      parentDiv:null,
      dynamicChildDiv:null,
      objectState:{}
    }
  }


  CountdownTracker = async (label, value) => {
  let dynamicVar = ( '0' + value ).slice(-2);
  var el = document.createElement('span');
  el.className = 'flip-clock__piece';
  el.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
    '<span class="flip-clock__slot">'+label+'</span>';

  this.el = el;

  // console.log('hehe', this.el )
  var top = el.querySelector('.card__top'),
      bottom = el.querySelector('.card__bottom'),
      back = el.querySelector('.card__back'),
      backBottom = el.querySelector('.card__back .card__bottom');

      this.update = function(val){

        val = ( '0' + val ).slice(-2);


        if(this.currentValue == null ){
          // console.log('edi wow')
        }else{
          if ( val !== this.currentValue ) {
            // console.log("current: ",this.currentValue)
            // console.log("val: ",val)

            if ( this.currentValue >= 0 ) {
              back.setAttribute('data-value', this.currentValue);
              bottom.setAttribute('data-value', this.currentValue);
            }
            this.currentValue = val;
            top.innerText = this.currentValue;
            backBottom.setAttribute('data-value', this.currentValue);

            this.el.classList.remove('flip');
            void this.el.offsetWidth;
            this.el.classList.add('flip');
          }else{
            // console.log('false')
          }
        }

      }




  this.update(value);

  await this.setState({
    dynamicChildDiv:this.el
  })

  var object ={
    el:this.el,
    update:this.update,
    currentValue:dynamicVar
  }
  return object

  }


   getTimeRemaining = (endtime) => {

    var t = Date.parse(endtime) - Date.parse(new Date()); // subtract the deadline and the current date to get the remaining time :)
    return {
      'Total': t, // just a trucker
      'Days': Math.floor(t / (1000 * 60 * 60 * 24)),
      'Hours': Math.floor((t / (1000 * 60 * 60)) % 24),
      'Minutes': Math.floor((t / 1000 / 60) % 60),
      'Seconds': Math.floor((t / 1000) % 60)
    };
  }

  getTime = () => {

    var t = new Date();
    return {
      'Total': t,
      'Hours': t.getHours() % 12,
      'Minutes': t.getMinutes(),
      'Seconds': t.getSeconds()
    };
  }

   Clock = async (countdown,callback) => {

    countdown = countdown ? new Date(Date.parse(countdown)) : false;


    callback = callback || function(){};

    var updateFn = countdown ? this.getTimeRemaining : this.getTime; // converts this as function

    this.$el = document.createElement('div');
    this.$el.className = 'flip-clock';

    await this.setState(({
      parentDiv:this.$el
    }))
    // console.log("parent div: ", this.state.parentDiv)


    var bilat = null;
    var trackers = {},
        t = updateFn(countdown), // object converted using the function getTimeRemaining() returns an object of the day shit
        key, timeinterval;
    var i = 0;
    for ( key in t ){
      if ( key === 'Total' ) { continue; }
      trackers[key] = await this.CountdownTracker(key, t[key]);
      // console.log("trackers[key]: ", trackers[key] )

      this.state.parentDiv.appendChild(this.state.dynamicChildDiv);

    }
    // console.log("trackers: ",trackers)


    //
    var i = 0;

    //interval part here :)
    function updateClock() {

      timeinterval = requestAnimationFrame(updateClock);

      if ( i++ % 10 ) {  return; }

      var t = updateFn(countdown);
      if ( t.Total < 0 ) {
        cancelAnimationFrame(timeinterval);
        for ( key in trackers ){
          trackers[key].update( 0 );
        }
        // console.log(callback())
        callback();
        return;
      }

      for ( key in trackers ){
        trackers[key].update( t[key] );
      }
    }
    setTimeout(updateClock,1000);
    document.getElementById("clockContainer").appendChild(this.state.parentDiv);


  }


  startCountDown = () =>{
    //DEADLINE
    var dateParse = Date.parse(new Date()) + 200 * 24 * 60 * 60 * 1000 // Jan 6
    var deadline = new Date(dateParse);
    // //PASSES the DEADLINE and a function/callback
    this.Clock(deadline, () => { alert('countdown complete') });

  }


  componentDidMount(){
    this.startCountDown()
  }



  render(){



    return (
      <div className="showcaseClock">
        <div id="clockContainer"></div>
      </div>
    );
  }
}
export default Clock;
