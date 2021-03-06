//Define variables
var teacherGrade;
var teacherGenderAll, teacherGenderMale, teacherGenderFemale;
var teacherGender;
var teacherClub =[];
var teacherClubAll, teacherClubBasketball, teacherClubTennis, teacherClubSoccer;
var teacherDetails;

//Function to get user input data, display them, then store them in local storage
function getTeacherData(){

	//Fetch the values
	teacherGrade = document.getElementById("htmlTGrade").value;
	
	teacherGenderAll = document.getElementById("htmlTGenderAll").checked;
	teacherGenderMale = document.getElementById("htmlTGenderMale").checked;
	teacherGenderFemale = document.getElementById("htmlTGenderFemale").checked;
	
	teacherClubAll = document.getElementById("htmlTClubAll").checked;
	teacherClubBasketball = document.getElementById("htmlTClubBasketball").checked;
	teacherClubTennis = document.getElementById("htmlTClubTennis").checked;
	teacherClubSoccer = document.getElementById("htmlTClubSoccer").checked;
	
	teacherDetails = document.getElementById("htmlTAnnouncement").value;
	
	//Get the value of teacherGender based on selected gender option
	if (teacherGenderAll == true){
		teacherGender = "All";
	} else if (teacherGenderMale == true) {
		teacherGender = "Male";
	} else if (teacherGenderFemale == true){
		teacherGender = "Female";
	}

	//Get the value of teacherClub based on checked club items
	//Define teacherClub as an array
	teacherClub=[];
	if (teacherClubAll == true){
		teacherClub = ["All"];
	} else {
		if (teacherClubBasketball == true)
			teacherClub.push("Basketball");
		if (teacherClubTennis == true)
			teacherClub.push("Tennis");
		if (teacherClubSoccer == true)
			teacherClub.push("Soccer");
	}
	//Makes pop-up alerts
	alert("Selected Grade: " + teacherGrade + "\nSelected Gender(s): " + teacherGender + "\nSelected Club(s): " + teacherClub + "\nYour Announcement: " + teacherDetails);
	
	//If there is nothing in local storage, then teacherGrade is stored as an array
	var teacherGradeArray=localStorage.getItem("teacherGradeKey");
	if (teacherGradeArray === null) {
		teacherGradeArray=[teacherGrade];
	//If there is already an array in local storage, then teacherGrade is added to that array
	} else {
		teacherGradeArray=JSON.parse(teacherGradeArray);
		teacherGradeArray.push(teacherGrade);
	}
	//If there is nothing in local storage, then teacherGender is stored as an array
	var teacherGenderArray=localStorage.getItem("teacherGenderKey");
	if (teacherGenderArray === null) {
		teacherGenderArray=[teacherGender];
	//If there is already an array in local storage, then teacherGender is added to that array
	} else {
		teacherGenderArray=JSON.parse(teacherGenderArray);
		teacherGenderArray.push(teacherGender);
	}
	//If there is nothing in local storage, then teacherClub is stored as an array
	var teacherClubArray=localStorage.getItem("teacherClubKey");
	if (teacherClubArray === null) {
		teacherClubArray=[teacherClub];
	//If there is already an array in local storage, then teacherClub is added to that array
	} else {
		teacherClubArray=JSON.parse(teacherClubArray);
		teacherClubArray.push(teacherClub);
	}
	//If there is nothing in local storage, then teacherDetails is stored as an array
	var teacherDetailsArray=localStorage.getItem("teacherTextKey");
	if (teacherDetailsArray === null) {
		teacherDetailsArray=[teacherDetails];
	//If there is already an array in local storage, then teacherDetails is added to that array
	} else {
		teacherDetailsArray=JSON.parse(teacherDetailsArray);
		teacherDetailsArray.push(teacherDetails);
	}
	//Saves arrays as strings to local storage
	localStorage.setItem("teacherGradeKey", JSON.stringify(teacherGradeArray));
	localStorage.setItem("teacherGenderKey", JSON.stringify(teacherGenderArray));
	localStorage.setItem("teacherClubKey", JSON.stringify(teacherClubArray));
	localStorage.setItem("teacherTextKey", JSON.stringify(teacherDetailsArray));
}