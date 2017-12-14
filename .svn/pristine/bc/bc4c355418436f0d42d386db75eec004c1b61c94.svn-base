(function (win, BMap) {
    var lmap = function (mapName, listName) {
        return new LMap(mapName, listName)
    }
    function LMap(mapName, listName) {
        this.map = new BMap.Map(mapName, { minZoom: 4, maxZoom: 17 });
        this.list = document.getElementById(listName);
        this.sectionArr = [];
        this.data;
    }
    LMap.prototype.load = function (data) {
        var me = this;
        me.clrArr = ["red", "blue", "yellow", "green"];
        me.ran = 0;
        me.data = data;
        me.loadBase();
        me.loadSection();
    }
    LMap.prototype.loadBase = function () {//加载基础控件
        var me = this;
        if (me.data.area) {
            me.map.centerAndZoom(me.data.area, 7);
            var bdary = new BMap.Boundary();
            bdary.get(me.data.area, function (rs) {       //获取行政区域
                var count = rs.boundaries.length; //行政区域的点有多少个
                for (var i = 0; i < count; i++) {
                    var ply = new BMap.Polyline(rs.boundaries[i], { strokeWeight: 2, strokeColor: "#0000ff" }); //建立多边形覆盖物
                    me.map.addOverlay(ply);  //添加覆盖物
                }
            });
        } else {
            me.map.centerAndZoom("北京", 4);
        }
        me.map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
        me.map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
        var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_RIGHT });// 右上角，添加比例尺
        var top_left_navigation = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT });  //右上角，添加默认缩放平移控件
        var mapType = new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP], anchor: BMAP_ANCHOR_TOP_LEFT });//地图类型控件，默认位于地图右上方。
        var overView = new BMap.OverviewMapControl({ isOpen: true });//缩略地图控件，默认位于地图右下方，是一个可折叠的缩略地图。
        me.map.addControl(top_left_control);
        me.map.addControl(top_left_navigation);
        me.map.addControl(mapType);
        me.map.addControl(overView);
    }

    LMap.prototype.loadList = function () {//加载列表控件
        var me = this;
        function ListCtrl() {//列表控件
            this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
            this.defaultOffset = new BMap.Size(10, 50);
        }
        ListCtrl.prototype = new BMap.Control();// 通过JavaScript的prototype属性继承于BMap.Control
        ListCtrl.prototype.initialize = function (map) {// 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回，在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
            var inputBox = me.list.getElementsByClassName("inputBox")[0];
            var input = document.getElementsByTagName("input")[0];
            var list = me.list.getElementsByClassName("ulBox")[0];
            var roads = me.data.roads;
            for (var i = 0; i < roads.length; i++) {
                var road = roads[i];
                var li = document.createElement("li");
                //--------列表上部----------------
                var hd = document.createElement("div");
                hd.className = "hd";
                var tip = document.createElement("div");
                tip.className = "tip";
                tip.innerHTML = road.tip;
                var date = document.createElement("div");
                date.className = "date";
                date.innerHTML = road.date;
                hd.appendChild(tip);
                hd.appendChild(date);
                li.appendChild(hd);
                //---------列表中部---------------
                var bd = document.createElement("div");
                bd.className = "bd";
                var name = document.createElement("div");
                name.className = "name";
                name.innerHTML = road.name;
                var details = document.createElement("div");
                details.className = "details";
                details.innerHTML = road.details;
                bd.appendChild(name);
                bd.appendChild(details);
                li.appendChild(bd);
                //----------列表下部--------------
                var ft = document.createElement("div");
                ft.className = "ft";
                var office = document.createElement("div");
                office.className = "office";
                office.innerHTML = road.office;
                var phone = document.createElement("div");
                phone.className = "phone";
                phone.innerHTML = road.phone;
                ft.appendChild(office);
                ft.appendChild(phone);
                li.appendChild(ft);
                //----------列表data属性--------------
                li.setAttribute("data-name", road.name);
                li.setAttribute("data-id", road.id);
                li.setAttribute("data-position", road.position);
                li.setAttribute("data-office", road.office);
                li.setAttribute("data-phone", road.phone);
                //----------列表click事件--------------
                li.onclick = function () {
                    me.map.closeInfoWindow()
                    var str = this.getAttribute("data-position").split(",");
                    me.map.setZoom(13);
                    me.map.panTo(new BMap.Point(str[0], str[1]));
                    var liArr = list.getElementsByTagName("li");
                    for (var j = 0; j < liArr.length; j++) {
                        liArr[j].className = ""
                    }
                    this.className= "cur";
                    for (var j = 0; j < me.sectionArr.length; j++) {
                        var sec = me.sectionArr[j];
                        if (sec.roadid == this.getAttribute("data-id")) {
                            me.map.addOverlay(sec.polyline);
                            sec.marker.setLabel(sec.label)
                            me.map.addOverlay(sec.marker);
                        } else {
                            me.map.removeOverlay(sec.polyline);
                            me.map.removeOverlay(sec.marker);
                            me.map.removeOverlay(sec.label);
                        }
                    }
                }
                list.appendChild(li);
            }
            //----------输入框input事件--------------
            if ('oninput' in input) {
                input.addEventListener("input", fn, false);
            } else {
                input.onpropertychange = fn;
            }
            function fn() {
                var liArr = list.getElementsByTagName("li");
                for (var i = 0; i < liArr.length; i++) {
                    if (liArr[i].getAttribute("data-name").indexOf(this.value) != -1 || liArr[i].getAttribute("data-office").indexOf(this.value) != -1 || liArr[i].getAttribute("data-phone").indexOf(this.value) != -1) {
                        liArr[i].style.display = "block";
                    }
                    else {
                        liArr[i].style.display = "none";
                    }
                };
            }

            map.getContainer().appendChild(me.list);// 添加DOM元素到地图中
            return me.list; // 将DOM元素返回
        }
        me.map.addControl(new ListCtrl());// 添加到地图当中
    }

    LMap.prototype.loadSection = function () {//加载所有标段
        var me = this;
        function Section(roadid, name, marker, label, polyline) {
            this.roadid = roadid;
            this.name = name;
            this.marker = marker;
            this.label = label;
            this.polyline = polyline
        }
        function getclr() {
            var ran = parseInt(Math.random() * me.clrArr.length);
            if (me.clrArr[ran] == me.clr) {
                getclr();
            } else {
                return me.clrArr[ran]
            }
        }
        for (var i = 0; i < me.data.roads.length; i++) {
            var road = me.data.roads[i]
            for (var j = 0; j < road.sections.length; j++) {
                var section = road.sections[j];
                var len = section.polyline.length
                var pointArr = [];
                for (var k = 0; k < len; k++) {
                    var str = section.polyline[k].split(",");
                    pointArr.push(new BMap.Point(str[0], str[1]))
                }
                var label = new BMap.Label(section.name, { offset: new BMap.Size(20, -10) });
                var marker = new BMap.Marker(pointArr[parseInt(len / 2)]);
                marker.con=section.content;
                marker.infOpts=section.infOpts;
                marker.na=section.name;
                marker.addEventListener("click", function () {
                    var pos = this.getPosition();
                    var con = this.con;
                    var na = this.na;
                    me.map.openInfoWindow(new BMap.InfoWindow(con, {
                        width: 200,     // 信息窗口宽度
                        height: 0,     // 信息窗口高度
                        title: na, // 信息窗口标题
                    }), new BMap.Point(pos.lng, pos.lat)); //开启信息窗口
                });


                if (me.ran == me.clrArr.length - 1) {
                    me.ran = 0;
                } else {
                    me.ran++;
                }
                var clr = me.clrArr[me.ran];

                var polyline = new BMap.Polyline(pointArr, { strokeColor: clr, strokeWeight: 6, strokeOpacity: .6 });
                var sec = new Section(road.id, section.name, marker, label, polyline);

                polyline.addEventListener("mouseover", function () {
                    this.setStrokeWeight(18);
                    this.setStrokeOpacity(.8);
                })
                polyline.addEventListener("mouseout", function () {
                    this.setStrokeWeight(6);
                    this.setStrokeOpacity(.6);
                })
                me.sectionArr.push(sec);
            }

        }
        console.log(me.sectionArr);
        me.loadList();
    }
    win.lMap = lmap
})(window, BMap)


