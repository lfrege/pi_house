

drawLine = function(canvasName, pointArray)
{
	var i;
	var ctx = document.getElementById(canvasName).getContext("2d");

	ctx.moveTo(pointArray[0].x, pointArray[0].y);

	for (i = 0; i < pointArray.length; i++)
	{
		ctx.lineTo(pointArray[i].x, pointArray[i].y);
	}
	ctx.stroke();
}
