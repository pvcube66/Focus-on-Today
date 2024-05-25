let goalcount=0;
const goal1=document.querySelector('#g1');
const goal2=document.querySelector('#g2');
const goal3=document.querySelector('#g3');
let progressBar=document.querySelector('#progress');

const goal1Pic=document.querySelector('#goal1-img');
const goal2Pic=document.querySelector('#goal2-img');
const goal3Pic=document.querySelector('#goal3-img');
const recto=document.querySelector('#rect');

function getInputValue(k) {
    return k.value;
}

function progressUpdater(gc){
    if(gc==1){
        // recto.innerHTML=33;
        progressBar.classList.add('progress1');
        
    }
    else if(gc==2){
     
            progressBar.classList.add('progress2');
        
    }
    else{
        progressBar.classList.add('progress3');
    }
}

goal1Pic.addEventListener('click',(e)=>{
    
    if(getInputValue(goal1)==''){
        alert('no goals')
    }
    else {
        goalcount++;
        progressUpdater(goalcount);
        
    //    progressBar.classList.add('progress1');
       goal1.classList.add('updated');

        goal1Pic.src='completed.svg';
    }
});

goal2Pic.addEventListener('click',(e)=>{
    
    if(getInputValue(goal2)==''){
        alert('no goals')
    }
    else {
        goalcount++;
        progressUpdater(goalcount);
  
    //    progressBar.classList.add('progress1');

       goal2.classList.add('updated');

    
        goal2Pic.src='completed.svg';
    }
});

goal3Pic.addEventListener('click',(e)=>{
    
    if(getInputValue(goal3)==''){
        alert('no goals')
    }
    else {
        goalcount++;
        progressUpdater(goalcount);

    //    progressBar.classList.add('progress1');
       goal3.classList.add('updated');

        goal3Pic.src='completed.svg';
    }
});



