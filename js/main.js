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
            this.get('#:section', function() {
                self.shownSection(this.params.section);
            });
            
            window.location = "#about";
        }).run();
    };

    ko.applyBindings(new Viewmodel());
});