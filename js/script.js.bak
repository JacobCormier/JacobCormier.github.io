
	// Script.js, to create features I couldn't with just html and css
	// For Jacob Cormier portfolio website
	
	// This is the boolean for my dynamic header
	let isHeaderActive = false;
	
	// I would like to create a class to easily add projects to my website
	// as I create more and more of them. This is the framework for the project class
	class Project {
		constructor(name, imageSource, description, hyperlink) {
			this.name = name;
			this.imageSource = imageSource;
			this.description = description;
			this.hyperlink = hyperlink;
			
			// This class calls it's own "createHTML()" on creation
			// and then this.html can be used to access it.
			this.html = this.createHTML();
		}
		
		createHTML() {
			const listItem = document.createElement("li");
			listItem.classList.add("projectItem");
			listItem.setAttribute("id", this.name + "-project");
			listItem.innerHTML = `
			<a href="${this.hyperlink}">
				<img class="projects" src="images/${this.imageSource}" alt="Picture of "${this.name}>
			</a>
			<p>
				${this.description}
			</p>
			`
			
			return listItem;
		}
	}

	// Projects Section
	
		//const templateProject = new Project(
		//	"",
		//	"",
		//	"",
		//	""
		//);
		
	const helicopterGame = new Project(
		"Helicopter Game",
		"HelicopterGame.png",
		"This is a classic flash game that I loved playing when I was young. I recreated it in my own game engine",
		"https://jacob-cormier.itch.io/helicopter-game"
	);
	
	const fishGame = new Project(
		"Pacific Panic",
		"PacificPanic.png",
		"This is a game created in a custom game engine using C++, SDL and OpenGL. Swim to survive as long as you can! I had a lot of fun making this colorful and chaotic game.",
		"https://jacob-cormier.itch.io/pacific-panic"
	);
	
	const hallsGame = new Project(
		"Halls",
		"Halls.png",
		"This was created using Love2D as part of a week-long game jam. While it is very simple, it was very fun to create the mechanic of more lanes each level! Will you brave the halls?",
		"https://jacob-cormier.itch.io/halls"
	);

	// append the html into the appropriate section
	const projectSection = document.getElementById("my-projects");
	projectSection.append(hallsGame.html);
	projectSection.append(fishGame.html);
	projectSection.append(helicopterGame.html);

	// secondary section, coffee run will go here
	const otherProjectSection = document.getElementById("other-projects");
	//otherProjectSection.append(coffeeRun.html);
	
	// This function is called once on load to setup EventListeners
	function updatePage() {
		
		// add an eventListener to the window for scrolling
		window.addEventListener("scroll", (event) => {
			handleTitleHeader();
		})
		window.addEventListener("resize", (event) => {
			console.log("RESIZED WINDOW");
			// In the event the window is resized, forces the scroll back to beginning
			// to avoid breaking formatting and expected results.
			window. scrollTo(0, 0);
			handleTitleHeader();
		})
	}
	
	// This function is called whenever the screen is resized or scrolled by the user.
	function handleTitleHeader(){
		// Get the Title element and introduction container
		const introElement = document.getElementById("introduction");
		const titleHeader = document.getElementById("titleName");
		const introImage = document.getElementById("introTextImage");
		
		// Get the position and size of the elements relative to the viewport
		const titleRect = titleHeader.getBoundingClientRect();
		const introRect = introElement.getBoundingClientRect();
		
		// Check for where the sticky title becomes fixed
		// const diff = introRect.height - titleRect.height;
		const diff = introRect.height - titleRect.height;
		
		// Once the header reaches the desired position, set its top relative current positions of text
		if (window.scrollY >= diff && !isHeaderActive) {

			// The background needs a 10px buffer added
			introElement.style.top = (-diff + 20) + "px"
			
			introImage.style.visibility = "hidden";
			
			
			console.log("FIXED TITLE IN PLACE");
			isHeaderActive = true;
		  
		} else if (window.scrollY < diff && isHeaderActive) {
			titleHeader.style.position = "sticky";
			
			introImage.style.visibility = "visible";
			
			console.log("UN-FIXED TITLE");
			isHeaderActive = false;
		}
		
	}
	
	// Call updatePage after the document has loaded to setup the EventListener
	// Should already only be called after the document has loaded, due to "defer" in the script tag
	// So technically this is useless? It works without this but i'm keeping it.
	document.addEventListener("DOMContentLoaded", function() {
		updatePage();
	});
	
