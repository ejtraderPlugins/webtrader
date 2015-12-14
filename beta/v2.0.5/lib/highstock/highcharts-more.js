!function(a){"object"==typeof module&&module.exports?module.exports=a:a(Highcharts)}(function(a){function b(a,b,c){this.init(a,b,c)}var c=a.arrayMin,d=a.arrayMax,e=a.each,f=a.extend,g=a.merge,h=a.map,i=a.pick,j=a.pInt,k=a.getOptions().plotOptions,l=a.seriesTypes,m=a.extendClass,n=a.splat,o=a.wrap,p=a.Axis,q=a.Tick,r=a.Point,s=a.Pointer,t=a.CenteredSeriesMixin,u=a.TrackerMixin,v=a.Series,w=Math,x=w.round,y=w.floor,z=w.max,A=a.Color,B=function(){};f(b.prototype,{init:function(a,b,c){var d=this,f=d.defaultOptions;d.chart=b,d.options=a=g(f,b.angular?{background:{}}:void 0,a),(a=a.background)&&e([].concat(n(a)).reverse(),function(a){var b=a.backgroundColor,e=c.userOptions,a=g(d.defaultBackgroundOptions,a);b&&(a.backgroundColor=b),a.color=a.backgroundColor,c.options.plotBands.unshift(a),e.plotBands=e.plotBands||[],e.plotBands!==c.options.plotBands&&e.plotBands.unshift(a)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var C=p.prototype,q=q.prototype,D={getOffset:B,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:B,setCategories:B,setTitle:B},E={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){a=this.options=g(this.defaultOptions,this.defaultRadialOptions,a),a.plotBands||(a.plotBands=[])},getOffset:function(){C.getOffset.call(this),this.chart.axisOffset[this.side]=0,this.center=this.pane.center=t.getCenter.call(this.pane)},getLinePath:function(a,b){var c=this.center,b=i(b,c[2]/2-this.offset);return this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],b,b,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){C.setAxisTranslation.call(this),this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){C.setAxisSize.call(this),this.isRadial&&(this.center=this.pane.center=a.CenteredSeriesMixin.getCenter.call(this.pane),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*i(this.sector,1)/2)},getPosition:function(a,b){return this.postTranslate(this.isCircular?this.translate(a):0,i(this.isCircular?b:this.translate(a),this.center[2]/2)-this.offset)},postTranslate:function(a,b){var c=this.chart,d=this.center,a=this.startAngleRad+a;return{x:c.plotLeft+d[0]+Math.cos(a)*b,y:c.plotTop+d[1]+Math.sin(a)*b}},getPlotBandPath:function(a,b,c){var d,e=this.center,f=this.startAngleRad,g=e[2]/2,k=[i(c.outerRadius,"100%"),c.innerRadius,i(c.thickness,10)],l=/%$/,m=this.isCircular;return"polygon"===this.options.gridLineInterpolation?e=this.getPlotLinePath(a).concat(this.getPlotLinePath(b,!0)):(a=Math.max(a,this.min),b=Math.min(b,this.max),m||(k[0]=this.translate(a),k[1]=this.translate(b)),k=h(k,function(a){return l.test(a)&&(a=j(a,10)*g/100),a}),"circle"!==c.shape&&m?(a=f+this.translate(a),b=f+this.translate(b)):(a=-Math.PI/2,b=1.5*Math.PI,d=!0),e=this.chart.renderer.symbols.arc(this.left+e[0],this.top+e[1],k[0],k[0],{start:Math.min(a,b),end:Math.max(a,b),innerR:i(k[1],k[0]-k[2]),open:d})),e},getPlotLinePath:function(a,b){var c,d,f,g=this,h=g.center,i=g.chart,j=g.getPosition(a);return g.isCircular?f=["M",h[0]+i.plotLeft,h[1]+i.plotTop,"L",j.x,j.y]:"circle"===g.options.gridLineInterpolation?(a=g.translate(a))&&(f=g.getLinePath(0,a)):(e(i.xAxis,function(a){a.pane===g.pane&&(c=a)}),f=[],a=g.translate(a),h=c.tickPositions,c.autoConnect&&(h=h.concat([h[0]])),b&&(h=[].concat(h).reverse()),e(h,function(b,e){d=c.getPosition(b,a),f.push(e?"L":"M",d.x,d.y)})),f},getTitlePosition:function(){var a=this.center,b=this.chart,c=this.options.title;return{x:b.plotLeft+a[0]+(c.x||0),y:b.plotTop+a[1]-{high:.5,middle:.25,low:0}[c.align]*a[2]+(c.y||0)}}};o(C,"init",function(a,c,d){var e,h,j,k=c.angular,l=c.polar,m=d.isX,o=k&&m;j=c.options;var p=d.pane||0;k?(f(this,o?D:E),(h=!m)&&(this.defaultRadialOptions=this.defaultRadialGaugeOptions)):l&&(f(this,E),this.defaultRadialOptions=(h=m)?this.defaultRadialXOptions:g(this.defaultYAxisOptions,this.defaultRadialYOptions)),a.call(this,c,d),o||!k&&!l||(a=this.options,c.panes||(c.panes=[]),this.pane=(e=c.panes[p]=c.panes[p]||new b(n(j.pane)[p],c,this),p=e),p=p.options,c.inverted=!1,j.chart.zoomType=null,this.startAngleRad=c=(p.startAngle-90)*Math.PI/180,this.endAngleRad=j=(i(p.endAngle,p.startAngle+360)-90)*Math.PI/180,this.offset=a.offset||0,(this.isCircular=h)&&void 0===d.max&&j-c===2*Math.PI&&(this.autoConnect=!0))}),o(q,"getPosition",function(a,b,c,d,e){var f=this.axis;return f.getPosition?f.getPosition(c):a.call(this,b,c,d,e)}),o(q,"getLabelPosition",function(a,b,c,d,e,f,g,h,j){var k=this.axis,l=f.y,m=20,n=f.align,o=(k.translate(this.pos)+k.startAngleRad+Math.PI/2)/Math.PI*180%360;return k.isRadial?(a=k.getPosition(this.pos,k.center[2]/2+i(f.distance,-25)),"auto"===f.rotation?d.attr({rotation:o}):null===l&&(l=k.chart.renderer.fontMetrics(d.styles.fontSize).b-d.getBBox().height/2),null===n&&(k.isCircular?(this.label.getBBox().width>k.len*k.tickInterval/(k.max-k.min)&&(m=0),n=o>m&&180-m>o?"left":o>180+m&&360-m>o?"right":"center"):n="center",d.attr({align:n})),a.x+=f.x,a.y+=l):a=a.call(this,b,c,d,e,f,g,h,j),a}),o(q,"getMarkPath",function(a,b,c,d,e,f,g){var h=this.axis;return h.isRadial?(a=h.getPosition(this.pos,h.center[2]/2+d),b=["M",b,c,"L",a.x,a.y]):b=a.call(this,b,c,d,e,f,g),b}),k.arearange=g(k.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}}),l.arearange=m(l.area,{type:"arearange",pointArrayMap:["low","high"],dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(a){var b=this.chart,c=this.xAxis.postTranslate(a.rectPlotX,this.yAxis.len-a.plotHigh);a.plotHighX=c.x-b.plotLeft,a.plotHigh=c.y-b.plotTop},getSegments:function(){var a=this;e(a.points,function(b){a.options.connectNulls||null!==b.low&&null!==b.high?null===b.low&&null!==b.high&&(b.y=b.high):b.y=null}),v.prototype.getSegments.call(this)},translate:function(){var a=this,b=a.yAxis;l.area.prototype.translate.apply(a),e(a.points,function(a){var c=a.low,d=a.high,e=a.plotY;null===d&&null===c?a.y=null:null===c?(a.plotLow=a.plotY=null,a.plotHigh=b.translate(d,0,1,0,1)):null===d?(a.plotLow=e,a.plotHigh=null):(a.plotLow=e,a.plotHigh=b.translate(d,0,1,0,1))}),this.chart.polar&&e(this.points,function(b){a.highToXY(b)})},getSegmentPath:function(b){var c,d,e,f=[],g=b.length,h=v.prototype.getSegmentPath;e=this.options;var i=e.step;for(c=a.grep(b,function(a){return null!==a.plotLow});g--;)d=b[g],null!==d.plotHigh&&f.push({plotX:d.plotHighX||d.plotX,plotY:d.plotHigh});return b=h.call(this,c),i&&(i===!0&&(i="left"),e.step={left:"right",center:"center",right:"left"}[i]),f=h.call(this,f),e.step=i,e=[].concat(b,f),this.chart.polar||(f[0]="L"),this.areaPath=this.areaPath.concat(b,f),e},drawDataLabels:function(){var a,b,c,d=this.data,e=d.length,f=[],g=v.prototype,h=this.options.dataLabels,i=h.align,j=h.verticalAlign,k=h.inside,l=this.chart.inverted;if(h.enabled||this._hasPointLabels){for(a=e;a--;)(b=d[a])&&(c=k?b.plotHigh<b.plotLow:b.plotHigh>b.plotLow,b.y=b.high,b._plotY=b.plotY,b.plotY=b.plotHigh,f[a]=b.dataLabel,b.dataLabel=b.dataLabelUpper,b.below=c,l?i||(h.align=c?"right":"left"):j||(h.verticalAlign=c?"top":"bottom"),h.x=h.xHigh,h.y=h.yHigh);for(g.drawDataLabels&&g.drawDataLabels.apply(this,arguments),a=e;a--;)(b=d[a])&&(c=k?b.plotHigh<b.plotLow:b.plotHigh>b.plotLow,b.dataLabelUpper=b.dataLabel,b.dataLabel=f[a],b.y=b.low,b.plotY=b._plotY,b.below=!c,l?i||(h.align=c?"left":"right"):j||(h.verticalAlign=c?"bottom":"top"),h.x=h.xLow,h.y=h.yLow);g.drawDataLabels&&g.drawDataLabels.apply(this,arguments)}h.align=i,h.verticalAlign=j},alignDataLabel:function(){l.column.prototype.alignDataLabel.apply(this,arguments)},setStackedPoints:B,getSymbol:B,drawPoints:B}),k.areasplinerange=g(k.arearange),l.areasplinerange=m(l.arearange,{type:"areasplinerange",getPointSpline:l.spline.prototype.getPointSpline}),function(){var a=l.column.prototype;k.columnrange=g(k.column,k.arearange,{lineWidth:1,pointRange:null}),l.columnrange=m(l.arearange,{type:"columnrange",translate:function(){var b,c=this,d=c.yAxis;a.translate.apply(c),e(c.points,function(a){var e,f=a.shapeArgs,g=c.options.minPointLength;a.tooltipPos=null,a.plotHigh=b=d.translate(a.high,0,1,0,1),a.plotLow=a.plotY,e=b,a=a.plotY-b,Math.abs(a)<g?(g-=a,a+=g,e-=g/2):0>a&&(a*=-1,e-=a),f.height=a,f.y=e})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:B,crispCol:a.crispCol,pointAttrToOptions:a.pointAttrToOptions,drawPoints:a.drawPoints,drawTracker:a.drawTracker,animate:a.animate,getColumnMetrics:a.getColumnMetrics})}(),k.gauge=g(k.line,{dataLabels:{enabled:!0,defer:!1,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1}),u={type:"gauge",pointClass:m(r,{setState:function(a){this.state=a}}),angular:!0,drawGraph:B,fixedBox:!0,forceDL:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var a=this.yAxis,b=this.options,c=a.center;this.generatePoints(),e(this.points,function(d){var e=g(b.dial,d.dial),f=j(i(e.radius,80))*c[2]/200,h=j(i(e.baseLength,70))*f/100,k=j(i(e.rearLength,10))*f/100,l=e.baseWidth||3,m=e.topWidth||1,n=b.overshoot,o=a.startAngleRad+a.translate(d.y,null,null,null,!0);n&&"number"==typeof n?(n=n/180*Math.PI,o=Math.max(a.startAngleRad-n,Math.min(a.endAngleRad+n,o))):b.wrap===!1&&(o=Math.max(a.startAngleRad,Math.min(a.endAngleRad,o))),o=180*o/Math.PI,d.shapeType="path",d.shapeArgs={d:e.path||["M",-k,-l/2,"L",h,-l/2,f,-m/2,f,m/2,h,l/2,-k,l/2,"z"],translateX:c[0],translateY:c[1],rotation:o},d.plotX=c[0],d.plotY=c[1]})},drawPoints:function(){var a=this,b=a.yAxis.center,c=a.pivot,d=a.options,f=d.pivot,h=a.chart.renderer;e(a.points,function(b){var c=b.graphic,e=b.shapeArgs,f=e.d,i=g(d.dial,b.dial);c?(c.animate(e),e.d=f):b.graphic=h[b.shapeType](e).attr({stroke:i.borderColor||"none","stroke-width":i.borderWidth||0,fill:i.backgroundColor||"black",rotation:e.rotation,zIndex:1}).add(a.group)}),c?c.animate({translateX:b[0],translateY:b[1]}):a.pivot=h.circle(0,0,i(f.radius,5)).attr({"stroke-width":f.borderWidth||0,stroke:f.borderColor||"silver",fill:f.backgroundColor||"black",zIndex:2}).translate(b[0],b[1]).add(a.group)},animate:function(a){var b=this;a||(e(b.points,function(a){var c=a.graphic;c&&(c.attr({rotation:180*b.yAxis.startAngleRad/Math.PI}),c.animate({rotation:a.shapeArgs.rotation},b.options.animation))}),b.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup),v.prototype.render.call(this),this.group.clip(this.chart.clipRect)},setData:function(a,b){v.prototype.setData.call(this,a,!1),this.processData(),this.generatePoints(),i(b,!0)&&this.chart.redraw()},drawTracker:u&&u.drawTrackerPoint},l.gauge=m(l.line,u),k.boxplot=g(k.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",whiskerWidth:2}),l.boxplot=m(l.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:B,translate:function(){var a=this.yAxis,b=this.pointArrayMap;l.column.prototype.translate.apply(this),e(this.points,function(c){e(b,function(b){null!==c[b]&&(c[b+"Plot"]=a.translate(c[b],0,1,0,1))})})},drawPoints:function(){var a,b,c,d,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,z,A,B=this,C=B.options,D=B.chart.renderer,E=B.doQuartiles!==!1,F=B.options.whiskerLength;e(B.points,function(e){k=e.graphic,w=e.shapeArgs,m={},p={},r={},z=e.color||B.color,void 0!==e.plotY&&(a=e.pointAttr[e.selected?"selected":""],s=w.width,t=y(w.x),u=t+s,v=x(s/2),b=y(E?e.q1Plot:e.lowPlot),c=y(E?e.q3Plot:e.lowPlot),d=y(e.highPlot),f=y(e.lowPlot),m.stroke=e.stemColor||C.stemColor||z,m["stroke-width"]=i(e.stemWidth,C.stemWidth,C.lineWidth),m.dashstyle=e.stemDashStyle||C.stemDashStyle,p.stroke=e.whiskerColor||C.whiskerColor||z,p["stroke-width"]=i(e.whiskerWidth,C.whiskerWidth,C.lineWidth),r.stroke=e.medianColor||C.medianColor||z,r["stroke-width"]=i(e.medianWidth,C.medianWidth,C.lineWidth),h=m["stroke-width"]%2/2,j=t+v+h,l=["M",j,c,"L",j,d,"M",j,b,"L",j,f],E&&(h=a["stroke-width"]%2/2,j=y(j)+h,b=y(b)+h,c=y(c)+h,t+=h,u+=h,n=["M",t,c,"L",t,b,"L",u,b,"L",u,c,"L",t,c,"z"]),F&&(h=p["stroke-width"]%2/2,d+=h,f+=h,A=/%$/.test(F)?v*parseFloat(F)/100:F/2,o=["M",j-A,d,"L",j+A,d,"M",j-A,f,"L",j+A,f]),h=r["stroke-width"]%2/2,g=x(e.medianPlot)+h,q=["M",t,g,"L",u,g],k?(e.stem.animate({d:l}),F&&e.whiskers.animate({d:o}),E&&e.box.animate({d:n}),e.medianShape.animate({d:q})):(e.graphic=k=D.g().add(B.group),e.stem=D.path(l).attr(m).add(k),F&&(e.whiskers=D.path(o).attr(p).add(k)),E&&(e.box=D.path(n).attr(a).add(k)),e.medianShape=D.path(q).attr(r).add(k)))})},setStackedPoints:B}),k.errorbar=g(k.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},whiskerWidth:null}),l.errorbar=m(l.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:l.arearange?l.arearange.prototype.drawDataLabels:B,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||l.column.prototype.getColumnMetrics.call(this)}}),k.waterfall=g(k.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333",dataLabels:{inside:!0},states:{hover:{lineWidthPlus:0}}}),l.waterfall=m(l.column,{type:"waterfall",upColorProp:"fill",pointValKey:"y",translate:function(){var a,b,c,d,e,f,g,h,i,j=this.options,k=this.yAxis,m=j.threshold,n=j.stacking;for(l.column.prototype.translate.apply(this),g=h=m,b=this.points,a=0,j=b.length;j>a;a++)c=b[a],f=this.processedYData[a],d=c.shapeArgs,i=(e=n&&k.stacks[(this.negStacks&&m>f?"-":"")+this.stackKey])?e[c.x].points[this.index+","+a]:[0,f],c.isSum?c.y=f:c.isIntermediateSum&&(c.y=f-h),e=z(g,g+c.y)+i[0],d.y=k.translate(e,0,1),c.isSum?(d.y=k.translate(i[1],0,1),d.height=Math.min(k.translate(i[0],0,1),k.len)-d.y):c.isIntermediateSum?(d.y=k.translate(i[1],0,1),d.height=Math.min(k.translate(h,0,1),k.len)-d.y,h=i[1]):(0!==g&&(d.height=f>0?k.translate(g,0,1)-d.y:k.translate(g,0,1)-k.translate(g-f,0,1)),g+=f),d.height<0&&(d.y+=d.height,d.height*=-1),c.plotY=d.y=x(d.y)-this.borderWidth%2/2,d.height=z(x(d.height),.001),c.yBottom=d.y+d.height,d=c.plotY+(c.negative?d.height:0),this.chart.inverted?c.tooltipPos[0]=k.len-d:c.tooltipPos[1]=d},processData:function(a){var b,c,d,e,f,g,h,i=this.yData,j=this.options.data,k=i.length;for(d=c=e=f=this.options.threshold||0,h=0;k>h;h++)g=i[h],b=j&&j[h]?j[h]:{},"sum"===g||b.isSum?i[h]=d:"intermediateSum"===g||b.isIntermediateSum?i[h]=c:(d+=g,c+=g),e=Math.min(d,e),f=Math.max(d,f);v.prototype.processData.call(this,a),this.dataMin=e,this.dataMax=f},toYData:function(a){return a.isSum?0===a.x?null:"sum":a.isIntermediateSum?0===a.x?null:"intermediateSum":a.y},getAttribs:function(){l.column.prototype.getAttribs.apply(this,arguments);var b=this,c=b.options,d=c.states,f=c.upColor||b.color,c=a.Color(f).brighten(.1).get(),h=g(b.pointAttr),i=b.upColorProp;h[""][i]=f,h.hover[i]=d.hover.upColor||c,h.select[i]=d.select.upColor||f,e(b.points,function(a){a.options.color||(a.y>0?(a.pointAttr=h,a.color=f):a.pointAttr=b.pointAttr)})},getGraphPath:function(){var a,b,c,d=this.data,e=d.length,f=x(this.options.lineWidth+this.borderWidth)%2/2,g=[];for(c=1;e>c;c++)b=d[c].shapeArgs,a=d[c-1].shapeArgs,b=["M",a.x+a.width,a.y+f,"L",b.x,a.y+f],d[c-1].y<0&&(b[2]+=a.height,b[5]+=a.height),g=g.concat(b);return g},getExtremes:B,drawGraph:v.prototype.drawGraph}),k.polygon=g(k.scatter,{marker:{enabled:!1}}),l.polygon=m(l.scatter,{type:"polygon",fillGraph:!0,getSegmentPath:function(a){return v.prototype.getSegmentPath.call(this,a).concat("z")},drawGraph:v.prototype.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle}),k.bubble=g(k.scatter,{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"}),u=m(r,{haloPath:function(){return r.prototype.haloPath.call(this,this.shapeArgs.r+this.series.options.states.hover.halo.size)},ttBelow:!1}),l.bubble=m(l.scatter,{type:"bubble",pointClass:u,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],bubblePadding:!0,zoneAxis:"z",pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(a){var b=this.options.marker,c=i(b.fillOpacity,.5),a=a||b.fillColor||this.color;return 1!==c&&(a=A(a).setOpacity(c).get("rgba")),a},convertAttribs:function(){var a=v.prototype.convertAttribs.apply(this,arguments);return a.fill=this.applyOpacity(a.fill),a},getRadii:function(a,b,c,d){var e,f,g,h=this.zData,i=[],j=this.options,k="width"!==j.sizeBy,l=j.zThreshold,m=b-a;for(f=0,e=h.length;e>f;f++)g=h[f],j.sizeByAbsoluteValue&&null!==g&&(g=Math.abs(g-l),b=Math.max(b-l,Math.abs(a-l)),a=0),null===g?g=null:a>g?g=c/2-1:(g=m>0?(g-a)/m:.5,k&&g>=0&&(g=Math.sqrt(g)),g=w.ceil(c+g*(d-c))/2),i.push(g);this.radii=i},animate:function(a){var b=this.options.animation;a||(e(this.points,function(a){var c=a.graphic,a=a.shapeArgs;c&&a&&(c.attr("r",1),c.animate({r:a.r},b))}),this.animate=null)},translate:function(){var a,b,c,d=this.data,e=this.radii;for(l.scatter.prototype.translate.call(this),a=d.length;a--;)b=d[a],c=e?e[a]:0,"number"==typeof c&&c>=this.minPxSize/2?(b.shapeType="circle",b.shapeArgs={x:b.plotX,y:b.plotY,r:c},b.dlBox={x:b.plotX-c,y:b.plotY-c,width:2*c,height:2*c}):b.shapeArgs=b.plotY=b.dlBox=void 0},drawLegendSymbol:function(a,b){var c=this.chart.renderer,d=c.fontMetrics(a.itemStyle.fontSize).f/2;b.legendSymbol=c.circle(d,a.baseline-d,d).attr({zIndex:3}).add(b.legendGroup),b.legendSymbol.isMarker=!0},drawPoints:l.column.prototype.drawPoints,alignDataLabel:l.column.prototype.alignDataLabel,buildKDTree:B,applyZones:B}),p.prototype.beforePadding=function(){var a=this,b=this.len,f=this.chart,g=0,h=b,k=this.isXAxis,l=k?"xData":"yData",m=this.min,n={},o=w.min(f.plotWidth,f.plotHeight),p=Number.MAX_VALUE,q=-Number.MAX_VALUE,r=this.max-m,s=b/r,t=[];e(this.series,function(b){var g=b.options;!b.bubblePadding||!b.visible&&f.options.chart.ignoreHiddenSeries||(a.allowZoomOutside=!0,t.push(b),k&&(e(["minSize","maxSize"],function(a){var b=g[a],c=/%$/.test(b),b=j(b);n[a]=c?o*b/100:b}),b.minPxSize=n.minSize,b.maxPxSize=n.maxSize,b=b.zData,b.length&&(p=i(g.zMin,w.min(p,w.max(c(b),g.displayNegative===!1?g.zThreshold:-Number.MAX_VALUE))),q=i(g.zMax,w.max(q,d(b))))))}),e(t,function(a){var b,c=a[l],d=c.length;if(k&&a.getRadii(p,q,a.minPxSize,a.maxPxSize),r>0)for(;d--;)"number"==typeof c[d]&&(b=a.radii[d],g=Math.min((c[d]-m)*s-b,g),h=Math.max((c[d]-m)*s+b,h))}),t.length&&r>0&&!this.isLog&&(h-=b,s*=(b+g-h)/b,e([["min","userMin",g],["max","userMax",h]],function(b){void 0===i(a.options[b[0]],a[b[1]])&&(a[b[0]]+=b[2]/s)}))},function(){function a(a,b,c){a.call(this,b,c),this.chart.polar&&(this.closeSegment=function(a){var b=this.xAxis.center;a.push("L",b[0],b[1])},this.closedStacks=!0)}function b(a,b){var c=this.chart,d=this.options.animation,e=this.group,f=this.markerGroup,g=this.xAxis.center,h=c.plotLeft,i=c.plotTop;c.polar?c.renderer.isSVG&&(d===!0&&(d={}),b?(c={translateX:g[0]+h,translateY:g[1]+i,scaleX:.001,scaleY:.001},e.attr(c),f&&f.attr(c)):(c={translateX:h,translateY:i,scaleX:1,scaleY:1},e.animate(c,d),f&&f.animate(c,d),this.animate=null)):a.call(this,b)}var c,d=v.prototype,f=s.prototype;d.searchPointByAngle=function(a){var b=this.chart,c=this.xAxis.pane.center;return this.searchKDTree({clientX:180+Math.atan2(a.chartX-c[0]-b.plotLeft,a.chartY-c[1]-b.plotTop)*(-180/Math.PI)})},o(d,"buildKDTree",function(a){this.chart.polar&&(this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.kdDimensions=2),a.apply(this)}),d.toXY=function(a){var b,c=this.chart,d=a.plotX;b=a.plotY,a.rectPlotX=d,a.rectPlotY=b,b=this.xAxis.postTranslate(a.plotX,this.yAxis.len-b),a.plotX=a.polarPlotX=b.x-c.plotLeft,a.plotY=a.polarPlotY=b.y-c.plotTop,this.kdByAngle?(c=(d/Math.PI*180+this.xAxis.pane.options.startAngle)%360,0>c&&(c+=360),a.clientX=c):a.clientX=a.plotX},l.area&&o(l.area.prototype,"init",a),l.areaspline&&o(l.areaspline.prototype,"init",a),l.spline&&o(l.spline.prototype,"getPointSpline",function(a,b,c,d){var e,f,g,h,i,j,k;return this.chart.polar?(e=c.plotX,f=c.plotY,a=b[d-1],g=b[d+1],this.connectEnds&&(a||(a=b[b.length-2]),g||(g=b[1])),a&&g&&(h=a.plotX,i=a.plotY,b=g.plotX,j=g.plotY,h=(1.5*e+h)/2.5,i=(1.5*f+i)/2.5,g=(1.5*e+b)/2.5,k=(1.5*f+j)/2.5,b=Math.sqrt(Math.pow(h-e,2)+Math.pow(i-f,2)),j=Math.sqrt(Math.pow(g-e,2)+Math.pow(k-f,2)),h=Math.atan2(i-f,h-e),i=Math.atan2(k-f,g-e),k=Math.PI/2+(h+i)/2,Math.abs(h-k)>Math.PI/2&&(k-=Math.PI),h=e+Math.cos(k)*b,i=f+Math.sin(k)*b,g=e+Math.cos(Math.PI+k)*j,k=f+Math.sin(Math.PI+k)*j,c.rightContX=g,c.rightContY=k),d?(c=["C",a.rightContX||a.plotX,a.rightContY||a.plotY,h||e,i||f,e,f],a.rightContX=a.rightContY=null):c=["M",e,f]):c=a.call(this,b,c,d),c}),o(d,"translate",function(a){var b=this.chart;if(a.call(this),b.polar&&(this.kdByAngle=b.tooltip&&b.tooltip.shared,!this.preventPostTranslate))for(a=this.points,b=a.length;b--;)this.toXY(a[b])}),o(d,"getSegmentPath",function(a,b){var c=this.points;return this.chart.polar&&this.options.connectEnds!==!1&&b[b.length-1]===c[c.length-1]&&null!==c[0].y&&(this.connectEnds=!0,b=[].concat(b,[c[0]])),a.call(this,b)}),o(d,"animate",b),l.column&&(c=l.column.prototype,o(c,"animate",b),o(c,"translate",function(a){var b,c,d=this.xAxis,e=this.yAxis.len,f=d.center,g=d.startAngleRad,h=this.chart.renderer;if(this.preventPostTranslate=!0,a.call(this),d.isRadial)for(d=this.points,c=d.length;c--;)b=d[c],a=b.barX+g,b.shapeType="path",b.shapeArgs={d:h.symbols.arc(f[0],f[1],e-b.plotY,null,{start:a,end:a+b.pointWidth,innerR:e-i(b.yBottom,e)})},this.toXY(b),b.tooltipPos=[b.plotX,b.plotY],b.ttBelow=b.plotY>f[1]}),o(c,"alignDataLabel",function(a,b,c,e,f,g){this.chart.polar?(a=b.rectPlotX/Math.PI*180,null===e.align&&(e.align=a>20&&160>a?"left":a>200&&340>a?"right":"center"),null===e.verticalAlign&&(e.verticalAlign=45>a||a>315?"bottom":a>135&&225>a?"top":"middle"),d.alignDataLabel.call(this,b,c,e,f,g)):a.call(this,b,c,e,f,g)})),o(f,"getCoordinates",function(a,b){var c=this.chart,d={xAxis:[],yAxis:[]};return c.polar?e(c.axes,function(a){var e=a.isXAxis,f=a.center,g=b.chartX-f[0]-c.plotLeft,f=b.chartY-f[1]-c.plotTop;d[e?"xAxis":"yAxis"].push({axis:a,value:a.translate(e?Math.PI-Math.atan2(g,f):Math.sqrt(Math.pow(g,2)+Math.pow(f,2)),!0)})}):d=a.call(this,b),d})}()});