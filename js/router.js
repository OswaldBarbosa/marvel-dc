'use strict'

const routes = {
    '/marvel'   :   '/pages/marvel.html',
    '/dc'       :   '/pages/dc.html',
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    console.log(path);
    

    const response = await fetch(routes[path])
    console.log(response);
    
    const html = await response.text()
    console.log(html);
    

    document.getElementById('root').innerHTML = html
}

window.route = route