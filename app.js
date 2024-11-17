let rollNo = prompt("Hey! Please Enter Your Roll No");
let divider = 5;
let totalMarks = 500;
let studentName ="";
let age ="";
let marksObtained ;
let percentage ;
let grade ="";
if(rollNo==1){studentName="Insharah Irfan"}
else if(rollNo==2){studentName="Mushatir Irfan"}
else if(rollNo==3){studentName="Ahmed Irfan"}
else if(rollNo==4){studentName="Muheet Irfan"}
else if(rollNo==5){studentName="Abdul Bari Kamran"}
else if(rollNo==6){studentName="Abdul Khaliq Kamran"}
else if(rollNo==7){studentName="Abdul Malik imran"}
else if(rollNo==8){studentName="Fareeha Kamran"}
else if(rollNo==9){studentName="Noor Fatima Irshad"}
else if(rollNo==10){studentName="Sharif Irshad"}
else{studentName="⚠️ Please Enter Correct Roll Number"}
if(rollNo==1){age=15}
else if(rollNo==2){age=14}
else if(rollNo==3){age=12}
else if(rollNo==4){age=9}
else if(rollNo==5){age=10}
else if(rollNo==6){age=12}
else if(rollNo==7){age=12}
else if(rollNo==8){age=4}
else if(rollNo==9){age=2}
else if(rollNo==10){age=1}
else{age="⚠️ Please Enter Correct Roll Number"}
if(rollNo==1){marksObtained=470}
else if(rollNo==2){marksObtained=450}
else if(rollNo==3){marksObtained=400}
else if(rollNo==4){marksObtained=480}
else if(rollNo==5){marksObtained=430}
else if(rollNo==6){marksObtained=410}
else if(rollNo==7){marksObtained=390}
else if(rollNo==8){marksObtained=320}
else if(rollNo==9){marksObtained=300}
else if(rollNo==10){marksObtained=290}
else{marksObtained="⚠️ Please Enter Correct Roll Number"}
if(rollNo==1){percentage=470/5}
else if(rollNo==2){percentage=450/5}
else if(rollNo==3){percentage=400/5}
else if(rollNo==4){percentage=480/5}
else if(rollNo==5){percentage=430/5}
else if(rollNo==6){percentage=410/5}
else if(rollNo==7){percentage=390/5}
else if(rollNo==8){percentage=320/5}
else if(rollNo==9){percentage=300/5}
else if(rollNo==10){percentage=290/5}
else{percentage="⚠️ Please Enter Correct Roll Number"}
if(percentage>=90 && percentage<=100){grade="A+1"}
else if(percentage>=70 && percentage<90){grade="A"}
else if(percentage>=60 && percentage<70){grade="B"}
else if(percentage>=50 && percentage<60){grade="C"}
else if(percentage>=33 && percentage<50){grade="D"}
else if(percentage<33){grade="Failed"}
else{grade="⚠️ Please Enter Correct Roll Number"}
console.log("Student Name :",studentName)
console.log("Student Age :",age)
console.log("Total Marks :",totalMarks)
console.log("Marks Obtained :",marksObtained)
console.log("Percentage :",percentage)
console.log("Grade :",grade)
console.log(grade=="Failed"?"Keep Trying 🥺" : "Congratulation 🏆")

