function Language(langName, experience, details, proficiency, usageCount) {
    return {
        "language": langName,
        "experience": experience,
        "details": details,
        "proficiency": proficiency,
        "usageCount": usageCount
    };
}

function Algorithm(algoName, familiarity) {
    return {
        "algorithm": algoName,
        "rating": familiarity
    };
}

function Pattern(patternName, familiarity, usageCount) {
    return {
        "pattern": patternName,
        "rating": familiarity,
        "usageCount": usageCount
    };
}

function OnlineCourse(courseName, score, length, instructors,
                      university, platform, finished) {
    return {
        "course": courseName,
        "score": score,
        "length": length,
        "instructors": instructors,
        "university": university,
        "platform": platform,
        "finished": finished
    };
}

function WebApplication(name, link, screenshots, tags) {
        return {
                appName: name,
                appLink: link,
                screenshots: screenshots,
                techTags: tags
        };
}

var languages = [];

languages.push(Language("C++", "More than 1 year", "*Worked on last project in December 2014",
            "3.05/5.0 - above average (Upwork test)", 5));

languages.push(Language("Scala", "4 months", "*Worked on last project in March 2015",
            "1.5/5.0 (Self-proclaimed)", 1));

languages.push(Language("Java", "~1 year", "*Worked on last project in June 2016",
            "3.1 of 5.0 - above average (Upwork test)", 3));

languages.push(Language("Python", "12 months", "*Coding from time to time",
            "2.5 of 5.0 (Self-proclaimed)", 4));

languages.push(Language("HTML", "More than 12 months", "*I have been using it since June 2016",
            "3.3 of 5.0 (Self-proclaimed)", 8));

languages.push(Language("CSS", "More than 12 months", "*I have been using it since June 2016",
            "4.0 of 5.0 - top 20% (Upwork test)", 8));

languages.push(Language("JavaScript", "10 months", "*In the process of learning it",
            "3.4 of 5.0 (Self-proclaimed)", 8));



var libraries = [];

libraries.push(Language("Bootstrap", "8 months", "*I am still learning it",
            "2.5/5.0 (Self-proclaimed)", 6));

libraries.push(Language("Jquery", "8 months", "*Using it periodically",
            "3.5/5.0 (Self-proclaimed)", 6));

libraries.push(Language("Django", "10 months", "*I'm still learning it",
            "2.6/5.0 (Self-proclaimed)", 4));

libraries.push(Language("SASS preprocessor", "6 months", "*I'm still learning it",
            "3.0/5.0 (Self-proclaimed)", 6));

libraries.push(Language("KnockoutJS", "4 months", "*I'm still learning it",
            "2.5/5.0 (Self-proclaimed)", 3));

libraries.push(Language("ReactJS", "2 months", "*I'm still learning it",
            "2.0/5.0 (Self-proclaimed)", 1));

var algorithms = [];

algorithms.push(Algorithm("Selection sort", 4));

algorithms.push(Algorithm("Insertion sort", 3.5));

algorithms.push(Algorithm("Merge sort", 4));

algorithms.push(Algorithm("Quick sort", 3.5));

algorithms.push(Algorithm("Binary trees", 3.5));

algorithms.push(Algorithm("Trie(s)", 4));

algorithms.push(Algorithm("Hash tables", 3));

algorithms.push(Algorithm("Lists", 5));

algorithms.push(Algorithm("Arrays", 5));

algorithms.push(Algorithm("Stacks", 4.5));

algorithms.push(Algorithm("Queues", 4));

algorithms.push(Algorithm("Binary Search", 5));

algorithms.push(Algorithm("Depth First Search", 4));

algorithms.push(Algorithm("Breadth First Search", 3.5));

//algorithms.push(Algorithm("Kruskal's algorithm", 3));

//algorithms.push(Algorithm("Dijkstra's algorithm", 1));


var patterns = [];

patterns.push(Pattern("Abstract Factory", 4, "sometimes"));

patterns.push(Pattern("Strategy", 4, "sometimes"));

patterns.push(Pattern("Observer", 4, "sometimes"));

patterns.push(Pattern("Producer-consumer", 2, "sometimes"));

patterns.push(Pattern("Model-View-Controller", 3, "sometimes"));

patterns.push(Pattern("Iterator", 3.5, "sometimes"));

patterns.push(Pattern("Decorator", 3.5, "once or twice"));

patterns.push(Pattern("Command", 2.5, "once or twice"));

//patterns.push(Pattern("Visitor", 2.5, "once or twice"));

patterns.push(Pattern("Adapter", 2.5, "never"));

patterns.push(Pattern("Composite Pattern", 2.5, "once or twice"));

//patterns.push(Pattern("Facade", 2.5, "never"));

patterns.push(Pattern("Constructor", 3, "sometimes"));



var onlineCourses = [];

onlineCourses.push(OnlineCourse("Machine Learning", 97.6, "12 weeks",
        "Andrew Ng, Associate Professor, Stanford University; Chief Scientist, Baidu; Chairman and Co-founder, Coursera",
        "Stanford University", "Coursera", "in December 2015"));
        
onlineCourses.push(OnlineCourse("Advanced Styling with Responsive Design", 93.3, "4 weeks",
        "Colleen van Lent, Ph.D.", "University of Michigan", "Coursera", "in August 2016"));

onlineCourses.push(OnlineCourse("Introduction to CSS3", 94.7, "4 weeks",
        "Colleen van Lent, Ph.D., lecturer", "University of Michigan", "Coursera", "in July 2016"));

onlineCourses.push(OnlineCourse("Ruby on Rails: An Introduction", 97.2, "3 weeks",
        "Kalman Hazins, Adjunct Professor, Graduate Computer Science", "Johns Hopkins University", "Coursera", "in September 2015"));

onlineCourses.push(OnlineCourse("Internet Emerging Technologies", 97.2, "3 weeks",
        "Jong-Moon Chung, Professor, School of Electrical & Electronic Engineering", "Yonsei University", "Coursera", "in October 2015"));

onlineCourses.push(OnlineCourse("Programming Mobile Applications for Android Handheld Systems: Part 1", 79.4, "4 weeks",
        "Adam Porter, Professor", "University of Maryland, College Park", "Coursera", "in May 2015"));

onlineCourses.push(OnlineCourse("Programming Mobile Applications for Android Handheld Systems: Part 2", 83.2, "4 weeks",
        "Adam Porter, Professor", "University of Maryland, College Park", "Coursera", "in June 2015"));

onlineCourses.push(OnlineCourse("Principles of Computing (Part 1)", 83.0, "4 weeks",
        "Scott Rixner, Professor; Joe Warren, Professor; Luay Nakhleh, Associate Professor", "Rice University", "Coursera", "in August 2015"));

onlineCourses.push(OnlineCourse("An Introduction to Interactive Programming in Python (Part 1)", 95.9, "4 weeks",
        "Scott Rixner, Professor; Joe Warren, Professor; John Greiner, Lecturer; Stephen Wong, Lecturer", "Rice University", "Coursera", "in June 2015"));

var webApplications = [];

webApplications.push(WebApplication("Places Nearby",
        "https://dry-falls-51573.herokuapp.com",
        [
                "images/web_applications/places_nearby/1.png",
                "images/web_applications/places_nearby/2.png",
                "images/web_applications/places_nearby/3.png",
                "images/web_applications/places_nearby/4.png",
                "images/web_applications/places_nearby/5.png",
        ],
        [
                "Google Places API",
                "Flask",
                "Bootstrap",
                "JQuery",
                "KnockoutJS",
                "NPM",
                "Gulp",
                "SASS"
        ])
);