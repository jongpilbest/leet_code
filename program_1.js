function solution(clothes) {
    var answer = 1;
    var obj={}
    var count=0;
    var cloth_= new Set();

      for(var i=0; i<clothes.length; i++
       ){
            var [name,categori]=clothes[i];             
            if(!obj[categori]){
            obj[categori]=1
        }
            else{
             obj[categori]+=1
        }
        }
      var obj_new= Object.entries(obj);
 
     for(var ii=0; ii<obj_new.length; ii++){
         answer*=(obj_new[ii][1]+1);
       
     }
    return answer-1
    


}
