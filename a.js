$(document).ready(function() {
    // Toggle menu on click
    $("#menu-toggler").click(function() {
        toggleBodyClass("menu-active");
    });

    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

});
// calculator functions


// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {

    // console.log("calculating");

    // Declare UI Variables

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // Turn amount into decimal and store it into variable
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    // Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal * x * calculatedInterest) / (x - 1);


    // Check if value is finite

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);

    } else {
        showError("Please check your numbers")
    }

    e.preventDefault();
}

// Function to show error
function showError(error) {
    // create div
    const errorDiv = document.createElement('div');

    // Get card and heading in order to add new div to DOM. Parent element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    // Give div a class name
    errorDiv.className = 'alert alert-danger';

    // Create text and append div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading. Insert above will take in the parent element which is the card in this case and for the parameters
    // It will take in the element you want to put in and the element you want to put it before, in this case errorDiv and the heading

    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds

    setTimeout(clearError, 3000);

}


// Create clear error
function clearError() {
    document.querySelector('.alert').remove();
}




// apply form
var $modalPop = $('.modalLink');
var $scrolledPop = $('.scrolledLink');
var $slide = $('#slide');
var $modal = $('#modal');
var $close = $('.close');
var $toggleClose = $('.toggleClose');
var $appLink = $('.appLink');


function popitup(url) {
    newwindow = window.open(url, 'name', 'height=300,width=500').close();
    if (window.focus) { newwindow.focus(); }
    return false;
}

$('.mod').on('click', function() {
    $modal.hide('size', { 'percent': 100, 'easing': 'easeInQuad' }, 200);
    return false;
});

$('.slid').on('click', function() {
    $slide.slideToggle('fast', 'easeInQuad');
    return false;
});

$modalPop.on('click', function() {
    $modal.show('size', { 'percent': 100, 'easing': 'easeOutQuad' }, 200);
});

$close.on('click', function() {
    $modal.hide('size', { 'percent': 100, 'easing': 'easeInQuad' }, 200);
});

$scrolledPop.on('click', function() {
    $slide.slideToggle('fast', 'easeInOutQuint');
});

$toggleClose.on('click', function() {
    $slide.slideToggle('fast', 'easeInQuad');
});

function floatLabel(inputType) {
    $(inputType).each(function() {
        var $this = $(this);

        // on focus add cladd active to label
        $this.focus(function() {
            $this.next().addClass("active");
        });
        //on blur check field and remove class if needed
        $this.blur(function() {
            setTimeout(function() {
                if ($this.val() === '' ||
                    $this.val() === 'blank' ||
                    $this.val() === '___-__-____' ||
                    $this.val() === '(___)___-____' ||
                    $this.val() === '(___) ___-____ x_____' ||
                    $this.val() === '_ _ /_ _ /_ _ _ _ ') {
                    $this.next().removeClass();
                }
            }, 200);
        });
    });
}


(function($) {

    // add a class of "floatLabel to the input field
    floatLabel(".floatLabel");

    //nav toggle class
    $('.navToggle').click(function() {
        $('body').toggleClass('opened');
        event.preventDefault();
    });

    //input mask 
    $("#ssn").mask("999-99-9999", { completed: function() {} });
    $("#phone").mask("(999)999-9999");
    $("#phone2").mask("(999) 999-9999? x99999");
    $("#DOB,#DOP,#DOP2").mask("99/99/9999", { placeholder: "_ " });

    //date picker 
    $("#PD2, #PD").datepicker({
        minDate: '+1',
        maxDate: '+2m'
    });

    //form tabs
    $('.contact').parent().addClass('activeTab');
    $('.heading').on('click', function() {
        var $this = $(this);
        var $thisParent = $this.parent();
        if ($thisParent.hasClass('activeTab')) {
            $thisParent.toggleClass('activeTab');
        } else {
            $('.form-group').removeClass('activeTab');
            $thisParent.toggleClass('activeTab');
        }
    });
    //form Nav
    $('.formNav a').on('click', function() {
        var $this = $(this);
        var thisProp = $this.prop('class');
        var grandParent = $this.closest('.form-group');
        var next = grandParent.next();
        var prev = grandParent.prev();

        if (thisProp === "next") {
            $('.form-group').removeClass('activeTab');
            $('html, body').stop().animate({
                scrollTop: $(next).offset().top
            }, 1000);
            next.toggleClass('activeTab');

            event.preventDefault()
        } else {
            $('.form-group').removeClass('activeTab');
            prev.toggleClass('activeTab');
            $('html, body').stop().animate({
                scrollTop: $('.activeTab').offset().top
            }, 1000);
            event.preventDefault()
        }
    });
})(jQuery);


//calculator
// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {

    // console.log("calculating");

    // Declare UI Variables

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // Turn amount into decimal and store it into variable
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    // Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal * x * calculatedInterest) / (x - 1);


    // Check if value is finite

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);

    } else {
        showError("Please check your numbers")
    }

    e.preventDefault();
}

// Function to show error
function showError(error) {
    // create div
    const errorDiv = document.createElement('div');

    // Get card and heading in order to add new div to DOM. Parent element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    // Give div a class name
    errorDiv.className = 'alert alert-danger';

    // Create text and append div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading. Insert above will take in the parent element which is the card in this case and for the parameters
    // It will take in the element you want to put in and the element you want to put it before, in this case errorDiv and the heading

    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds

    setTimeout(clearError, 3000);

}


// Create clear error
function clearError() {
    document.querySelector('.alert').remove();
}