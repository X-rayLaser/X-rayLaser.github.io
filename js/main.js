function Viewmodel() {
    // Data
    var self = this;
    
    this.shownSection = ko.observable();
    
    this.webApps = webApplications;
    
    Sammy(function() {
        this.get('#:section', function() {
            self.shownSection(this.params.section);
        });
        
        window.location = "#about";
    }).run();
};

ko.applyBindings(new Viewmodel());