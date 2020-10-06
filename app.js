  let pronoun = ['the','our'];
  let adj = ['crazy', 'big','cute','fat' ];
  let noun = ['jogger','racoon','dog', 'cat'];
  let extension = ['.com', '.us'];

  for (let i = 0; i< pronoun.length; i++) {      
    for (let j = 0; j < adj.length; j++) {        
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extension.length; l++) {
             console.log(pronoun[i]+adj[j]+noun[k]+ extension[l]);                 
            }                   
            
        }
        
    }
     
  }