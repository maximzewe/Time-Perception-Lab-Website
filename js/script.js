console.log("JS is working");

// Highlight active navigation link
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Creates a card for each lab member
function createMemberCard(member) {
  const col = document.createElement("div");
  const card = document.createElement("div");

  if (member.category === "Principal Investigator") {
    card.className = "card";

    // Slightly wider column than the others but not full-width
    col.className = "col-12 col-md-12"; // half-width on large screens, full on mobile

    // Flex layout for image on left, text on right
    card.classList.add("d-flex", "align-items-start", "pi-card");

    // Image container
    const imgContainer = document.createElement("div");
    imgContainer.className = "pi-image-container me-3";

    const img = document.createElement("img");
    img.src = member.img;
    img.alt = member.name;
    img.className = "card-img-top pi-img";
    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    // Text container
    const textContainer = document.createElement("div");
    textContainer.className = "pi-text";

    const name = document.createElement("h5");
    name.className = "card-title mb-2";
    name.textContent = member.name;

    // const role = document.createElement("p");
    // role.className = "fw-bold mb-2";
    // role.textContent = member.role;

    const description = document.createElement("p");
    description.className = "card-text";

    // Load the formatted HTML string from the 'description' property
    // Use member.description for the PI, or a fallback if needed
    description.innerHTML = member.description || `No detailed description available.`;

    textContainer.appendChild(name);
    // textContainer.appendChild(role);
    textContainer.appendChild(description);
    card.appendChild(textContainer);
  } else {
    // Standard layout for other members
    card.className = "card h-100";
    col.className = "col-6 col-md-3"; // keep original width/grid

    card.classList.add("text-center");

    const imgContainer = document.createElement("div");
    imgContainer.className = "image-container";

    const img = document.createElement("img");
    img.src = member.img;
    img.alt = member.name;
    img.className = "card-img-top";

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    const cardBody = document.createElement("div");
    cardBody.className = "class-body text-start";

    const name = document.createElement("h5");
    name.className = "card-title mb-1";
    name.textContent = member.name;

    //const role = document.createElement("p");
    //role.className = "fw-bold mb-2";
    //role.textContent = member.role;

    cardBody.appendChild(name);
    //cardBody.appendChild(role);

    if (member.bullets && member.bullets.length > 0) {
      const ul = document.createElement("ul");
      ul.className = "mb-2 ps-3";
      member.bullets.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      cardBody.appendChild(ul);
    }

    if (member.extra) {
      const extra = document.createElement("p");
      extra.className = "card-text";
      extra.innerHTML = member.extra;
      cardBody.appendChild(extra);
    }

    // for alumni
    if (member.role && member.currently) {
      // former role in the lab
      const role = document.createElement("p");
      role.className = "card-text";
      role.textContent = member.role;
      cardBody.appendChild(role);

      // formatted “Current position: xyz”
      const currently = document.createElement("p");
      currently.className = "card-text";

      const label = document.createElement("strong");   // boldface
      label.textContent = "Current position: ";

      const value = document.createTextNode(member.currently);

      currently.appendChild(label);
      currently.appendChild(value);

      cardBody.appendChild(currently);
    }

    card.appendChild(cardBody);
  }

  col.appendChild(card);
  return col;
}


document.addEventListener("DOMContentLoaded", () => {
  const currentContainer = document.getElementById("current-members-row");
  const alumniRow = document.getElementById("alumni-row");

  // Group current members by category
  const grouped = {};
  labMembers.current.forEach(member => {
    const cat = member.category || "Other";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(member);
  });

  // Define display order of sections
  const order = [
    "Principal Investigator",
    "Postdocs",
    "PhD Candidates",
    "MSc Students",
    "Visiting Scientists",
    "Other",
  ];

  // Render each category section
  order.forEach(category => {
    if (!grouped[category]) return;

    // Heading
    const heading = document.createElement("h3");
    heading.className = "mb-0.1";
    heading.textContent = category;
    currentContainer.appendChild(heading);

    // Row for that category
    const row = document.createElement("div");
    row.className = "row g-4 equal-height";
    grouped[category].forEach(member => row.appendChild(createMemberCard(member)));

    currentContainer.appendChild(row);
  });

  // Alumni
  labMembers.alumni.forEach(member => {
    alumniRow.appendChild(createMemberCard(member));
  });
});

// Function to show the publications
function renderPublicationList(list, containerId, includeYearHeadings = true) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous content if any

  // Sort by year, newest first
  list.sort((a, b) => b.year - a.year);

  let currentYear = null;

  list.forEach(pub => {
    // Add year heading if enabled and needed
    if (includeYearHeadings && pub.year !== currentYear) {
      currentYear = pub.year;
      const yearHeading = document.createElement("h3");
      yearHeading.textContent = currentYear;
      yearHeading.className = "year-heading";
      container.appendChild(yearHeading);
    }

    // Create publication entry
    const item = document.createElement("div");
    item.className = "publication";

    // Format the publication HTML
    item.innerHTML = `
      ${pub.authors}${pub.year ? ` (${pub.year}).` : "."}
      ${pub.link 
        ? `<a href="${pub.link}" target="_blank" class="publication-title">${pub.title}.</a>` 
        : `<span class="publication-title">${pub.title}.</span>`
      }
      ${pub.journal ? `<em>${pub.journal}</em>.` : ""}
    `;

    container.appendChild(item);
  });
}

// Call on page load
document.addEventListener("DOMContentLoaded", () => {
  renderPublicationList(publications, "publications-container", true);
  renderPublicationList(publications_under_revision, "publications_under_revision-container", false);
});