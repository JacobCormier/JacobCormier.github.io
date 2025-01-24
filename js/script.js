
	// Script.js, to create features I couldn't with just html and css
	// For Jacob Cormier portfolio website
	
	// This is the boolean for my dynamic header
	let isHeaderActive = false;
		
	
	class SkillBlock {
		constructor(name, imageSource, tooltip) {
			this.name = name;
			this.imageSource = imageSource;
			this.tooltip = tooltip
			
			// This class calls it's own "createHTML()" on creation
			// and then this.html can be used to access it.
			this.html = this.createHTML();
			
			// This class calls it's own "createHTML()" on creation
			// and then this.html can be used to access it.
			this.html = this.createHTML();
		}
		
		createHTML() {
			const listItem = document.createElement("li");
			listItem.classList.add("skillBlock");
			
			// Some of the inner HTML has a bunch of styles coded directly into it
			listItem.innerHTML = `
			<div class="tooltip">
				<img class="skillsLogoImage" src="images/logos/${this.imageSource}" alt="${this.name}">
				<span class="tooltiptext">${this.tooltip}</span>
			<div>
			`
			
			return listItem;
		}
	}
	

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
			<a href="${this.hyperlink}" target="_blank" rel="noopener noreferrer">
				<img class="projects" src="images/game_images/${this.imageSource}" alt="Picture of "${this.name}>
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

	
	// ========== SKILLS SECTION START ==========
	
	//This comment is to show the format
	//const templateSkillBlock = new SkillBlock(
	//	"SKILL_NAME",
	//	"SKILL_IMAGE_FILENAME",
	//	"SKILL_TOOLTIP"
	//);
	
	const godotSkillBlock = new SkillBlock(
		"Godot",
		"godot.png",
		"Godot"
	);
	const unitySkillBlock = new SkillBlock(
		"Unity Engine",
		"unity.png",
		"Unity"
	);
	const unrealSkillBlock = new SkillBlock(
		"Unreal Engine",
		"unreal.png",
		"Unreal"
	);
	const love2DSkillBlock = new SkillBlock(
		"Love 2D",
		"love2D.png",
		"Love2D"
	);
	const pico8SkillBlock = new SkillBlock(
		"Pico 8",
		"pico8.png",
		"Pico-8"
	);
	const cplusplusSkillBlock = new SkillBlock(
		"C plus plus",
		"cplusplus.png",
		"C++"
	);
	const csharpSkillBlock = new SkillBlock(
		"C Sharp",
		"csharp.png",
		"C#"
	);
	const luaSkillBlock = new SkillBlock(
		"Lua",
		"lua.png",
		"Lua"
	);
	const pythonSkillBlock = new SkillBlock(
		"Python",
		"python.png",
		"Python"
	);
	const htmlSkillBlock = new SkillBlock(
		"HTML",
		"html.png",
		"HTML"
	);
	const cssSkillBlock = new SkillBlock(
		"CSS",
		"css.png",
		"CSS"
	);
	const jsSkillBlock = new SkillBlock(
		"Javascript",
		"js.png",
		"Javascript"
	);
	const githubSkillBlock = new SkillBlock(
		"Github",
		"github.png",
		"GitHub"
	);
	const photoshopSkillBlock = new SkillBlock(
		"Photoshop",
		"photoshop.png",
		"Photoshop"
	);
	const microsoftOfficeSkillBlock = new SkillBlock(
		"Microsoft Office",
		"microsoft_office.png",
		"Microsoft Office 365"
	);

	
	const skillGridSection = document.getElementById("skillGrid");
	skillGridSection.append(godotSkillBlock.html);
	skillGridSection.append(unitySkillBlock.html);
	skillGridSection.append(unrealSkillBlock.html);
	skillGridSection.append(love2DSkillBlock.html);
	skillGridSection.append(pico8SkillBlock.html);
	skillGridSection.append(cplusplusSkillBlock.html);
	skillGridSection.append(csharpSkillBlock.html);
	skillGridSection.append(luaSkillBlock.html);
	skillGridSection.append(pythonSkillBlock.html);
	skillGridSection.append(htmlSkillBlock.html);
	skillGridSection.append(cssSkillBlock.html);
	skillGridSection.append(jsSkillBlock.html);
	skillGridSection.append(githubSkillBlock.html);
	skillGridSection.append(photoshopSkillBlock.html);
	skillGridSection.append(microsoftOfficeSkillBlock.html);
	
	
	// ========== SKILLS SECTION END ==========


	// ========== PROJECTS SECTION START ========== 
	
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
		"This is a classic flash game that I loved playing when I was young. Using a game engine I created in C++, I learned about all of the elements required to recreate this game as faithfully as possible. I developed the game and created the art to mimic the original",
		"https://jacob-cormier.itch.io/helicopter-game"
	);
	
	const fishGame = new Project(
		"Pacific Panic",
		"PacificPanic.png",
		"This is a game created in a custom game engine using C++, SDL and OpenGL. I spent a month making the engine and the game in C++, and created all of the art.",
		"https://jacob-cormier.itch.io/pacific-panic"
	);
	
	const hallsGame = new Project(
		"Halls",
		"Halls.png",
		"This was created by me using Love2D as part of a week-long game jam. I developed the whole game in Lua and created the art.",
		"https://jacob-cormier.itch.io/halls"
	);
	
	// Team Project Section
	
	const quietIslandsGame = new Project(
		"Quiet Islands",
		"quietislands.png",
		"This is a game I worked on at Reframe Games. I touched almost every part of this game, from scoring to achievements to localization! This was one of my first Godot projects and I learned so much about how the engine works",
		"https://reframegames.itch.io/quiet-islands"
	);
		
	const soulSeedGame = new Project(
		"Soul Seed",
		"Soul-Seed-Splash.png",
		"This was created using Unity as part of a week-long game jam, the theme was 'Death Is Good'. There is a playable web version through this link! The game was made by a team of 5 including myself, Andrew Hawboldt, Bradley Brooker, Quinton Kennett and Trevor Turner. I did level design for many of the stages, and developed the mechanic for ressurection and placing player objects",
		"https://strangetimepiece.itch.io/soul-seed"
	);
	const diceOfDoomGame = new Project(
		"Dice Of Doom",
		"DiceOfDoomSplash.png",
		"This game was created with Unity in a one month school project, along with my partner Jesse Henry. The game is a roguelike dice builder, I created the design of the game, programmed the gameplay and the 3D dice.",
		"https://jacob-cormier.itch.io/dice-of-doom"
	);
	const coffeeRunGame = new Project(
		"Coffee Run",
		"CoffeeRun_Title.png",
		"This was created using Love2D as part of a week-long game jam, the theme was 'It's Not Supposed To Do That!'. This game was made by myself, Albert Simms, Bradley Hasson, Jesse Henry and Travis Wilson. I worked on the level design, player mechanics and implementing the art and UI",
		"https://jacob-cormier.itch.io/coffee-run"
	);

	// append the html into the appropriate section
	const projectSection = document.getElementById("my-projects");
	projectSection.append(hallsGame.html);
	projectSection.append(fishGame.html);
	projectSection.append(helicopterGame.html);
	

	// secondary section, coffee run will go here
	const otherProjectSection = document.getElementById("other-projects");
	otherProjectSection.append(quietIslandsGame.html)
	otherProjectSection.append(soulSeedGame.html);
	otherProjectSection.append(diceOfDoomGame.html);
	otherProjectSection.append(coffeeRunGame.html);
	
	// ========== PROJECTS SECTION END ==========
	
	
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
	
