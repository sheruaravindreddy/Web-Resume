var bio = {
    name: "Aravind Reddy",
    Role: "Web Developer",
    welcomeMsg: "Hello! Here's my first work using JS.",
    biopic: "IMAGES/DSC09189.JPG",
    skills:["HTML","python","JavaScipt","jquey","CSS"],
    contacts: {
        mobile: 9898566569,
        twitter:"sheruaravindreddy@twitter.com",
        email: "sheru.reddy@iitgn.ac.in",
        git: "https://github.com/sheruaravindreddy",
        location: "Gandhinagar"
    }
}
var work = {
            jobs : [{
                title:"Data Analytics Project using Pandas",
                employer:"Practice Project",
                dates:"1st Jan 2016 - Present",
                description:"Analyzed the currency data of 160+ countries for the last 15 years and found profit maximizations upon investment."
            },{
                title:"Web Resume",
                employer:"This project",
                dates:"14 June 2016 - 20 May 2016",
                description:"Designed a web resume with JS"
            }],
            projects: [{
                title:"Canteen menu and ordering model",
                employer:"Course Project (Prof. Anirban Das Gupta)",
                dates:"Nov 2014",
                description:"Designed a canteen menu and ordering model using python among a group of 3 students. This model can maintain account of various users, their history, balance enquiry etc."
            },
            {
                "title": "Enginering graphics",
                "dates": "Nov 2014",
                "description": "Designed a 3-D prototyping model of military tank in AutoCAD, in a group of 3 Students.",
            }],
            education: [{
                "name": "Ideal high school",
                "class": "Nursery to 5th",
                "location": "FCI Colony,Hanamkonda"
            },{
                "name": "Vignan high school",
                "class": "5th to 10th",
                "location": "Nakkalgutta"
            }]
}


function inName(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
    }
inName(bio.name)
