const quiz=document.getElementById("quiz");
quiz?.addEventListener("submit",event=>{
  event.preventDefault();
  const answers=JSON.parse(quiz.dataset.answers || '{"q1":"b","q2":"a","q3":"c"}');
  let score=0;
  for(const [name,correct] of Object.entries(answers)){
    if(new FormData(quiz).get(name)===correct)score++;
  }
  const result=document.getElementById("result");
  result.textContent=`You scored ${score} out of ${Object.keys(answers).length}. ${score===Object.keys(answers).length?"Excellent work!":"Review the lesson notes and try again."}`;
  result.style.color=score===Object.keys(answers).length?"#70e0a0":"#ff7180";
});
