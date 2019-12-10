(function(){

	var metas = document.getElementsByTagName('meta'); 
	var metaArr = [];
	var title = document.title;
	for (var i=0; i<metas.length; i++) { 

	var content = metas[i].getAttribute("content");	
    metaArr.push([title,content]);
}




		for (var i=0; i<metaArr.length; i++) { 

			if(metaArr[i][0].includes("video") || metaArr[i][0].includes("videos")){
				// redirect
				 	window.location ="https://www.google.com/"

			}else if(metaArr[i][1].includes("video") || metaArr[i][1].includes("videos")){
				// redirect
				 	window.location ="https://www.google.com/"
			}
			
		}
})();
