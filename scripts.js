/* ПЛАВНЫЙ СКРОЛЛ */

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
      .click(function(event) {
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
      ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                  event.preventDefault();
                  $('html, body').animate({
                        scrollTop: target.offset().top
                  }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if($target.is(":focus")) {
                              return false;
                        } else {
                              $target.attr('tabindex', '-1');
                              $target.focus();
                        };
                  });
            }
      }
      });

/* СКРИПТЫ */

/* hidden-menu */
$('.countries').click(function() {
      $('.hidden_menu').css("left","0");
});
$('.cross1').click(function() {
      $('.hidden_menu').css("left","-100vw");
});
$('.link').click(function() {
      $('.hidden_menu').css("left","-100vw");
});

/* hidden-info */

/* Зеландия */

$('.place1').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url("pics/zel1.jpg") 50% 50% no-repeat');
      $('.hidden_info_place').text('Хоббитон');
      $('.hidden_info_country').text('новая зеландия');
      $('.info').text('Деревня в Новой Зеландии, искусственно созданная специально для съемок трилогии «Властелин Колец» и «Хоббит» по одноименным произведениям Дж.Р.Толкина. Это небольшое поселение – место обитания выдуманного писателем народа.');
});

$('.place2').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/zel2.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Залив Милфорд-Саунд');
      $('.hidden_info_country').text('новая зеландия');
      $('.info').text('Бухта на побережье острова Южный в юго-западной части Новой Зеландии. Она известна благодаря высокому пику Митр, тропическим лесам и таким водопадам на отвесных берегах, как Стерлинг и Боуэн. В бухте обитают морские котики, пингвины и дельфины.');
});

$('.place3').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/zel3.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Ледник Франца-Иосифа');
      $('.hidden_info_country').text('новая зеландия');
      $('.info').text('Ледник, расположенный на территории Национального парка Вестленд на западе Южного острова Новой Зеландии в регионе Уэст-Кост.');
});

$('.place4').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/zel4.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Пещеры Уэйтомо');
      $('.hidden_info_country').text('новая зеландия');
      $('.info').text('Он известен своей популяцией Arachnocampa luminosa, вида светлячков, обитающего исключительно в Новой Зеландии. Эта пещера является частью системы пещер Вайтомо, которая включает в себя пещеру Руакури и пещеру Арануи.');
});

/* Швейцария */

$('.place5').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url("pics/shv1.jpg") 50% 50% no-repeat');
      $('.hidden_info_place').text('Юнгфрау');
      $('.hidden_info_country').text('Швейцария');
      $('.info').text('Одна из самых известных горных вершин Швейцарии. Её высота — 4158 метров над уровнем моря. Это третья по высоте гора Бернских Альп, которая образует вместе с горами Эйгер и Мёнх примечательное трио.');
});

$('.place6').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/shv2.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Пилатус');
      $('.hidden_info_country').text('Швейцария');
      $('.info').text('Горный массив в швейцарских Альпах, на границе кантонов Обвальден, Нидвальден и Люцерн, и его главная вершина. По легенде название горы происходит от имени Понтия Пилата, потому что на склоне горы будто бы находилась его могила.');
});

$('.place7').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/shv3.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Часовенный мост');
      $('.hidden_info_country').text('Швейцария');
      $('.info').text('старинный мост в швейцарском городе Люцерне на реке Ройс. Самый древний деревянный крытый мост в Европе, одна из главных достопримечательностей Швейцарии и символ города Люцерна. Длина моста составляет 204,70 м.');
});

$('.place8').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/shv4.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Замок Шильон');
      $('.hidden_info_country').text('Швейцария');
      $('.info').text('Известный в русскоязычной литературе как Шильо́нский за́мок, расположен на Швейцарской Ривьере, у кромки Женевского озера, в 3 км от города Монтрё. Замок представляет собой комплекс из 25 элементов разного времени постройки.');
});

/* Исландия */

$('.place9').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url("pics/isl1.jpg") 50% 50% no-repeat');
      $('.hidden_info_place').text('Голубая лагуна');
      $('.hidden_info_country').text('Исландия');
      $('.info').text('Пруд-накопитель отработанного конденсата при геотермальной электростанции Svartsengisvirkjun, ставший популярным туристическим объектом после открытия к нему доступа в 1990-х годах. ');
});

$('.place10').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/isl2.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Гюдльфосс');
      $('.hidden_info_country').text('Исландия');
      $('.info').text('Водопад в Исландии, в регионе Сюдюрланд. Водопад Гюдльфосс находится на реке Хвитау, в долине Хёйкадалюр, на юге Исландии. Объём воды, проходящей через Гюдльфосс, в среднем составляет 109 м³/сек и повышается летом до 130 м³/сек.');
});

$('.place11').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/isl3.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Скафтафетль');
      $('.hidden_info_country').text('Исландия');
      $('.info').text('Национальный парк на юге Исландии, расположен между городками Киркьюбайярклёйстюром и Хёбном. Национальный парк основан 15 сентября 1967 года, после чего его границы дважды расширялись. Сегодня его площадь составляет около 4807 км², это второй по величине национальный парк в Исландии.');
});

$('.place12').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/isl4.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Деттифосс');
      $('.hidden_info_country').text('Исландия');
      $('.info').text('Водопад на реке Йёкюльсау-ау-Фьёдлюм в северо-восточной Исландии, на территории национального парка Йёкюльсаургльювюр. Считается самым мощным водопадом Европы. Находится в 1 км ниже по течению от водопада Сельфосс и 2 км выше по течению от водопада Хафрагильсфосс. ');
});

/* Италия */

$('.place13').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url("pics/it1.jpg") 50% 50% no-repeat');
      $('.hidden_info_place').text('Коллизей');
      $('.hidden_info_country').text('Италия');
      $('.info').text('Амфитеатр, памятник архитектуры Древнего Рима, наиболее известное и одно из самых грандиозных сооружений Древнего мира, сохранившихся до нашего времени. Находится в Риме, в ложбине между Эсквилинским, Палатинским и Целиевским холмами.');
});

$('.place14').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/it2.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Фонтан Треви');
      $('.hidden_info_country').text('Италия');
      $('.info').text('Самый крупный фонтан Рима, высотой 25,9 м и шириной 49,8 м. Этот фонтан в стиле барокко был построен в 1732—1762 годах архитектором Николо́ Сальви. Он примыкает к фасаду палаццо Поли. Величественный фасад дворца и фонтан воспринимаются как единое целое, и поэтому фонтан кажется ещё грандиознее.');
});

$('.place15').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/it3.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Дворец Дожей');
      $('.hidden_info_country').text('Италия');
      $('.info').text('Великий памятник итальянской готической архитектуры, одна из главных достопримечательностей города. Находится на площади Святого Марка рядом с одноимённым собором.');
});

$('.place16').click(function() {
      $('.hidden_info').css("left","0");
      $('.img').css('background', 'url(pics/it4.jpg) 50% 50% no-repeat');
      $('.hidden_info_place').text('Понте-Веккьо');
      $('.hidden_info_country').text('Италия');
      $('.info').text('Мост во Флоренции, расположенный в самом узком месте реки Арно, почти напротив галереи Уффици. Это самый старый мост в городе: он был построен в 1345 году архитектором Нери ди Фьораванти и сохранил свой первоначальный облик до наших дней.');
});

$('.cross').click(function() {
      $('.hidden_info').css("left","100vw");
});
