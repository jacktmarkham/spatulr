document.getElementById("yup1").addEventListener("click", closeWindow);
document.getElementById("yup2").addEventListener("click", closeWindow);
document.getElementById("yup3").addEventListener("click", closeWindow);
document.getElementById("Naw1").addEventListener("click", closeWindow);
document.getElementById("Naw2").addEventListener("click", closeWindow);
document.getElementById("Naw3").addEventListener("click", closeWindow);
var trueToggle = 0;

$("#flippedBy").mouseenter(function ()
{
    $("#flipperProfile").fadeIn();
});

$("#flippedBy").mouseleave(function ()
{
    $("#flipperProfile").fadeOut();
});

$("#flippedFrom").mouseenter(function ()
{
    $("#flippedProfile").fadeIn();
});

$("#flippedFrom").mouseleave(function ()
{
    $("#flippedProfile").fadeOut();
});

$("#searchButton").click (function()
{
    if (trueToggle == 0)
    {
        $("#searchBox").fadeIn();
        trueToggle = 1;
    }
    else
    {
        $("#searchBox").fadeOut();
        trueToggle = 0;
    }
});

$("#textPost").click (function()
{
    document.body.style.background = '#4C937C';
    $("#profileBox").fadeOut();
    $("#postBox").fadeOut();
   $("#postFeed").fadeOut(function()
    {
        $("#popUp").fadeIn("3000");
        $("#textPopUp").fadeIn("3000");
    });
});

$("#videoPost").click (function()
{
    document.body.style.background = '#4C937C';
    $("#profileBox").fadeOut();
    $("#postBox").fadeOut();
   $("#postFeed").fadeOut(function()
    {
        $("#popUp").fadeIn("3000");
        $("#videoPopUp").fadeIn("3000");
    });
});

$("#photoPost").click (function()
{
    document.body.style.background = '#4C937C';
    $("#profileBox").fadeOut();
    $("#postBox").fadeOut();
    $("#postFeed").fadeOut(function()
    {
        $("#popUp").fadeIn("3000");
        $("#photoPopUp").fadeIn("3000");
    });
});


function closeWindow() {
    $("#popUp").fadeOut(function()
    {
        $("#profileBox").fadeIn();
        $("#postBox").fadeIn();
        $("#postFeed").fadeIn();
    });

    document.body.style.background = '#006644';
    window.location.href = 'pantry.html';
}