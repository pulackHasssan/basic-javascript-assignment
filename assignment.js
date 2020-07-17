//5280 feet = 1 mile;
function feetToMile(feet) {
    const mile = 5280 / feet ;
    return mile;
    }
    var result = feetToMile(10);
    console.log(result);
//feetToMile function complete


function woodCalculator(chair, table, bed) {
        const  cubicFeetChair = 1* chair;
        const cubicFeetTable = 3 * table;
        const cubicFeetBed = 5 * bed;
        let cubicFeet = cubicFeetChair + cubicFeetTable + cubicFeetBed;
        return cubicFeet;
    }
    var result = woodCalculator(3, 1, 4);
    console.log(result);
//woodCalculator function complete

function brickCalculator( floor){
      var bricksForFeet = 1000;
      if(floor <= 10){
        var bricksForTotal = 15 * bricksForFeet * floor ;
      }
      else if (floor > 10 && floor <=20 ){
        var bricksForTotal = 12 * bricksForFeet * floor + 30000 ; 
      }
      else {
          var bricksForTotal = 10 * bricksForFeet * floor + 70000 ;
      }
      return bricksForTotal;
    }

        var result = brickCalculator(37);
        console.log(result);
 //brickCalculator function complete


      function tinyFriends(){
        var friends = ['shanto' ,'eia' , 'shihab' , 'moon' , 'rizvee' , 'pranto' , 'masud' , 'nishad' , 'salwa' , 'mitul' , 'asif' , 'joti' , 'faisal' , 'Jahirul' ]
        var tiny = friends[0].length;
        for(var i = 0 ; i < friends.length ; i++){
          var singleFriend = friends[i].length;
          if (singleFriend < tiny){
            singleFriend = tiny;
          }
        }

        return singleFriend;
      }
      var result = tinyFriends();
      console.log(result);
      //Alas! tinyFriends function is not right. 