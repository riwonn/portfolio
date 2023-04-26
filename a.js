var req = new XMLHttpRequest( );
    req.open("GET", "imglist.js");
    req.onreadystatechange = function( ) {
        if (this.readyState == 4) {
        // console.log(this.response);
        var data = JSON.parse(this.response);            // ➊
            for (var i = 0; i < data.length; i++) {      // ➋
                var div = document.createElement("div"); // ➌
                div.setAttribute("class", "image");      // ➍
                var img = document.createElement("img"); // ➎
                img.src = data[i];                       // ➏
                div.appendChild(img);                    // ➐
                document.body.appendChild(div);          // ➑
        }
    }
}
req.send( );