var paras = document.querySelectorAll('p');
var arr = [];
var last = [];
var temp;
var counter = 1;
var pos = 1;
var parapos = 0;

function init() {
    Splitting({ target: paras[parapos], by: 'lines' });
    arr = $.find('span[data-word]');
    $("span.whitespace").remove();

    counter = 1;

    for (i = 0; i < arr.length; i++) {
        arr[i].innerText = arr[i].innerText + " ";

        if (temp < Math.round($(arr[i]).offset().top)) {
            counter++;
        }

        arr[i].className = counter;

        temp = Math.round($(arr[i]).offset().top);
        last.push(Math.round($(arr[i]).offset().top));

        if (document.querySelectorAll("span[data-word]")[i].classList.contains(pos.toString())) {
            document.querySelectorAll("span[data-word]")[i].style.backgroundColor = "#ffff4d";
        }
    }
}

init();

$(document).on('keyup', function (e) {
    if (e.keyCode == 38) {
        if (pos != 1) {
            pos--;
            for (i = 0; i < arr.length; i++) {
                if (document.querySelectorAll("span[data-word]")[i].classList.contains(pos.toString())) {
                    document.querySelectorAll("span[data-word]")[i].style.backgroundColor = "#ffff4d";
                    var element = document.querySelectorAll("span[data-word]")[i];
                    var position = element.getBoundingClientRect();
                    if (!(position.top >= 0 && position.bottom <= window.innerHeight)) {
                        document.querySelectorAll("span[data-word]")[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
                if (document.querySelectorAll("span[data-word]")[i].classList.contains((pos + 1).toString())) {
                    document.querySelectorAll("span[data-word]")[i].style.backgroundColor = "transparent";
                }
            }
        }
    }
    if (e.keyCode == 40) {
        if (pos < counter) {
            pos++;
            for (i = 0; i < arr.length; i++) {
                if (document.querySelectorAll("span[data-word]")[i].classList.contains(pos.toString())) {
                    document.querySelectorAll("span[data-word]")[i].style.backgroundColor = "#ffff4d";
                    var element = document.querySelectorAll("span[data-word]")[i];
                    var position = element.getBoundingClientRect();
                    if (!(position.top >= 0 && position.bottom <= window.innerHeight)) {
                        document.querySelectorAll("span[data-word]")[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
                if (document.querySelectorAll("span[data-word]")[i].classList.contains((pos - 1).toString())) {
                    document.querySelectorAll("span[data-word]")[i].style.backgroundColor = "transparent";
                }
            }
        } else {
            parapos++;
            init();
            pos++;
            for (i = 0; i < arr.length; i++) {
                if (document.querySelectorAll("span[data-word]")[i].classList.contains(pos.toString())) {
                    document.querySelectorAll("span[data-word]")[i].style.backgroundColor = "#ffff4d";
                    var element = document.querySelectorAll("span[data-word]")[i];
                    var position = element.getBoundingClientRect();
                    if (!(position.top >= 0 && position.bottom <= window.innerHeight)) {
                        document.querySelectorAll("span[data-word]")[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
                if (document.querySelectorAll("span[data-word]")[i].classList.contains((pos - 1).toString())) {
                    document.querySelectorAll("span[data-word]")[i].style.backgroundColor = "transparent";
                }
            }
        }
    }
});

window.addEventListener("keydown", function (e) {
    if ([38, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);