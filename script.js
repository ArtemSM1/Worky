const firstline = document.querySelectorAll('.animated');
const secline = document.querySelectorAll('.animated2');
const thline = document.querySelectorAll('.animated3');
const otrz = document.querySelectorAll('.animated4');
const otrz2 = document.querySelectorAll('.animated5');


const checkLine = () => {
    const trigger = window.innerHeight / 5 * 4;
    for (const line of firstline) {
        const topOfLine = line.getBoundingClientRect().top;
        if(topOfLine < trigger) {
            line.classList.add('show');
        }
    }
}

const checkLine2 = () => {
    const trigger = window.innerHeight / 5 * 4;
    for (const secondline of secline) {
        const topOfLine2 = secondline.getBoundingClientRect().top;
        if(topOfLine2 < trigger) {
            secondline.classList.add('show');
        }
    }
}

const checkLine3 = () => {
    const trigger = window.innerHeight / 5 * 4;
    for (const thirdline of thline) {
        const topOfLine3 = thirdline.getBoundingClientRect().top;
        if(topOfLine3 < trigger) {
            thirdline.classList.add('show');
        }
    }
}

const checkLine4 = () => {
    const trigger = window.innerHeight / 5 * 4;
    for (const orb of otrz) {
        const topOfLine4 = orb.getBoundingClientRect().top;
        if(topOfLine4 < trigger) {
            orb.classList.add('show');
        }
    }
}

const checkLine5 = () => {
    const trigger = window.innerHeight / 5 * 4;
    for (const orb1 of otrz2) {
        const topOfLine5 = orb1.getBoundingClientRect().top;
        if(topOfLine5 < trigger) {
            orb1.classList.add('show');
        }
    }
}

checkLine();
checkLine2();
checkLine3();
checkLine4();
checkLine5();

window.addEventListener('scroll', checkLine);
window.addEventListener('scroll', checkLine2);
window.addEventListener('scroll', checkLine3);
window.addEventListener('scroll', checkLine4);
window.addEventListener('scroll', checkLine5);


let intervalId;

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('menu-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }
            }
        });
    });
});

let counters = document.querySelectorAll('.advantages__counter');
let speed = 2000; // Скорость анимации в миллисекундах

counters.forEach(counter => {
  let target = +counter.getAttribute('data-target');
  let count = 0;
  let increment = target / speed;

  let updateCount = () => {
    let value = Math.ceil(count);
    counter.innerText = value;
    if (value < target) {
      count += increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  let isInView = () => {
    let elementTop = counter.getBoundingClientRect().top;
    let elementBottom = counter.getBoundingClientRect().bottom;

    return elementTop < window.innerHeight && elementBottom >= 0;
  };

  let runCounter = () => {
    if (isInView()) {
      updateCount();
    }
  };

  window.addEventListener('scroll', runCounter);
  runCounter();
});
