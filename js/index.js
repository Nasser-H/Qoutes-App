var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    quoteWriter: "Oscar Wilde",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    quoteWriter: "Marilyn Monroe",
  },
  {
    quote: "So many books, so little time.",
    quoteWriter: "Frank Zappa",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    quoteWriter: "Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    quoteWriter: "Marcus Tullius Cicero",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    quoteWriter: "Bernard M. Baruch",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    quoteWriter: "William W. Purkey",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    quoteWriter: "Dr. Seuss",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    quoteWriter: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    quoteWriter: "Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    quoteWriter: "Robert Frost",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    quoteWriter: "J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  {
    quote:
      "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
    quoteWriter: "Albert Camus",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    quoteWriter: "Mark Twain",
  },
  {
    quote: "حب ما تعمل حتي تعمل ما تحب",
    quoteWriter: "ناصر حسين",
  },
  {
    quote:
      "لا تعطي سرك لعزيز فكل عزيز لدية عزيزة ومن عزيز الي عزيزة سافر سرك بلا فيزا",
    quoteWriter: "محمد حافظ",
  },
  {
    quote:"Failure is the condiment that gives success its flavor.",
    quoteWriter:"Mohaned Ahmed",
  },
];
var maxNumber = quotes.length;
var arr = [];
var last;
/* 
انا هنا عامل
function
بتاخد بارمتير والبرامتر ده بيكون عدد المقتبسات
وهنا علشان الموضوع يبقا داينامك معايا اكتر
*/
function generateUniqueRandom(maxNumber) {
  //هنا بدات الستخدم الاوبجيكت علشان اقدر استخرج عدد عشوائي بين الصفر وعدد المقتبسات
  var random = Math.floor(Math.random() * maxNumber);
  //هنا استخدمش داله if
  //واستدعيت متغيير
  //(arr)
  //وبقوله في حاله ان العدد العشوائي اللي انت طلعته مش موجود في المصفوفة استمر
  if (!arr.includes(random)) {
    //هنا بدات اضيف الرقم العشوائي في المصفوفة
    arr.push(random);
    //وهنا ببدأ اطبع اول مقتبس والكاتب بتاعة من خلال الرقم العشوائي اللي في الحالة دي هو رقم المقتبس في المصفوفة
    document.getElementById("quote").innerHTML =
      `"` + quotes[random].quote + '"';
    document.getElementById("quoteWriter").innerHTML =
      `-- ` + quotes[random].quoteWriter;
    return random;
  } else {
    // انما هنا بقوله في حاله أن الرقم العشوائي فعلا موجود في الصفوفة وهنا معناها انه بدأ يتكرر معايا في نفس الدورة
    // بسألة تاني طب لو في حاله ان الاعداد الي في المصفوفة لم تخزن اكبر من العدد اللي هو عدد المقتبسات
    if (arr.length < maxNumber) {
      //ارجع للدالة من جديد علشان تخرج عدد عشوائي تاني اللي لو طلع موجود في المصفوفة اطلع وهات عدد غيرة وهكذا
      //وهنا انا متاكد ان مفيش اعداد هتكون متشابهه في نفس الدورة
      return generateUniqueRandom(maxNumber);
    } else {
      //هنا في حاله ان المصفوفة اتملت معايا بجميع الارقام اللي من صفر الي عدد المقتبسات بطريقة عشوية ومع مراعاة عدم التكرار
      //هنا بأمن نفسي اكتر وببدأ اخزن اخر رقم طلع عندي في المصفوفة لمنع احتمال تكرار نفس الرقم في بداية الدورة الجديدة
      last = arr[maxNumber - 1];
      //هنا بقول للمصفوفة اللي في الدورة الجديدة انها تبدا بأخر رقم في الدورة السابقة
      arr = [last];
      //علشان لما ارجع تشغيل الدالة تاني اكون ضامن ان اخر عدد في الدورة السابقة انا مش هبدأ بيه لانه بالفعل موجود في المصفوفة فا مش هيدخلي علشان اطبع المقتبس بتاعة
      //وفي هذة الحالة بيتم اهمالة
      return generateUniqueRandom(maxNumber);
    }
  }
}
