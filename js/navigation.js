// navigation.js

$(document).ready(function() {
    // Get the current page filename (assuming it's in the format "example.html")
    var currentPage = window.location.pathname.split('/').pop();

    // Remove the 'active' class from all navigation items
    $('.navbar-nav li').removeClass('active');

    // Debugging: Output the current page to the console
    console.log('Current Page:', currentPage);

    // Debugging: Output the href attributes of all navigation links to the console
    $('.navbar-nav li a').each(function() {
        console.log('Link Href:', $(this).attr('href'));
    });

    // Add the 'active' class to the navigation item corresponding to the current page
    $('.navbar-nav li a[href$="' + currentPage + '"]').parent().addClass('active');
});