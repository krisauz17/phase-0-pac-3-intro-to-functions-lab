function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  console.log(shout('hello'));
  console.log(whisper("HELLO"));
  
  function logShout(string){
    console.log(string.toUpperCase());
    return string.toUpperCase();
  }
  function logWhisper(string){
    console.log(string.toLowerCase());
    return string.toLowerCase();
  }
  console.log(logShout("hello"));
  console.log(logWhisper("HELLO"));

  function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase()===string){
      return `I can't hear you!`
    }
    return 'Yes INDEED!'
    }
    if (string === "Let's have dinner together!"){
      console.log ("I would like to!")
      return "I would like to!"
    }    
  