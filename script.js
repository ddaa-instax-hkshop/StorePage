// JavaScript Document

$(document).ready( function() {
    $("#total").val("0");
    $("#amount").val("Type?");
    $("#amountb").val("Pages?");
    $("#amountc").val("Time?");
    $("#amountd").val("Extras?");

    $( function() {
        var p = {

            0: "None",
            1: "PSD to HTML",
            2: "Brochure Website",
            3: "Device Optimised",
            4: "CMS",
            5: "eCommerce",
            6: "Custom Application",

        };
        var t = {

            0: "0",
            1: "180",
            2: "380",
            3: "890",
            4: "680",
            5: "1500",
            6: "2990",

        }
        var b = {

            0: "None",
            1: "1 (page slider)",
            2: "1 - 10 (normal)",
            3: "10 - 25",
            4: "25 - 100",
            5: "100+",

        };
        var d = {

            0: "0",
            1: "150",
            2: "290",
            3: "420",
            4: "700",
            5: "1100",
        }

        var a = {

            0: "None",
            1: "You Supply",
            2: "We Create",

        };
        var c = {

            0: "0",
            1: "150",
            2: "750",
        }

        var x = {

range: "min",
    value: 3,
    min: 1,
    max: 500,

        };
        var y = {

            0: "0",
            1: "550",

        }

        var z = {

            0: "FREE **",
            1: "3 months",
            2: "6 months",
            3: "12 months",

        };
        var v = {

            0: "0",
            1: "195",
            2: "295",
            3: "495",

        }
        var r = {

            0: "None",
            1: "Basic Flash Elements",
            2: "Complex Flash Elements",

        };
        var s = {

            0: "0",
            1: "395",
            2: "695",

        }

        $("#slider").slider({

            value: "0",
            min: 0,
            max: 6,
            step: 1,
            slide: function(event, ui) {

                $("#price").val(t[ui.value]);
                $("#amount").val(p[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
                $("#total").val(+aaa + +bbb + +ccc + +ddd);
            }
        });

        $("#sliderb").slider({
            value: "0",
            min: 0,
            max: 5,
            step: 1,
            slide: function(event, ui) {
                $("#priceb").val(d[ui.value]);
                $("#amountb").val(b[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
                $("#total").val(+aaa + +bbb + +ccc + +ddd);
            }
        });
        $("#sliderc").slider({
            value: "0",
            min: 0,
            max: 2,
            step: 1,
            slide: function(event, ui) {
                $("#pricec").val(c[ui.value]);
                $("#amountc").val(a[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
                $("#total").val(+aaa + +bbb + +ccc + +ddd);
            }
        });
        $("#sliderd").slider({
            value: "0",
            min: 0,
            max: 1,
            step: 1,
            slide: function(event, ui) {
                $("#priced").val(y[ui.value]);
                $("#amountd").val(x[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
                $("#total").val(+aaa + +bbb + +ccc + +ddd);
            }
        });
        $("#slidere").slider({
            value: "0",
            min: 0,
            max: 3,
            step: 1,
            slide: function(event, ui) {
                $("#pricee").val(v[ui.value]);
                $("#amounte").val(z[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
                $("#total").val(+aaa + +bbb + +ccc + +ddd + +eee + +fff);
            }
        });
        $("#sliderf").slider({
            value: "0",
            min: 0,
            max: 2,
            step: 1,
            slide: function(event, ui) {
                $("#pricef").val(s[ui.value]);
                $("#amountf").val(r[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
                $("#total").val(+aaa + +bbb + +ccc + +ddd + +eee + +fff);

            }
        });
  

        $("#price").val("0");
        $("#priceb").val("0");
        $("#pricec").val("0");
        $("#priced").val("0");
        $("#pricee").val("0");
        $("#pricef").val("0");

    }
    );

});