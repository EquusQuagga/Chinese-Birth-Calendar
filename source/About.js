enyo.kind({
	name: "About", 
	kind: "onyx.Popup", 
	classes: "onyx-light", 
	centered: true, 
	floating: true, 
	scrim: true, 
	style: "color:black;margin-bottom:216px;",
	components: [
		{kind:"enyo.Image", src:"icon.png", style:"position: absolute; left:-20px;top:-20px;"},
		{content: "Chinese Birth Calendar", allowHtml: true, classes:"head"},
		{content: "(com.equusquagga.chinesebirthcalendar) Versie: 2.0.4", allowHtml: true, classes:"version"},
		{content: "This rather useles app tries to predict the gender of a child based on the age of the mother at conception. The calculations are made by an ancient Chinese matrix to determine the results. The results however are stunningly acurate", allowHtml: true, classes:"aboutinfo"},
		{kind:"enyo.Image", src:"assets/eqlogo.png", style:"position: absolute; right:-40px;bottom:-40px;"}
	]
});