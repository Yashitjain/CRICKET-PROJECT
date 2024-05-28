var tot_runs = 0;
var tot_wickets = 0;
var tot_balls = 0;
var free_hit = false;
var tot_overs = 0;
var game = true;

var runs = document.getElementsByClassName("run")
console.log(runs);

for (let i=0;i<runs.length;i++){
    if(game){
        runs[i].addEventListener("click",()=>{
            tot_runs += Number(runs[i].textContent);
            tot_balls += 0.1;
            tot_balls = Number(tot_balls.toFixed(1));
            score();
        })
    }
    
}

document.getElementById("dot").addEventListener("click",()=>{
    if(game){
        tot_balls += 0.1;
        score();
    }
    

})
document.getElementById("wide").addEventListener("click",()=>{
    if(game){
        tot_runs += 1;
        score();
    }
    

})
document.getElementById("noBall").addEventListener("click",()=>{
    if(game){
        tot_runs += 1;
        free_hit = true;
        score();
    }
    

})
document.getElementById("wicket").addEventListener("click",()=>{
    if(game){
        if(free_hit){
            free_hit=false;
            score();
    
        }else{
            tot_wickets += 1;
            tot_balls += 0.1;
            score();
        }
        if(tot_wickets==10){
            game = false;
        }
    }
    
})

function score(){
    document.getElementById("runScore").textContent = "  runs: " + tot_runs;
    // console.log("tot_balls=>"+tot_balls,"tot_balls%0.6=>" + (tot_balls%0.6),"tot_overs=>"+tot_overs);
    if(tot_balls%0.6==0 ){
        tot_overs += 1;
        tot_balls = 0;
    }
        document.getElementById("overs").textContent = "  overs: " + Number(tot_balls + tot_overs);
    
    document.getElementById("wickets").textContent = "  wicket: " + tot_wickets;

}
