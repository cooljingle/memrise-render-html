// ==UserScript==
// @name           Memrise Render HTML
// @namespace      https://github.com/cooljingle
// @description    Render html for words in test screens
// @match          https://www.memrise.com/course/*/garden/*
// @match          https://www.memrise.com/garden/review/*
// @version        0.0.1
// @updateURL      https://github.com/cooljingle/memrise-render-html/raw/master/Memrise_Render_HTML.user.js
// @downloadURL    https://github.com/cooljingle/memrise-render-html/raw/master/Memrise_Render_HTML.user.js
// @grant          none
// ==/UserScript==

$(document).ready(function() {
    MEMRISE.garden.boxes.load = (function() {
        var cached_function = MEMRISE.garden.boxes.load;
        return function() {
            MEMRISE.garden.boxes.activate_box = (function() {
                var cached_function = MEMRISE.garden.boxes.activate_box;
                return function() {
                    var result = cached_function.apply(this, arguments);
                    $('.qquestion, .primary-value').html(function(){return $.parseHTML($(this).text());});
                    return result;
                };
            }());

            return cached_function.apply(this, arguments);
        };
    }());
});
