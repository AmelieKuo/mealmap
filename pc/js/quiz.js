//init
var formValue = {};
$(document).ready(function () {
    setProgressbar(0);
    setStep()
    $('#myForm').trigger("reset");
    //setCountText('#ProgressbarCounter',$(this).text());
    /*
    $('.counter-count').each(function () {
        setCountText(this,$(this).text())
    });
    */
});
function setProgressbar(pr) {
    var progressbar = {};
    progressbar.strokeWidth = 20;
    progressbar.radius = 50 - progressbar.strokeWidth / 2;
    progressbar.pathDescription = "M 50,50 m 0,-" + progressbar.radius + " a " +
            progressbar.radius + "," + progressbar.radius + " 0 1 1 0," + 2 * progressbar.radius + " a " + progressbar.radius + "," + progressbar.radius + " " +
            "0 1 1 0,-" + 2 * progressbar.radius + "";
    progressbar.diameter = Math.PI * 2 * progressbar.radius;
    $('path.circularProgressbar-shadow').attr('d', progressbar.pathDescription);
    $('path.circularProgressbar-trail').attr('d', progressbar.pathDescription);
    $('path.circularProgressbar-path').attr('d', progressbar.pathDescription);
    $('path.circularProgressbar-path').attr(
        'stroke-dasharray',
        progressbar.diameter + 'px ' + progressbar.diameter + 'px'
    );
    $('path.circularProgressbar-path').attr(
        'stroke-dashoffset',
        (((100 - pr) / 100) * progressbar.diameter) + 'px'
    );
    setCountText('#ProgressbarCounter', pr);
}
function setCountText(name, text = 0, reset) {
    var nowValue = $(name)
        ? $(name).text()
        : '0';
    if (reset) 
        nowValue = '0';
    $(name)
        .prop('Counter', nowValue.replace(/\D/g, ''))
        .animate({
            Counter: text
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now).toLocaleString());
            }
        });
};
function totalSave(data, reset) {
    //inital
    var pa = 100;

    /*
    is_email: "true"
    is_foreign: "true"
    is_multiple: "false"
    */
    if (data.is_email == 'false') {
        $('.summary-suggest[data-target=is_email]')[0].dataset.pass = false;
        pa -= 40;
    }
    if (data.is_foreign == 'true') {
        $('.summary-suggest[data-target=is_foreign]')[0].dataset.pass = false;
        pa -= 20;
    }
    if (data.is_multiple == 'true') {
        $('.summary-suggest[data-target=is_multiple]')[0].dataset.pass = false;
        pa -= 20;
    }
    setProgressbar(pa);
    setCountText('#counterPa', pa, reset);
}
function setValue(dom) {
    var isCheckBox = dom.attr('type') == 'checkbox';
    var inputName = dom.attr('name');
    var inputValue = dom.val();
    if (isCheckBox) {
        inputValue = [];
        var checkedElements = $('input[name=' + inputName + ']:checked');
        for (var i = 0; checkedElements[i]; ++i) {
            inputValue.push(checkedElements[i].value)
        }
    }
    formValue[inputName] = inputValue;
    totalSave(formValue);
    var stepArray = ['is_email', 'is_foreign', 'is_multiple']
    setStep(stepArray.indexOf(inputName) + 2)
}
function setStep(step = 1) {
    var setElement = $('#myForm .suitBox .suitBox-section[data-step=' + step + ']');
    setElement
        .fadeIn()
        .siblings('.suitBox-section')
        .fadeOut(0)
    if (step == 4) {
        finalStep()
    }
}
function finalStep() {
    if (formValue.is_email && formValue.is_foreign && formValue.is_multiple) {
        var gaStr = JSON.stringify(formValue)
        gtag('event', 'click', {
            event_category: 'page-suittest',
            event_label: '立即檢測:' + gaStr
        });
    } else {
        window.alert('請勾選問卷題目，測試符合度!');
    }
}
