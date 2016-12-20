$(document).ready(function () {

    //    Producto 65"
    $("input[name=sesentaycinco]").on('click', function (e) {

        if ($(this).is(':checked')) {
            console.log("estoy en seleccion 1");

            //DESCLICKEO TODOS LOS INPUT, MENOS EL DE LA ETIQUETA
            $("input[name=cuarentaydos],input[name=cuarentaytres],input[name=cuarentayocho],input[name=cuarentaynueve],input[name=cincuenta],input[name=cincuentaycinco],input[name=sesentaycinco],input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[id=smartsi], input[id=smartno],input[id=QUHD4K], input[id=UHD4K],input[id=FHD], input[id=HD], input[id=LED]").prop('checked', false);

            //CLICKEO EL INPUT CORRESPONDIENTE
            $("input[name=sesentaycinco]").prop('checked', 'true');

            //MUESTRO EL DIV DEL PRODUCTO
            $('div.sesentaycinco').fadeIn().css("display", "inline-block");


            //OCULTO PRODUCTOS ANTERIORES
            $('div.cincuentaycinco, div.cincuentaycinco-dos , div.cicuentaycinco-tres, div.cincuenta, div.cuarentaynueve, div.cuarentayocho, div.cuarentaytres, div.cuarentaytres-dos, div.treintaydos, div.treintaydos-dos').css('display', 'none');
        } else {

            //OCULTO EL DIV DEL PRODUCTO    
            $('div.sesentaycinco').css('display', 'none')
        }
    });

    //    Producto 55"
    $("input[name=cincuentaycinco]").on('click', function (e) {

        if ($(this).is(':checked')) {
            console.log("estoy en seleccion 2");

            //DESCLICKEO TODOS LOS INPUT, MENOS EL DE LA ETIQUETA
            $("input[name=cuarentaydos],input[name=cuarentaytres],input[name=cuarentayocho],input[name=cuarentaynueve],input[name=cincuenta],input[name=cincuentaycinco],input[name=sesentaycinco],input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=sesentaycinco],input[id=smartsi], input[id=smartno], input[id=QUHD4K], input[id=UHD4K],input[id=FHD], input[id=HD], input[id=LED]").prop('checked', false);

            //CLICKEO EL INPUT CORRESPONDIENTE
            $("input[name=cincuentaycinco]").prop('checked', 'true');

            //MUESTRO EL DIV DEL PRODUCTO
            $('div.cincuentaycinco, div.cincuentaycinco-dos, div.cicuentaycinco-tres').fadeIn().css("display", "inline-block");

            //OCULTO PRODUCTOS ANTERIORES
            $('div.cincuenta, div.sesentaycinco, div.cuarentaynueve, div.cuarentayocho, div.cuarentaytres, div.cuarentaytres-dos, div.treintaydos').css('display', 'none');

        } else {

            //OCULTO EL DIV DEL PRODUCTO   
            $('div.cincuentaycinco , div.cincuentaycinco-dos, div.cicuentaycinco-tres').css('display', 'none');

        }
    });

    //    Producto 50"
    $("input[name=cincuenta]").on('click', function (e) {

        if ($(this).is(':checked')) {
            console.log("estoy en seleccion 3");
            //DESCLICKEO TODOS LOS INPUT, MENOS EL DE LA ETIQUETA
            $("input[name=cuarentaydos],input[name=cuarentaytres],input[name=cuarentayocho],input[name=cuarentaynueve],input[name=cincuenta],input[name=cincuentaycinco],input[name=sesentaycinco],input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[id=smartsi], input[id=smartno],input[id=QUHD4K], input[id=UHD4K],input[id=FHD], input[id=HD], input[id=LED]").prop('checked', false);

            $("input[name=cincuenta]").prop('checked', 'true');

            $('div.cincuenta').fadeIn().css("display", "inline-block");

            $('div.sesentaycinco, div.cincuentaycinco, div.cincuentaycinco-dos, div.cicuentaycinco-tres, div.treintaydos-dos, div.cuarentaynueve, div.cuarentayocho, div.cuarentaytres, div.cuarentaytres-dos, div.treintaydos').css('display', 'none');

        } else {
            $('div.cincuenta').css('display', 'none');
        }
    });


    //    Producto 49"
    $("input[name=cuarentaynueve]").on('click', function (e) {

        if ($(this).is(':checked')) {
            console.log("estoy en seleccion 2");

            $("input[name=cuarentaydos],input[name=cuarentaytres],input[name=cuarentayocho],input[name=cuarentaynueve],input[name=cincuenta],input[name=cincuentaycinco],input[name=sesentaycinco],input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[id=smartsi], input[id=smartno],input[id=QUHD4K], input[id=UHD4K],input[id=FHD], input[id=HD], input[id=LED]").prop('checked', false);

            $("input[name=cuarentaynueve]").prop('checked', 'true');

            $('div.cuarentaynueve').fadeIn().css("display", "inline-block");

            $('div.sesentaycinco, div.cincuentaycinco, div.cincuentaycinco-dos, div.cicuentaycinco-tres, div.treintaydos-dos, div.cincuenta, div.cuarentayocho, div.cuarentaytres, div.cuarentaytres-dos, div.treintaydos').css('display', 'none');

        } else {
            $('div.cuarentaynueve').css('display', 'none');

        }
    });

    //    Producto 48"
    $("input[name=cuarentayocho]").on('click', function (e) {

        if ($(this).is(':checked')) {
            console.log("estoy en seleccion 2");

            $("input[name=cuarentaydos],input[name=cuarentaytres],input[name=cuarentayocho],input[name=cuarentaynueve],input[name=cincuenta],input[name=cincuentaycinco],input[name=sesentaycinco],input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[id=smartsi], input[id=smartno],input[id=QUHD4K], input[id=UHD4K],input[id=FHD], input[id=HD], input[id=LED]").prop('checked', false);

            $("input[name=cuarentayocho]").prop('checked', 'true');

            $('div.cuarentayocho').fadeIn().css("display", "inline-block");

            $('div.sesentaycinco, div.cuarentaynueve, div.cincuentaycinco, div.cincuentaycinco-dos, div.cicuentaycinco-tres, div.treintaydos-dos, div.cincuenta, div.cuarentaytres, div.cuarentaytres-dos, div.treintaydos').css('display', 'none');

        } else {
            $('div.cuarentayocho').css('display', 'none');

        }
    });

    //    Producto 43"
    $("input[name=cuarentaytres]").on('click', function (e) {

        if ($(this).is(':checked')) {
            console.log("estoy en seleccion 2");
            $("input[name=cuarentaydos],input[name=cuarentaytres],input[name=cuarentayocho],input[name=cuarentaynueve],input[name=cincuenta],input[name=cincuentaycinco],input[name=sesentaycinco],input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[id=smartsi], input[id=smartno],input[id=QUHD4K], input[id=UHD4K],input[id=FHD], input[id=HD], input[id=LED]").prop('checked', false);

            $("input[name=cuarentaytres]").prop('checked', 'true');


            $('div.cuarentaytres , div.cuarentaytres-dos').fadeIn().css("display", "inline-block");

            $('div.sesentaycinco, div.cuarentaynueve, div.cuarentayocho, div.cincuentaycinco, div.cincuentaycinco-dos, div.cicuentaycinco-tres, div.treintaydos-dos, div.cincuenta, div.treintaydos').css('display', 'none');

        } else {
            $('div.cuarentaytres , div.cuarentaytres-dos').css('display', 'none');

        }
    });

    //    Producto 32"
    $("input[name=treintaydos]").on('click', function (e) {

        if ($(this).is(':checked')) {
            console.log("estoy en seleccion 32");

            $("input[name=cuarentaydos],input[name=cuarentaytres],input[name=cuarentayocho],input[name=cuarentaynueve],input[name=cincuenta],input[name=cincuentaycinco],input[name=sesentaycinco],input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[id=smartsi], input[id=smartno],input[id=QUHD4K], input[id=UHD4K],input[id=FHD], input[id=HD], input[id=LED]").prop('checked', false);

            $("input[name=treintaydos]").prop('checked', 'true');

            $('div.treintaydos , div.treintaydos-dos').fadeIn().css("display", "inline-block");

            $('div.sesentaycinco, div.cuarentaynueve, div.cuarentayocho, div.cincuentaycinco, div.cincuentaycinco-dos, div.cicuentaycinco-tres, div.cincuenta, div.cuarentaytres, div.cuarentaytres-dos').css('display', 'none');

        } else {
            $('div.treintaydos , div.treintaydos-dos').css('display', 'none');

        }
    });

    //Selecciones multiples

    //SMART TV
    $("input[id=smartsi]").click(function () {
        // variable ocultamos cheked input
        var unchekedAll = $("input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[name=sesentaycinco], input[id=QUHD4K], input[id=UHD4K],input[id=FHD], input[id=HD], input[id=LED]").prop('checked', false);

        // llamamos divs
        $("div.sesentaycinco , div.cincuentaycinco, div.cincuentaycinco-dos , div.cicuentaycinco-tres, div.cincuenta, div.cuarentaynueve, div.cuarentayocho, div.cuarentaytres, div.cuarentaytres-dos, div.treintaydos").fadeIn().css("display", "inline-block");

        //ocultamos div que no corresponde al filtro
        $("div.treintaydos-dos").css('display', 'none');

        console.log("smart si");
    });

    $("input[id=smartno]").click(function () {

        $("input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[name=sesentaycinco], input[id=QUHD4K], input[id=UHD4K],input[id=FHD], input[id=HD], input[id=LED]").prop('checked', false);

        $("div.sesentaycinco , div.cincuentaycinco, div.cincuentaycinco-dos , div.cicuentaycinco-tres, div.cincuenta, div.cuarentaynueve, div.cuarentayocho, div.cuarentaytres, div.cuarentaytres-dos, div.treintaydos").css('display', 'none');

        $("div.treintaydos-dos").fadeIn().css("display", "inline-block");
        console.log("smart no");
    });


    //RESOLUCION
    $("input[id=QUHD4K]").click(function () {
        // variable ocultamos cheked input
        $("input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[name=sesentaycinco],input[id=smartno], input[id=smartsi]").prop('checked', false);

        // llamamos divs
        $("div.sesentaycinco , div.cincuentaycinco").fadeIn().css("display", "inline-block");

        //ocultamos div que no corresponde al filtro
        $("div.cincuentaycinco-dos , div.cicuentaycinco-tres, div.cincuenta, div.cuarentaynueve, div.cuarentayocho, div.cuarentaytres, div.cuarentaytres-dos, div.treintaydos, div.treintaydos-dos").css('display', 'none');

        console.log("seleccion QUHD 4K");
    });

    $("input[id=UHD4K]").click(function () {
        // variable ocultamos cheked input
        //        var unchekedAllr;
        $("input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[name=sesentaycinco],input[id=smartno], input[id=smartsi]").prop('checked', false);

        // llamamos divs
        $("div.cincuentaycinco-dos, div.cincuenta, div.cuarentaytres").fadeIn().css("display", "inline-block");

        //ocultamos div que no corresponde al filtro
        $("div.sesentaycinco, div.cincuentaycinco, div.cicuentaycinco-tres, div.cuarentaynueve, div.cuarentayocho, div.cuarentaytres-dos, div.treintaydos, div.treintaydos-dos").css('display', 'none');

        //        imprimimos seleccion en consola
        console.log("seleccion UHD4K");
    });

    $("input[id=FHD]").click(function () {
        // variable ocultamos cheked input
        //        var unchekedAllr;
        $("input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[name=sesentaycinco],input[id=smartno], input[id=smartsi]").prop('checked', false);

        // llamamos divs
        $("div.cuarentayocho, div.cicuentaycinco-tres, div.cuarentaynueve, div.cuarentaytres-dos").css("display", "inline-block");

        //ocultamos div que no corresponde al filtro
        $("div.sesentaycinco, div.cuarentaytres, div.cincuenta, div.cincuentaycinco, div.cincuentaycinco-dos, div.treintaydos, div.treintaydos-dos").css('display', 'none');

        //        imprimimos seleccion en consola
        console.log("seleccion FHD");
    });

    $("input[id=HD]").click(function () {
        // variable ocultamos cheked input
        //        var unchekedAllr;
        $("input[name=treintaydos], input[name=cuarentaytres], input[name=cuarentayocho], input[name=cuarentaynueve], input[name=cincuenta], input[name=cincuentaycinco], input[name=sesentaycinco],input[id=smartno], input[id=smartsi]").prop('checked', false);

        // llamamos divs
        $("div.treintaydos, div.treintaydos-dos").fadeIn().css("display", "inline-block");

        //ocultamos div que no corresponde al filtro
        $("div.cicuentaycinco-tres, div.cuarentayocho, div.cuarentaynueve, div.cuarentaytres-dos, div.sesentaycinco, div.cuarentaytres, div.cincuenta, div.cincuentaycinco, div.cincuentaycinco-dos").css('display', 'none');

        //        imprimimos seleccion en consola
        console.log("seleccion FHD");
    });

//FUNCION HOVER
    $('.categoria').hover(function () {
        $(this).find('.masinfo').slideDown(250); //.fadeIn(250)
        $(this).find('div.caption-content').addClass("hover");
        $(this).find('div.caption-content-two').addClass("hover-two");
        $(this).find('div.caption-content-three').addClass("hover-three");
        $(this).find('div.caption-content-four').addClass("hover-four");
    }, function () {
        $(this).find('.masinfo').slideUp(250); //.fadeOut(205)
        $(this).find('div.caption-content').removeClass("hover");
        $(this).find('div.caption-content-two').removeClass("hover-two");
        $(this).find('div.caption-content-three').removeClass("hover-three");
        $(this).find('div.caption-content-four').removeClass("hover-four");
    });

/*$('input#news-btn').click(function(e){
e.preventDefault();
console.log('click en news');
});*/


});

$('.carousel').carousel({
      interval: 10000
    });


