const variant = document.querySelector('#var');
const startButton = document.querySelector('.calc');
const qt1 = [
    [0.0000035,	    0.0000078,	0.0000012,	0,	        0,	        0.00000055,	0,	        0.00000015,	0,	        0           ],
    [0,	            0.0000025,	0,	        0.00000035,	0,	        0.00000065,	0.00000032,	0,	        0.0000021,	0.0000027   ],
    [0.00000332,	0.0000021,	0.0000023,	0.00000096,	0.00000004,	0,	        0,	        0.00000051,	0.0000082,	0,          ],
    [0,	            0.0000042,	0.0000034,	0.00000033,	0.00000015,	0,	        0.00000015,	0,	        0.0000029,	0.0000039   ],
    [0.0000015,	    0,	        0.0000098,	0,	        0.00000009,	0.00000015,	0,	        0.00000024,	0,	        0           ],
    [0,	            0.0000083,	0,	        0.00000018,	0,	        0.00000025,	0.00000067,	0.00000042,	0.0000063,	0.0000076   ],
    [0.00000745,	0.0000049,	0.0000091,	0,	        0.00000092,	0,	        0,	        0.00000089,	0,	        0           ],
    [0,	            0.0000036,	0.0000025,	0,	        0.00000086,	0.00000032,	0.00000081,	0,	        0.000005,	0.0000026   ],
    [0.0000029,	    0,	        0.0000065,	0.00000059,	0.00000041,	0,	        0,	        0.00000072,	0.0000083,	0           ],
    [0,	            0,	        0,	        0.00000034,	0,	        0.00000039,	0.00000004,	0.00000027,	0,	        0.0000042   ],
];
const qt2 = [
    [0.099,	    0.057,  	0.039,  	0.122,  	0.016,  	0.117,  	0.074,  	0.024,  	0.046,  	0.008],
    [0.062,	    0.041,  	0.049,  	0.04,	    0.051,	    0.01,   	0.068,  	0.032,  	0.06,	    0.027],
    [0.025,	    0.058,  	0.05,	    0.141,	    0.144,	    0.072,  	0.027,  	0.04,	    0.013,	    0.014],
    [0.049,	    0.025,  	0.061,  	0.042,  	0.079,  	0.083,  	0.005,  	0.047,  	0.148,  	0.017],
    [0.067,	    0.151,  	0.018,  	0.073,  	0.002,  	0.023,  	0.04,	    0.027,	    0.006,	    0.028],
    [0.113,	    0.13,	    0.009,	    0.021,	    0.036,	    0.083,  	0.048,  	0.047,  	0.066,  	0.007],
    [0.072,	    0.018,  	0.128,  	0.073,  	0.08,	    0.016,  	0.081,  	0.019,  	0.086,  	0.012],
    [0.056,	    0.054,  	0.016,  	0.05,	    0.005,	    0.193,  	0.005,  	0.024,  	0.048,  	0.022],
    [0.009,	    0.023,  	0.098,  	0.121,  	0.103,  	0.003,  	0.047,  	0.067,  	0.025,  	0.022],
    [0.013,	    0.074,  	0.121,  	0.01,	    0.122,	    0.257,  	0.082,  	0.086,  	0.025,  	0.013],
];

const tao1 = [
    [1, 1,  1,  1,  1,  1,  3,  3,  3,  3],
    [2, 2,  3,  3,  4,  4,  1,  2,  2,  4],
    [3, 4,  2,  4,  2,  3,  4,  1,  4,  1],
    [4, 3,  4,  2,  3,  2,  2,  4,  1,  2],

];

const tao2 = [
    [2, 2,	2,	2,	2,	2,	4,	4,	4,	4],
    [1, 1,	3,	3,	4,	4,	1,	2,	2,	3],
    [3, 4,	1,	4,	1,	3,	3,	1,	3,	1],
    [4, 3,	4,	1,	3,	1,	2,	3,	1,	2],
];

let qtsokn;
let date1 = document.querySelectorAll('.date1');
let date2 = document.querySelectorAll('.date2');
let destvie1 = document.querySelectorAll('.destvie1');
let destvie2 = document.querySelectorAll('.destvie2');
let destvie3 = document.querySelector('.destvie3');
let destvie4 = document.querySelector('.destvie4');
let otvet2 = document.querySelectorAll('.otvet2');
let date3 = document.querySelectorAll('.date3');
let otvet3 = document.querySelectorAll('.otvet3');
let otvet3nn = document.querySelector('.otvet3nn');
let otvet3t = document.querySelectorAll('.otvet3_t');
let otvet3n = document.querySelectorAll('.otvet3_n');
let otvet3t0 = document.querySelectorAll('.otvet3_t0');
let otvet3n0 = document.querySelectorAll('.otvet3_n0');
let otvet4 = document.querySelectorAll('.otvet4');
let otvet31 = document.querySelector('.otvet31');
let otvet41 = document.querySelector('.otvet41');

const lambda1 = [6.71, 3.18, 1.16, 3.72, 4.25, 0.82, 4.74, 0.70, 8.40, 0.59];
const tu = [0.028, 0.091, 0.036, 0.071, 0.032, 0.066, 0.084, 0.030, 0.016, 0.046];
const lambda2 = [0.0000246, 0.0000825, 0.0000279, 0.0000481, 0.0000149, 0.0000874, 0.0000287, 0.0000772, 0.0000976, 0.0000492];
const ne = [178, 166, 155, 28, 100, 119, 130, 154, 142, 112];
const mu2 = [0.8, 1.5, 1.4, 2.0, 0.9, 0.6, 1.7, 1.2, 1.9, 1.3];
const cps = 3.393;
const cop = 0.12746;
const tr = 26280;
const k = [0.0086, 0.0020, 0.0027, 0.0067, 0.0032, 0.0016, 0.0037, 0.0042, 0.0008, 0.0047];
const level = ["незначительный", "серьёзный", "критический", "катастрофический", "незначительный", "серьёзный", "критический", "катастрофический", "незначительный", "серьёзный"];


startButton.onclick = () => {
    //ЗАДАНИЕ 1
    destvie3.innerHTML = 1;
    for (let i = 0; i <= 9; i++) {
        date1[i].innerHTML = qt1[i][variant.value[1]];
        date2[i].innerHTML = qt2[i][variant.value[0]];
        if (qt1[i][variant.value[1]] == 0) {
            destvie1[i].innerHTML = 0;
        } else { destvie1[i].innerHTML = (qt1[i][variant.value[1]] * qt2[i][variant.value[0]]).toFixed(12); }
        destvie2[i].innerHTML = (1 - qt1[i][variant.value[1]] * qt2[i][variant.value[0]]);
        destvie3.innerHTML *= (1 - qt1[i][variant.value[1]] * qt2[i][variant.value[0]]);
    }
    destvie4.innerHTML = 1 - destvie3.innerHTML;

    //ЗАДАНИЕ 2
    if (variant.value[0] % 2 == 1) {
        for (let i = 0; i <= 3; i++) {
            otvet2[i].innerHTML = tao1[i][variant.value[1]];
        }
    } else {
        for (let i = 0; i <= 3; i++) {
            otvet2[i].innerHTML = tao2[i][variant.value[1]];
        }
    }

    //ЗАДАНИЕ 3
    date3[0].innerHTML = lambda1[variant.value[0]];
    date3[1].innerHTML = tu[variant.value[1]];
    date3[2].innerHTML = lambda2[variant.value[0]];
    date3[3].innerHTML = ne[variant.value[1]];
    date3[4].innerHTML = mu2[variant.value[0]];
    date3[5].innerHTML = cps;
    date3[6].innerHTML = cop;
    date3[7].innerHTML = tr;
    date3[8].innerHTML = k[variant.value[1]];
    date3[9].innerHTML = level[variant.value[0]];
    otvet3[0].innerHTML = 1 / date3[1].innerHTML;
    otvet3[1].innerHTML = lambda1[variant.value[0]] / otvet3[0].innerHTML;
    otvet3[2].innerHTML = lambda2[variant.value[0]] / mu2[variant.value[0]];
    otvet3[3].innerHTML = lambda1[variant.value[0]] / otvet3[0].innerHTML + lambda2[variant.value[0]] / mu2[variant.value[0]];
    otvet3[4].innerHTML = otvet3[2].innerHTML;
    otvet3[5].innerHTML = tu[variant.value[1]];

    otvet3nn.innerHTML = lambda1[variant.value[0]]*tr;

    otvet3[6].innerHTML = (tu[variant.value[1]] * tu[variant.value[1]]);
    otvet3[7].innerHTML = (otvet3[5].innerHTML * (1 - otvet3[3].innerHTML) + lambda1[variant.value[0]] * otvet3[6].innerHTML / 2 + lambda2[variant.value[0]] * 0 / 2) / ((1 - otvet3[3].innerHTML) * (1 - otvet3[4].innerHTML));
    otvet3t[0].innerHTML = (otvet3[5].innerHTML * (1 - otvet3[3].innerHTML) + lambda1[variant.value[0]] * otvet3[6].innerHTML / 2 + lambda2[variant.value[0]] * 0 / 2);
    otvet3t[1].innerHTML = ((1 - otvet3[3].innerHTML) * (1 - otvet3[4].innerHTML));
    otvet3[8].innerHTML = lambda1[variant.value[0]] * otvet3[7].innerHTML;
    otvet3n[0].innerHTML = lambda1[variant.value[0]];
    otvet3n[1].innerHTML = otvet3[7].innerHTML;
    otvet3[9].innerHTML = (otvet3[5].innerHTML * (1 - otvet3[3].innerHTML) + lambda1[variant.value[0]] * otvet3[6].innerHTML / 2 + 0 * 0 / 2) / ((1 - otvet3[3].innerHTML) * (1 - 0));
    otvet3t0[0].innerHTML = (otvet3[5].innerHTML * (1 - otvet3[3].innerHTML) + lambda1[variant.value[0]] * otvet3[6].innerHTML / 2 + 0 * 0 / 2);
    otvet3t0[1].innerHTML = ((1 - otvet3[3].innerHTML) * (1 - 0));
    otvet3[10].innerHTML = lambda1[variant.value[0]] * otvet3[9].innerHTML;
    otvet3n0[0].innerHTML = lambda1[variant.value[0]];
    otvet3n0[1].innerHTML = otvet3[9].innerHTML;
    otvet3[11].innerHTML = otvet3[7].innerHTML - otvet3[9].innerHTML;
    otvet3[12].innerHTML = otvet3[8].innerHTML - otvet3[10].innerHTML;
    otvet3[13].innerHTML = cps * otvet3[11].innerHTML * lambda1[variant.value[0]] * tr * ne[variant.value[1]];
    otvet3[14].innerHTML = cop * otvet3[12].innerHTML * lambda1[variant.value[0]] * tr * ne[variant.value[1]];
    otvet3[15].innerHTML = (+ otvet3[13].innerHTML) + (+otvet3[14].innerHTML);
    otvet3[16].innerHTML = -lambda2[variant.value[0]] / (lambda2[variant.value[0]] + mu2[variant.value[0]]);
    otvet3[17].innerHTML = 1 - ((mu2[variant.value[0]] * ((+lambda2[variant.value[0]]) + (+otvet3[0].innerHTML))) / (((+lambda2[variant.value[0]]) + (+mu2[variant.value[0]])) * ((+lambda1[variant.value[0]]) + (+lambda2[variant.value[0]]) + (+otvet3[0].innerHTML)))) + ((((+mu2[variant.value[0]]) - (+otvet3[0].innerHTML)) * lambda2[variant.value[0]]) / (((+lambda1[variant.value[0]]) + (+otvet3[0].innerHTML) - (+mu2[variant.value[0]])) * ((+lambda2[variant.value[0]]) + (+mu2[variant.value[0]]))));
    otvet3[18].innerHTML = ((mu2[variant.value[0]] * lambda1[variant.value[0]]) / (((+lambda2[variant.value[0]]) + (+mu2[variant.value[0]])) * ((+lambda1[variant.value[0]]) + (+lambda2[variant.value[0]]) + (+otvet3[0].innerHTML))));
    otvet3[19].innerHTML = lambda2[variant.value[0]] / (lambda2[variant.value[0]] + mu2[variant.value[0]]);
    otvet3[20].innerHTML = otvet3[18].innerHTML * otvet3[19].innerHTML;
    if (otvet3[20].innerHTML >= 0.9) { otvet31.innerHTML = "Ч"; }
    else if (otvet3[20].innerHTML >= 0.1) { otvet31.innerHTML = "В"; }
    else if (otvet3[20].innerHTML >= 0.001) { otvet31.innerHTML = "С"; }
    else if (otvet3[20].innerHTML >= 0.00001) { otvet31.innerHTML = "Р"; }
    else if (otvet3[20].innerHTML >= 0.0000001) { otvet31.innerHTML = "К"; }
    else if (otvet3[20].innerHTML < 0.0000001) { otvet31.innerHTML = "М"; }

    if (otvet3[15].innerHTML > 4000) { otvet31.innerHTML += 4; }
    else if (otvet3[15].innerHTML > 200) { otvet31.innerHTML += 3; }
    else if (otvet3[15].innerHTML > 50) { otvet31.innerHTML += 2; }
    else { otvet31.innerHTML += 1; }
    if (otvet31.innerHTML == "Р1" || otvet31.innerHTML == "К1" || otvet31.innerHTML == "М1" || otvet31.innerHTML == "М2") {
        otvet31.style.background = "green";
    }
    else if (otvet31.innerHTML == "Ч1" || otvet31.innerHTML == "В1" || otvet31.innerHTML == "С1" || otvet31.innerHTML == "С2" || otvet31.innerHTML == "Р2" || otvet31.innerHTML == "К2" || otvet31.innerHTML == "К3" || otvet31.innerHTML == "К4" || otvet31.innerHTML == "М3" || otvet31.innerHTML == "М4") {
        otvet31.style.background = "yellow";
    }
    else if (otvet31.innerHTML == "Ч2" || otvet31.innerHTML == "В2" || otvet31.innerHTML == "В3" || otvet31.innerHTML == "С3" || otvet31.innerHTML == "Р3" || otvet31.innerHTML == "Р4") {
        otvet31.style.background = "orange";
    }
    else if (otvet31.innerHTML == "Ч3" || otvet31.innerHTML == "Ч4" || otvet31.innerHTML == "В4" || otvet31.innerHTML == "С4") {
        otvet31.style.background = "red";
    }

    //ЗАДАНИЕ 4
    otvet4[0].innerHTML = k[variant.value[1]] * lambda2[variant.value[0]];
    otvet4[1].innerHTML = tu[variant.value[1]];
    otvet4[2].innerHTML = 1 / lambda1[variant.value[0]];
    otvet4[3].innerHTML = k[variant.value[1]] / mu2[variant.value[0]];
    otvet4[4].innerHTML = 1 / otvet4[0].innerHTML;
    otvet4[5].innerHTML = (tu[variant.value[1]] * otvet4[3].innerHTML) / ((+tu[variant.value[1]]) + (+otvet4[3].innerHTML));
    otvet4[6].innerHTML = ((+otvet4[3].innerHTML) + (+otvet4[1].innerHTML)) / (((+otvet4[1].innerHTML) + (+otvet4[2].innerHTML)) * ((+otvet4[3].innerHTML) + (+otvet4[4].innerHTML)));
    otvet4[7].innerHTML = 1 / otvet4[6].innerHTML - (+otvet4[5].innerHTML);
    otvet4[8].innerHTML = 1 / otvet4[7].innerHTML;
    otvet4[9].innerHTML = (+otvet4[6].innerHTML) + (1 - otvet4[6].innerHTML) * (1 - Math.exp(-otvet4[8].innerHTML * tr));
    if (otvet4[9].innerHTML >= 0.9) { otvet41.innerHTML = "Ч"; }
    else if (otvet4[9].innerHTML >= 0.1) { otvet41.innerHTML = "В"; }
    else if (otvet4[9].innerHTML >= 0.001) { otvet41.innerHTML = "С"; }
    else if (otvet4[9].innerHTML >= 0.00001) { otvet41.innerHTML = "Р"; }
    else if (otvet4[9].innerHTML >= 0.0000001) { otvet41.innerHTML = "К"; }
    else if (otvet4[9].innerHTML < 0.0000001) { otvet41.innerHTML = "М"; }

    if (level[variant.value[0]] == "незначительный") { otvet41.innerHTML += 1; }
    else if (level[variant.value[0]] == "серьёзный") { otvet41.innerHTML += 2; }
    else if (level[variant.value[0]] == "критический") { otvet41.innerHTML += 3; }
    else { otvet41.innerHTML += 4; }

    if (otvet41.innerHTML == "Р1" || otvet41.innerHTML == "К1" || otvet41.innerHTML == "М1" || otvet41.innerHTML == "М2") {
        otvet41.style.background = "green";
    }
    else if (otvet41.innerHTML == "Ч1" || otvet41.innerHTML == "В1" || otvet41.innerHTML == "С1" || otvet41.innerHTML == "С2" || otvet41.innerHTML == "Р2" || otvet41.innerHTML == "К2" || otvet41.innerHTML == "К3" || otvet41.innerHTML == "К4" || otvet41.innerHTML == "М3" || otvet41.innerHTML == "М4") {
        otvet41.style.background = "yellow";
    }
    else if (otvet41.innerHTML == "Ч2" || otvet41.innerHTML == "В2" || otvet41.innerHTML == "В3" || otvet41.innerHTML == "С3" || otvet41.innerHTML == "Р3" || otvet41.innerHTML == "Р4") {
        otvet41.style.background = "orange";
    }
    else if (otvet41.innerHTML == "Ч3" || otvet41.innerHTML == "Ч4" || otvet41.innerHTML == "В4" || otvet41.innerHTML == "С4") {
        otvet41.style.background = "red";
    }
}