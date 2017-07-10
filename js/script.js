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
    
    var langSection = document.getElementById("languages");
    var libSection = document.getElementById("libraries");
    fillinSection(langSection, "Programming Languages", languages);
    fillinSection(libSection, "Libraries and Frameworks", libraries);
    
    fillinAlgos();
    fillinPatterns();
    
    
    var xsElement = document.getElementById("extra-small-screens");
    var smElement = document.getElementById("small-screens");
    var mdElement = document.getElementById("medium-screens");
    var lgElement = document.getElementById("large-screens");
    var xlElement = document.getElementById("extra-large-screens");
    
    var xsButton = document.getElementById("show-xs");
    var smButton = document.getElementById("show-sm");
    var mdButton = document.getElementById("show-md");
    var lgButton = document.getElementById("show-lg");
    var xlButton = document.getElementById("show-xl");
    
    
    function hideAllScreenshots() {
        $(xsElement).removeClass("visible");
        $(xsButton).removeClass("my-menu-btn-active");
        $(xsElement).addClass("hidden");
        
        $(smElement).removeClass("visible");
        $(smButton).removeClass("my-menu-btn-active");
        $(smElement).addClass("hidden");
        
        $(mdElement).removeClass("visible");
        $(mdButton).removeClass("my-menu-btn-active");
        $(mdElement).addClass("hidden");
        
        $(lgElement).removeClass("visible");
        $(lgButton).removeClass("my-menu-btn-active");
        $(lgElement).addClass("hidden");
        
        $(xlElement).removeClass("visible");
        $(xlButton).removeClass("my-menu-btn-active");
        $(xlElement).addClass("hidden");
    }
    
    xsButton.addEventListener("click", function() {
        hideAllScreenshots();
        $(xsElement).removeClass("hidden");
        $(xsElement).addClass("visible");
        $(xsButton).addClass("my-menu-btn-active");
    });
    
    smButton.addEventListener("click", function() {
        hideAllScreenshots();
        $(smElement).removeClass("hidden");
        $(smElement).addClass("visible");
        $(smButton).addClass("my-menu-btn-active");
    });
    
    mdButton.addEventListener("click", function() {
        hideAllScreenshots();
        $(mdElement).removeClass("hidden");
        $(mdElement).addClass("visible");
        $(mdButton).addClass("my-menu-btn-active");
    });
    
    lgButton.addEventListener("click", function() {
        hideAllScreenshots();
        $(lgElement).removeClass("hidden");
        $(lgElement).addClass("visible");
        $(lgButton).addClass("my-menu-btn-active");
    });
    
    xlButton.addEventListener("click", function() {
        hideAllScreenshots();
        $(xlElement).removeClass("hidden");
        $(xlElement).addClass("visible");
        $(xlButton).addClass("my-menu-btn-active");
    });
    
    
    window.addEventListener("scroll", function() {
        var navElement = document.getElementById("main-navbar");
        var rect = navElement.getBoundingClientRect();
        if (rect.top <=0) {
            $(navElement).addClass("my-fixed-top");
        } else {
            $(navElement).removeClass("my-fixed-top");
        }
    });
});
