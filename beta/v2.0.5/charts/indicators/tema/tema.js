define(["jquery","jquery-ui","color-picker"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,d){require(["css!charts/indicators/tema/tema.css"]),require(["text!charts/indicators/tema/tema.html"],function(e){var f="#cd0a0a";e=a(e),e.appendTo("body"),e.find("input[type='button']").button(),e.find("#tema_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#tema_stroke").css({background:"#"+c.formatted}).val(""),f="#"+c.formatted},ok:function(b,c){a("#tema_stroke").css({background:"#"+c.formatted}).val(""),f="#"+c.formatted}}),e.dialog({autoOpen:!1,resizable:!1,width:315,modal:!0,my:"center",at:"center",of:window,buttons:[{text:"OK",click:function(){return isNumericBetween(e.find(".tema_input_width_for_period").val(),parseInt(e.find(".tema_input_width_for_period").attr("min")),parseInt(e.find(".tema_input_width_for_period").attr("max")))?(require(["charts/indicators/highcharts_custom/tema"],function(b){b.init();var c={period:parseInt(e.find(".tema_input_width_for_period").val()),stroke:f,strokeWidth:parseInt(e.find("#tema_strokeWidth").val()),dashStyle:e.find("#tema_dashStyle").val(),appliedTo:parseInt(e.find("#tema_appliedTo").val())};a(a(".tema").data("refererChartID")).highcharts().series[0].addTEMA(c)}),void b.call(e)):void require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+e.find(".tema_input_width_for_period").attr("min")+" to "+e.find(".tema_input_width_for_period").attr("max")+" is allowed for "+e.find(".tema_input_width_for_period").closest("tr").find("td:first").text()+"!"})})}},{text:"Cancel",click:function(){b.call(this)}}]}),"function"==typeof d&&d(c)})}return{open:function(b){return 0==a(".tema").length?void c(b,this.open):void a(".tema").data("refererChartID",b).dialog("open")}}});