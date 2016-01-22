define(["jquery","moment","text!navigation/navigation.html","css!navigation/navigation.css"],function(a,b,c){"use strict";function d(b){var c=a("#nav-menu"),d=a("#mobile-nav"),e=a("#nav-toggle"),f="nav-normal-menu",g="nav-mobile-menu";b.matches?d.is(":visible")||e.removeClass("nav-toggle-active"):(c.hasClass(g)&&c.removeClass(g).addClass(f),c.parents("#mobile-nav").length&&c.unwrap(),c.find("li > ul").each(function(){a(this).removeAttr("style")}))}function e(){var b=a("#nav-menu"),c="nav-normal-menu",d="nav-mobile-menu";b.hasClass(c)?(b.removeClass(c).addClass(d),b.wrap("<div id='mobile-nav'></div>"),a("#mobile-nav").animate({left:"+=280"},320)):b.hasClass(d)&&a("#mobile-nav").animate({left:"-=280"},320,function(){b.removeClass(d).addClass(c),b.unwrap()})}function f(){a("#nav-menu li > ul li").each(function(){var b=a(this);b.hasClass("update-list-item-handlers")||(b.addClass("update-list-item-handlers"),b.on("click",function(){var b="nav-normal-menu",c="nav-mobile-menu",d=a(this),f=d.parents("#nav-menu"),g=d.find("ul").length>0;f.hasClass(b)?g||d.parent("ul").not("#nav-menu").toggleClass("nav-closed"):f.hasClass(c)&&(g||a("#mobile-nav").animate({left:"-=280"},320,function(){a("#nav-toggle").removeClass("nav-toggle-active"),e()}))}))}),a("#nav-menu.nav-normal-menu li").each(function(){a(this).on("mouseover",function(){a(this).find("ul.nav-closed").each(function(){a(this).removeClass("nav-closed")})})})}function g(){a("#nav-menu a.nav-dropdown-toggle").each(function(){var b=a(this);b.hasClass("update-dropdown-toggle-handlers")||(b.addClass("update-dropdown-toggle-handlers"),b.on("click",function(c){var d=b.parent(),e=d.parent(),f="nav-menu"===e.attr("id"),g="nav-mobile-menu",h="submenu-expanded",i=b.parents("#nav-menu").hasClass(g);if(i){var j=b.next("ul");j.length>0&&(f&&a("#nav-menu.nav-mobile-menu li").each(function(){a(this).removeClass("active")}),a("#nav-menu li > ul").each(f?function(){a(this).slideUp()}:function(){var b=a(this);b.hasClass(h)||b.slideUp(),e.find("li > ul").each(function(){a(this).is(j)||a(this).slideUp()})}),f&&d.toggleClass("nav-toggle-active"),j.is(":visible")?(j.slideUp(),j.removeClass(h)):(j.slideDown(),j.addClass(h)))}c.preventDefault()}))}),f()}function h(c){var d=c.find(".authentication button"),e=c.find(".authentication span.loginid").hide(),f=c.find(".authentication span.time").hide(),g=c.find(".authentication span.balance").hide(),h="";require(["websockets/binary_websockets"],function(b){function c(a){if(!h)return void b.send({payout_currencies:1}).then(function(b){h=b.payout_currencies[0],setTimeout(function(){c(a)},0)})["catch"](function(a){});var d="0";d=a.authorize?a.authorize.balance:a.balance.balance,"0"===d||0===d?g.fadeOut():g.text(h+" "+d).fadeIn()}b.events.on("balance",c),b.events.on("logout",function(){a(".webtrader-dialog[data-authorized=true]").dialog("close").dialog("destroy").remove(),d.removeClass("logout").addClass("login").removeAttr("disabled").text("Login"),e.fadeOut(),f.fadeOut(),g.fadeOut(),h=""}),b.events.on("login",function(b){a(".webtrader-dialog[data-authorized=true]").dialog("close").dialog("destroy").remove(),d.removeClass("login").addClass("logout").removeAttr("disabled").text("Logout"),c(b),e.text(b.authorize.loginid).fadeIn(),f.fadeIn()}),d.on("click",function(){d.attr("disabled","disabled");var a=d.hasClass("logout");a?b.invalidate():b.cached.authorize()["catch"](function(){d.removeAttr("disabled")})})}),f.text(b.utc().format("YYYY-MM-DD HH:mm")+" GMT"),setInterval(function(){f.text(b.utc().format("YYYY-MM-DD HH:mm")+" GMT")},3e4)}return a(window).resize(function(){if(matchMedia){var a=window.matchMedia("(max-width: 699px)");a.addListener(d),d(a)}else{window.innerWidth>0?window.innerWidth:screen.width}}),{init:function(b){var d=a(c);a("body").prepend(d),h(d),a("#nav-toggle").on("click",function(b){a("#nav-toggle").toggleClass("nav-toggle-active"),e(),b.preventDefault()}),g(),b&&b(a("#nav-menu"))},updateDropdownToggles:g}});