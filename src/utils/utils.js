
export const utils = {
    typing:(text, element, label) => {
        const h1 = document.createElement('h1')
        h1.setAttribute('data-label', label)
        element.append(h1)
        let content = ''

        const input = (i) => {
            setTimeout(() => {
                content += text[i]
                h1.innerText = content
            }, 50 * i)
        }

        for (let i = 0; i < text.length; i++) {
            input(i)
        }
    },
    show_progress:() => {
        const items = document.body.querySelectorAll('.progress')
        items.forEach(item => {
            let value = +item.querySelector('.percent').innerText;
            if ( value <50 ) {
                item.classList.add('over_50')
            } else {
                item.classList.remove('over_50')
            }
            let data = (360 * value / 100) + 180;
            item.querySelector('.item.right').style.transform = `rotate(${data}deg)`
        })
    },
}
