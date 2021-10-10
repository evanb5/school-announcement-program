//Define variables
var studentGrade;
var studentGenderAll, studentGenderMale, studentGenderFemale;
var studentGender;
var studentClubAll, studentClubBasketball, studentClubTennis, studentClubSoccer;
var studentClub;

//Function to get user input data, display them, then store them in local storage
function getStudentData(){
	//Fetch the values
	studentGrade = document.getElementById("htmlSGrade").value;
	
	studentGenderAll = document.getElementById("htmlSGenderAll").checked;
	studentGenderMale = document.getElementById("htmlSGenderMale").checked;
	studentGenderFemale = document.getElementById("htmlSGenderFemale").checked;
	
	studentClubAll = document.getElementById("htmlSClubAll").checked;
	studentClubBasketball = document.getElementById("htmlSClubBasketball").checked;
	studentClubTennis = document.getElementById("htmlSClubTennis").checked;
	studentClubSoccer = document.getElementById("htmlSClubSoccer").checked;
		
	//Get the value of studentGender based on selected gender option
	if (studentGenderAll == true){
		studentGender = "All";
	} else if (studentGenderMale == true){
		studentGender = "Male";
	} else if (studentGenderFemale == true){
		studentGender = "Female";
	}
	//Get the value of studentClub based on checked club items
	//Define studentClub as an array
	studentClub=[];
	if (studentClubAll == true) {
		studentClub = ["All"];
	} else {
		if (studentClubBasketball == true)
			studentClub.push("Basketball");
		if (studentClubTennis == true)
			studentClub.push("Tennis");
		if (studentClubSoccer == true)
			studentClub.push("Soccer");
	}
	//Makes pop-up alerts
	alert("Selected Grade: " + studentGrade + "\nSelected Gender(s): " + studentGender + "\nSelected Club(s): " + studentClub);

	//Saves arrays as strings to local storage
	localStorage.setItem("studentGradeKey", JSON.stringify(studentGrade));
	localStorage.setItem("studentGenderKey", JSON.stringify(studentGender));
	localStorage.setItem("studentClubKey", JSON.stringify(studentClub));
	location.href = "studentOptionsOutput.html";
}