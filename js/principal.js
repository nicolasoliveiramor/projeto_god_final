const msc1 = document.querySelector('#god-1-music')
const msc2 = document.querySelector('#god-2-music')
const res = document.getElementById('res')
const img = document.createElement('img')
img.setAttribute('id', 'foto')

function checkRadio() {
    const radios = document.getElementsByName('godofwar')
    let valueZero = null
    let valueUm = null

for (let i = 0; i < radios.length; i++) {
    if (radios[0].checked) {
        valueZero = radios[i].value
        break
    } else if (radios[1].checked) {
        valueUm = radios[i].value
        break
    }
}

    const resultado = document.getElementById('res');
    if (valueZero) {
        resultado.innerHTML = ''
        msc1.play()
        msc1.volume = 0.6
        img.setAttribute('src', './img/god-war-1.png')
        res.appendChild(img)
        msc2.pause()
    } else if (valueUm) {
        resultado.innerHTML = ''
        msc2.play()
        msc2.volume = 0.6
        img.setAttribute('src', './img/god-war-2.png')
        res.appendChild(img)
        msc1.pause()
    }  else {
        resultado.innerHTML = 'Nenhuma opção foiselecionada'
    }
}

function pauseMsc () {
    msc1.pause()
    msc2.pause()
}