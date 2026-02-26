document.getElementById('top__cta__btn__mn').addEventListener('click', function() {
            scheme_to_mn();
        });
document.getElementById('top__cta__btn__dl').addEventListener('click', function() {
            scheme_to_dl();
        });
document.getElementById('top__cta__btn__oc').addEventListener('click', function() {
            scheme_to_oc();
        });
document.getElementById('top__cta__btn__fo').addEventListener('click', function() {
            scheme_to_fo();
        });


function scheme_to_mn() {
            document.body.className = "scheme-midnight";
            console.log("scheme-midnight");
        }
function scheme_to_dl() {
            document.body.className = "scheme-daylight";
            console.log("scheme-daylight");
        }
function scheme_to_oc() {
            document.body.className = "scheme-ocean";
            console.log("scheme-ocean");
        }
function scheme_to_fo() {
            document.body.className = "scheme-forest";
            console.log("scheme-forest");
        }