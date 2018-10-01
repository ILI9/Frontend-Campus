//get <ul> with list of tab links
const tabsList = document.querySelector('.tabs__list');

tabsList.addEventListener('click', event => {
    //event delegation
    if(event.target.matches('.tabs__item a')) {
        event.preventDefault();
        //Get clicked tab list
        const tabsItem = event.target.parentNode;
        //get corresponding panel's ID via hash
        const targetId = event.target.hash.slice(1);
        //get correct panel by ID
        const targetPanel = document.getElementById(targetId);

        /**
         * Items
         */

        // Active correct tabs menu item
        const allTabsItems = document.querySelectorAll('.tabs__item');

        //remove active class from all items
        allTabsItems.forEach(item => {
            item.classList.remove('is-active');
        });
        //add active calss to clicked item
        tabsItem.classList.add('is-active');

        /**
         * Panels
         */

        // Active correct tabs panel
        const allActivePanels = document.querySelectorAll('.tabs__panel.is-active');

        //remove active class from all panel
        allActivePanels.forEach(panel => {
            panel.classList.remove('is-active');
        });
        //add active calss to correct panel
        targetPanel.classList.add('is-active');
    }
});

/**
 * ACCORDION. Con solo uno aperto.
 */
/*
 const accordion = document.querySelector('.accordion');

 accordion.addEventListener('click', event => {
     if(event.target.matches('.accordion__header a, .accordion__header a svg')) {
         event.preventDefault();

         const targetHeader = event.target.tagName.toLowerCase() == 'a' ? event.target.parentNode : event.target.parentNode.parentNode;  //tutto questo per far si che si apra anche al click dell' svg
         const targetPanel = targetHeader.nextElementSibling;

         const allPanels = document.querySelectorAll('.accordion__panel.is-active'); //con il '.' davanti quando parliamo di selettore css

         allPanels.forEach(panel => {
             panel.classList.remove('is-active');
         });

         targetPanel.classList.add('is-active');

         const allHeaders = document.querySelectorAll('.accordion__header');
       
         allHeaders.forEach(head => {
             head.classList.remove('is-active'); //per gli elemnti html
         })
         
         targetHeader.classList.add('is-active'); //per gli elemnti html
     }
 })
 */
/**
 * Accordion che restano aperti.
 */
 
const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', event => {
    if(event.target.matches('.accordion__header a, .accordion__header a svg')) {
        event.preventDefault();

        const targetHeader = event.target.tagName.toLowerCase() == 'a' ? event.target.parentNode : event.target.parentNode.parentNode;  //tutto questo per far si che si apra anche al click dell' svg
        const targetPanel = targetHeader.nextElementSibling;

        //panels
        const allPanels = document.querySelectorAll('.accordion__panel'); //con il '.' davanti quando parliamo di selettore css
        targetPanel.classList.toggle('is-active');

        //
        const allHeaders = document.querySelectorAll('.accordion__header');
        targetHeader.classList.toggle('is-active'); //per gli elemnti html
    }
})


/**
 * Loader
 */

 const button = document.querySelector('button');

 button.addEventListener('click', event => {
     document.querySelector('html').classList.add('is-loading', 'prevent-scroll');
 })

 function activateLoader() {
    document.querySelector('html').classList
        .add('is-loading', 'prevent-scroll');

 }

 function deactivateLoader() {
    document.querySelector('html').classList
        .remove('is-loading', 'prevent-scroll');

 }

 activateLoader();

 setTimeout(() => {
     deactivateLoader();
 }, 1000);

 /**
  * Modal
  * 
  */

  const modal = document.querySelector('.modal');
  const html = document.querySelector('html');

  //open modal
 function openModal(){
    const modalBox = document.querySelector('.modal__box');
    modalBox.classList.remove('is-leaving');

    modal.classList.add('is-active');
    html.classList
        .add('prevent-scroll');
     
 }


//close modal
function closeModal(){
    const modalBox = document.querySelector('.modal__box');
    modalBox.classList.add('is-leaving');

    setTimeout(() => {
        modal.classList.remove('is-active');
        html.classList
            .remove('prevent-scroll');
    }, 350);
}


document.addEventListener('keydown', event => {
    if(event.key === 'Escape') {
        closeModal();
        //deactivateLoader();
    };
    
})

//per chiudere cliccando all'esterno e non all'interno  del box
modal.addEventListener('click', closeModal);
modal.querySelector('.modal__box').addEventListener('click', event => {
    event.stopPropagation();
})