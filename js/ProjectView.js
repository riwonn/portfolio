export class ProjectView{
    constructor(){
        this.bodyElem = document.createElement('div');
        this.bodyElem.classList.add('cover-panel');
        // 끝 부분에 자식을 추가하는 메서드 appendChild
        document.body.appendChild(this.bodyElem);

        this.bodyElem.addEventListener('click', e => {
			if (e.target.classList.contains('btn-back')) {
				this.hide();
			}
		});
    }

    show(){
        this.bodyElem.innerHTML = `
        <section class="menu-flex">
            <header class="menu-title">
                <button class="btn-back"><span></span></button>
                <div class="title-center">
                    <a href="https://www.everiwon.com/" class="menu-link-logo">EVERiwon</a>
                </div>
            </header>
            <a href="https://www.everiwon.com/#first" class="menu-link-smallBtn">Work</a>
            <div class="border"></div>
			<a href="archive.html" class="menu-link-smallBtn">Extras</a>
            <div class="border"></div>
            <a href="aboutMe.html" class="menu-link-smallBtn">About</a>
            <div class="border"></div>
        </section>
        `;

        const timerId = setTimeout(() => {
            this.bodyElem.classList.add('active');
            clearTimeout(timerId);
        }, 10);
    }

    hide() {
        this.bodyElem.classList.add('close');

        const timerId = setTimeout (() => {
            this.bodyElem.classList.remove('active', 'close');
            clearTimeout(timerId);
        }, 10);
    }
}

// 큰 메뉴
const bigMenu = document.querySelector('#bigMenu');
const bigMenuDark = document.querySelector('#bigMenuDark');


if (bigMenu) {
    bigMenu.innerHTML = `
        <nav class="btn_group">
            <a href="https://www.everiwon.com/" class="menu-link">EVERiwon</a>
            <a href="https://www.everiwon.com/#first" class="menu-link">Work</a>
            <a href="archive.html" class="menu-link">Extras</a>
            <a href="aboutMe.html" class="menu-link">About</a>
            <button class="img-switch" onclick="changeColor()"></button>
        </nav>
    `;
}
if (bigMenuDark) {
    bigMenuDark.innerHTML = `
        <nav class="btn_group">
            <a href="https://www.everiwon.com/" class="menu-link white">EVERiwon</a>
            <a href="https://www.everiwon.com/#first" class="menu-link white">Work</a>
            <a href="archive.html" class="menu-link white">Extras</a>
            <a href="aboutMe.html" class="menu-link white">About</a>
        </nav>
    `;
}

