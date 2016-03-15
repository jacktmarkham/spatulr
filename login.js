document.getElementById("searchButton").addEventListener("click", displaySearch);
var searchBox = document.getElementById("searchBox");


function displaySearch() {
    if (searchBox.style.visibility == 'hidden')
    {
        searchBox.style.visibility ='inherit';
        searchBox.style.visibility = 'visible';
    }
    else 
    {
        searchBox.style.visibility = 'inherit';
        searchBox.style.visibility = 'hidden';
    }
    return true;
}

$("#Login").click (function()
{
    window.location.href = 'pantry.html';
});

$("#Register").click (function()
{
    window.location.href = 'pantry.html';
});

