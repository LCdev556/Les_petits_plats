/**import { ingredientFilterListeCreation } from "./data-management.js";
import { applianceFilterListeCreation } from "./appliances-filtering.js";
import { ustensilsFilterListeCreation } from "./ustensils-filtering.js";*/

document.addEventListener('DOMContentLoaded', function() {

    function toggleDropdown(buttonId, contentId, chevronId) {
        var button = document.getElementById(buttonId);
        var content = document.getElementById(contentId);
        var chevron = document.getElementById(chevronId);

        button.addEventListener('click', function() {
            /**ingredientFilterListeCreation()
            applianceFilterListeCreation()
            ustensilsFilterListeCreation()*/
            if (content.style.display === 'block') {
                content.style.display = 'none';
                button.className = 'dropbtn';
                chevron.classList.add("chevron-down");
                chevron.classList.remove("chevron-up")
                
            } else {
                content.style.display = 'block';
                button.className = 'open-button-style'
                chevron.classList.add("chevron-up");
                chevron.classList.remove("chevron-down")
                
            }
        });

    }

    // Initialisation des dropdowns
    toggleDropdown('dropbtn1', 'dropdownContent1', 'chevron1');
    toggleDropdown('dropbtn2', 'dropdownContent2', 'chevron2');
    toggleDropdown('dropbtn3', 'dropdownContent3', 'chevron3');
});