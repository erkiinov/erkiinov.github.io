class HoldHandler{
    /**
     * @param {EventTarget} target
     * @param {Function} callBack
     */

    constructor(target, callBack){
        this.target = target;
        this.callBack = callBack;
        this.isHeld = false;
        this.activeHoldTimeoutId = null;

        ["mousedown", "touchstart"].forEach(type => {
            this.target.addEventListener(type, this._onHoldStart.bind(this));
        });
        ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(type => {
            this.target.addEventListener(type, this._onHoldEnd.bind(this));
        })
    }

    _onHoldStart(){
        this.isHeld = true;
        this.activeHoldTimeoutId = setTimeout(() => {
            if(this.isHeld){
                this.callBack()
            }
        }, 1000);
    }

    _onHoldEnd(){
        this.isHeld = false;
        clearTimeout(this.activeHoldTimeoutId);
    }

    static apply(target, callBack){
        new HoldHandler(target, callBack);
        console.log("UYVYH");
    }
}

const contactLinks = document.querySelectorAll(".contact_links_list_item")

contactLinks.forEach(link => {
    if(link.children[0].classList.contains("fun_emoji")){
        HoldHandler.apply(link, () => {
            link.children[0].classList.add("activateFun")
        })
    }else{
        HoldHandler.apply(link, () => {
            link.children[0].classList.add("activateSad")
        })
    }
})