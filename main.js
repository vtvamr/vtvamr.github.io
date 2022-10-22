//-------------------------------------------------------------------------------------------------
// Determine if we're on mobile by inspecting user agent
// https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device
//

function isMobileBrowser()
{
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        return true;

    return false;
}


//-------------------------------------------------------------------------------------------------
// Query value of GET variable
//

function queryGET(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++)
    {
        var pair = vars[i].split("=");
        if (pair[0] == variable)
        {
            return pair[1];
        }
    }
    return(false);
}
