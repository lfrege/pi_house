

drawLine = function(canvasName, x, y, x2, y2)
{
	var ctx = document.getElementById(canvasName).getContext("2d");

	ctx.moveTo(x, y);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

drawData = function(canvasName, pointArray, leftborder, bottomborder)
{
	var i;
	var ctx = document.getElementById(canvasName).getContext("2d");

	drawLine(canvasName, 0, ctx.canvas.height - bottomborder, ctx.canvas.width, ctx.canvas.height - bottomborder);
	drawLine(canvasName, leftborder, 0, leftborder, ctx.canvas.height);
	for (i = 0; i < pointArray.length - 1; i++)
	{
		ctx.fillStyle = 'rgba(0,150,0,75)';
		ctx.beginPath();
		ctx.moveTo(pointArray[i].x + leftborder, pointArray[i].load1 - bottomborder);
		ctx.lineTo(pointArray[i+1].x + leftborder, pointArray[i+1].load1 - bottomborder);
		ctx.lineTo(pointArray[i+1].x + leftborder, pointArray[i+1].load2 - bottomborder);
		ctx.lineTo(pointArray[i].x + leftborder, pointArray[i].load2 - bottomborder);
		ctx.closePath();
		ctx.fill();

		ctx.fillStyle = 'rgba(0,100,0,40)';
		ctx.beginPath();
		ctx.moveTo(pointArray[i].x + leftborder, pointArray[i].load2 - bottomborder);
		ctx.lineTo(pointArray[i+1].x + leftborder, pointArray[i+1].load2 - bottomborder);
		ctx.lineTo(pointArray[i+1].x + leftborder, pointArray[i+1].load3 - bottomborder);
		ctx.lineTo(pointArray[i].x + leftborder, pointArray[i].load3 - bottomborder);
		ctx.closePath();
		ctx.fill();
	}

	ctx.beginPath();
	ctx.moveTo(pointArray[0].x + leftborder, pointArray[0].freemem - bottomborder);
	for (i = 0; i < pointArray.length; i++)
	{
		ctx.lineTo(pointArray[i].x + leftborder, pointArray[i].freemem - bottomborder);
	}
	ctx.stroke();
	ctx.endPath();

}
