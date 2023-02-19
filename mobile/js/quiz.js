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

// 替換分數文字
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


// 即時版本遞增分數
// function totalSave(data, reset) {
//     //inital
//     var pa = 0;

//     /*
//     herbivorous: "true"
//     purr: "true"
//     catbaby: "false"
//     */
//     if (data.herbivorous == 'true') {
//         $('.summary-suggest[data-target=herbivorous]')[0].dataset.pass = false;
//         pa += 30;
//     }
//     if (data.purr == 'true') {
//         $('.summary-suggest[data-target=purr]')[0].dataset.pass = false;
//         pa += 30;
//     }
//     if (data.catbaby == 'true') {
//         $('.summary-suggest[data-target=catbaby]')[0].dataset.pass = false;
//         pa += 40;
//     }
//     setProgressbar(pa);
//     setCountText('#counterPa', pa, reset);
// }

// 遞增分數
function totalSave(data, reset) {
    //inital
    var pa = 0;

    /*
    herbivorous: "true"
    purr: "true"
    catbaby: "false"
    */
    if (data.herbivorous == 'true') {
        pa += 30;
    }
    if (data.purr == 'true') {
        pa += 30;
    }
    if (data.catbaby == 'true') {
        pa += 40;
    }
    setProgressbar(pa);
    setCountText('#counterPa', pa, reset);
}

// 下一題
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
    var stepArray = ['start', 'herbivorous', 'next1', 'purr', 'next2', 'catbaby', 'next3']
    setStep(stepArray.indexOf(inputName) + 2)
}

function setStep(step = 1) {
    var setElement = $('#myForm .suitBox .suitBox-section[data-step=' + step + ']');
    setElement
        .fadeIn()
        .siblings('.suitBox-section')
        .fadeOut(0)
}

