var size = 1000;
var width = window.screen.width;
var height = window.screen.height;
var c = document.getElementById("canvas");
console.log(width);
c.width = width;
c.height = height;
var ctx = c.getContext("2d");

var minSegmentWidth = 5; // Changed segment height to width
var groundWidth = width - 20; // Changed ground height to width
var color = "hsl(180, 80%, 80%)";
var roughness = 2;
var maxDifference = size / 5;

ctx.globalCompositeOperation = "lighter";

ctx.strokeStyle = color;
ctx.shadowColor = color;

ctx.fillStyle = color;
ctx.fillRect(0, 0, width, height);
ctx.fillStyle = "hsla(0, 0%, 10%, 0.2)";

var rafId;

var leftCounter = rightCounter = 0

addEventListener("mousemove", (event) => {
    //console.log(event.clientX, event.clientY);
    if (Math.random() > 0.9) {


        preShake(30, 30);
        ctx.strokeStyle = "#f76a7d"
        ctx.font = "50px 'arial', cursive, sans-serif";
        ctx.strokeText("LIGHTNING 9000", logobBtn.x, logobBtn.y);
        ctx.font = "40px 'arial', cursive";
        ctx.strokeText("DATES", datesBtn.x, datesBtn.y);
        postShake();
        render(event.clientX, event.clientY);

    }
    //drawLightning(ctx, event.clientX, event.clientY, "left", 100);
});

dashLen = 220, dashOffset = dashLen, speed = 500,
    txt = "TRANCEKRAFT 4000", x = 30, i = 0, xmenu = 30;
ctx.font = "40px 'arial', cursive";
ctx.lineWidth = 5; ctx.lineJoin = "round";// ctx.globalAlpha = 2 / 3;
//ctx.strokeStyle = ctx.fillStyle = "#1f2f90";
var contactBtn = { x: 600, y: 350, h: 40 }

var datesBtn = { x: 600, y: 300, h: 40 }
var logobBtn = { x: 500, y: 180, h: 50 }

function render(x, y) {

    //if ()

    if (rafId != undefined) {
        cancelAnimationFrame(rafId);
    }
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
    //ctx.clearRect(0,0,width, height);
    ctx.fillRect(0, 0, width, height);
    //ctx.globalCompositeOperation = "lighter";
    //ctx.shadowBlur = 15;
    //const fs = ctx.fillStyle;


    //ctx.fillStyle = "red";
    ctx.font = "50px 'arial', cursive, sans-serif";
    var gradient = ctx.createLinearGradient(0, logobBtn.y + 15, 0, 50);
    gradient.addColorStop(0, "#94ecf2");
    gradient.addColorStop(1, "#e859f0");

    ctx.strokeStyle = gradient;/*
preShake(20, 20);

    ctx.strokeText("TRANCEKRAFT 4000", logobBtn.x, logobBtn.y);
    ctx.font = "40px 'arial', cursive";
    ctx.strokeText("DATES", datesBtn.x, datesBtn.y);
    ctx.strokeText("CONTACT", contactBtn.x, contactBtn.y);

    var lightning = createLightningTop(x, y);
    ctx.beginPath();
    for (var i = 0; i < lightning.length; i++) {
        ctx.lineTo(lightning[i].x, lightning[i].y);
    }
    ctx.strokeStyle = "#f071dd"

    ctx.stroke();
    postShake();
    */

    ctx.font = "50px 'arial', cursive, sans-serif";
    ctx.strokeText("LIGHTNING 9000", logobBtn.x, logobBtn.y);
    ctx.font = "40px 'arial', cursive";
    ctx.strokeText("DATES", datesBtn.x, datesBtn.y);
    let dm = ctx.measureText("DATES");
    //ctx.fillRect(datesBtn.x, datesBtn.y - datesBtn.h, datesBtn.w, datesBtn.h)
    datesBtn.w = dm.width;
    dm = ctx.measureText("LIGHTNING 9000");
    logobBtn.w = dm.width;
    var lightning = createLightningTop(x, y);
    ctx.beginPath();
    for (var i = 0; i < lightning.length; i++) {
        ctx.lineTo(lightning[i].x, lightning[i].y);
    }
    //ctx.strokeStyle = "#91f2f2"

    ctx.stroke();
    ctx.strokeStyle = "#e859f0"
    lightning = createLightningTop(x, y);
    ctx.beginPath();
    for (var i = 0; i < lightning.length; i++) {
        ctx.lineTo(lightning[i].x, lightning[i].y);
    }
    //ctx.strokeStyle = "#91f2f2"

    ctx.stroke();

    ctx.font = "18px arial"
    /*
    var canvas = c

    window.devicePixelRatio=2;      //Clear Text
        //(CSS pixels).
              //Display Size
        var size = 500;
        canvas.style.width = window.screen.width + "px";
        canvas.style.height = window.screen.height + "px";
  
        var scale = window.devicePixelRatio; 
            
        canvas.width = Math.floor(size * scale);
        canvas.height = Math.floor(size * scale);
  
        //CSS pixels for coordinate systems
        ctx.scale(scale, scale);
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
  
        var x = size / 2;
        var y = size / 2;
  
        var textString = "GEEKS FOR GEEKS";
        ctx.strokeText(textString, x, y);
        */

    const fs = ctx.fillStyle;
    ctx.fillStyle = "red"
    ctx.fillText("lorem ispda dasmld,mmk sdkmdkakm ", 500, 500)
    ctx.fillText("lorem ispda dasmld,mmk sdkmdkakm ", 500, 520)

    ctx.fillStyle = fs

    //ctx.fillStyle = fs;

    //ctx.fillStyle = "black"
    //animateLightningCircle(x, y);

    /*
    lightning = createLightningBottom(x, y);
    ctx.beginPath();
    for (var i = 0; i < lightning.length; i++) {
        ctx.lineTo(lightning[i].x, lightning[i].y);
    }
    ctx.stroke();
    lightning = createLightning(x, y);

    ctx.beginPath();
    for (var i = 0; i < lightning.length; i++) {
        ctx.lineTo(lightning[i].x, lightning[i].y);
    }
    ctx.stroke();
    lightning = createLightningLeft(x, y);

    ctx.beginPath();
    for (var i = 0; i < lightning.length; i++) {
        ctx.lineTo(lightning[i].x, lightning[i].y);
    }
    ctx.stroke();
    */

    rafId = requestAnimationFrame(render);
}

function createLightning(x, y) {
    var segmentWidth = groundWidth - x; // changed segmentHeight to segmentWidth
    var lightning = [];
    lightning.push({ x: x, y: y });
    lightning.push({ x: groundWidth + (Math.random() - 0.9) * 50, y: Math.random() * (size - 100) + 50 }); // swapped x and y values
    var currDiff = maxDifference;
    while (segmentWidth > minSegmentWidth) {
        var newSegments = [];
        for (var i = 0; i < lightning.length - 1; i++) {
            var start = lightning[i];
            var end = lightning[i + 1];
            var midY = (start.y + end.y) / 2; // Changed midX to midY
            var newY = midY + (Math.random() * 2 - 1) * currDiff; // Modified newX to newY
            newSegments.push(start, { x: (start.x + end.x) / 2, y: newY }); // swapped x and y values
        }
        newSegments.push(lightning.pop());
        lightning = newSegments;

        currDiff /= roughness;
        segmentWidth /= 2; // Changed segmentHeight to segmentWidth
    }
    return lightning;
}

function createLightningLeft(x, y) {
    var segmentWidth = x; // Since x starts from a point and goes to 0 (left edge)
    var lightning = [];
    lightning.push({ x: x, y: y });
    lightning.push({ x: (Math.random() + 0.1) * 50, y: Math.random() * (size - 100) + 50 });
    var currDiff = maxDifference;

    while (segmentWidth > minSegmentWidth) {
        var newSegments = [];
        for (var i = 0; i < lightning.length - 1; i++) {
            var start = lightning[i];
            var end = lightning[i + 1];
            var midY = (start.y + end.y) / 2;
            var newY = midY + (Math.random() * 2 - 1) * currDiff;
            newSegments.push(start, { x: (start.x + end.x) / 2, y: newY });
        }
        newSegments.push(lightning.pop());
        lightning = newSegments;

        currDiff /= roughness;
        segmentWidth /= 2;
    }
    return lightning;
}

function createLightningTop(x, y) {
    var segmentHeight = y;
    var lightning = [];
    lightning.push({ x: x, y: y });
    lightning.push({ x: Math.random() * (width - 100) + 50, y: (Math.random() + 0.1) * 50 });
    var currDiff = maxDifference;

    while (segmentHeight > minSegmentWidth) {
        var newSegments = [];
        for (var i = 0; i < lightning.length - 1; i++) {
            var start = lightning[i];
            var end = lightning[i + 1];
            var midX = (start.x + end.x) / 2;
            var newX = midX + (Math.random() * 2 - 1) * currDiff;
            newSegments.push(start, { x: newX, y: (start.y + end.y) / 2 });
        }
        newSegments.push(lightning.pop());
        lightning = newSegments;

        currDiff /= roughness;
        segmentHeight /= 2;
    }
    return lightning;
}
function createLightningBottom(x, y) {
    var segmentHeight = size - y;
    var lightning = [];
    lightning.push({ x: x, y: y });
    lightning.push({ x: Math.random() * (size - 100) + 50, y: size - (Math.random() + 0.1) * 50 });
    var currDiff = maxDifference;

    while (segmentHeight > minSegmentWidth) {
        var newSegments = [];
        for (var i = 0; i < lightning.length - 1; i++) {
            var start = lightning[i];
            var end = lightning[i + 1];
            var midX = (start.x + end.x) / 2;
            var newX = midX + (Math.random() * 2 - 1) * currDiff;
            newSegments.push(start, { x: newX, y: (start.y + end.y) / 2 });
        }
        newSegments.push(lightning.pop());
        lightning = newSegments;

        currDiff /= roughness;
        segmentHeight /= 2;
    }
    return lightning;
}

function inside(x, y, x1, y1, w1, h1) {

    if (x < x1 || x > x1 + w1) return false;
    if (y < y1 || y > y1 + h1) return false;
    return true

}

// Add an event listener for mouse clicks
addEventListener("mousedown", (event) => {
    //animateLightningCircle(event.clientX, event.clientY);

    const txt = "dsaaff"

    if (inside(event.clientX, event.clientY, datesBtn.x, datesBtn.y, datesBtn.w, datesBtn.h)) {
        console.log("inside")

        preShake(100, 100);

        var lightning = createLightningLeft(event.clientX, event.clientY);
        ctx.beginPath();
        for (var i = 0; i < lightning.length; i++) {
            ctx.lineTo(lightning[i].x, lightning[i].y);
        }
        ctx.stroke();
        var lightning = createLightning(event.clientX, event.clientY);
        ctx.beginPath();
        for (var i = 0; i < lightning.length; i++) {
            ctx.lineTo(lightning[i].x, lightning[i].y);
        }
        ctx.stroke();
        //render();
        postShake();
        /*
                content = document.createElement("DIV")
                content.className = "center menu content"
                content.innerHTML = "sdfssfdfsf s fsdffs <br>fewfwefwe"
                document.body.appendChild(content)
        
                */
    }


    //animateText(500, 200, txt, 50);
    //loop()
    //loopMenu()
});

function spawnLightningsAroundCursor(x, y) {
    const lightningCount = 5;  // number of lightnings to create around the cursor
    const maxOffset = 50;     // maximum offset from cursor position

    for (let i = 0; i < lightningCount; i++) {
        // Calculate random offsets for x and y to create lightning around the cursor
        const offsetX = (Math.random() * 2 - 1) * maxOffset;
        const offsetY = (Math.random() * 2 - 1) * maxOffset;

        // Randomly choose a direction for the lightning: top, bottom, left, or right
        const direction = Math.floor(Math.random() * 4);

        switch (direction) {
            case 0:
                render(x + offsetX, y + offsetY - maxOffset); // Top
                break;
            case 1:
                render(x + offsetX, y + offsetY + maxOffset); // Bottom
                break;
            case 2:
                render(x + offsetX - maxOffset, y + offsetY); // Left
                break;
            case 3:
                render(x + offsetX + maxOffset, y + offsetY); // Right
                break;
        }
    }
}
const pixelSize = 50;

function drawStaticNoise() {
    for (let x = 0; x < width; x += pixelSize) {
        for (let y = 0; y < height; y += pixelSize) {
            // Give a small probability of drawing a gray pixel, 
            // else continue without drawing for a black background effect.
            if (Math.random() < 0.2) {
                const grayValue = Math.random() * 255;
                ctx.fillStyle = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
                ctx.fillRect(x, y, pixelSize, pixelSize);
            }
        }
    }
    // Continue the animation
    requestAnimationFrame(drawStaticNoise);
}
//drawStaticNoise();
function animateLightningCircle(x, y) {
    const numPoints = 2;
    const radius = 100;  // adjust based on desired radius

    for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * (2 * Math.PI);
        const lightningX = x + radius * Math.cos(angle);
        const lightningY = y + radius * Math.sin(angle);

        // Generate lightning starting from the center (x, y) towards the point on the circle
        const lightning = createLightningToPoint(x, y, lightningX, lightningY);

        ctx.beginPath();
        for (let j = 0; j < lightning.length; j++) {
            ctx.lineTo(lightning[j].x, lightning[j].y);
        }
        ctx.stroke();
    }
}
function createLightningToPoint(startX, startY, endX, endY) {
    let lightning = [];
    lightning.push({ x: startX, y: startY });
    lightning.push({ x: endX, y: endY });
    var currDiff = maxDifference;
    const segmentLength = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

    while (segmentLength > minSegmentWidth) {
        const newSegments = [];
        for (let i = 0; i < lightning.length - 1; i++) {
            const start = lightning[i];
            const end = lightning[i + 1];
            const midX = (start.x + end.x) / 2;
            const midY = (start.y + end.y) / 2;
            const offsetX = (Math.random() * 2 - 1) * currDiff;
            const offsetY = (Math.random() * 2 - 1) * currDiff;
            newSegments.push(start, { x: midX + offsetX, y: midY + offsetY });
        }
        newSegments.push(lightning.pop());
        lightning = newSegments;

        currDiff /= roughness;
    }
    return lightning;
}

function drawLightning(ctx, x, y, direction, length) {
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 2;
    ctx.beginPath();

    var xOffset = direction === 'left' ? -10 : 10;
    var endX = direction === 'left' ? x - length : x + length;

    while (Math.abs(x - endX) > 10) {
        ctx.moveTo(x, y);

        x += xOffset;
        y += (Math.random() - 0.5) * 20; // Random vertical deviation

        ctx.lineTo(x, y);
        ctx.stroke();

        if (Math.random() < 0.3) {  // 30% chance to make a branch
            var branchLength = Math.random() * (length * 0.5);
            var branchDirection = Math.random() < 0.5 ? 'left' : 'right';
            drawLightning(ctx, x, y, branchDirection, branchLength);
        }
    }
}


function loop() {

    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
    ctx.globalCompositeOperation = "lighter";
    ctx.shadowBlur = 15;

    //ctx.clearRect(x, 0, 60, 150);
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
    dashOffset -= speed;                                         // reduce dash length
    ctx.strokeText(txt[i], x, 200);                               // stroke letter

    if (dashOffset > 0) requestAnimationFrame(loop);             // animate
    else {

        //ctx.fillRect(x, x, 90, 90);
        ctx.fillText(txt[i], x, 90);                               // fill final letter
        dashOffset = dashLen;                                      // prep next char
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
        ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
        ctx.rotate(Math.random() * 0.005);                         // random rotation

        if (i < txt.length) requestAnimationFrame(loop);
    }
}
const menuTxt = "EVENTS";

function loopMenu() {




    //ctx.clearRect(x, 0, 60, 150);
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
    dashOffset -= speed;                                         // reduce dash length
    ctx.strokeText(menuTxt[i], xmenu + 20, 250);                               // stroke letter

    if (dashOffset > 0) requestAnimationFrame(loopMenu);             // animate
    else {
        ctx.fillText(menuTxt[i], x, 90);                               // fill final letter
        dashOffset = dashLen;                                      // prep next char
        xmenu += ctx.measureText(menuTxt[i++]).width + ctx.lineWidth * Math.random();
        ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
        ctx.rotate(Math.random() * 0.005);                         // random rotation
        if (i < menuTxt.length) requestAnimationFrame(loopMenu);
    }
}

function animateText(x, y, txt, speed) {

    var tx = x;

    function recAnimateText() {


        ctx.shadowBlur = 0;
        ctx.globalCompositeOperation = "source-over";
        ctx.globalCompositeOperation = "lighter";
        ctx.shadowBlur = 15;

        //ctx.clearRect(x, 0, 60, 150);
        ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
        dashOffset -= speed;                                         // reduce dash length
        ctx.strokeText(txt[i], tx, y);                               // stroke letter

        if (dashOffset > 0) requestAnimationFrame(recAnimateText);             // animate
        else {

            //ctx.fillRect(x, x, 90, 90);
            ctx.fillText(txt[i], tx, 90);                               // fill final letter
            dashOffset = dashLen;                                      // prep next char
            tx += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
            ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
            ctx.rotate(Math.random() * 0.005);                         // random rotation
            console.log(tx);

            if (i < txt.length) requestAnimationFrame(recAnimateText);
        }
        return tx;
    }
    datesBtn.w = recAnimateText().width;
    //console.log(recAnimateText());
}
setTimeout(function f() {
    const next = Math.floor(Math.random() * 1500)

    if (Math.random() > 0.5) {
        preShake(30, 30);
        ctx.strokeStyle = "#f76a7d"
        ctx.font = "50px 'arial', cursive, sans-serif";
        ctx.strokeText("LIGHTNING 9000", logobBtn.x, logobBtn.y);
        ctx.font = "40px 'arial', cursive";
        ctx.strokeText("DATES", datesBtn.x, datesBtn.y);
        postShake();
    } else {
        var lightning = createLightningLeft(width / 2, logobBtn.y);
        ctx.beginPath();
        for (var i = 0; i < lightning.length; i++) {
            ctx.lineTo(lightning[i].x, lightning[i].y);
        }
        //ctx.strokeStyle = "#91f2f2"

        ctx.stroke();
        lightning = createLightning(width / 2, logobBtn.y);
        ctx.beginPath();
        for (var i = 0; i < lightning.length; i++) {
            ctx.lineTo(lightning[i].x, lightning[i].y);
        }
        //ctx.strokeStyle = "#91f2f2"

        ctx.stroke();
    }

    setTimeout(f, next)
}, 1000)

function preShake(px, py) {
    ctx.save();
    var dx = Math.random() * px;
    var dy = Math.random() * py;
    ctx.translate(dx, dy);
}

function postShake() {
    ctx.restore();
}



