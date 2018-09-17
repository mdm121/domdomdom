document.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement('button');
    let btnText = document.createTextNode("Add Square");

    button.appendChild(btnText);
    document.body.appendChild(button);

    let j = 1;

    button.addEventListener("click", function() {

        let div = document.createElement('div');
        let divText = document.createTextNode(j);
        
        div.appendChild(divText);
        document.body.appendChild(div);

        div.className = "box";
        div.id = j++;    
        
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            };
            return color;
        };

        
        div.addEventListener("click", function(){
        let newColor = getRandomColor();
        div.style.backgroundColor = newColor;
        div.style.color = newColor;
        });

        div.addEventListener("dblclick", function(){
            function getID() {
                let currentBox = div.id;
                return currentBox;
            };

            let currentBox = getID();
            let removeBox;

            if(currentBox % 2 == 0) {
                removeBox = document.getElementById(currentBox).nextSibling;
                console.log(removeBox);
                if(removeBox == null) {
                    alert("A subsequent square does not exist.")
                } else {                
                document.body.removeChild(removeBox);
                };


            } else if(currentBox % 2 != 0) {
                removeBox = document.getElementById(currentBox).previousSibling;
                console.log(removeBox);
                console.log(removeBox.tagName);
                if(removeBox.tagName == 'BUTTON') {
                    alert("The 'Add Square' button can not be removed!")
                } else {
                    if(removeBox == null) {
                        alert("A preceding square does not exist.")
                    } else {
                        document.body.removeChild(removeBox);
                    };
                };

            };

        });

    });

});