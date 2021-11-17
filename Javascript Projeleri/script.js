function showTime () {

const date = new Date();
let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe',  'Cuma', 'Cumartesi'];

let day = days[date.getDay()]; //index değerine göre günleri çağırmak için kullanıldı.
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
hour = ("0" + hour).slice(-2); // Zaman gösteriminde sayı tek kaldığı zaman başına 0 koymaya yarar.
minute = ("0" + minute).slice(-2);
second = ("0" + second).slice(-2);

document.querySelector("#showClock").innerHTML = hour + ":" + minute + ":" + second + " " + day;

setTimeout(showTime, 1000); // setTimeout fonksiyonu istenilen milisaniye cinsinden çağırır.
}
showTime();

let username = prompt('İsim giriniz: ');
let greeting = document.querySelector('#greeting')
greeting.innerHTML=`Hoşgeldin ${username.charAt(0).toUpperCase()+ username.slice(1).toLowerCase()}!` // charAt(0) ile index değerine erişerek sadece o karakter üzerinde değişiklik yapıldı.