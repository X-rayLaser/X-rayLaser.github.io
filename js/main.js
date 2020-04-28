$(document).ready(function() {
    function Viewmodel() {
        // Data
        var self = this;
        
        this.shownSection = ko.observable();
        
        this.webApps = webApplications;
        
        this.detailImgSrc = ko.observable(webApplications[0].screenshots[0]);
        
        this.setDetail = function (clickedImage) {
            self.detailImgSrc(clickedImage);
        };
        
        this.showWebApps = function () {
            $('#designed-pages').addClass("hidden");
            $('#web-apps').removeClass("hidden");
            
        };
        
        this.showDesignedPages = function () {
            $('#designed-pages').removeClass("hidden");
            $('#web-apps').addClass("hidden");
        };
        
        Sammy(function() {
            function removeClassFromAll() {
                $('#main-navbar ul li').removeClass('active');
            }
            
            this.get('#:section', function() {
                var section = this.params.section;
                self.shownSection(section);
                
                if (section === "about") {
                    removeClassFromAll();
                    $('#main-navbar ul li:nth-child(1)').addClass("active");
                } else if (section === "portfolio") {
                    removeClassFromAll();
                    $('#main-navbar ul li:nth-child(2)').addClass("active");
                } else if (section === "skills") {
                    removeClassFromAll();
                    $('#main-navbar ul li:nth-child(3)').addClass("active");
                } else if (section === "achievements") {
                    removeClassFromAll();
                    $('#main-navbar ul li:nth-child(4)').addClass("active");
                } else if (section === "contact") {
                    removeClassFromAll();
                    $('#main-navbar ul li:nth-child(5)').addClass("active");
                }
            });
            
            window.location = "#portfolio";
        }).run();
    };

    ko.applyBindings(new Viewmodel());
});