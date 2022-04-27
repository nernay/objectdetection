// draw rectangle on the screen we have 
// we will pas the detection in the rectangle we have 

export const drawRect = (detections ,ctx) => {
    detections.forEach(prediction=>{
        // getting prediction result we hav 
        // extracting the prediction from the class we have 
        const[x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];
        
        // setting up the styling we have
        const color = 'green'
        ctx.strokeSylt = color
        ctx.font = '18px Arial'
        ctx.fillstyle = color

        //Draw rectangle and text
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x, y, width, height)
        ctx.stroke()

    })

}