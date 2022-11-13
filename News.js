let prev = document.getElementById('previous');
let next = document.getElementById('next');

let arr = ["https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1480997069/cover/aajtak1920desktop3890a3aff30a14d0b8faeb8c4d4de3a8f.jpg", "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1511339173/cover/zeenews1920desktop1dcf9dd6b3f5d4df48ab0fd5be51365f9.jpg", "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1904997942/cover/wion1920desktop4b8770b044d04feda15f35b55728f80b.jpg","https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1224347986/cover/newsx1920desktopf5eaf88ff69244e984c484dbdc4ba2c5.jpg","https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-10z583582/cover/timesnownavbharat1920desktop18ea07f0f557f4264857f992273a0e734.jpg","https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-externalli_363551781/cover/abpnews1920desktop154c0f6517f5b4514bfead119391d4dd0.jpg"];

let i = 0;

next.addEventListener('click', function () {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementById('image2').src = arr[i];
})

//prev btn
prev.addEventListener('click', function () {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementById('image2').src = arr[i];
})

function slides() {
    document.getElementById("image2").src = arr[i];

    if (i < arr.length - 1) i++;
    else i = 0;
  }
  setInterval(slides, 3000);






 