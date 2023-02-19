export function onFvBtn({target}){
    console.log(target)
    if(target.classList.contains('add-news-favorite')){
        console.log('its right button')
        target.classList.toggle('liked')
    }
}