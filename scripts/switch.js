function switchVisibility(varName) {
    var r = document.querySelector(':root')
    var v = getComputedStyle(r)
    if (v.getPropertyValue(varName) == 'hidden')
        r.style.setProperty(varName, 'visible')
    else r.style.setProperty(varName, 'hidden')
}
