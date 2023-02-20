export function fix(str){
    const nj = str.replaceAll("-", "/")
    return nj
  }
  
  export function cutText(string){
    const quantityChar = 120
    return string.length <= quantityChar? string :string.slice(0, quantityChar) + '...'
  }
  
  export function cutTitle(string){
    const quantityChar = 75
    return string.length <= quantityChar? string :string.slice(0, quantityChar) + '...'
  }
  
  export function updateMarkup(markup, elem){
    elem.innerHTML= markup;
    }
  
   export function formatDate(string){
      const pubDate = new Date(string);
    const yyyy = pubDate.getFullYear();
    let mm = pubDate.getMonth() + 1;
    let dd = pubDate.getDate();
    
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const str = `${ dd + '/' + mm + '/' + yyyy }`
    return str
    }