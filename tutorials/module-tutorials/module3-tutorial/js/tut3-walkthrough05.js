/* put your DOM code here */
// $(function () {
//     // create a new DOM element
//     var img = $('<img src="images/art/thumbs/13030.jpg" >');
//     // and now add the new element after the panel
//     var panel = $('.panel');
//     panel.after(img);
//     });

//     $(function () {
//         // create a new DOM element
//         var img = $('<img src="images/art/thumbs/13030.jpg" >');
//         // and now add the new element after the panel
//         var panel = $('.panel');
//         panel.before(img);
//     });
//     $(function () {
//         // create a new DOM element
//         var img = $('<img src="images/art/thumbs/13030.jpg" >');
//         // and now add the new element after the panel
//         var panel = $('.panel');
//         panel.append(img);
//     });
//     $(function () {
//         // create a new DOM element
//         var img = $('<img src="images/art/thumbs/13030.jpg" >');
//         // and now add the new element after the panel
//         var panel = $('.panel');
//         panel.prepend(img);
//     });
// $(function () {
//     // create a new DOM element
//     var img = $('<img src="images/art/thumbs/13030.jpg" >');
//     // and now add the new element after the panel
//     var panel = $('.panel');
//     img.appendTo(panel);
// });
// $(function () {
//     // create a new DOM element
//     var img = $('<img src="images/art/thumbs/13030.jpg" >');
//     // and now add the new element after the panel
//     var panel = $('.panel');
//     img.prependTo(panel);
// });
$(function () {
    // create a new DOM element
    var img = $('<img src="images/art/thumbs/13030.jpg" >');
    // and now add the new element after the panel
    var panel = $('.panel');
    img.insertBefore(panel);
});