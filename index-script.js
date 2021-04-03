var setMarker = 0;

function open_boxchild(clicked_id)     {
        var currentId = document.getElementById(clicked_id);
        var currentHead = currentId.getElementsByTagName("h3")[0];
        var currentPar = currentId.getElementsByTagName("p")[0];
        var currentLink = currentId.getElementsByTagName("a")[0];
        
        //add inline styles
        currentPar.style.removeProperty("display");
        currentLink.style.removeProperty("display");
        currentId.style.margin = "1.5rem .5rem";
        currentId.style.position = "sticky";
        currentHead.style.fontSize = "1.75rem";
        currentId.style.order = "0";

        if (setMarker == 1) {
            setMarker--;
            
            //clear inline styles//
            currentId.style.removeProperty("order");
            currentPar.style.display = "none";
            currentLink.style.display = "none";
            currentId.style.removeProperty("margin");
            currentId.style.removeProperty("position");
            currentHead.style.removeProperty("font-size");

            console.log(setMarker);
            } else if (setMarker == 0) {
                setMarker++;
            } else {
                alert("An error has occurred. Please refresh the page.");
            }

}