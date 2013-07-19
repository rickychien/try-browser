var main = {
	printParagraph: function() {
	  var para = document.createElement('p');
	  var node = document.createTextNode("This paragraph is awesome!!");
	  para.appendChild(node);
	  document.body.appendChild(para);
	}
};
