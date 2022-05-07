var bgX = W;
var bgY = H / 2 - coverHeight / 2;
var coverShow = 0;

function updateBg()
{
    if (bgX < coverWidth * -1)
    {
        coverShow++;
        stage++;
        bgX = W;
    }

    bgX -= progress;
    bgY += ship.vy * -0.06;
    showBg();
}

function showBg()
{
    switch (coverShow)
    {
        case 0:
            image(cover4, bgX, bgY);
            break;
        case 1:
            image(cover1, bgX, bgY);
            break;
        case 2:
            image(cover2, bgX, bgY);
            break;
        case 3:
            image(cover0, bgX, bgY);
            break;
        case 4:
            image(cover3, bgX, bgY);
            break;
        case 5:
            image(cover5, bgX, bgY);
    }
}