define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				  {image : 'black_a_1.jpg'},
					{image : 'black_a_2.jpg'}, 
					{image : 'black_a_3.jpg'},
					{image : 'black_a_4.jpg'},
					{image : 'black_a_5.jpg'}]

			},
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				  {image : 'white_a_1.jpg'},
					{image : 'white_a_2.jpg'},
					{image : 'white_a_3.jpg'},
					{image : 'white_a_4.jpg'},
					{image : 'white_a_5.jpg'}]
			}
		],

		examplePrimeStimulus :
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [
      {image : 'ampchair.jpg'},
      {image : 'amplamp.jpg'},
      {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://navmayan.github.io/pi_tasks_repo/amp/images'
		}
	});
});
