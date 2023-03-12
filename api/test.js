
const initialValue = 0;

let array1=[10,20,30]
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue
  },
  0
);

const data = [
  {
    'mspin':'100',
    'name':'sameer',
    'totalScore': 10,
    'roundName':'1-A'
  },{
    'mspin':'100',
    'name':'sameer',
    'totalScore': 30,
    'roundName':'1-B'
  },{
    'mspin':'100',
    'name':'sameer',
    'totalScore': 30,
    'roundName':"WagonR vs Tiago"
  },{
    'mspin':'100',
    'name':'sameer',
    'totalScore': 20,
    'roundName':"Alto K10 vs Kwid RXT"
  },{
    'mspin':'200',
    'name':'abhishek',
    'totalScore': 20,
    'roundName':'1-A'
  },{
    'mspin':'200',
    'name':'abhishek',
    'totalScore': 30,
    'roundName':'1-B'
  },{
    'mspin':'200',
    'name':'abhishek',
    'totalScore': 60,
    'roundName':"WagonR vs Tiago"
  }
]
const parentRound={};
parentRound['1-A']=true;
parentRound['1-B']=true;
parentRound['2']=true;
parentRound['2']=true;parentRound['4']=true;parentRound['5']=true;parentRound['6']=true;parentRound['7']=true;parentRound['8']=true;
const result = data.reduce(
  (result, currentValue) => {
    let mspin = currentValue.mspin;
    let name = currentValue.name;
    let totalScore = currentValue.totalScore;
    let roundName = currentValue.roundName;
    if(parentRound[roundName]===undefined){
      roundName = "2";
    }
    if(result[mspin]===undefined){
      result[mspin]={};
      result[mspin].mspin = mspin;
      result[mspin].name = name;
      result[mspin].totalScoreOfAllRounds = totalScore;
      result[mspin]['rounds'] = {};
      result[mspin]['rounds'][roundName] = totalScore;
    }else{
      result[mspin].totalScoreOfAllRounds += totalScore;
      if(result[mspin]['rounds'][roundName]===undefined){
          result[mspin]['rounds'][roundName] = totalScore;
      }else{
          result[mspin]['rounds'][roundName] += totalScore;
      }
    }
    return result;
  },
  {}
);

let resultArr = [];
for(let key in result){
    resultArr.push(result[key])
}
resultArr.sort(function(a,b){
    return b['totalScoreOfAllRounds']-a['totalScoreOfAllRounds'];
})
console.log(resultArr);
// Expected output: 10

