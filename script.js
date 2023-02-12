const sounds = ['trap2b', 'trap140', 'cinamatic', 'islandy', 'scratch', 'virusAttack']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    // AGORA ADICIONAR UM OUVINTE DE EVENTO PARA CADA UM

    btn.addEventListener('click', () => {
        //quando uma estiver tocando e for clicado em outra, a anterior pare de tocar.
        //executa uma função chamada stopSongs()
        stopSongs()

        document.getElementById(sound).play()//tem uma API para quatro elementos de áudio e uma das funções ou métodos dessa API é .play
    })

    document.getElementById('buttons').appendChild(btn)
})

//CRIANDO A FUNÇÃO stopSongs
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        // pausar e definir a hora atual, pois as tags de áudio tem uma propriedade da hora atual e apenas redefine para zero.
        song.currentTime = 0;
    })
}