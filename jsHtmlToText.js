summarytext = summarytext.replace(/(?:\n|\r\n|\r)/ig,"") ;	
summarytext = summarytext.replace(/<\s*br[^>]*>/ig,"\n") ;
summarytext = summarytext.replace(/<\s*\/li[^>]*>/ig,"\n") ;
summarytext = summarytext.replace(/<\s*p[^>]*>/ig,"\n\n") ;
summarytext = summarytext.replace(/<\s*script[^>]*>[\s\S]*?<\/script>/mig,"") ;
summarytext = summarytext.replace(/<\s*style[^>]*>[\s\S]*?<\/style>/mig,"") ;
summarytext = summarytext.replace(/(<([^>]+)>)/ig,"") ;
summarytext = summarytext.replace(/\n{2,}/g,"\n\n") ;	
summarytext = summarytext.replace(/\t/g,"") ;
summarytext = summarytext.replace(/^\n+/m,"") ;	
summarytext = summarytext.replace(/ {2,}/g," ") ;
summarytext = summarytext.replace(/\&gt\;/g, ">").replace(/\&lt\;/g, "<");

