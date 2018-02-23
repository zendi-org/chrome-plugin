var elements = document.getElementsByTagName('*');

var zarray = new Array();

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			
			if (text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi))
			{					
				zarray.push([element, [text, node]]);
            }
        }
    }
}

for ( k = 0; k < zarray.length; k++)
{
	element = zarray[k][0];
	text = zarray[k][1][0];
	node = zarray[k][1][1];
	
	var s = document.createElement('span');
	s.appendChild(document.createTextNode(text));

	var a = document.createElement('a');
	var linkText = document.createTextNode(" (Zendi)");
	a.appendChild(linkText);
	a.title = "Send Money";
	a.href = "https://zendi.org/zend?receiver="+text;
	s.appendChild(a);
			
    element.replaceChild(s, node);
}