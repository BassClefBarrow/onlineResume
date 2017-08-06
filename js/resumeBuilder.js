var bio = {
    "name": "Steven Bassoon",
    "role": "Front End Developer",
    "contacts": {
        "email": "ilStivo@gmail.com",
        "mobile": "0411442368",
        "github": "BassClefBarrow",
        "location": "Melbourne, Australia"
    },
    "bioPic": "images/donkeyKong.jpg", //I don't look like DK, but he's my fave.
    "welcomeMessage": "I want to help make the world a better place",
    "skills": ["Teamwork", "Attention to Detail", "Organisation", "Resilience"]
};
/*display function is an object in the bio object. Use .replace on helper.js
vars to insert my own data.
*/
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#header").append(formattedSkill);
    });
};

bio.display();

var work = {
    "jobs": [{
            "employer": "Crotchet Factory",
            "title": "Database administrator and Musician",
            "location": "Melbourne, Australia",
            "dates": "2003 - present",
            "description": "Maintain the integrity and functionality of a library database",
            "url": "http://adrs.org.au/web/"
        },
        {
            "employer": "Ivanhoe Grammar School",
            "title": "Bassoon tutor",
            "location": "Ivanhoe, Melbourne, Australia",
            "dates": "2017 - present",
            "description": "Provide 1:1 bassoon lessons to foster a love of music-making",
            "url": "https://www.ivanhoe.com.au/"
        }
    ]
};

/*iterate through the array of jobs for the work experience section. include
conditional statement to ensure the key is in the object. Each job begins
by appending the HTMLworkStart from helper.js
*/
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        formattedEmployer = formattedEmployer.replace("#", job.url);
        $(".work-entry:last").append(formattedEmployer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(formattedworkTitle);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedworkLocation);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedworkDates);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedworkDescription);
    });
};

work.display();

var education = {
    "schools": [{
            "name": "Wesley College",
            "location": "Melbourne, Australia",
            "url": "http://www.wesleycollege.net",
            "degree": "International Baccalaureate",
            "dates": "1990 - 1995",
            "majors": ["Economics", "Physics", "Mathematics"]
        },
        {
            "name": "University of Melbourne",
            "location": "Melbourne, Australia",
            "url": "http://www.unimelb.edu.au",
            "degree": "Bachelor of Music",
            "dates": "1999 - 2002",
            "majors": ["Music Performance - Bassoon"]
        }
    ],
    "onlineCourses": [{
        "title": "Introduction to Programming Nanodegree",
        "school": "Udacity",
        "url": "http://www.udacity.com",
        "dates": "2017"
    }]
};

/*iterate through the schools array. Use .replace on the helper vars to .append
to the new education entries. use a conditional statement to ensure the key is
in the object.
*/
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
        formattedschoolName = formattedschoolName.replace("#", school.url);
        $(".education-entry:last").append(formattedschoolName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedschoolLocation);
        school.majors.forEach(function(major) {
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedschoolMajor);
        });
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        formattedonlineTitle = formattedonlineTitle.replace("#", onlineCourse.url);
        $("#education").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        $("#education").append(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        $("#education").append(formattedonlineDates);
    });
};

education.display();

var projects = {
    "projects": [{
        "title": "Next Step",
        "dates": "2017 - present",
        "description": "They say when one door closes...I need to find the next door.",
        "images": [
            "images/door.jpg", "images/smile.png"
        ]
    }]
};

/*Use conditional statement to ensure the key is in the object. Iterate through
the projects array (although it only has one item at the moment).
*/
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedprojectDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedprojectImage);
            });
        }
    });
};

projects.display();

/*As required, the internationalizeButton is added which calls the inName
function and updates bio.name*/
$("#main").append(internationalizeButton);

/*append the googleMap div so I can show my locations.
 */
$("#mapDiv").append(googleMap);

/*the inName function takes a name as an input and outputs that name in a
different format eg Donald DUCK.
*/
function inName(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    // Don't delete this line!
    return finalName;
}

/*Doubling up on info here, as it appears at the header. Contact details are
pretty important though.
*/
bio.displayletsConnect = function() {
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    //console.log(formattedEmail);
    $("#lets-connect").append(formattedEmail);
    $("#lets-connect").append(formattedMobile);
    $("#lets-connect").append(formattedGithub);
};

bio.displayletsConnect();
