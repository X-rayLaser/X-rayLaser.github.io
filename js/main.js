function Viewmodel() {
    // Data
    var self = this;
    
    this.shownSection = ko.observable();
    
    this.webApps = webApplications;
    
    this.detailImgSrc = ko.observable(webApplications[0].screenshots[0]);
    
    Sammy(function() {
        this.get('#:section', function() {
            self.shownSection(this.params.section);
        });
        
        window.location = "#about";
    }).run();
};

ko.applyBindings(new Viewmodel());