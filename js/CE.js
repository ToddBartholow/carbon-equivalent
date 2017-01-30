/**
 * Created by Todd on 9/25/14.
 */
$(document).ready(function() {
    var viewModel =
    { percentC:  ko.observable()
    , percentMn: ko.observable()
    , percentSi: ko.observable()
    , percentCr: ko.observable()
    , percentMo: ko.observable()
    , percentV:  ko.observable()
    , percentCu: ko.observable()
    , percentNi: ko.observable()
    };

    viewModel.carbonEquivalent = ko.dependentObservable(function() {
       //if( isNaN(this.percentC()) ) {
       //     console.log(this.percentC());
       //     this.percentC() = 0;
       //     console.log(this.percentC());
       // }

        return (
            // check for value
            parseFloat(this.percentC() || 0)
            + ((parseFloat(this.percentMn() || 0) + parseFloat(this.percentSi() || 0)) / 6)
            + ((parseFloat(this.percentCr() || 0) + parseFloat(this.percentMo() || 0 ) + parseFloat(this.percentV() || 0)) / 6)
            + ((parseFloat(this.percentCu() || 0) + parseFloat(this.percentNi() || 0)) / 15)
        ).toFixed(2);
    }, viewModel);

    // Activates knockout.js
    ko.applyBindings(viewModel);
});