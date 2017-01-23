$(document).ready(function() {
    function fillinSection(sectionElement, heading, items) {
        $(sectionElement).append("<h3>" + heading + "</h3>");
        $(sectionElement).append("<ul></ul>");
        var $langList = $($(sectionElement).children()[1]);

        items.forEach(function(item, index) {
            $langList.append("<li></li>");
            var $listItem = $($langList.children()[index]);
            
            $listItem.append("<section class='language-item'></section>");
            var $section = $($listItem.children()[0]);

            //adding experience section
            $section.append("<section></section>");
            var $experienceSection = $($section.children()[0]);
            $experienceSection.append("<h5>Experience</h5>");
            $experienceSection.append("<p>" + item.experience + "</p>");
            $experienceSection.append("<small>" + item.details + "</small>");

            //adding proficiency section
            $section.append("<section></section>");
            var $proficiencySection = $($section.children()[1]); 
            $proficiencySection.append("<h5>Proficiency</h5>");
            $proficiencySection.append("<ul><li>" + item.proficiency + "</li></ul>");
            
            //adding usage section
            $section.append("<section></section>");
            var $usageSection = $($section.children()[2]);
            $usageSection.append("<h5>Usage</h5>");
            $usageSection.append("<p>Used in " + item.usageCount + " projects</p>");
            
            //append a heading
            $section.prepend("<h4>" + item.language + "</h4>");
            
        });
    }
    
    function fillinRating($familiarityBox, rating) {
        for (var i=0; i < Math.floor(rating); i++) {
                $familiarityBox.append("<div class='circle filled'></div>");
        }
        
        for (; i < rating; i++) {
            $familiarityBox.append("<div class='circle half-filled'></div>");
        }
        
        for (; i < 5; i++) {
            $familiarityBox.append("<div class='circle'></div>");
        }
        
        $familiarityBox.children().wrapAll("<div class='rating'></div");
        
        $familiarityBox.prepend("<span>Level of familiarity:</span>");
    }
    
    function fillinAlgos() {
        var algoSection = document.getElementById("algorithms");
        $(algoSection).append("<h3>Algorithms and Data Structures</h3>");
        $(algoSection).append("<ul class='items-zoomable'></ul>");
        var $algolist = $($(algoSection).children()[1]);
        
        algorithms.forEach(function(item, index) {
            $algolist.append("<li class='algorithms-item'></li>");
            var $listItem = $($algolist.children()[index]);
            
            $listItem.append("<h4>" + item.algorithm + "</h4>");
            $listItem.append("<div></div>");
            
            var $familiarityBox = $($listItem.children()[1]);
            
            fillinRating($familiarityBox, item.rating);
        });
    }
    
    function fillinPatterns() {
        var patternsSection = document.getElementById("patterns");
        $(patternsSection).append("<h3>Design Principles and Patterns</h3>");
        $(patternsSection).append("<ul class='items-zoomable'></ul>");
        var $patternlist = $($(patternsSection).children()[1]);
        
        patterns.forEach(function(item, index) {
            $patternlist.append("<li class='pattern-item'></li>");
            var $listItem = $($patternlist.children()[index]);
            
            $listItem.append("<h4>" + item.pattern + "</h4>");
            $listItem.append("<div></div>");
            
            var $familiarityBox = $($listItem.children()[1]);
            fillinRating($familiarityBox, item.rating);
            
            $listItem.append("<p>Usage: " + item.usageCount + "</p>");
            
        });
    }
    
    function fillinCourses() {
        var coursesSection = document.getElementById("online-courses");
        $(coursesSection).append("<h3>Finished online courses</h3>");
        $(coursesSection).append("<ul class='items-zoomable'></ul>");
        var $courselist = $($(coursesSection).children()[1]);
        
        onlineCourses.forEach(function(item, index) {
            $courselist.append("<li></li>");
            var $listItem = $($courselist.children()[index]);
            
            $listItem.append("<h4>" + item.course + "</h4>");
            $listItem.append("<div></div>");
            
            var $divElement = $($listItem.children()[1]);
            
            $divElement.append("<p>Score: " + item.score + "%</p>");
            $divElement.append("<p>Length: " + item.length + "</p>");
            $divElement.append("<p>Instructor(s): " + item.instructors + "</p>");
            
            $listItem.append("<footer></footer>");
            
            var $footerElement = $($listItem.children()[2]);
            $footerElement.append("<p><small>University: " + item.university + "</small></p>");
            $footerElement.append("<p><small>Platform: " + item.platform + "</small></p>");
            $footerElement.append("<p><small>Finished: " + item.finished + "</small></p>");
        });
        
    }
    
    var langSection = document.getElementById("languages");
    var libSection = document.getElementById("libraries");
    fillinSection(langSection, "Programming Languages", languages);
    fillinSection(libSection, "Libraries and Frameworks", libraries);
    
    fillinAlgos();
    fillinPatterns();
    fillinCourses();
});
