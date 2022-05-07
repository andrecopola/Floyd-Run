function updateProgress()
{    
    if (ship.vx >= 0)
        progress = 0.1 + ship.vx * 0.5;

    else
    progress = 0.06;

    courseProgress += progress;

    if (progress > coverWidth * stage + W * stage)
    updateStage();
}

function updateStage()
{    
    stage++;

    if (stage > 5)
    {
        stage = 0;
        finishCourse();
    };
}

function finishCourse()
{

}