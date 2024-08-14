
document.addEventListener('DOMContentLoaded', function() {


    /**
     * Fontion de gestion de l'affichage des listes de filtres
     * 
     * @param {HTMLElement} buttonId 
     * @param {HTMLElement} contentId 
     * @param {HTMLElement} chevronId 
     */
    function toggleDropdown(buttonId, contentId, chevronId) {
        var button = document.getElementById(buttonId);
        var content = document.getElementById(contentId);
        var chevron = document.getElementById(chevronId);

        button.addEventListener('click', function() {
            
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

    toggleDropdown('dropbtn1', 'dropdownContent1', 'chevron1');
    toggleDropdown('dropbtn2', 'dropdownContent2', 'chevron2');
    toggleDropdown('dropbtn3', 'dropdownContent3', 'chevron3');
});