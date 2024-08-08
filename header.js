// header.js

// Initialize options with predefined values
const options = [
    { name: 'Cameron Dillinger', href: 'index.html' },
    { name: 'Projects', href: 'projects.html' },
    { name: 'Notes', href: 'notes.html' },
    { name: 'News', href: 'news.html' },
    { name: 'About', href: 'about.html' }
];

// Function to render the options
function renderOptions() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = ''; // Clear existing options

    options.forEach(option => {
        const a = document.createElement('a');
        a.href = option.href;
        a.textContent = option.name;
        navbar.appendChild(a);
    });
}

// Function to add a new option
function addOption() {
    const name = prompt('Enter the name of the new option:');
    const href = prompt('Enter the URL for the new option:');
    
    if (name && href) {
        options.push({ name, href });
        renderOptions();
    }
}

// Function to remove an option
function removeOption() {
    const name = prompt('Enter the name of the option to remove:');
    
    const index = options.findIndex(option => option.name === name);
    
    if (index !== -1) {
        options.splice(index, 1);
        renderOptions();
    } else {
        alert('Option not found.');
    }
}

// Initial render
document.addEventListener('DOMContentLoaded', renderOptions);
