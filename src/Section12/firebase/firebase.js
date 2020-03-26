//connecting to firebase is done here. 

import * as firebase from 'firebase'; //imports all named exports from firebase to a var
//we dont have to import sdk in a script tag since we install it locally 

const firebaseConfig = {
    apiKey: "AIzaSyAh4-o7UIovz4A0wM83xCCTRGjzr01j9hQ",
    authDomain: "expensify-12b28.firebaseapp.com",
    databaseURL: "https://expensify-12b28.firebaseio.com",
    projectId: "expensify-12b28",
    storageBucket: "expensify-12b28.appspot.com",
    messagingSenderId: "386016773758",
    appId: "1:386016773758:web:e1e9be2f310eb34c41ba2f",
    measurementId: "G-32VTWPDSNR"
  };

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Ali Agha'
});

//Raw data from firebase site
/**
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.12.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAh4-o7UIovz4A0wM83xCCTRGjzr01j9hQ",
    authDomain: "expensify-12b28.firebaseapp.com",
    databaseURL: "https://expensify-12b28.firebaseio.com",
    projectId: "expensify-12b28",
    storageBucket: "expensify-12b28.appspot.com",
    messagingSenderId: "386016773758",
    appId: "1:386016773758:web:e1e9be2f310eb34c41ba2f",
    measurementId: "G-32VTWPDSNR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

 */



 /***




 سرویس FCM که برای Push Notification استفاده میشه که برای ایران مشکلی نداره و کاربران دلخل ایران هم Push رو دریافت می‌کنن، سرویس‌های زیادی هم بر اساس همین FCM ساخته شدن که همه خوب می‌شناسیدشون.

جایگزین سرویس Realtime Database، پروژه‌ی RethinkDB هست که اوپن سورس هست.
برای قابلیت های Analytics میشه از Matomo (قبلن اسمش Piwik بود) استفاده کرد که اوپن سورس هست.

اگه قابلیت خاصی مدنظرتون هست، بگید. شاید سرویس مشابهی بشه پیدا کرد که به ایران خدمات بده و یا اوپن سورس باشه.





دوستان با کلی تحقیق و فکر تصمیم گرفتم از سرویس‌های زیر استفاده کنم.
Parse Config (back4app.com)
Fabric Crashlytics
Fabric Analytics
Pusher


همچنین تصمیم گرفتم بک‌اند رو با PHP+Laravel بنویسم؛ بنابراین، authentication رو با Laravel Passport پیاده میکنم.

حالا به مزایا و معایب این تصمیم با رنگ سبز و قرمز می‌پردازم.

از integrated all-in-one بودن فایربیس محروم شدم
برای پیاده‌سازی authentication باید خودم دست به کار شم
هزینه بیشتری می‌پردازم
دستم تو کار بازه


اینم بهتون بگم خرید سرور+پیاده‌سازی پروژه‌های اوپن سورس هزینه کمی داره ولی به مراتب هزینه نگهداری، توسعه و پیاده‌سازی بیشتری داره. همچنین پروژه‌های اوپن سورس امکانات کافی ندارن.

اگر هم دوستان پرسیدن چرا پی‌اچ‌پی و nodejs نه، این انتخاب بستگی زیادی به پروژه داره. در پروژه‌ای که ارتباط realtime با کلاینت داره باید بتونه پاسخگوی نیاز همزمان ۵۰۰٫۰۰۰ کاربر و بیش از ۱۰ میلیون request در روز باشه. البته بگم بدون شک انتخابم nodejs بود تا اینکه بنچمارک PHP7 رو دیدم. در چنین شرایطی پرفورمنس حرف اولو میزنه، بنابراین باید سمت سرور هم به‌خوبی تنظیم بشه که load balancing به خوبی درصد قابل توجهی به پرفورمنس پروژه کمک می‌کنه. میزبانی پروژه هم به digitalocean و کانفیگشو به laravel forge سپردم

  */