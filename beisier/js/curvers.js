(function() {
    var d, o, b, m, a, g = null,
    e;
    function f(q) {
        m = {
            p1: {
                x: 100,
                y: 250
            },
            p2: {
                x: 400,
                y: 250
            }
        };
        if (q) {
            m.cp1 = {
                x: 250,
                y: 100
            }
        } else {
            m.cp1 = {
                x: 150,
                y: 100
            };
            m.cp2 = {
                x: 350,
                y: 100
            }
        }
        a = {
            curve: {
                width: 6,
                color: "#0090D2"
            },
            cpline: {
                width: 0.5,
                color: "#ff7a99"
            },
            point: {
                radius: 9,
                width: 2,
                color: "#ff7a99",
                fill: "rgba(200,200,200,0.3)",
                arc1: 0,
                arc2: 2 * Math.PI
            }
        };
        o.lineCap = "round";
        o.lineJoin = "round";
        d.onmousedown = p;
        d.onmousemove = i;
        d.onmouseup = d.onmouseout = n;
        k()
    }
    function k() {
        o.clearRect(0, 0, d.width, d.height);
        o.lineWidth = a.cpline.width;
        o.strokeStyle = a.cpline.color;
        o.beginPath();
        o.moveTo(m.p1.x, m.p1.y);
        o.lineTo(m.cp1.x, m.cp1.y);
        if (m.cp2) {
            o.moveTo(m.p2.x, m.p2.y);
            o.lineTo(m.cp2.x, m.cp2.y)
        } else {
            o.lineTo(m.p2.x, m.p2.y)
        }
        o.stroke();
        o.lineWidth = a.curve.width;
        o.strokeStyle = a.curve.color;
        o.beginPath();
        o.moveTo(m.p1.x, m.p1.y);
        if (m.cp2) {
            o.bezierCurveTo(m.cp1.x, m.cp1.y, m.cp2.x, m.cp2.y, m.p2.x, m.p2.y)
        } else {
            o.quadraticCurveTo(m.cp1.x, m.cp1.y, m.p2.x, m.p2.y)
        }
        o.stroke();
        for (var q in m) {
            o.lineWidth = a.point.width;
            o.strokeStyle = a.point.color;
            o.fillStyle = a.point.fill;
            o.beginPath();
            o.arc(m[q].x, m[q].y, a.point.radius, a.point.arc1, a.point.arc2, true);
            o.fill();
            o.stroke()
        }
        j()
    }
    function j() {
        if (b) {
            b.firstChild.nodeValue = 'canvas = document.getElementById("canvas");\nctx = canvas.getContext("2d")\nctx.lineWidth = ' + a.curve.width + ';\nctx.strokeStyle = "' + a.curve.color + '";\nctx.beginPath();\nctx.moveTo(' + m.p1.x + ", " + m.p1.y + ");\n" + (m.cp2 ? "ctx.bezierCurveTo(" + m.cp1.x + ", " + m.cp1.y + ", " + m.cp2.x + ", " + m.cp2.y + ", " + m.p2.x + ", " + m.p2.y + ");": "ctx.quadraticCurveTo(" + m.cp1.x + ", " + m.cp1.y + ", " + m.p2.x + ", " + m.p2.y + ");") + "\nctx.stroke();"
        }
    }
    function p(t) {
        t = h(t);
        var r, q;
        for (var s in m) {
            r = m[s].x - t.x;
            q = m[s].y - t.y;
            if ((r * r) + (q * q) < a.point.radius * a.point.radius) {
                g = s;
                e = t;
                d.style.cursor = "move";
                return
            }
        }
    }
    function i(q) {
        if (g) {
            q = h(q);
            m[g].x += q.x - e.x;
            m[g].y += q.y - e.y;
            e = q;
            k()
        }
    }
    function n(q) {
        g = null;
        d.style.cursor = "default";
        k()
    }
    function h(q) {
        q = (q ? q: window.event);
        return {
            x: q.pageX - d.offsetLeft,
            y: q.pageY - d.offsetTop
        }
    }
    d = document.getElementById("canvas");
    b = document.getElementById("code");
    if (d.getContext) {
        o = d.getContext("2d");
        f(d.className == "bezier")
    }
    var c = document.getElementById("button");
    var l = document.getElementById("title").getElementsByTagName("span")[0];
    c.onclick = function() {
        delete o;
        if (d.className == "bezier") {
            this.innerHTML = "切换二次贝塞尔";
            l.innerHTML = "三次";
            d.className = "bezier1";
            o = d.getContext("2d");
            f(false)
        } else {
            this.innerHTML = "切换三次贝塞尔";
            l.innerHTML = "二次";
            d.className = "bezier";
            o = d.getContext("2d");
            f(true)
        }
    }
})();