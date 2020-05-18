export default class Form_Events {

    constructor() {
        this.initPrevNextButtons();
        this.initChildSelect();
    }

    initPrevNextButtons() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');
        let $finishButton = $('.js-finish');

        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
        $finishButton.click(this.preventDefaultAc);
    }

    preventDefaultAc(evt){
        evt.preventDefault();
    }

    initChildSelect() {
        let childSelect = $('#childSelect');
        childSelect.change(this.childDisplay.bind(this));
    }

    childDisplay() {
        var childs = [];
        let selected = childSelect.options[childSelect.selectedIndex].value;
        let readChilds = document.getElementsByClassName('child');
        for (let i=0; i<4; i++) {
            childs.push(readChilds[i]);
        }
        childs.forEach(element => {
            element.setAttribute("style","display:none");
        })
        for(let i=0; i<selected; i++) {
            childs[i].setAttribute("style","display:block");
        }
    }

    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
    }

    goToStep(step, direction = 'next') {
        let currentStep = +step.replace(/^step\-/, '');
        let goToStep = '.step-';
        let nextStep;
        if (direction === 'next') nextStep = currentStep + 1;
        else nextStep = currentStep - 1;
        goToStep += nextStep;
        this.progressBar(Math.round(nextStep*33.33));
        return goToStep;
    }

    changeAction(evt,direction='next'){
        this.preventDefaultAc(evt);
        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');
        
        $formStep.addClass('d-none');

        let $step = $(this.goToStep($formStep[0].classList[1], direction));
        $step.removeClass('d-none');
    }

    previousAction(evt) {this.changeAction(evt,'prev');}

    nextAction(evt) {this.changeAction(evt);}

    progressBar(percent) {
        let $progressBar = $(".progress-bar");
        $progressBar.css("width", percent + "%").html(percent + "%");
    }
    
}
