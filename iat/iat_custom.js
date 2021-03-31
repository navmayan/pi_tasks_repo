define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Black people', //Will appear in the data.
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'black1.jpg'},
    			{image : 'black2.jpg'},
    			{image : 'black3.jpg'},
    			{image : 'black4.jpg'},
    			{image : 'black5.jpg'},
    			{image : 'black6.jpg'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		category2 :	{
			name : 'White people', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'yf1.jpg'},
    			{image : 'yf4.jpg'},
    			{image : 'yf5.jpg'},
    			{image : 'ym2.jpg'},
    			{image : 'ym3.jpg'},
    			{image : 'ym5.jpg'}			],
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		}
	});

	wDebriefing:true, //Show feedback in the last trial? Relevant only in a Qualtrics IAT because in Qualtrics we cannot access the saved feedback and IAT score later in the survey.
	//Texts for the trials that show the debriefing.
	preDebriefingText : 'Press space to see your result', //Text in the trial that comes before showing the debriefing.
	preDebriefingTouchText : 'Touch the bottom green area to see your result', //Touch version for the text in the trial that comes before showing the debriefing.
	debriefingTextTop : 'Your result:', //Will be shown above the feedback text.
	//ATTENTION: We do not recommend showing participants their results. The IAT is a typical psychological measure so it is not very accurate.
	//In Project Implicit's website, you can see that we added much text to explain that there is still much unknown about the meaning of these results.
	//We strongly recommend that you provide all these details in the debriefing of the experiment.
	debriefingTextBottom : 'This result is not a definitive assessment of your attitudes. It is provided for educational purposes only.', //Will be shown below the feedback text. 
});
