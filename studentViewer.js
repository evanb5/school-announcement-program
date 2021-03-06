//Function to display announcements
function displayAnnouncement(){
	//Define Variables
	var studentGrade;
	var studentGender;
	var studentClub;
	var teacherGrade;
	var teacherGender;
	var teacherClub;
	var teacherDetails;
	var announcementTextHolder=[];
	//Get items from local storage
	studentGrade = JSON.parse(localStorage.getItem ("studentGradeKey"));
	studentGender = JSON.parse(localStorage.getItem ("studentGenderKey"));
	studentClub = JSON.parse(localStorage.getItem ("studentClubKey"));
	teacherGrade = JSON.parse(localStorage.getItem ("teacherGradeKey"));
	teacherGender = JSON.parse(localStorage.getItem ("teacherGenderKey"));
	teacherClub = JSON.parse(localStorage.getItem ("teacherClubKey"));
	teacherDetails = JSON.parse(localStorage.getItem ("teacherTextKey"));
	document.getElementById("displayGradeSelection").innerHTML="Grade: " + studentGrade;
	document.getElementById("displayGenderSelection").innerHTML="Gender: " + studentGender;
	document.getElementById("displayClubSelection").innerHTML="Club: " + studentClub;
	        //Loop through the array to check if studentGrade and studentGender values are matching
	for (var indexTeacher = 0; indexTeacher < teacherGrade.length; indexTeacher++){
		if ((studentGrade==teacherGrade[indexTeacher] || studentGrade == "All" || teacherGrade[indexTeacher]=="All")
			&& (studentGender==teacherGender[indexTeacher] || studentGender == "All" || teacherGender[indexTeacher]=="All")) {
			//Loop goes through the club array to check if any studentClub values are included in the teacherClub array
			for(var indexStudent = 0; indexStudent < studentClub.length; indexStudent++) {
				if (studentClub[indexStudent] == "All" || teacherClub[indexTeacher] == "All" || teacherClub[indexTeacher].includes(studentClub[indexStudent])==true) {
					announcementTextHolder.push(teacherDetails[indexTeacher]);
					break;
				}
			}	
		}
	}                //No announcements are shown if announcementTextHolder.length is 0 otherwise display the announcements
	if (announcementTextHolder.length == 0){
		document.getElementById("htmlTAnnouncement").innerHTML= "There are no announcements at this time.";
	} else {
		for (var i = 0; i < announcementTextHolder.length; i++){
			var numberedText = i + 1;
			document.getElementById("htmlTAnnouncement").innerHTML+= numberedText + "." + announcementTextHolder[i] + "<br/>";
		}
	}
}