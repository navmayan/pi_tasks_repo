define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){
	

		var API = new APIConstructor();
		
		
		return ampExtension({
			primeCats :  [
				{
					nameForFeedback : 'Black people',  //Will be used in the user feedback 
					nameForLogging : 'Black people', //Will be used in the logging
					//An array of all media objects for this category.
					mediaArray : [
					    {image : 'AAF1.bmp'}, 
						{image : 'AAF2.bmp'}, 
						{image : 'AAF3.bmp'}, 
						{image : 'AAF4.bmp'}, 
						{image : 'AAF5.bmp'}, 
						{image : 'AAM1.bmp'}, 
						{image : 'AAM2.bmp'}, 
						{image : 'AAM3.bmp'}, 
						{image : 'AAM4.bmp'}, 
						{image : 'AAM5.bmp'}]
	

				}, 
				{
					nameForFeedback : 'White people',  //Will be used in the user feedback 
					nameForLogging : 'White people', //Will be used in the logging
					//An array of all media objects for this category.
					mediaArray : [
					    {image : 'WhFBl1.bmp'}, 
						{image : 'WhFBl2.bmp'}, 
						{image : 'WhFBl3.bmp'}, 
						{image : 'WhFBl4.bmp'}, 
						{image : 'WhFBl5.bmp'}, 
						{image : 'WhMBl1.bmp'}, 
						{image : 'WhMBl2.bmp'}, 
						{image : 'WhMBl3.bmp'}, 
						{image : 'WhMBl4.bmp'}, 
						{image : 'WhMBl5.bmp'}]
				}
			],
	

			examplePrimeStimulus : 
			{
				nameForLogging : 'examplePrime', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
			},
	

			base_url : {//Where are your images at?
				image : 'https://satchmo496.github.io/images'
			}
		});
});	