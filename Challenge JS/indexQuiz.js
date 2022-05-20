function calculateFinalScore(exam, project) {
    //TODO: calculate final score
    //60% exam plus 40% project
    //hint: turn percent into decimal first!
    const finalScore = (0.6*exam) + (0.4*project)/*your formula here*/;
    return finalScore;
  }
  
  function isAttendanceEnough(absent) {
    //TODO: check if attendance is enough
    //if absent is more than 5, then return false
    //only return boolean (true or false)
    // const result = absent <= 5/*your formula here*/;
    const result = absent > 5 ? false : true;
    return result;
  }
  
  function getGrade(exam, project, absent) {
    if (isAttendanceEnough(absent)) {
      const finalScore = calculateFinalScore(exam, project);
  
      if (finalScore >= 80/* final score more or equal 80*/) {
        return 'A';
      }
  
      if (finalScore >= 70/* final score more or equal 70*/) {
        return 'B';
      }
  
      if (finalScore >= 60/* final score more or equal 60*/) {
        return 'C';
      }
  
      return 'Fail';
    }
    return 'Fail';
  }
  
  function isWinCompetition(effort) {
    //TODO: return true if effort is more than 80
    //only return boolean (true or false)
    //hint: using comparison!
    const result = effort > 80/*your formula here*/;
    return result;
  }
  
  function isGetPS5(grade, effort) {
    const winCompetition = isWinCompetition(effort);
    //TODO: get PS5 if you get A or win competition
    //only return boolean (true or false)
    //hint: using "or"
    const result = grade == "A" || winCompetition/* your formula here */;
    return result;
  }
  
  //DO NOT MODIFY LINE BELOW
  //Check your answer, it should match the comment
  (() => {
    const annaExam = 80;
    const annaProject = 70;
    const annaAbsent = 5;
    const annaEffort = 80;
  
    const annaGrade = getGrade(annaExam, annaProject, annaAbsent);
    const annaGetPS5 = isGetPS5(annaGrade, annaEffort);
  
    console.log(annaGrade); // B
    console.log(annaGetPS5); // false
  
    const billExam = 100;
    const billProject = 90;
    const billAbsent = 6;
    const billEffort = 90;
  
    const billGrade = getGrade(billExam, billProject, billAbsent);
    const billGetPS5 = isGetPS5(billGrade, billEffort);
  
    console.log(billGrade); // Fail
    console.log(billGetPS5); // true
  })();
