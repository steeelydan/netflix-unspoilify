var fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", browser.runtime.getURL("removedesc.css"));
document.getElementsByTagName("head")[0].appendChild(fileref);