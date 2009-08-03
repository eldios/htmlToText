function htmlToText(html) {
	return html
		.replace(/(?:\n|\r\n|\r)/ig,"") 
		.replace(/<\s*br[^>]*>/ig,"\n") 
 		.replace(/<\s*\/li[^>]*>/ig,"\n") 
 		.replace(/<\s*p[^>]*>/ig,"\n\n") 
 		.replace(/<\s*script[^>]*>[\s\S]*?<\/script>/mig,"")
 		.replace(/<\s*style[^>]*>[\s\S]*?<\/style>/mig,"") 
 		.replace(/(<([^>]+)>)/ig,"") 
 		.replace(/\n{2,}/g,"\n\n") 	
 		.replace(/\t/g,"") 
 		.replace(/^\n+/m,"") 	
 		.replace(/ {2,}/g," ")
 		.replace(/\&gt\;/g, ">")
		.replace(/\&lt\;/g, "<");
}
