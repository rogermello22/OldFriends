

$('section.portifolio_content .content button.button_item').click(function () {
    var item = $(this).attr('data-item');

    $('section.portifolio_content .content').attr('data-item', item);

    $('section.portifolio_content').scrollTop(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('section.portifolio_content .content button.back').click(function () {
    $('section.portifolio_content .content').attr('data-item', 0);
});

$('section.portifolio_content .content button.close').click(function () {
    $('.portifolio_content').removeClass('active');
    $('section.portifolio_content .content').attr('data-item', 0);

});

$('section.main_content button').click(function () {
    var portifolio = $(this).attr('data-portifolio');

    $('.portifolio_content').removeClass('active');
    $('.portifolio_content[data-portifolio="'+portifolio+'"]').addClass('active');
});