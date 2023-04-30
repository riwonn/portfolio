export class ProjectView{
    constructor(){
        this.bodyElem = document.createElement('div');
        this.bodyElem.classList.add('cover-panel');
        // 끝 부분에 자식을 추가하는 메서드 appendChild
        document.body.appendChild(this.bodyElem);

        this.show();
    }

    show(){
        this.bodyElem.innerHTML = `
        <section class="menu-flex">
            <div class="menu-title">
                <button class="btn-back"><span></span></button>
                <div class="title-center">
                    <a href="https://www.everiwon.com/" class="menu-link-logo">EVERiwon</a>
                </div>
            </div>
            <a href="https://www.everiwon.com/#first" class="menu-link-smallBtn">WORK</a>
            <div class="border"></div>
            <a href="notWork.html" class="menu-link-smallBtn">NOT WORK</a>
            <div class="border"></div>
            <a href="aboutMe.html" class="menu-link-smallBtn">ABOUT ME</a>
            <div class="border"></div>
        </section>
        `;
      this.bodyElem.classList.add('active');
    }
}