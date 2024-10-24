
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
			
			// Some of the inner HTML has a bunch of styles coded directly into it
			listItem.innerHTML = `
			<a href="${this.hyperlink}">
				<img class="projects" src="images/${this.imageSource}" alt="Picture of "${this.name}>
			</a>
			<div style="padding: 20px">
				<p style="font-weight: 900; font-size: 3.2rem;">
					${this.name}
				</p>
				<p>
					${this.description}
				</p>
			<div>
			`
			
			return listItem;
		}
	}

	// Projects Section
	
	//This comment is to show the format
		//const templateProject = new Project(
		//	"PROJECT_NAME_TEXT",
		//	"PROJECT_THUMBNAIL_FILENAME",
		//	"PROJECT_DESCRIPTION_TEXT",
		//	"PROJECT_URL"
		//);
		
	const helicopterGame = new Project(
		"Helicopter Game",
		"HelicopterGame.png",
		"This is a classic flash game that I loved playing when I was young. Using a game engine I created, I learned about all of the elements required to recreate this game as faithfully as possible. I had a lot of fun making my version of the original Flappy Bird!",
		"https://jacob-cormier.itch.io/helicopter-game"
	);
	
	const fishGame = new Project(
		"Pacific Panic",
		"PacificPanic.png",
		"This is a game created in a custom game engine using C++, SDL and OpenGL. Swim to survive as long as you can! I had a lot of fun making this colorful and chaotic game, see if you can unlock the Mystery Fish!",
		"https://jacob-cormier.itch.io/pacific-panic"
	);
	
	const hallsGame = new Project(
		"Halls",
		"Halls.png",
		"This was created using Love2D as part of a week-long game jam. With every passing level, the halls grow more expansive... Those who enter, never return. Will you brave the halls?",
		"https://jacob-cormier.itch.io/halls"
	);
	
	// Team Project Section
	
		
	const soulSeedGame = new Project(
		"Soul Seed",
		"Soul-Seed-Splash.png",
		"This was created using as part of a week-long game jam, the theme was Death Is Good. There is a playable web version through this link! The game was made by a team of 5 including myself, Andrew Hawboldt, Bradley Brooker, Quinton Kennett and Trevor Turner.",
		"https://strangetimepiece.itch.io/soul-seed"
	);
	const diceOfDoomGame = new Project(
		"Dice Of Doom",
		"DiceOfDoomSplash.png",
		"This game was created with Unity in a one month school project, along with my partner Jesse Henry. The game is a roguelike dice builder, where players roll a 20-sided die to defeat enemies who stand in their way. Each time an enemy is defeated, you can upgrade your die! How far can you roll before you meet your doom?",
		"https://jacob-cormier.itch.io/dice-of-doom"
	);
	const coffeeRunGame = new Project(
		"Coffee Run",
		"CoffeeRun_Title.png",
		"This was created using as part of a week-long game jam, the theme was It's Not Supposed To Do That! This game was made by myself, Albert Simms, Bradley Hasson, Jesse Henry and Travis Wilson",
		"https://jacob-cormier.itch.io/coffee-run"
	);

	// append the html into the appropriate section
	const projectSection = document.getElementById("my-projects");
	projectSection.append(hallsGame.html);
	projectSection.append(fishGame.html);
	projectSection.append(helicopterGame.html);
	

	// secondary section, coffee run will go here
	const otherProjectSection = document.getElementById("other-projects");
	otherProjectSection.append(soulSeedGame.html);
	otherProjectSection.append(diceOfDoomGame.html);
	otherProjectSection.append(coffeeRunGame.html);
	
	
	// This function is called once on load to setup EventListeners
	function updatePage() {
		
		// add an eventListener to the window for scrolling
		window.addEventListener("scroll", (event) => {
			handleTitleHeader();
		})
		// add an eventListener to the window for resizing
		window.addEventListener("resize", (event) => {
			console.log("RESIZED WINDOW");
			
			//Set is header active to false to reset for new screen size
			isHeaderActive = false;
			
			
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
	
