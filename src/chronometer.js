class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.interval = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) {
        printTimeCallback(this.currentTime)
        }
    },1000 )

  }

  getMinutes() {
    // ... your code goes here
    let minutes = (Math.floor(this.currentTime/60))
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60
    return seconds

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let strValue = value.toString()  
  if (strValue.length === 1 ){
    return '0' + strValue;
  }
    return strValue
  }


  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
