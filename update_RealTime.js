 // For the exact time to be shown at start-up of the screen.

 var current_time = new Date();
 var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 var day_Num = current_time.getDate();

 var month = monthNames[current_time.getMonth()];
 var day = dayNames[current_time.getDay()];

 var hours = current_time.getHours();
 if (hours <10){
   hours = hours.toString().padStart(2,'0');
 }

 var minutes = current_time.getMinutes();
 // Condition set here to show that if the value of minutes is not double digits, then add a zero in front of it.
 if (minutes < 10){
     minutes = minutes.toString().padStart(2,'0');
 }

 var seconds = current_time.getSeconds();
 if(seconds < 10){
   seconds = seconds.toString().padStart(2,'0');
 }
 
 var time_zone = current_time.getTimezoneOffset();

 var current_Date = day + " " + month + " " + day_Num + ", " + hours + ":" + minutes + ":" + seconds;
 document.getElementById("current-time").textContent = current_Date;


