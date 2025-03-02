function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Ensure full menu height is visible
  if (menu.classList.contains("open")) {
    menu.style.maxHeight = "500px"; // Increase if needed
  } else {
    menu.style.maxHeight = "0";
  }
}



function openModal() {
  document.getElementById("popupModal").style.display = "block";
}

function closeModal() {
  document.getElementById("popupModal").style.display = "none";
}




// function toggleCard() {
//   var card = document.getElementById("infoCard");
//   if (card.style.display === "block") {
//     card.style.display = "none";
//   } else {
//     card.style.display = "block";
//   }
// }



function toggleCard(event, cardId) {
  var card = document.getElementById(cardId);
  var trigger = event.target; // Get the clicked element

  // Toggle visibility
  if (card.style.display === "block") {
    card.style.display = "none";
    trigger.classList.remove("highlight"); // Remove highlight
    document.removeEventListener("click", closeOnClickOutside);
  } else {
    // Close any other open popups before opening a new one
    document.querySelectorAll(".floating-card").forEach(c => {
      c.style.display = "none";
    });

    // Remove highlight from any previously selected text
    document.querySelectorAll(".highlight").forEach(item => {
      item.classList.remove("highlight");
    });

    // Position the card exactly at the click position
    card.style.display = "block";
    card.style.top = event.clientY + "px"; // Position vertically
    card.style.left = event.clientX + "px"; // Position horizontally

    // Ensure it doesn't go out of bounds
    if (event.clientX + card.offsetWidth > window.innerWidth) {
      card.style.left = (event.clientX - card.offsetWidth) + "px";
    }
    if (event.clientY + card.offsetHeight > window.innerHeight) {
      card.style.top = (event.clientY - card.offsetHeight) + "px";
    }

    // Add highlight effect
    trigger.classList.add("highlight");

    // Close popup when clicking outside
    setTimeout(() => {
      document.addEventListener("click", function closeOnClickOutside(event) {
        if (!card.contains(event.target) && event.target !== trigger) {
          closeCard(cardId);
          document.removeEventListener("click", closeOnClickOutside);
        }
      });
    }, 100);
  }
}

// Function to close the popup when clicking outside
function closeOnClickOutside(event) {
  var openCards = document.querySelectorAll(".floating-card[style*='display: block']");
  openCards.forEach(card => {
    var trigger = document.querySelector(".highlight");
    if (card && event.target !== card && !card.contains(event.target) && event.target !== trigger) {
      card.style.display = "none";
      if (trigger) {
        trigger.classList.remove("highlight");
      }
    }
  });
}

// Function to close the popup when clicking "X"
function closeCard(cardId) {
  var card = document.getElementById(cardId);
  var trigger = document.querySelector(".highlight");

  card.style.display = "none";
  if (trigger) {
    trigger.classList.remove("highlight");
  }
  document.removeEventListener("click", closeOnClickOutside);
}






document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});




function toggleTheme() {
  let body = document.body;
  let themeIcon = document.getElementById("theme-icon");

  // Toggle Dark Mode
  body.classList.toggle("dark-mode");

  // Check if Dark Mode is Active
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeIcon.src = "./assets/moon.png"; // Change to Moon Icon
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.src = "./assets/sun.png"; // Change to Sun Icon
  }
}

// Preserve User Theme Preference on Page Load
window.onload = function () {
  let savedTheme = localStorage.getItem("theme");
  let themeIcon = document.getElementById("theme-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.src = "./assets/moon.png"; // Set Moon Icon
  } else {
    themeIcon.src = "./assets/sun.png"; // Set Sun Icon
  }
};



// Initialize AOS animations
AOS.init({
  duration: 800, // Animation duration in milliseconds
  once: true,     // Only animate once
});



// Toggle dropdown in mobile view
function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.toggle("active");
}
