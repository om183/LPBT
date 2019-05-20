$('.interests i').on('mouseenter', (e) => {
    $(e.currentTarget.nextSibling).toggleClass('show')
})
$('.interests i').on('mouseleave', (e) => {
    $(e.currentTarget.nextSibling).toggleClass('show')
})