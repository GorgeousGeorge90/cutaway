
export const utils = {
    typing:(text, element, label) => {
        const h1 = document.createElement('h1')
        h1.setAttribute('data-label', label )
        element.append(h1)
        let content = ''

        const input = (i) => {
            setTimeout(()=> {
                content += text[i]
                h1.innerText = content
            },50*i)
        }

        for (let i = 0; i < text.length; i++) {
            input(i)
        }
    }
}