// Copyright (c) 2015 David McDowell

function noXpiher() {
    var aTags = document.getElementsByTagName("a");
	var searchText = "xpiher";
	var nodes = [];

	var j = 0;
	for (var i = 0; i < aTags.length; i++) {
		if (aTags[i].textContent == searchText) {
			nodes[j] = aTags[i];
			j++;
		}
	}

    for(var i = 0; i < nodes.length; i++) {
         var parentNode = nodes[i].parentNode;
		 // keep traversing upwards by parent node until li element type is reached
		 while (parentNode.nodeName !== "LI"){
			parentNode = parentNode.parentNode;
		 }
         // once li element type found, remove all html of it and its children
		 parentNode.outerHTML = '';
    }
};
noXpiher();