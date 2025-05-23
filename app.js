document.addEventListener('DOMContentLoaded', () => {

    const menuItems = document.querySelectorAll('#menu li'); // or your class
    const toggleBtn = document.querySelector('.toggle-btn');
    const sideMenu = document.querySelector('.side-menu');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            menuItems.forEach(li => li.classList.remove('active'));

            // Add active class to clicked item
            item.classList.add('active');

            // Trigger anchor navigation manually
            const anchor = item.querySelector('a');
            if (anchor) {
                anchor.click(); // This triggers the navigation
            }

            // Close menu on small screens
            sideMenu.classList.remove('visible');
            toggleBtn.classList.remove('open'); // not toggle — force close
        });
    });

    // const menuItems = document.querySelectorAll('#menu li');
    const sections = document.querySelectorAll('.content-menu  > div[id]');
    const contentContainer = document.querySelector('.content-menu');
    // console.log("sections");
    // console.log(sections);

    // console.log(window.innerWidth);



    // // Click handler: add 'active' to clicked item

    // const toggleBtn = document.querySelector('.toggle-btn');
    // menuItems.forEach(item => {
    //     console.log("itemss");
    //     console.log(item);

    //     item.addEventListener('click', () => {
    //         menuItems.forEach(li => li.classList.remove('active'));
    //         const sideMenu = document.querySelector('.side-menu');
    //         item.classList.add('active');
    //         sideMenu.classList.remove('visible');
    //         toggleBtn.classList.toggle('open')
    //     });
    // });

    // Scroll handler: highlight current section in menu

    const offset = 250; // adjust this value to control how early the section gets detected

    window.addEventListener('scroll', () => {
        let currentId = '';
        // const scrollY = window.scrollY;
        const scrollY = contentContainer.scrollTop;

        // console.log("scrolly");
        // console.log(scrollY);



        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.offsetHeight - 50;
            // console.log("section top");
            // console.log(sectionTop);
            // console.log("section height");
            // console.log(sectionHeight);

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentId = section.getAttribute('id');
                // console.log("current id");
                // console.log(currentId);



            }
        });

        if (currentId) {
            menuItems.forEach(li => {
                li.classList.remove('active');
                const anchor = li.querySelector('a');
                if (anchor && anchor.getAttribute('href') === `#${currentId}`) {
                    li.classList.add('active');
                }
            });
        }
    }, true);
});


// animate progress bar
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll(".filled-progress");
                fills.forEach(bar => {
                    bar.classList.add("animate");
                });
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll(".skill-wrapper").forEach(wrapper => {
        observer.observe(wrapper);
    });
});






// toggle
const toggleBtn = document.querySelector('.toggle-btn');
const sideMenu = document.querySelector('.side-menu');
console.log(toggleBtn);

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            this.classList.toggle('open');
            sideMenu.classList.toggle('visible');
        });
    }
});