function generatePass()
{
    const possible = 'abcdefghijklmnoptqrstuvxyz' + 'ABCDEFGHIJKLMNOPQRSTUVXYZ' + '0123456789' + '!@#$%¨&*()_+=/*-^{}'
    var passCurrent = ''
    var index = 0
    const rangeMax = 16
    
    for(var i = 0; i < rangeMax; i++)
    {
        index = Math.floor(Math.random() * possible.length)

        passCurrent += possible[index]
    }

    const res = document.getElementsByClassName('res')
    res[0].innerHTML = passCurrent
}