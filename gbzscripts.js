// This is the first JS file for GBZ! :) 
// Created by TJW on 3/14/22 on Day #91 #100DaysOfCode to continue progress on my very young side project! 

console.log("gbzscripts.js is linked!")

// Auto display current year in the copyright / footer
const container = document.querySelector('.footer');  // Grab the "footer" class div
const dynamicDate = document.createElement('p');  // Create a 'p' element
dynamicDate.textContent = `Copyright @TyghWalters ${new Date().getFullYear()}`;  // Fill the new 'p' with the date and template literal for the rest
dynamicDate.classList = "darkbox"; // Make the text white by applying CSS style for all darker areas
container.appendChild (dynamicDate);  // Add this element to the footer