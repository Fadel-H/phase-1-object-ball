
function gameObject(){
return { home:{
    teamName: "Brooklyn Nets" ,
    color: ["Black", "White"],
    players: {
        "Alan Anderson": {
            number: 0 ,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
    },
        "Reggie Evans": {
            number: 30 ,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
        },
        "Brook Lopez": {
            number: 11 ,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
        },
        "Mason Plumlee": {
            number: 1 ,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
        },
        "Jason Terry": {
            number: 31 ,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
        },
}}, 
        away:{
    teamName: "Charlotte Hornets" ,
    color: ["Turquoise", "Purple"],
    players: {
        "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
    },
        "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
        },
        "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
        },
        "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
        },
        "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
        }}}}}


    const game = gameObject()
    const homeTeam = game.home
    const awayTeam = game.away
    const players = [homeTeam.players, awayTeam.players]

    function allPlayers(){
        const all = players.map(function(team){
            const playerArray = []
            for(const player in team){
                playerArray.push({nameOfPlayer: player,...team[player]})
            }
            return playerArray
        })
        return all.flat()
    }

    function findPlayer(playerName){
        return allPlayers().find(player => {
            return player.nameOfPlayer === playerName
        })
    }

function numPointsScored(playerName) {
    return findPlayer(playerName).points
}

function shoeSize(playerName) {
    return findPlayer(playerName).shoe
}

function teamColors(teamName) {
    if (teamName === homeTeam.teamName){
        return homeTeam.color
    } else if(teamName === awayTeam.teamName){
      return awayTeam.color
    } 
    return "No matching team name found"
}

function teamNames() {
    const teamArray = [] 
    for (let item in game){
      teamArray.push(game[item].teamName)
            } 
            return teamArray
        }

function playerNumbers(teamName){
   const numberArray = []
    if (homeTeam.teamName === teamName){
      let playerArray = allPlayers().slice(0,5)
       for (let i=0; i<playerArray.length;i++){  
       numberArray.push(playerArray[i].number)
       }return numberArray
     }  else if (awayTeam.teamName === teamName){
      let playerArray = allPlayers().slice(5,11)
       for (let i=0; i<playerArray.length;i++){  
       numberArray.push(playerArray[i].number)
       }return numberArray
    } return "No matching team name found"
  }

function playerStats(playerName){
  const playerObj = {...homeTeam.players,...awayTeam.players}
    return playerObj[playerName]
}

function largestValue(stat){
    let max = 0
    let playerName = ""  
    for (let i=0; i<allPlayers().length; i++){
      if (allPlayers()[i][stat]>max){
        max = allPlayers()[i][stat]
        playerName = allPlayers()[i].nameOfPlayer
      }  
    }
   return playerName
  }
  
  
  function bigShoeRebounds(){
    return findPlayer(largestValue("shoe")).rebounds   
  }

  function mostPointsScored(){
    return findPlayer(largestValue("points")).nameOfPlayer
}

function winningTeam(){
    let scoreHome = scoreAway = 0
    let teamName = ""
    for (let i=0; i<allPlayers().length-5;i++){
      scoreHome += allPlayers()[i].points
    }
    for (let i = 5; i<allPlayers().length;i++){
      scoreAway += allPlayers()[i].points
    }   
    if  (scoreHome>scoreAway){
      return homeTeam.teamName
    } return awayTeam.teamName
    }


function playerWithLongestName(){
    let nameLength = 0
    let longestName = ""
    for (let i=0; i<allPlayers().length; i++){
        if (allPlayers()[i].nameOfPlayer.length>nameLength){
            nameLength = allPlayers()[i].nameOfPlayer.length
            longestName =  allPlayers()[i].nameOfPlayer
        }   
    }
return longestName
}

function mostStealsScored(){
    return findPlayer(largestValue("steals")).nameOfPlayer
}

function doesLongNameStealATon(){
    if (mostStealsScored() === playerWithLongestName()){
      return true
    } return false
  }