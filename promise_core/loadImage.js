/**
 * Created by Administrator on 2017/4/25.
 */
let loadImage = (url)=>{
    return new Promise((resolve,reject)=>{
        var image = new Image();
        image.onload = ()=>{
            console.log('onload ---- loadImage.js');
            resolve(image);
        };
        image.onerror = ()=>{
            reject(new Error('cant load image : '+ image.src))
        };
        image.src = url;
    })
}