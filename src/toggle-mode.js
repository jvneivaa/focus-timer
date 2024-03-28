let lightMode = true

const toggleButton = document.getElementById('toggle-mode')

toggleButton.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('dark-mode')

    const mode = lightMode ? 'dark' : 'light'

    event.currentTarget.querySelector('span').textContent = `${mode} ativado!`

    lightMode = !lightMode
})