export function ajaxCall(url){
return fetch(url)
       .then(data => data.json())    
}
