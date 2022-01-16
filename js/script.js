document.addEventListener('DOMContentLoaded', function () {

    //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'open') {
            // if true do this
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            // else (if false) do this:
            menunav.setAttribute('data-navstate', 'open');
        };
    });

    //STICKY NAV - CLOSE THE NAV ON STICKY HEADER NAV LINK CLICKS
    const stickynavlinks = document.querySelectorAll(".sticky nav a");
    for (let i = 0; i < stickynavlinks.length; i++) {
        stickynavlinks[i].addEventListener('click', function () {
            menunav.setAttribute('data-navstate', 'closed');
        });
    };

    // var alltextblocks = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a');
    // for (var i = 0; i < alltextblocks.length; i++) {
    //     var mytb = alltextblocks[i].innerHTML;
    //     var mytbs = alltextblocks[i].innerHTML.split(' ');
    //     var lasttbs = mytb.slice(-1);
    //     //console.log("length is " + mytbs.length + " last textblock is " + lasttbs);
    //     if ((mytbs.length > 1) && (lasttbs != ">")) {
    //         // console.log("widow slayed!");
    //         mytbs[mytbs.length - 2] += "&nbsp;" + mytbs[mytbs.length - 1];
    //         mytbs.pop();
    //         alltextblocks[i].innerHTML = mytbs.join(' ');
    //     }
    // }
});

