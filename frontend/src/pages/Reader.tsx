import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronLeft, ChevronRight, Bookmark, Settings, List,
  X, Sun, Moon, Minus, Plus, BookOpen, Globe, Menu,
  Lock, CreditCard, Check, Star, Zap
} from 'lucide-react';
import { books as staticBooks } from '../data/books';
import { bookService } from '../services/bookService';

// ─── Book Content Library ──────────────────────────────────────────────────
type Lang = 'en' | 'uz';

interface Chapter {
  title: { en: string; uz: string };
  pages: { en: string[]; uz: string[] }; // each item = one screen of text
}

const getBookContent = (bookId: string): Chapter[] => {
  if (bookId === '30') {
    // O'tkan Kunlar — Abdulla Qodiriy
    return [
      {
        title: { en: "Chapter 1: Otabek's Return", uz: "I Bob: Otabekning Qaytishi" },
        pages: {
          uz: [
            `Toshkentdan Farg'onaga qaytayotgan Otabek yo'lda ko'p o'yladi. Yigirma yillik umrining eng muhim pallasi — mana shu safar, mana shu qaytish edi. U Toshkentda tahsil oldi, savdo-sotiqdan qo'l silkidi, lekin ko'ngil har doim Marg'ilonga tortardi.\n\nOtlar tuyoqlari yo'lning tosh-qorasiga urilganida, Otabek ko'zlarini yumdi. Xayolida onasining yuzi namoyon bo'ldi — qariган, charchagan, lekin mehribon. Otasi ham sog'-salomat bo'lsa kerak, besh yil oldin qoldirib ketganda qarib qolmagan edi hali.`,
            `Karvon Marg'ilon darvozasiga yaqinlashganda kun botib qolgan edi. Bozor tarqab, aholi uylariga yig'ilayotgan mahal. Ko'chalar bo'm-bo'sh, faqat ba'zan biror chol chiroq ko'tarib o'tib qolardi.\n\nOtabek otdan tushib, jilovni xizmatkori Hamidga tutqazdi. Uy ko'chasi tanish hid — o'rik guli, loy devor, chumchuq chirillagani. Yuraği g'alati bir tuyg'u bilan to'lib ketdi. Bu — vatanga qaytish hissi edi, so'z bilan ifoda etib bo'lmaydigan, faqat yurak biladigan narsa.`,
            `Darvoza taqillatildi. Ichkaridan "kim?" degan ovoz chiqdi — onasining ovozi. Otabek bir muddat turib qoldi. Ko'zlari namlandi.\n\n"Men, ona. Otabek."\n\nDarvoza shoshilib ochildi. Ona o'g'lini ko'rib bir nafas lol bo'lib turdi, keyin yig'lab uning bo'yniga osildi. Otabek ham ko'zyosh to'kdi. Besh yillik ayriliqning og'irligi shu bir lahzada erib ketdi go'yo.`,
          ],
          en: [
            `Otabek had been thinking throughout his journey from Tashkent to Fergana. The most significant moment of his twenty years — this journey, this return. He had studied in Tashkent, abandoned trade, but his heart had always been drawn to Margilan.\n\nAs the horses' hooves struck the rocky road, Otabek closed his eyes. His mother's face appeared in his mind — aged, tired, yet full of warmth. His father must be well too; he hadn't seemed old when Otabek left him five years ago.`,
            `The caravan approached the gates of Margilan as the sun was setting. The market had dispersed, and people were heading home. The streets were empty, with only the occasional elderly man passing with a lantern.\n\nOtabek dismounted and handed the reins to his servant Hamid. The familiar scent of his childhood street — apricot blossoms, clay walls, sparrows chirping. A strange feeling filled his heart. This was the feeling of returning home, something words cannot express, only the heart knows.`,
            `He knocked on the gate. A voice came from inside — "Who is it?" — his mother's voice. Otabek paused for a moment. His eyes grew moist.\n\n"It's me, mother. Otabek."\n\nThe gate opened hurriedly. His mother stood speechless for a moment upon seeing her son, then burst into tears and embraced him. Otabek wept too. The weight of five years of separation melted away in that single moment.`,
          ],
        },
      },
      {
        title: { en: "Chapter 2: The Gathering", uz: "II Bob: Mehmondorchilik" },
        pages: {
          uz: [
            `Ertasiga Yusufbek hoji o'g'lining sharafiga to'y berdi. Marg'ilonning nufuzli kishilari, savdogarlar, ulamolar yig'ildi. Dasturxon xilma-xil taomlar bilan to'ldi. Lekin Otabek bir joyda o'tirib dam olmadi — u mehmonlarni kutib, gap-so'z eshitib yurdi.\n\nTo'yda Hasanali qori ham bor edi. U cho'l uyida yashagan, faqat katta marosimlarda shaharga tushardi. Otabekni ko'rib quchirib salomlashdi, keyin birga eski kunlarni eslashdi.`,
            `Kechqurun mehmonlar tarqagach, ota-o'g'il yolg'iz qoldi. Yusufbek hoji choyni piyolasiga quyib, o'g'liga qaradi.\n\n"Bola, endi uylaning vaqti bo'ldi," dedi u sekin. "Yoshing o'tib ketyapti. Biz ham siporishmiz — siz tuging, biz ko'nglimiz to'lib o'laylik."\n\nOtabek indamay choy ho'pladi. Bu gapni kutgandi aslida. Lekin kim bilan? Ko'ngli hali bo'sh edi, biror qiz to'g'risida o'ylagan ham emasdi.`,
            `"Kimga uylanay?" dedi u oxiri.\n\n"Shu shaharning qiziga. Yoki Toshkentdan olib kelaylik. Siz aytgan bo'lsangiz bo'ldi."\n\nOtabek bosh chayqadi. Unga tanlash erki berilishi kerak edi. Lekin tanlash uchun avval sevish kerak, sevish uchun esa... ko'rish kerak. Hayot shu qadar oddiy va shu qadar murakkab edi bir vaqtning o'zida.`,
          ],
          en: [
            `The next day, Yusufbek Haji threw a feast in honor of his son's return. Distinguished people of Margilan — merchants, scholars, clerics — gathered. The table was filled with diverse dishes. But Otabek could not sit still in one place; he circulated, welcoming guests and listening to conversations.\n\nHasanali Qori was also at the gathering. He lived in a remote village and only came to the city for major events. Upon seeing Otabek, he embraced him warmly, and together they reminisced about old times.`,
            `When the guests had dispersed in the evening, father and son were left alone. Yusufbek Haji poured tea into his cup and looked at his son.\n\n"My son, it is time to get married," he said quietly. "Your years are passing. We are aging too — let us see you settled before we go."\n\nOtabek sipped his tea in silence. He had expected these words. But with whom? His heart was still empty; he had not thought of any particular girl.`,
            `"Whom shall I marry?" he finally asked.\n\n"A girl from this city. Or we can bring someone from Tashkent. You just say the word."\n\nOtabek shook his head. He needed to be given the freedom to choose. But to choose, one must first love, and to love... one must first see. Life was at once so simple and so complex.`,
          ],
        },
      },
      {
        title: { en: "Chapter 3: A Glimpse of Kumush", uz: "III Bob: Kumushning Ko'rinishi" },
        pages: {
          uz: [
            `Bir kuni Otabek bozordan qaytib kelayotganda, ko'chaning boshida qandaydir g'ala-g'ovur bo'layotganini ko'rdi. Yaqinlashsa, yosh bir qiz xoliga ergashib kelayotgan ekan. Qiz orqasiga qaytib qolgan narsasini olmoqchi bo'lib, Otabekka to'qnashib ketdi.\n\nIkki ko'z bir-biriga qarab qoldi. Otabek o'zi ham bilmagan holda to'xtab qoldi. Qiz esa shoshib uzr so'radi va tez yoniga bordi.`,
            `Lekin o'sha bir nafaslik ko'z urushuvi Otabekning butun hayotini o'zgartirdi. U uyiga kelib, ovqat yemadi, uxlamadi. Ko'z o'ngida faqat o'sha siymо — oq yuz, qop-qora ko'zlar, uyalib qizargan lunjlar.\n\nKimdir u haqda so'rasa, "hech narsa yo'q" deb qo'yardi. Lekin ichida bir alanga yonib ketgan edi allaqachon. Bu — muhabbatning birinchi uchquni edi.`,
            `U xizmatkori Hamidni yubortirdi. "O'sha qizning kim ekanini bil," dedi. Hamid ko'p o'tmay qaytib keldi.\n\n"Xo'jayin, u — Kumush. Mirzakarimboy o'g'lining qizi. Tashkentliklar bilan qarindosh. Ularning bog'i bu ko'chaning narigi tomonida."\n\nOtabek ko'zlarini yumdi. Kumush. Ism ham uning o'ziga o'xshab o'ziga xos, qimmatbaho edi. U endi faqat shu ism haqida, shu siymо haqida o'ylardi.`,
          ],
          en: [
            `One day, as Otabek was returning from the bazaar, he noticed a commotion at the beginning of the street. Drawing closer, he saw a young girl walking with her aunt. As the girl turned back to retrieve something she had left behind, she collided with Otabek.\n\nTwo pairs of eyes met. Otabek stopped without realizing it. The girl quickly apologized in embarrassment and moved to the side.`,
            `But that one fleeting exchange of glances changed Otabek's entire life. He returned home unable to eat or sleep. Before his eyes there was only that face — fair skin, deep black eyes, cheeks flushed with shyness.\n\nWhenever anyone asked if something was wrong, he would say "nothing." But inside, a flame had already been lit. This was the first spark of love.`,
            `He sent his servant Hamid to find out. "Learn who that girl is," he said. Hamid returned before long.\n\n"Master, she is Kumush — the daughter of Mirzakarimboy's son. They are related to people from Tashkent. Their garden is on the other side of this street."\n\nOtabek closed his eyes. Kumush. The name, like her, was unique and precious. Now he could think only of this name, only of that face.`,
          ],
        },
      },
      {
        title: { en: "Chapter 4: Otabek's Struggle", uz: "IV Bob: Otabekning Kurashi" },
        pages: {
          uz: [
            `Otabek necha kun davomida o'z o'zi bilan kurashdi. U — savdogar oilasining o'g'li, tarbiyasi ulug', ota-onasining ko'z oynaği. Qizni ko'rdi, oshiq bo'ldi, lekin bu sevgi uni qayerlarga olib boradi?\n\nOtasi allaqachon uni boshqa birortasiga unashtirib qo'ygan bo'lsa-chi? Yoki Kumushning o'zi kim bilan sevishib yurgandirmi? Bu savollar uni qiynardi, uxlatmadi.`,
            `Nihoyat u bir qarorga keldi: ota-onasiga Kumushni so'rash kerak. To'g'ri yo'l — shu. Lekin ota-onasi rozi bo'larmikin? Mirzakarimboy bilan ularning oilasi munosabati yaxshi edi, ammo quda bo'lish boshqacha gap.\n\nShunga qaramay, Otabek onasiga yaqinlashdi. "Ona," dedi u, ovozi titragan holda, "bir narsani aytayin..."\n\nOnasi unga diqqat bilan qaradi. "Nega shuncha bezovta bo'lib yurasan, bolam?"`,
            `"Kumushni bilasizmi? Mirzakarimboy o'g'lining qizini?"\n\nOnasi bir nafas sukutga toldi. "Bilaman. Yaxshi oila. Nima bo'ldi?"\n\n"Uni... men istayapman." So'zlarni aytgach, Otabekning yuragidan tosh ko'tarilgandek bo'ldi. Ona dastlab hayron bo'lib turdi, keyin yoqimli jilmaydi. "Bolam, bu yaxshi narsa. Otangizga gapiraman."`,
          ],
          en: [
            `Otabek struggled with himself for many days. He was the son of a merchant family, well-bred, the pride of his parents. He had seen the girl, fallen in love — but where would this love lead him?\n\nWhat if his father had already betrothed him to someone else? Or what if Kumush herself loved someone? These questions tormented him, kept him awake.`,
            `Finally he made a decision: he must ask his parents to seek Kumush's hand. That was the right path. But would his parents agree? The relationship between Mirzakarimboy's family and theirs was good, but becoming relatives through marriage was a different matter.\n\nNonetheless, Otabek approached his mother. "Mother," he said, his voice trembling, "I want to tell you something..."\n\nHis mother looked at him attentively. "Why have you been so restless, my son?"`,
            `"Do you know Kumush? The daughter of Mirzakarimboy's son?"\n\nHis mother fell silent for a moment. "I know her. A good family. What happened?"\n\n"I... want her." After saying the words, Otabek felt as if a stone had been lifted from his heart. His mother first looked surprised, then smiled warmly. "My son, that is a good thing. I will speak to your father."`,
          ],
        },
      },
      {
        title: { en: "Chapter 5: The Promise", uz: "V Bob: Va'da" },
        pages: {
          uz: [
            `Yusufbek hoji bu xabarni eshitib, ko'p o'ylamadi. O'g'lining baxtli bo'lishi — bu ham ota-onaning orzusi. U Mirzakarimboy bilan yaxshi munosabatda edi; quda bo'lish ham yaxshi bo'lardi.\n\nLekin boshqa bir mushkul bor edi: Kumushning otasi allaqachon boshqa bir yigitga va'da bergan degan gap yurardi mahallada. Bu gap to'g'rimi yoki yo'qmi, avval bilish kerak edi.`,
            `Yusufbek hoji eski do'sti orqali xabar yubordi. Bir hafta o'tmay javob keldi: "Kumush hali bo'sh. Ota-onasi rozi bo'lsa, gap yo'q."\n\nBu xabarni eshitganda Otabek birinchi marta o'sha kunlardan beri tinchib uxladi. Tush ko'rdi — Kumush bog'da gul uzib yurgan, u esa uzoqdan qarab turibdi, va ikkalasi ham baxtli.`,
            `Unashtiruv marosimi kichik o'tkazildi — faqat yaqin qarindoshlar. Kumushning otasi "rozi" dedi, Yusufbek hoji ham. Qo'l olishildi, duo qilindi.\n\nKumush uyning ichida, pardaning orqasida o'tirgan edi. U bir marta oynadan tashqariga qarab qo'ydi. Otabek ham o'sha tomonga ko'z tashladi. Ko'zlari to'qnashmadi — lekin ikkalasi ham bilishardi: hayot hozir yangi sahifasini ochayapti.`,
          ],
          en: [
            `Yusufbek Haji did not deliberate long upon hearing the news. His son's happiness was also a parent's dream. He had a good relationship with Mirzakarimboy's family; becoming relatives would be a fine thing.\n\nBut there was another complication: rumors circulated in the neighborhood that Kumush's father had already promised her to another young man. Whether this rumor was true or false needed to be determined first.`,
            `Yusufbek Haji sent word through an old friend. Within a week, the reply came: "Kumush is still free. If her parents agree, there is no obstacle."\n\nUpon hearing this news, Otabek slept peacefully for the first time since those days. He dreamed — Kumush was picking flowers in a garden, he was watching from afar, and both were happy.`,
            `The betrothal ceremony was held modestly — only close relatives. Kumush's father said "yes," as did Yusufbek Haji. Hands were shaken, prayers were offered.\n\nKumush sat inside the house, behind a curtain. She glanced once through the window toward outside. Otabek also cast his eyes in that direction. Their eyes did not meet — yet both knew: life was now opening a new page.`,
          ],
        },
      },
      {
        title: { en: "Chapter 6: Days of Love", uz: "VI Bob: Muhabbat Kunlari" },
        pages: {
          uz: [
            `Nikoh o'qilgach, Kumush Otabekning uyiga ko'chib o'tdi. Dastlabki kunlar — jim-jitlik, uyatchanlik, ammo yurakda baxt. Otabek unga nozik muomala qildi, hech narsani majbur qilmadi. Sekin-asta ikkalasi so'zlasha boshladilar.\n\nKumush aqlli edi — faqat chiroyli emas, balki tez fahmlaydigan, kulgisi yoqimli, fikri teran. Otabek har gal u bilan gaplashganda yangi bir narsa kashf qilganday his qilardi.`,
            `Bog'da kechqurunlari birga o'tirishardi. Oy chiqib kelsa, Kumush uni ko'rsatib, she'r o'qirdi — yod olgan she'rlarini. Otabek esa tinglardi. Ko'ngli to'lib ketardi.\n\n"Siz she'r bilasizmi?" deb so'radi Kumush bir kuni.\n\n"Bilmayman. Lekin siz o'qiganda yoqadi."\n\nKumush kuldi. O'sha kulgi — Otabekning umri bo'yi eslab yuradigan narsa.`,
            `Ular uchun davr ham, zamon ham yana edi. Lekin hayot to'g'ri chiziqda ketmaydi. Bir kuni Toshkentdan xat keldi — Otabekning eski aloqasi, eski bir majburiyat. U xatni o'qib, uzoq jim qoldi.\n\nKumush uning yuziga qaradi. "Yomon xabarmi?" deb so'radi.\n\n"Yo'q," dedi Otabek. Lekin ko'zlari boshqa narsa aytardi.`,
          ],
          en: [
            `After the wedding ceremony, Kumush moved into Otabek's home. The first days — silence, shyness, yet joy in the heart. Otabek treated her with delicacy, forced nothing. Gradually the two began to talk.\n\nKumush was intelligent — not merely beautiful, but quick to understand, with a charming laugh and deep thoughts. Every time Otabek spoke with her, he felt as if he had discovered something new.`,
            `In the evenings they would sit together in the garden. When the moon rose, Kumush would point to it and recite poetry — verses she had memorized. Otabek would listen, his heart overflowing.\n\n"Do you know any poetry?" Kumush asked one day.\n\n"I do not. But when you recite it, I love it."\n\nKumush laughed. That laughter — the thing Otabek would remember for the rest of his life.`,
            `For them, time and era were still kind. But life does not move in a straight line. One day a letter arrived from Tashkent — an old connection of Otabek's, an old obligation. He read the letter and remained silent for a long time.\n\nKumush looked at his face. "Is it bad news?" she asked.\n\n"No," said Otabek. But his eyes said something else.`,
          ],
        },
      },
      {
        title: { en: "Chapter 7: The Cloud", uz: "VII Bob: Bulut" },
        pages: {
          uz: [
            `Toshkentdan kelgan xat — bu Otabekning eski do'sti Homidning maktubi edi. U Toshkentda savdo ishlari yomonlashganini, sheriklik shartnomasi muddati tugaganini yozgan edi. Otabek o'sha shaharda xizmat qilgan, ma'lum majburiyatlari bor edi.\n\nUning kerakmi yoki yo'qligini hal qilishi kerak edi. Ketish — Kumushni qoldirish degani. Qolish — savdo ishlarini xatarga qo'yish degani.`,
            `Otabek bu masalani Kumushdan yashirmoqchi bo'ldi. Lekin Kumush uning qayg'usini sezdi. Kechqurun yolg'iz qolgach so'radi:\n\n"Aytingchi, nima bo'lyapti? Ikki kundan beri g'amgin ko'rinasiz."\n\nOtabek bir muddat og'iz ochmadi. Keyin hamma narsani aytdi. Kumush jim eshitdi. Ko'zlarida yosh paydo bo'ldi, lekin u yig'lamadi.`,
            `"Boring," dedi u. "Bu sizning burchingiz. Men kutaman."\n\nShu ikki so'z — "men kutaman" — Otabekning qalbiga pichoqdek botdi. Kumushning bu kuchini, bu sabr-toqatini ko'rib, u o'zini yanada kichik his qildi.\n\n"Ko'p ketmayman," dedi u. "Bir oyda, ikki oyda qaytaman."\n\nLekin har ikkalasi ham bilishardi: hayotda "albatta" degan so'z yo'q.`,
          ],
          en: [
            `The letter from Tashkent was from Otabek's old friend Homid. He had written that business affairs in Tashkent were deteriorating and that the partnership contract had expired. Otabek had served in that city and had certain obligations.\n\nHe needed to decide whether to go or not. Leaving meant leaving Kumush behind. Staying meant putting his business affairs at risk.`,
            `Otabek tried to hide this matter from Kumush. But Kumush sensed his grief. When they were alone in the evening, she asked:\n\n"Tell me, what is happening? You have seemed sad for two days."\n\nOtabek said nothing for a moment. Then he told her everything. Kumush listened in silence. Tears appeared in her eyes, but she did not weep.`,
            `"Go," she said. "This is your duty. I will wait."\n\nThose two words — "I will wait" — pierced Otabek's heart like a knife. Seeing Kumush's strength, her patience, he felt all the smaller himself.\n\n"I won't be gone long," he said. "I'll return in a month, perhaps two."\n\nBut both of them knew: in life there is no such word as "certainly."`,
          ],
        },
      },
      {
        title: { en: "Chapter 8: Farewell", uz: "VIII Bob: Xayrlashuv" },
        pages: {
          uz: [
            `Ketish kuni ertalab Kumush nonushta tayyorlab qo'ydi. Dasturxonga barcha sevimli taomlarini qo'ydi — go'sht somsa, qaymoq, shirinliklar. Otabek stolga o'tirib, bir to'qnashdi: xotin o'zining qayg'usini nonushta bilan berkitmoqchi.\n\nU yedi, ta'mi sezilmadi. Ichida yig'lab o'tirardi.`,
            `Ot tayyor bo'lganda, Kumush tashqariga chiqdi. Otabek uning yuziga qaradi: oq yuzida bir tomchi yosh — bitta, faqat bitta.\n\n"Ehtiyot bo'ling," dedi Kumush.\n\n"Albatta," dedi Otabek.\n\nU otga mindi. Kumush darvoza yonida turib qoldi. Otabek orqasiga qarama-qarama yo'lda bordi. Kumushning siymosi — yashil daraxt tagida oq kiyimda turgan siymо — ko'z oldidan ketmadi.`,
            `Marg'ilon darvozasidan o'tgach, Otabek otni to'xtatdi. Orqasiga qaradi. Shahar — uning uyining tomini ko'rib turardi. U qo'lini ko'ksiga qo'ydi.\n\n"Kutib tur, Kumush," dedi u ichida.\n\nKeyin otni oldinga haydadi. Oldinda yo'l bor edi — uzoq, noma'lum. Ortida esa — barcha xazon bo'lmaydigan narsa: muhabbat, uy, kutish.`,
          ],
          en: [
            `On the morning of departure, Kumush prepared breakfast. She placed all his favorite dishes on the table — meat samsa, kaymak, sweets. Otabek sat at the table and understood in an instant: his wife was trying to conceal her grief behind the food.\n\nHe ate, but tasted nothing. He was weeping inside.`,
            `When the horse was ready, Kumush came outside. Otabek looked at her face: on her fair cheek, one tear — just one.\n\n"Be careful," said Kumush.\n\n"Of course," said Otabek.\n\nHe mounted the horse. Kumush remained standing by the gate. Otabek rode without looking back. The image of Kumush — a figure in white beneath the green trees — would not leave his mind's eye.`,
            `After passing through the gates of Margilan, Otabek halted his horse. He looked back. The city — he could see the roof of his home. He placed his hand upon his chest.\n\n"Wait for me, Kumush," he said within himself.\n\nThen he urged the horse forward. Ahead lay the road — long, uncertain. Behind him lay everything that would never fade: love, home, and waiting.`,
          ],
        },
      },
    ];
  }

  // Generic content for all other books
  const bookObj = staticBooks.find(b => b.id === bookId) || staticBooks[0];
  return Array.from({ length: 8 }, (_, i) => ({
    title: {
      en: `Chapter ${i + 1}`,
      uz: `${i + 1}-Bob`,
    },
    pages: {
      en: [
        `${bookObj.title} opens with a world unlike any other. The narrative begins quietly, almost imperceptibly, drawing the reader into its orbit with the confidence of a master storyteller who knows precisely where every sentence is headed.\n\nThe main character stands at a threshold — literal or metaphorical — and the choice made in this opening moment will determine everything that follows. Already, the book has established its unique voice: unhurried but purposeful, observational but never detached.`,
        `The setting reveals itself slowly. Each paragraph adds another layer of texture — sounds, smells, the quality of light at a particular hour. The author trusts the reader to assemble these fragments into a coherent world, and the trust is rewarded.\n\nThere are other characters here, glimpsed in passing, their full significance not yet apparent. This is one of the pleasures of literary fiction: the way minor figures in early chapters become essential later, their meaning retroactively illuminated.`,
        `By the end of this chapter, something has shifted. The precise nature of the change is elusive — the prose doesn't announce it with fanfare — but the reader feels it nonetheless. A door has opened. What lies beyond it is the novel's great question, and we are eager, now, to find out.\n\nThis is what the best books do in their opening pages: they make the reader not just willing but genuinely hungry to continue. The story has us now, completely.`,
      ],
      uz: [
        `${bookObj.title} o'ziga xos bir olam bilan boshlanadi. Rivoyat sekin, deyarli sezilmas tarzda boshlanadi, o'quvchini o'z orbitasiga tortib, har bir gapning qayerga ketayotganini aniq biladigan usta hikoyachining ishonchi bilan.\n\nBosh qahramon — to'g'ridan-to'g'ri yoki majoziy ma'noda — bir ostonada turadi va shu dastlabki lahzada qilingan tanlov keyingi hamma narsani belgilab beradi. Allaqachon kitob o'zining noyob ovozini o'rnatdi: shoshilmagan, lekin maqsadli; kuzatuvchi, lekin hech qachon befarq emas.`,
        `Manzara asta-sekin namoyon bo'ladi. Har bir abzas yangi to'qima qatlamini qo'shadi — tovushlar, hidlar, ma'lum bir soatdagi yorug'likning sifati. Muallif o'quvchiga bu parchalarni izchil dunyoga yig'ishtirishni ishonib topshiradi, va bu ishonch munosib tarzda qoplanadi.\n\nBu yerda boshqa personajlar ham bor, o'tib ketayotganda ko'ringan, ularning to'liq ahamiyati hali ravshan emas. Bu badiiy adabiyotning lazzatlaridan biri: dastlabki boblardagi ikkinchi darajali figuralar keyinroq qanday muhim bo'lib qolishi, ularning ma'nosi orqaga qarab yorqinlashishi.`,
        `Bu bobning oxiriga kelib, biror narsa o'zgardi. O'zgarishning aniq tabiati qochqin — nasr uni tantana bilan e'lon qilmaydi — lekin o'quvchi buni baribir his qiladi. Bir eshik ochildi. Undan narida nima borligini — bu romanning buyuk savoli, va biz endi uni bilishga chinakam ishtiyoq bilan tayyormiz.\n\nEng yaxshi kitoblar dastlabki sahifalarida aynan shu ishni qiladi: o'quvchini nafaqat davom ettirishga tayyor, balki chinakam chanqoq holga keltiradi. Endi hikoya bizni to'liq qamrab oldi.`,
      ],
    },
  }));
};

// ─── Premium Paywall Modal ─────────────────────────────────────────────────
const FREE_CHAPTER_COUNT = 1;

const PaywallModal: React.FC<{
  bookTitle: string;
  onPurchase: () => void;
  onClose: () => void;
  lang: Lang;
  t: typeof themes['light'];
}> = ({ bookTitle, onPurchase, onClose, lang, t }) => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => {
        onPurchase();
      }, 1200);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: t.card }}
      >
        {/* Top gradient banner */}
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-700 px-6 pt-8 pb-14 text-white text-center relative overflow-hidden">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />

          {done ? (
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Check size={32} className="text-amber-600" strokeWidth={3} />
              </div>
              <p className="text-xl font-bold font-serif">
                {lang === 'uz' ? 'To\'lov muvaffaqiyatli!' : 'Payment Successful!'}
              </p>
            </div>
          ) : (
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-4">
                <Lock size={12} /> {lang === 'uz' ? 'Premium Kontent' : 'Premium Content'}
              </div>
              <h2 className="text-2xl font-bold font-serif mb-1">{bookTitle}</h2>
              <p className="text-white/80 text-sm">
                {lang === 'uz'
                  ? '1-bob bepul o\'qildi. Davom etish uchun to\'liq kirish xarid qiling.'
                  : 'Chapter 1 was free. Purchase full access to keep reading.'}
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pb-6 -mt-6 relative">
          {/* Price card */}
          <div
            className="rounded-2xl border-2 p-4 mb-5"
            style={{ borderColor: t.accent, backgroundColor: `${t.accent}10` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Star size={14} className="fill-amber-500 text-amber-500" />
                  <span className="text-sm font-bold" style={{ color: t.text }}>
                    {lang === 'uz' ? 'To\'liq Kirish' : 'Full Access'}
                  </span>
                </div>
                <p className="text-xs" style={{ color: t.muted }}>
                  {lang === 'uz' ? 'Barcha boblar' : 'All chapters unlocked'}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold" style={{ color: t.accent }}>$4.99</div>
                <div className="text-xs line-through" style={{ color: t.muted }}>$9.99</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-1.5">
              {[
                lang === 'uz' ? 'Barcha boblarni o\'qish' : 'Read all chapters',
                lang === 'uz' ? 'Offline rejimda o\'qish' : 'Offline reading',
                lang === 'uz' ? 'Izoh va belgilash' : 'Notes & highlights',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs" style={{ color: t.text }}>
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${t.accent}25` }}>
                    <Check size={9} style={{ color: t.accent }} strokeWidth={3} />
                  </div>
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Pay button */}
          <button
            onClick={handlePay}
            disabled={loading || done}
            className="w-full py-3.5 rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-70"
            style={{ backgroundColor: t.accent }}
          >
            {loading ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {lang === 'uz' ? 'Jarayon...' : 'Processing...'}
              </>
            ) : done ? (
              <><Check size={18} strokeWidth={3} /> {lang === 'uz' ? 'Muvaffaqiyatli!' : 'Success!'}</>
            ) : (
              <><CreditCard size={18} /> {lang === 'uz' ? '$4.99 — To\'lov qilish' : 'Pay $4.99 — Unlock Full Book'}</>
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full mt-2 py-2.5 text-sm font-medium rounded-2xl transition-all hover:opacity-70"
            style={{ color: t.muted }}
          >
            {lang === 'uz' ? 'Keyinroq' : 'Maybe later'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Theme definitions ─────────────────────────────────────────────────────
const themes = {
  light: {
    bg: '#FAFAF8',
    text: '#1C1917',
    border: '#E7E5E4',
    headerBg: 'rgba(250,250,248,0.95)',
    accent: '#D97706',
    muted: '#78716C',
    card: '#FFFFFF',
  },
  sepia: {
    bg: '#F5EDD6',
    text: '#3D2B1F',
    border: '#D6C4A0',
    headerBg: 'rgba(245,237,214,0.95)',
    accent: '#B45309',
    muted: '#8B6E52',
    card: '#FAF3E0',
  },
  dark: {
    bg: '#111010',
    text: '#D6D3D1',
    border: '#2C2825',
    headerBg: 'rgba(17,16,16,0.95)',
    accent: '#F59E0B',
    muted: '#78716C',
    card: '#1C1917',
  },
};

// ─── Main Component ────────────────────────────────────────────────────────
export const Reader = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  const [book, setBook] = useState<any>(staticBooks[0]);
  const [isBookLoading, setIsBookLoading] = useState(true);

  useEffect(() => {
    if (bookId) {
      bookService.getById(bookId)
        .then(data => {
          if (data) setBook(data);
          setIsBookLoading(false);
        })
        .catch(() => setIsBookLoading(false));
    }
  }, [bookId]);

  const isUzbekBook = book?.language === 'Uzbek' || bookId === '30';
  const chapters = getBookContent(bookId || '1');

  const [theme, setTheme] = useState<'light' | 'sepia' | 'dark'>('light');
  const [fontSize, setFontSize] = useState(19);
  const [lang, setLang] = useState<Lang>(isUzbekBook ? 'uz' : 'en');
  const [showSettings, setShowSettings] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [chapterIdx, setChapterIdx] = useState(0);
  const [pageIdx, setPageIdx] = useState(0);

  // Premium state — persisted per book
  const storageKey = `bookclub_purchased_${bookId}`;
  const [isPurchased, setIsPurchased] = useState(() => {
    return localStorage.getItem(storageKey) === 'true';
  });
  const [showPaywall, setShowPaywall] = useState(false);

  const t = themes[theme];
  const chapter = chapters[chapterIdx];
  const pages = chapter.pages[lang];
  const totalPages = chapters.reduce((acc, ch) => acc + ch.pages[lang].length, 0);
  const currentAbsPage = chapters.slice(0, chapterIdx).reduce((acc, ch) => acc + ch.pages[lang].length, 0) + pageIdx + 1;
  const progress = Math.round((currentAbsPage / totalPages) * 100);

  // Check if trying to go to a locked chapter
  const isLocked = (targetChapter: number) => !isPurchased && targetChapter >= FREE_CHAPTER_COUNT;

  const goNext = () => {
    if (pageIdx < pages.length - 1) {
      setPageIdx(p => p + 1);
    } else if (chapterIdx < chapters.length - 1) {
      const nextChapter = chapterIdx + 1;
      if (isLocked(nextChapter)) {
        setShowPaywall(true);
        return;
      }
      setChapterIdx(nextChapter);
      setPageIdx(0);
    }
  };

  const goPrev = () => {
    if (pageIdx > 0) {
      setPageIdx(p => p - 1);
    } else if (chapterIdx > 0) {
      const prevPages = chapters[chapterIdx - 1].pages[lang];
      setChapterIdx(c => c - 1);
      setPageIdx(prevPages.length - 1);
    }
  };

  const jumpToChapter = (ci: number) => {
    if (isLocked(ci)) {
      setShowPaywall(true);
      return;
    }
    setChapterIdx(ci);
    setPageIdx(0);
    setShowToc(false);
  };

  const handlePurchase = () => {
    localStorage.setItem(storageKey, 'true');
    setIsPurchased(true);
    setShowPaywall(false);
    // Jump to chapter 2 after purchase
    setChapterIdx(FREE_CHAPTER_COUNT);
    setPageIdx(0);
  };

  const isFirst = chapterIdx === 0 && pageIdx === 0;
  const isLast = chapterIdx === chapters.length - 1 && pageIdx === pages.length - 1;
  const isAtLastFreePage = chapterIdx === FREE_CHAPTER_COUNT - 1 && pageIdx === pages.length - 1 && !isPurchased;

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [chapterIdx, pageIdx, isPurchased]);

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-500 select-none"
      style={{ backgroundColor: t.bg, color: t.text }}
    >
      {/* Paywall Modal */}
      {showPaywall && (
        <PaywallModal
          bookTitle={book.title}
          onPurchase={handlePurchase}
          onClose={() => setShowPaywall(false)}
          lang={lang}
          t={t}
        />
      )}

      {/* ── Top Bar ── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-sm border-b transition-colors duration-300"
        style={{ borderColor: t.border, backgroundColor: t.headerBg }}
      >
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(`/books/${book.id}`)}
              className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline">Back</span>
            </button>
            <div className="w-px h-5 opacity-20" style={{ backgroundColor: t.text }} />
            <div className="max-w-[180px] sm:max-w-xs">
              <div className="text-sm font-semibold truncate leading-tight">{book.title}</div>
              <div className="text-xs truncate" style={{ color: t.muted }}>{chapter.title[lang]}</div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-0.5">
            {/* Free / Premium badge */}
            {!isPurchased && (
              <button
                onClick={() => setShowPaywall(true)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold mr-1 transition-all hover:opacity-80"
                style={{ backgroundColor: `${t.accent}20`, color: t.accent }}
              >
                <Zap size={12} />
                {lang === 'uz' ? 'Premium' : 'Unlock'}
              </button>
            )}

            {/* Language toggle */}
            <button
              onClick={() => setLang(l => l === 'en' ? 'uz' : 'en')}
              title="Toggle language"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all hover:opacity-70 border"
              style={{ borderColor: t.border, color: t.accent }}
            >
              <Globe size={13} />
              {lang === 'en' ? "O'Z" : 'EN'}
            </button>

            <button
              onClick={() => { setShowToc(!showToc); setShowSettings(false); }}
              className="p-2 rounded-lg transition-opacity hover:opacity-60"
            >
              <Menu size={18} />
            </button>
            <button
              onClick={() => setIsBookmarked(b => !b)}
              className="p-2 rounded-lg transition-opacity hover:opacity-60"
            >
              <Bookmark size={18} className={isBookmarked ? '' : 'opacity-60'} style={{ fill: isBookmarked ? t.accent : 'none', color: isBookmarked ? t.accent : t.text }} />
            </button>
            <button
              onClick={() => { setShowSettings(s => !s); setShowToc(false); }}
              className="p-2 rounded-lg transition-opacity hover:opacity-60"
            >
              <Settings size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Reading Area ── */}
      <main className="flex-1 flex flex-col items-center relative">

        {/* Reading text */}
        <div
          className="w-full max-w-2xl px-5 sm:px-10 pt-12 pb-10 mx-auto flex-1"
          style={{ fontSize: `${fontSize}px`, lineHeight: '1.85', fontFamily: '"Georgia", "Times New Roman", serif' }}
        >
          {/* Chapter title */}
          <h2
            className="text-xl sm:text-2xl font-bold mb-10 text-center"
            style={{ fontFamily: 'Georgia, serif', color: t.accent }}
          >
            {chapter.title[lang]}
          </h2>

          {/* Page text with fade-in key */}
          <div key={`${chapterIdx}-${pageIdx}-${lang}`} className="space-y-6 leading-relaxed">
            {pages[pageIdx].split('\n\n').map((para, i) => (
              <p key={i} className="text-justify" style={{ color: t.text, opacity: 0.92 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Last free page teaser */}
          {isAtLastFreePage && (
            <div className="mt-12 mb-4">
              {/* Gradient fade-out of blurred text */}
              <div className="relative h-20 overflow-hidden rounded-t-2xl select-none pointer-events-none"
                style={{ border: `1px solid ${t.border}`, borderBottom: 'none' }}
              >
                <p className="p-4 text-sm leading-relaxed blur-sm opacity-60" style={{ color: t.text }}>
                  {lang === 'uz'
                    ? `Ertasiga Yusufbek hoji o'g'lining sharafiga to'y berdi. Marg'ilonning nufuzli kishilari, savdogarlar, ulamolar yig'ildi. Dasturxon xilma-xil taomlar bilan to'ldi. Lekin Otabek bir joyda o'tirib dam olmadi...`
                    : `The next day, Yusufbek Haji threw a feast in honor of his son's return. Distinguished people of Margilan gathered. The table was filled with diverse dishes. But Otabek could not sit still in one place...`}
                </p>
                {/* gradient fade */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 0%, ${t.bg} 100%)`,
                  }}
                />
              </div>

              {/* Paywall card */}
              <div
                className="rounded-b-2xl rounded-t-none border border-t-0 p-6 flex flex-col items-center gap-4 text-center"
                style={{ borderColor: t.border, backgroundColor: t.card }}
              >
                {/* Lock icon */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: t.accent }}
                >
                  <Lock size={22} className="text-white" />
                </div>

                <div>
                  <p className="font-bold text-lg font-serif mb-1" style={{ color: t.text }}>
                    {lang === 'uz' ? 'Qolgan boblar qulflangan' : 'Continue Reading'}
                  </p>
                  <p className="text-sm" style={{ color: t.muted }}>
                    {lang === 'uz'
                      ? 'Hikoyaning davomini o\'qish uchun to\'liq kirishni xarid qiling'
                      : 'Purchase full access to unlock all remaining chapters'}
                  </p>
                </div>

                {/* Price row */}
                <div
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border"
                  style={{ borderColor: t.border, backgroundColor: `${t.accent}10` }}
                >
                  <div className="text-left">
                    <div className="text-xs font-semibold" style={{ color: t.muted }}>
                      {lang === 'uz' ? 'Barcha 8 bob' : 'All 8 chapters'}
                    </div>
                    <div className="font-bold" style={{ color: t.text }}>
                      {lang === 'uz' ? 'To\'liq kirish' : 'Full Access'}
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-xs line-through" style={{ color: t.muted }}>$9.99</div>
                    <div className="text-xl font-bold" style={{ color: t.accent }}>$4.99</div>
                  </div>
                </div>

                {/* CTA button */}
                <button
                  onClick={() => setShowPaywall(true)}
                  className="w-full py-3.5 rounded-xl font-bold text-white text-sm shadow-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                  style={{ backgroundColor: t.accent }}
                >
                  <CreditCard size={16} />
                  {lang === 'uz' ? 'Hoziroq xarid qilish — $4.99' : 'Unlock Full Book — $4.99'}
                </button>

                <p className="text-xs" style={{ color: t.muted }}>
                  {lang === 'uz' ? '🔒 Xavfsiz to\'lov • Bir martalik xarid' : '🔒 Secure payment • One-time purchase'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── Settings Panel ── */}
        {showSettings && (
          <div
            className="absolute top-3 right-3 sm:right-5 w-72 rounded-2xl shadow-2xl border z-50 overflow-hidden"
            style={{ backgroundColor: t.card, borderColor: t.border }}
          >
            <div className="flex justify-between items-center px-4 py-3 border-b" style={{ borderColor: t.border }}>
              <span className="font-semibold text-sm">Reading Settings</span>
              <button onClick={() => setShowSettings(false)} className="hover:opacity-60 transition-opacity"><X size={15} /></button>
            </div>

            <div className="p-4 space-y-5">
              {/* Theme */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2.5" style={{ color: t.muted }}>Theme</p>
                <div className="flex gap-2">
                  {(['light', 'sepia', 'dark'] as const).map(th => (
                    <button
                      key={th}
                      onClick={() => setTheme(th)}
                      style={{
                        backgroundColor: themes[th].bg,
                        color: themes[th].text,
                        borderColor: theme === th ? themes[th].accent : themes[th].border,
                        borderWidth: theme === th ? 2 : 1,
                      }}
                      className="flex-1 py-2.5 rounded-xl border font-medium text-xs transition-all"
                    >
                      {th === 'light' ? '☀️ Light' : th === 'sepia' ? '📜 Sepia' : '🌙 Dark'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font size */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2.5" style={{ color: t.muted }}>Text Size</p>
                <div className="flex items-center justify-between rounded-xl border px-4 py-2.5" style={{ borderColor: t.border }}>
                  <button
                    onClick={() => setFontSize(s => Math.max(14, s - 1))}
                    className="text-lg font-bold transition-opacity hover:opacity-60 w-8 text-center"
                    style={{ color: t.accent }}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-sm font-semibold">{fontSize}px</span>
                  <button
                    onClick={() => setFontSize(s => Math.min(28, s + 1))}
                    className="text-lg font-bold transition-opacity hover:opacity-60 w-8 text-center"
                    style={{ color: t.accent }}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Language */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2.5" style={{ color: t.muted }}>Language</p>
                <div className="flex gap-2">
                  {(['en', 'uz'] as const).map(l => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      style={{
                        backgroundColor: lang === l ? t.accent : 'transparent',
                        color: lang === l ? '#fff' : t.text,
                        borderColor: lang === l ? t.accent : t.border,
                      }}
                      className="flex-1 py-2 rounded-xl border text-sm font-medium transition-all"
                    >
                      {l === 'en' ? "🇬🇧 English" : "🇺🇿 O'zbek"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Table of Contents ── */}
        {showToc && (
          <div
            className="absolute inset-y-0 left-0 w-72 border-r shadow-2xl z-50 flex flex-col"
            style={{ backgroundColor: t.card, borderColor: t.border }}
          >
            <div className="flex justify-between items-center px-4 py-3.5 border-b" style={{ borderColor: t.border }}>
              <div className="flex items-center gap-2">
                <BookOpen size={16} style={{ color: t.accent }} />
                <span className="font-bold text-sm">{lang === 'uz' ? "Mundarija" : "Contents"}</span>
              </div>
              <button onClick={() => setShowToc(false)} className="hover:opacity-60 transition-opacity"><X size={15} /></button>
            </div>
            <div className="overflow-y-auto flex-1 py-2 px-2">
              {chapters.map((ch, ci) => {
                const locked = isLocked(ci);
                return (
                  <button
                    key={ci}
                    onClick={() => jumpToChapter(ci)}
                    className="w-full text-left px-3 py-2.5 rounded-xl mb-1 transition-all text-sm flex items-center justify-between gap-2"
                    style={{
                      backgroundColor: ci === chapterIdx ? `${t.accent}20` : 'transparent',
                      color: ci === chapterIdx ? t.accent : locked ? t.muted : t.text,
                      fontWeight: ci === chapterIdx ? 600 : 400,
                      opacity: locked ? 0.65 : 1,
                    }}
                  >
                    <div>
                      {ch.title[lang]}
                      <span className="block text-xs mt-0.5" style={{ color: t.muted }}>
                        {ci === 0
                          ? (lang === 'uz' ? '✓ Bepul' : '✓ Free')
                          : locked
                            ? (lang === 'uz' ? '🔒 Premium' : '🔒 Premium')
                            : `${ch.pages[lang].length} ${lang === 'uz' ? 'bet' : 'pages'}`}
                      </span>
                    </div>
                    {locked && <Lock size={13} />}
                  </button>
                );
              })}
            </div>

            {!isPurchased && (
              <div className="p-3 border-t" style={{ borderColor: t.border }}>
                <button
                  onClick={() => { setShowPaywall(true); setShowToc(false); }}
                  className="w-full py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2"
                  style={{ backgroundColor: t.accent }}
                >
                  <Zap size={14} /> {lang === 'uz' ? 'Hammasini xarid qilish — $4.99' : 'Unlock all — $4.99'}
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* ── Bottom Bar ── */}
      <footer
        className="sticky bottom-0 z-40 border-t backdrop-blur-sm transition-colors duration-300"
        style={{ borderColor: t.border, backgroundColor: t.headerBg }}
      >
        {/* Progress bar */}
        <div className="h-0.5 w-full" style={{ backgroundColor: t.border }}>
          <div
            className="h-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: t.accent }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 h-13 py-3 flex items-center justify-between gap-4">
          <button
            onClick={goPrev}
            disabled={isFirst}
            className="flex items-center gap-1.5 text-sm font-medium transition-all disabled:opacity-20 hover:opacity-70 px-3 py-1.5 rounded-lg"
            style={{ color: t.text }}
          >
            <ChevronLeft size={17} />
            <span className="hidden sm:inline">{lang === 'uz' ? 'Oldingi' : 'Previous'}</span>
          </button>

          <div className="flex-1 flex flex-col items-center gap-0.5">
            <div className="text-xs font-medium" style={{ color: t.muted }}>
              {lang === 'uz' ? `${currentAbsPage} / ${totalPages} bet` : `Page ${currentAbsPage} of ${totalPages}`}
            </div>
            <div className="text-xs" style={{ color: t.muted }}>{progress}% {lang === 'uz' ? 'tugallandi' : 'complete'}</div>
          </div>

          <button
            onClick={goNext}
            disabled={isLast}
            className="flex items-center gap-1.5 text-sm font-medium transition-all disabled:opacity-20 hover:opacity-70 px-3 py-1.5 rounded-lg"
            style={{ color: t.text }}
          >
            <span className="hidden sm:inline">{lang === 'uz' ? 'Keyingi' : 'Next'}</span>
            <ChevronRight size={17} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Reader;
