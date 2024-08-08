// sidebar.js

// Function to create and populate the sidebar
function createSidebar() {
    const sidebar = document.getElementById('sidebar');

    // Create a list of menu items
    const menuItems = [
        { name: 'Inventory', href: '#inventory' },
        { name: 'Sheets', href: '#sheets' }
    ];

    // Create a list element to contain the menu items
    const ul = document.createElement('ul');

    menuItems.forEach(item => {
        // Create a list item for each menu item
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.name;

        // Append the anchor to the list item
        li.appendChild(a);

        // Append the list item to the unordered list
        ul.appendChild(li);
    });

    // Append the unordered list to the sidebar
    sidebar.appendChild(ul);
}

// Call the function to create the sidebar
document.addEventListener('DOMContentLoaded', createSidebar);
