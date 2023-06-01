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
            <a href="https://www.everiwon.com/#first" class="menu-link-smallBtn">WORK</a>
            <div class="border"></div>
			<a href="archive.html" class="menu-link-smallBtn">ARCHIVE</a>
            <div class="border"></div>
            <a href="aboutMe.html" class="menu-link-smallBtn">ABOUT ME</a>
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

if (bigMenu) {
    bigMenu.innerHTML = `
        <nav class="btn_group">
            <a href="https://www.everiwon.com/" class="menu-link">EVERiwon</a>
            <a href="https://www.everiwon.com/#first" class="menu-link">작업</a>
            <a href="archive.html" class="menu-link">아카이브</a>
            <a href="aboutMe.html" class="menu-link">소개</a>
            <button class="img-switch" onclick="changeColor()"></button>
        </nav>
    `;
}

