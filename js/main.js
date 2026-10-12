const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const languageSelect = document.getElementById("languageSelect");
const form = document.getElementById("contactForm");
const languageKey = "berlin-hair-clinic-language";

const translations = {
  en: {
    "Ana menü": "Main navigation", "Hizmetler": "Services", "Süreç": "Process", "Sağlık Turizmi": "Medical Travel", "Sonuçlar": "Results", "SSS": "FAQ", "Ücretsiz Ön Görüşme": "Free Consultation", "Menüyü aç": "Open menu",
    "Muş Hair bünyesinde · Uluslararası saç ekimi": "International hair restoration with Muş Hair",
    "Saç, sakal, kaş simülasyonu ve estetikte doğal çizgi. Yurt dışından gelen misafirlerimize konforlu, planlı ve kişiye özel hizmet deneyimi.": "Natural hair, beard and eyebrow design. We offer international visitors a comfortable, well-planned experience tailored to their needs.",
    "WhatsApp ile Danış": "Chat on WhatsApp", "Hizmetleri İncele": "Explore services", "Kişiye özel plan": "Personalized plan", "Şeffaf süreç": "Clear process",
    "Güvenin, deneyimin ve sonuçların adresi": "A trusted team focused on experience and results", "Muş Hair · Berlin Hair Clinic MST": "Muş Hair · Berlin Hair Clinic MST",
    "Doğal ve kalıcı sonuç odaklı ekim": "Restoration focused on natural-looking results", "Uluslararası saç ekimi hizmetleri": "International hair restoration", "Kişiye özel danışmanlık hattı": "Personalized patient support", "Ön görüşme — planlı ve şeffaf süreç": "Free consultation with a clear plan",
    "Klinik yaklaşım": "Our clinical approach", "Doğal saç çizgisi, kalıcı sonuç": "A natural hairline, lasting results", "Neden Berlin Hair Clinic MST?": "Why Berlin Hair Clinic MST?",
    "Estetik bir sonuç için tıp, planlama ve konfor bir arada": "Medical care, planning and comfort for a natural-looking result",
    "Saç ekimi bir “işlem” değil; yüz oranlarınıza, donör bölgenize ve yaşam tarzınıza göre kurgulanan bir yolculuktur. MST ekibi, greft dağılımını, saç çizgisini ve yoğunluğu doğal duracak şekilde planlar.": "Hair restoration is a journey planned around your facial proportions, donor area and lifestyle. Our team plans graft placement, hairline and density for a natural appearance.",
    "Muş Hair bünyesinde yürüttüğümüz uluslararası hasta programı; transfer, konaklama, tercüme ve ameliyat sonrası takibi tek bir danışmanlık hattında toplar.": "Our international patient program brings transfers, accommodation, interpretation and aftercare together through one point of contact.",
    "Ücretsiz ön görüşme ve fotoğraf analizi": "Free consultation and photo assessment", "Kişiye özel greft ve teknik önerisi (FUE / DHI)": "Personalized graft estimate and technique recommendation (FUE / DHI)", "Steril klinik koşulları ve deneyimli cerrahi ekip": "Clinical hygiene standards and an experienced surgical team", "Ameliyat sonrası 12 aylık takip protokolü": "12-month post-procedure follow-up",
    "Saç, sakal, kaş ve simülasyon": "Hair, beard, eyebrows and scalp micropigmentation", "İhtiyacınıza göre cerrahi ekim veya kıl kökü gölgelendirme. Her plan, yüz hatlarınızla uyumlu olacak şekilde tasarlanır.": "Choose surgical hair restoration or scalp micropigmentation. Every plan is tailored to your features.",
    "FUE Saç Ekimi": "FUE Hair Transplant", "Tek tek greft alımı ile doğal yoğunluk. Donör bölgeyi koruyan, iz bırakmayan modern teknik.": "Individual graft extraction for natural density, using a modern technique designed to preserve the donor area.", "Doğal ve kalıcı sonuçlar": "Natural-looking results",
    "DHI Safir Ekimi": "DHI Sapphire Transplant", "Choi implanter ile kanal açmadan yerleştirme. Daha sık ekim ve daha kısa iyileşme süresi.": "Grafts are placed with a Choi implanter. The technique may allow denser placement and a shorter recovery.", "Yoğun görünüm": "Added density",
    "Sakal & Bıyık Ekimi": "Beard & Moustache Transplant", "Seyrek sakal, yara izi veya asimetri için yüz hatlarınıza uygun sakal tasarımı.": "Beard design tailored to your features for sparse areas, scars or asymmetry.", "Yüzünüzle uyumlu çizgi": "Designed for your features",
    "Kaş Ekimi": "Eyebrow Transplant", "Seyrek veya şekilsiz kaşlarda kıl yönüne uygun ekim. Kadın ve erkek hastalar için.": "Direction-conscious restoration for sparse or uneven eyebrows.", "İnce işçilik": "Careful detail",
    "Kaş / Saç Simülasyonu": "Scalp Micropigmentation", "Kıl kökü gölgelendirme (SMP) ile seyrek alanlarda anında dolgunluk illüzyonu.": "Scalp micropigmentation (SMP) creates the appearance of added density in sparse areas.", "Cerrahisiz alternatif": "Non-surgical option",
    "PRP & Bakım": "PRP & Care", "Ekim öncesi ve sonrası saç kalitesini destekleyen PRP, mezoterapi ve bakım protokolleri.": "PRP, mesotherapy and care protocols to support hair health before and after a procedure.", "Uzun vadeli güçlendirme": "Ongoing support",
    "Sağlık turizmi": "Medical travel", "Yurt dışından gelen misafirler için kusursuz lojistik": "Travel support for international visitors", "Berlin, Avrupa ve Körfez ülkelerinden gelen hastalarımız havalimanı karşılama, otel, klinik transferi ve tercümanla karşılanır. Süreç planlıdır; sürpriz yoktur.": "We help visitors from Europe and the Gulf with airport pickup, accommodation, clinic transfers and interpretation. Your itinerary is planned in advance.",
    "Uçuş & karşılama": "Travel & arrival", "VIP transfer, dil desteği ve ilk gün ön muayene randevusu.": "Private transfers, language support and an initial consultation.", "Konaklama": "Accommodation", "Kliniğe yakın, dinlenmeye uygun otel seçenekleri ve refakatçi düzeni.": "Nearby hotel options and arrangements for companions.", "Ameliyat sonrası": "Aftercare", "Yıkama eğitimi, ilaç seti, 10. gün kontrolü ve uzaktan takip.": "Wash-care guidance, medication kit, day-10 check-up and remote follow-up.",
    "Planlı ve şeffaf süreç": "A clear, planned process", "İlk mesajdan 12. aya kadar": "From your first message through month 12", "Ücretsiz ön görüşme": "Free consultation", "Fotoğraf veya online görüşme ile saç tipi, donör ve beklenti analizi.": "Review of your hair, donor area and goals using photos or an online consultation.", "Kişiye özel plan": "Personalized plan", "Greft sayısı, teknik, saç çizgisi tasarımı ve net maliyet.": "Graft estimate, technique, hairline design and clear pricing.", "Seyahat & klinik": "Travel & clinic", "Tarih, transfer ve konaklama tek danışmanda toplanır.": "Your coordinator arranges dates, transfers and accommodation.", "Operasyon günü": "Procedure day", "Lokal anestezi, greft alımı ve doğal açıya uygun ekim.": "Local anaesthesia, graft extraction and placement at a natural angle.", "İyileşme": "Recovery", "İlk yıkama, kabuk dökümü ve şok dökülme dönemi rehberi.": "Guidance for the first wash, scab shedding and temporary shedding.", "Sonuç takibi": "Follow-up", "3, 6 ve 12. ay kontrolleri ile kalıcı görünüm.": "Check-ins at months 3, 6 and 12 as results develop.",
    "Doğal görünüm": "Natural-looking results", "Yoğunluk, açı ve saç çizgisi uyumu": "Density, angle and hairline in balance", "Başarılı bir ekim, “ekilmiş gibi durmayan” bir saç çizgisidir. Aşağıdaki görseller klinik atmosferi ve hedeflediğimiz doğal duruşu yansıtır.": "A successful result has a hairline that looks natural. These examples show treatment outcomes.", "Saç ekimi öncesi ve sonrası": "Before and after", "Saç çizgisi ve yoğunluk": "Hairline and density", "Doğal görünüm hedefi": "A natural-looking result", "Kişiye özel planlama": "Personalized planning",
    "Hasta konforu": "Patient comfort", "Konforunuz bizim önceliğimiz. Sessiz dinlenme alanı, refakatçi düzeni ve operasyon günü adım adım eşlik.": "Your comfort matters. We provide a quiet rest area, companion arrangements and support throughout procedure day.", "Uluslararası standart": "International standards", "Sterilizasyon, tek kullanımlık malzemeler ve kayıtlı hasta dosyası ile güvenli hizmet.": "Care supported by sterilization, single-use materials and documented patient records.", "Şeffaf iletişim": "Clear communication", "Greft sayısı, teknik ve fiyat önceden netleşir. Operasyon günü sürpriz paket yoktur.": "Graft estimate, technique and price are discussed in advance.",
    "Hasta deneyimi": "Patient experiences", "Planlı süreç, sakin bir yolculuk": "A well-planned, supported journey", "Sık sorulanlar": "Frequently asked questions", "Karar vermeden önce net cevaplar": "Clear answers before you decide",
    "Saç ekimi kalıcı mıdır?": "Are hair transplant results permanent?", "FUE ile DHI arasındaki fark nedir?": "What is the difference between FUE and DHI?", "Ağrı olur mu, ne kadar sürer?": "Will it hurt, and how long does it take?", "Yurt dışından kaç gün kalmalıyım?": "How long should I stay if travelling?", "Şok dökülme normal midir?": "Is temporary shedding normal?",
    "Kişiye özel danışmanlık": "Personalized consultation", "Ücretsiz ön görüşme alın": "Book a free consultation", "Fotoğraflarınızı gönderin, size özel greft tahmini ve seyahat planı çıkaralım. Muş Hair bünyesinde, Berlin Hair Clinic MST ekibi sizi arar.": "Send us photos for a personalized graft estimate and travel plan. The Berlin Hair Clinic MST team will contact you.", "Telefon / WhatsApp": "Phone / WhatsApp", "E-posta": "Email", "Çalışma": "Availability", "7/24 uluslararası hasta hattı": "International patient support, 24/7",
    "Ad Soyad": "Full name", "Adınız": "Your name", "Telefon": "Phone", "İlgilendiğiniz hizmet": "Service of interest", "Seçiniz": "Please select", "Sakal Ekimi": "Beard Transplant", "Simülasyon (SMP)": "Scalp Micropigmentation (SMP)", "Sağlık turizmi paketi": "Medical travel package", "Mesajınız": "Your message", "Saç dökülmenizi ve beklentinizi kısaca yazın": "Briefly describe your hair loss and goals", "Randevu Talebi Gönder": "Send Consultation Request", "Teşekkürler. Talebiniz alındı — sizi WhatsApp hattımızdan da arayabilirsiniz.": "Thank you. Your request has been received. You can also contact us on WhatsApp.",
    "Muş Hair bünyesinde": "Part of Muş Hair", "Saç · Sakal · Kaş simülasyonu (kıl kökü gölgelendirme) & estetik & güzellik.": "Hair · beard · eyebrow design · scalp micropigmentation · aesthetics.", "Hızlı erişim": "Quick links", "İletişim": "Contact", "Güvenin, deneyimin ve sonuçların adresi.": "A trusted team focused on experience and results.", "© 2026 Berlin Hair Clinic MST · Muş Hair. Tıbbi sonuçlar kişiye göre değişir.": "© 2026 Berlin Hair Clinic MST · Muş Hair. Results vary by individual.", "Menüyü aç": "Open menu", "Dil seçimi": "Language selection"
,
    "\u00d6n g\u00f6r\u00fc\u015fme": "consultation",
    "Berlin\u2019den geldim. Havaliman\u0131ndan otel ve klini\u011fe kadar her \u015fey yaz\u0131l\u0131 plandayd\u0131. Sa\u00e7 \u00e7izgisi do\u011fal duruyor; kimse fark etmiyor.": "I travelled from Berlin. Everything from airport pickup to the hotel and clinic was clearly planned. My hairline looks natural.",
    "Sakal ekimi d\u00fc\u015f\u00fcnd\u00fcm, \u00f6nce \u00fccretsiz g\u00f6r\u00fc\u015fmede ger\u00e7ek\u00e7i greft say\u0131s\u0131 s\u00f6ylediler. Abart\u0131 yok, s\u00fcre\u00e7 \u015feffaft\u0131.": "I considered a beard transplant. The free consultation gave me a realistic graft estimate and a clear process.",
    "Ka\u015f sim\u00fclasyonu yapt\u0131rd\u0131m. Makyajs\u0131z da duruyor. Dan\u0131\u015fman\u0131m her a\u015famada foto\u011frafla takip etti.": "I had eyebrow micropigmentation. It looks natural without makeup, and my coordinator followed up at every stage.",
    "Don\u00f6r b\u00f6lgeden al\u0131nan greftler genetik olarak d\u00f6k\u00fclmeye diren\u00e7lidir. Do\u011fru planlama ve bak\u0131mla sonu\u00e7 kal\u0131c\u0131d\u0131r; 12. ayda nihai g\u00f6r\u00fcn\u00fcm oturur.": "Grafts from the donor area are generally resistant to hair loss. Results vary by individual; the final appearance develops over 12 months.",
    "FUE\u2019de kanallar a\u00e7\u0131l\u0131p greftler yerle\u015ftirilir. DHI\u2019de implanter kalemiyle do\u011frudan ekim yap\u0131l\u0131r; s\u0131k ekim ve daha kontroll\u00fc a\u00e7\u0131 sa\u011flar. Size uygun tekni\u011fi muayenede belirleriz.": "FUE involves opening channels before placing grafts. DHI places grafts directly with an implanter pen. A consultation helps determine a suitable approach.",
    "\u0130\u015flem lokal anestezi alt\u0131ndad\u0131r. \u00c7o\u011fu hasta ayn\u0131 g\u00fcn oteline d\u00f6ner. Operasyon s\u00fcresi greft say\u0131s\u0131na g\u00f6re 6\u20138 saat civar\u0131ndad\u0131r.": "The procedure uses local anaesthesia. Many patients return to their hotel the same day. Treatment takes around 6\u20138 hours, depending on graft count.",
    "Genellikle 3 gece / 4 g\u00fcn yeterlidir: muayene, operasyon, ilk y\u0131kama ve kontrol. Uzun mesafe u\u00e7u\u015flar i\u00e7in plan\u0131 dan\u0131\u015fman\u0131n\u0131zla netle\u015ftiririz.": "A stay of 3 nights / 4 days is usually enough for consultation, treatment, the first wash and a check-up. Confirm flight timing with your coordinator.",
    "Evet. \u0130lk haftalarda ekilen sa\u00e7lar ge\u00e7ici d\u00f6k\u00fclebilir. Yeni \u00e7\u0131k\u0131\u015f 3. aydan itibaren ba\u015flar, 6\u201312. ayda yo\u011funla\u015f\u0131r.": "Yes. Transplanted hairs may temporarily shed in the first weeks. New growth often begins around month 3 and increases over months 6\u201312."
  },
  de: {
    "Ana menü": "Hauptnavigation", "Hizmetler": "Leistungen", "Süreç": "Ablauf", "Sağlık Turizmi": "Medizinische Reisen", "Sonuçlar": "Ergebnisse", "SSS": "FAQ", "Ücretsiz Ön Görüşme": "Kostenlose Beratung", "Menüyü aç": "Menü öffnen",
    "Muş Hair bünyesinde · Uluslararası saç ekimi": "Internationale Haartransplantation mit Muş Hair",
    "Saç, sakal, kaş simülasyonu ve estetikte doğal çizgi. Yurt dışından gelen misafirlerimize konforlu, planlı ve kişiye özel hizmet deneyimi.": "Natürliches Design für Haar, Bart und Augenbrauen. Wir bieten internationalen Gästen einen komfortablen, gut geplanten und individuellen Aufenthalt.",
    "WhatsApp ile Danış": "WhatsApp-Beratung", "Hizmetleri İncele": "Leistungen ansehen", "Kişiye özel plan": "Individueller Plan", "Şeffaf süreç": "Transparenter Ablauf",
    "Güvenin, deneyimin ve sonuçların adresi": "Ein erfahrenes Team mit Blick auf natürliche Ergebnisse", "Muş Hair · Berlin Hair Clinic MST": "Muş Hair · Berlin Hair Clinic MST",
    "Doğal ve kalıcı sonuç odaklı ekim": "Transplantation mit Fokus auf natürliche Ergebnisse", "Uluslararası saç ekimi hizmetleri": "Internationale Haartransplantation", "Kişiye özel danışmanlık hattı": "Persönliche Patientenbetreuung", "Ön görüşme — planlı ve şeffaf süreç": "Kostenlose Beratung mit klarem Ablauf",
    "Klinik yaklaşım": "Unser klinischer Ansatz", "Doğal saç çizgisi, kalıcı sonuç": "Eine natürliche Haarlinie, langfristige Ergebnisse", "Neden Berlin Hair Clinic MST?": "Warum Berlin Hair Clinic MST?",
    "Estetik bir sonuç için tıp, planlama ve konfor bir arada": "Medizin, Planung und Komfort für ein natürliches Ergebnis",
    "Saç ekimi bir “işlem” değil; yüz oranlarınıza, donör bölgenize ve yaşam tarzınıza göre kurgulanan bir yolculuktur. MST ekibi, greft dağılımını, saç çizgisini ve yoğunluğu doğal duracak şekilde planlar.": "Eine Haartransplantation wird anhand Ihrer Gesichtszüge, Ihres Spenderbereichs und Ihres Lebensstils geplant. Unser Team plant Grafts, Haarlinie und Dichte für ein natürliches Erscheinungsbild.",
    "Muş Hair bünyesinde yürüttüğümüz uluslararası hasta programı; transfer, konaklama, tercüme ve ameliyat sonrası takibi tek bir danışmanlık hattında toplar.": "Unser internationales Patientenprogramm bündelt Transfers, Unterkunft, Übersetzung und Nachsorge über einen persönlichen Ansprechpartner.",
    "Ücretsiz ön görüşme ve fotoğraf analizi": "Kostenlose Beratung und Fotoanalyse", "Kişiye özel greft ve teknik önerisi (FUE / DHI)": "Individuelle Graft- und Technikempfehlung (FUE / DHI)", "Steril klinik koşulları ve deneyimli cerrahi ekip": "Hygienische Klinikbedingungen und erfahrenes OP-Team", "Ameliyat sonrası 12 aylık takip protokolü": "Nachsorge über 12 Monate",
    "Saç, sakal, kaş ve simülasyon": "Haar, Bart, Augenbrauen und Mikropigmentierung", "İhtiyacınıza göre cerrahi ekim veya kıl kökü gölgelendirme. Her plan, yüz hatlarınızla uyumlu olacak şekilde tasarlanır.": "Je nach Bedarf bieten wir eine Haartransplantation oder Kopfhaut-Mikropigmentierung. Jeder Plan wird auf Ihre Gesichtszüge abgestimmt.",
    "FUE Saç Ekimi": "FUE-Haartransplantation", "Tek tek greft alımı ile doğal yoğunluk. Donör bölgeyi koruyan, iz bırakmayan modern teknik.": "Einzelne Grafts für natürliche Dichte mit einer modernen, schonenden Technik.", "Doğal ve kalıcı sonuçlar": "Natürliches Ergebnis",
    "DHI Safir Ekimi": "DHI-Saphir-Technik", "Choi implanter ile kanal açmadan yerleştirme. Daha sık ekim ve daha kısa iyileşme süresi.": "Grafts werden mit einem Choi-Implanter eingesetzt. Die Technik kann eine dichtere Platzierung und kürzere Erholung ermöglichen.", "Yoğun görünüm": "Mehr Dichte",
    "Sakal & Bıyık Ekimi": "Bart- und Schnurrbarttransplantation", "Seyrek sakal, yara izi veya asimetri için yüz hatlarınıza uygun sakal tasarımı.": "Bartdesign passend zu Ihren Gesichtszügen bei lichten Stellen, Narben oder Asymmetrien.", "Yüzünüzle uyumlu çizgi": "Passend zu Ihren Gesichtszügen",
    "Kaş Ekimi": "Augenbrauentransplantation", "Seyrek veya şekilsiz kaşlarda kıl yönüne uygun ekim. Kadın ve erkek hastalar için.": "Transplantation in Wuchsrichtung für lichte oder ungleichmäßige Augenbrauen.", "İnce işçilik": "Präzise Arbeit",
    "Kaş / Saç Simülasyonu": "Kopfhaut-Mikropigmentierung", "Kıl kökü gölgelendirme (SMP) ile seyrek alanlarda anında dolgunluk illüzyonu.": "Kopfhaut-Mikropigmentierung (SMP) lässt lichte Bereiche voller erscheinen.", "Cerrahisiz alternatif": "Nicht-operative Option",
    "PRP & Bakım": "PRP & Pflege", "Ekim öncesi ve sonrası saç kalitesini destekleyen PRP, mezoterapi ve bakım protokolleri.": "PRP, Mesotherapie und Pflege zur Unterstützung der Haargesundheit vor und nach einer Behandlung.", "Uzun vadeli güçlendirme": "Langfristige Unterstützung",
    "Sağlık turizmi": "Medizinische Reisen", "Yurt dışından gelen misafirler için kusursuz lojistik": "Reiseunterstützung für internationale Gäste", "Berlin, Avrupa ve Körfez ülkelerinden gelen hastalarımız havalimanı karşılama, otel, klinik transferi ve tercümanla karşılanır. Süreç planlıdır; sürpriz yoktur.": "Wir unterstützen Gäste aus Europa und den Golfstaaten mit Abholung, Unterkunft, Kliniktransfers und Übersetzung. Ihre Reise wird vorab geplant.",
    "Uçuş & karşılama": "Anreise & Empfang", "VIP transfer, dil desteği ve ilk gün ön muayene randevusu.": "Transfers, Sprachunterstützung und ein erstes Beratungsgespräch.", "Konaklama": "Unterkunft", "Kliniğe yakın, dinlenmeye uygun otel seçenekleri ve refakatçi düzeni.": "Hoteloptionen in Kliniknähe und Unterstützung für Begleitpersonen.", "Ameliyat sonrası": "Nachsorge", "Yıkama eğitimi, ilaç seti, 10. gün kontrolü ve uzaktan takip.": "Waschanleitung, Medikamentenset, Kontrolle am 10. Tag und digitale Nachsorge.",
    "Planlı ve şeffaf süreç": "Ein klar geplanter Ablauf", "İlk mesajdan 12. aya kadar": "Von der ersten Nachricht bis zum 12. Monat", "Ücretsiz ön görüşme": "Kostenlose Beratung", "Fotoğraf veya online görüşme ile saç tipi, donör ve beklenti analizi.": "Analyse von Haartyp, Spenderbereich und Erwartungen anhand von Fotos oder im Onlinegespräch.", "Kişiye özel plan": "Individueller Plan", "Greft sayısı, teknik, saç çizgisi tasarımı ve net maliyet.": "Graftschätzung, Technik, Haarliniendesign und transparente Kosten.", "Seyahat & klinik": "Reise & Klinik", "Tarih, transfer ve konaklama tek danışmanda toplanır.": "Ihr Ansprechpartner koordiniert Termine, Transfers und Unterkunft.", "Operasyon günü": "Behandlungstag", "Lokal anestezi, greft alımı ve doğal açıya uygun ekim.": "Lokalanästhesie, Entnahme und Einsetzen der Grafts im natürlichen Winkel.", "İyileşme": "Erholung", "İlk yıkama, kabuk dökümü ve şok dökülme dönemi rehberi.": "Informationen zur ersten Haarwäsche, Krustenbildung und vorübergehendem Haarausfall.", "Sonuç takibi": "Nachsorge", "3, 6 ve 12. ay kontrolleri ile kalıcı görünüm.": "Kontrollen nach 3, 6 und 12 Monaten während sich das Ergebnis entwickelt.",
    "Doğal görünüm": "Natürliches Erscheinungsbild", "Yoğunluk, açı ve saç çizgisi uyumu": "Dichte, Winkel und Haarlinie im Einklang", "Başarılı bir ekim, “ekilmiş gibi durmayan” bir saç çizgisidir. Aşağıdaki görseller klinik atmosferi ve hedeflediğimiz doğal duruşu yansıtır.": "Ein gutes Ergebnis zeigt eine natürlich wirkende Haarlinie. Die folgenden Beispiele zeigen Behandlungsergebnisse.", "Saç ekimi öncesi ve sonrası": "Vorher und nachher", "Saç çizgisi ve yoğunluk": "Haarlinie und Dichte", "Doğal görünüm hedefi": "Natürliches Ergebnis", "Kişiye özel planlama": "Individuelle Planung",
    "Hasta konforu": "Patientenkomfort", "Konforunuz bizim önceliğimiz. Sessiz dinlenme alanı, refakatçi düzeni ve operasyon günü adım adım eşlik.": "Ihr Komfort ist uns wichtig. Wir bieten einen ruhigen Ruhebereich, Unterstützung für Begleitpersonen und Betreuung am Behandlungstag.", "Uluslararası standart": "Internationale Standards", "Sterilizasyon, tek kullanımlık malzemeler ve kayıtlı hasta dosyası ile güvenli hizmet.": "Sichere Versorgung mit Sterilisation, Einwegmaterialien und dokumentierter Patientenakte.", "Şeffaf iletişim": "Transparente Kommunikation", "Greft sayısı, teknik ve fiyat önceden netleşir. Operasyon günü sürpriz paket yoktur.": "Graftschätzung, Technik und Kosten werden vorab besprochen.",
    "Hasta deneyimi": "Patientenerfahrungen", "Planlı süreç, sakin bir yolculuk": "Ein geplanter und begleiteter Weg", "Sık sorulanlar": "Häufige Fragen", "Karar vermeden önce net cevaplar": "Klare Antworten vor Ihrer Entscheidung",
    "Saç ekimi kalıcı mıdır?": "Sind die Ergebnisse dauerhaft?", "FUE ile DHI arasındaki fark nedir?": "Was ist der Unterschied zwischen FUE und DHI?", "Ağrı olur mu, ne kadar sürer?": "Ist die Behandlung schmerzhaft und wie lange dauert sie?", "Yurt dışından kaç gün kalmalıyım?": "Wie lange sollte ich für die Behandlung bleiben?", "Şok dökülme normal midir?": "Ist vorübergehender Haarausfall normal?",
    "Kişiye özel danışmanlık": "Persönliche Beratung", "Ücretsiz ön görüşme alın": "Kostenlose Beratung vereinbaren", "Fotoğraflarınızı gönderin, size özel greft tahmini ve seyahat planı çıkaralım. Muş Hair bünyesinde, Berlin Hair Clinic MST ekibi sizi arar.": "Senden Sie uns Fotos für eine individuelle Graftschätzung und Reiseplanung. Das Team der Berlin Hair Clinic MST meldet sich bei Ihnen.", "Telefon / WhatsApp": "Telefon / WhatsApp", "E-posta": "E-Mail", "Çalışma": "Erreichbarkeit", "7/24 uluslararası hasta hattı": "Internationaler Patientenservice rund um die Uhr",
    "Ad Soyad": "Vor- und Nachname", "Adınız": "Ihr Name", "Telefon": "Telefon", "İlgilendiğiniz hizmet": "Gewünschte Leistung", "Seçiniz": "Bitte auswählen", "Sakal Ekimi": "Barttransplantation", "Simülasyon (SMP)": "Kopfhaut-Mikropigmentierung (SMP)", "Sağlık turizmi paketi": "Medizinisches Reisepaket", "Mesajınız": "Ihre Nachricht", "Saç dökülmenizi ve beklentinizi kısaca yazın": "Beschreiben Sie kurz Ihren Haarausfall und Ihre Wünsche", "Randevu Talebi Gönder": "Beratungsanfrage senden", "Teşekkürler. Talebiniz alındı — sizi WhatsApp hattımızdan da arayabilirsiniz.": "Vielen Dank. Ihre Anfrage ist eingegangen. Sie erreichen uns auch über WhatsApp.",
    "Muş Hair bünyesinde": "Teil von Muş Hair", "Saç · Sakal · Kaş simülasyonu (kıl kökü gölgelendirme) & estetik & güzellik.": "Haar · Bart · Augenbrauen · Kopfhaut-Mikropigmentierung · Ästhetik.", "Hızlı erişim": "Direktlinks", "İletişim": "Kontakt", "Güvenin, deneyimin ve sonuçların adresi.": "Ein erfahrenes Team mit Blick auf natürliche Ergebnisse.", "© 2026 Berlin Hair Clinic MST · Muş Hair. Tıbbi sonuçlar kişiye göre değişir.": "© 2026 Berlin Hair Clinic MST · Muş Hair. Ergebnisse sind individuell verschieden.", "Dil seçimi": "Sprachauswahl"
  ,
    "\u00d6n g\u00f6r\u00fc\u015fme": "Beratung",
    "Berlin\u2019den geldim. Havaliman\u0131ndan otel ve klini\u011fe kadar her \u015fey yaz\u0131l\u0131 plandayd\u0131. Sa\u00e7 \u00e7izgisi do\u011fal duruyor; kimse fark etmiyor.": "Ich bin aus Berlin angereist. Von der Abholung bis zur Klinik war alles klar geplant. Meine Haarlinie wirkt nat\u00fcrlich.",
    "Sakal ekimi d\u00fc\u015f\u00fcnd\u00fcm, \u00f6nce \u00fccretsiz g\u00f6r\u00fc\u015fmede ger\u00e7ek\u00e7i greft say\u0131s\u0131 s\u00f6ylediler. Abart\u0131 yok, s\u00fcre\u00e7 \u015feffaft\u0131.": "Ich dachte \u00fcber eine Barttransplantation nach. In der kostenlosen Beratung erhielt ich eine realistische Graftsch\u00e4tzung und einen klaren Ablauf.",
    "Ka\u015f sim\u00fclasyonu yapt\u0131rd\u0131m. Makyajs\u0131z da duruyor. Dan\u0131\u015fman\u0131m her a\u015famada foto\u011frafla takip etti.": "Ich habe eine Augenbrauen-Mikropigmentierung machen lassen. Sie wirkt auch ohne Make-up nat\u00fcrlich, und mein Ansprechpartner blieb mit mir in Kontakt.",
    "Don\u00f6r b\u00f6lgeden al\u0131nan greftler genetik olarak d\u00f6k\u00fclmeye diren\u00e7lidir. Do\u011fru planlama ve bak\u0131mla sonu\u00e7 kal\u0131c\u0131d\u0131r; 12. ayda nihai g\u00f6r\u00fcn\u00fcm oturur.": "Grafts aus dem Spenderbereich sind meist resistent gegen Haarausfall. Das Ergebnis ist individuell und entwickelt sich \u00fcber 12 Monate.",
    "FUE\u2019de kanallar a\u00e7\u0131l\u0131p greftler yerle\u015ftirilir. DHI\u2019de implanter kalemiyle do\u011frudan ekim yap\u0131l\u0131r; s\u0131k ekim ve daha kontroll\u00fc a\u00e7\u0131 sa\u011flar. Size uygun tekni\u011fi muayenede belirleriz.": "Bei FUE werden Kan\u00e4le ge\u00f6ffnet und Grafts eingesetzt. Bei DHI erfolgt das Einsetzen direkt mit einem Implanter. Die passende Methode wird im Beratungsgespr\u00e4ch besprochen.",
    "\u0130\u015flem lokal anestezi alt\u0131ndad\u0131r. \u00c7o\u011fu hasta ayn\u0131 g\u00fcn oteline d\u00f6ner. Operasyon s\u00fcresi greft say\u0131s\u0131na g\u00f6re 6\u20138 saat civar\u0131ndad\u0131r.": "Der Eingriff erfolgt unter Lokalan\u00e4sthesie. Viele Patienten kehren am selben Tag ins Hotel zur\u00fcck. Je nach Graftzahl dauert die Behandlung etwa 6\u20138 Stunden.",
    "Genellikle 3 gece / 4 g\u00fcn yeterlidir: muayene, operasyon, ilk y\u0131kama ve kontrol. Uzun mesafe u\u00e7u\u015flar i\u00e7in plan\u0131 dan\u0131\u015fman\u0131n\u0131zla netle\u015ftiririz.": "In der Regel reichen 3 N\u00e4chte / 4 Tage f\u00fcr Beratung, Behandlung, erste Haarw\u00e4sche und Kontrolle. Die Flugplanung stimmen Sie mit Ihrem Ansprechpartner ab.",
    "Evet. \u0130lk haftalarda ekilen sa\u00e7lar ge\u00e7ici d\u00f6k\u00fclebilir. Yeni \u00e7\u0131k\u0131\u015f 3. aydan itibaren ba\u015flar, 6\u201312. ayda yo\u011funla\u015f\u0131r.": "Ja. In den ersten Wochen k\u00f6nnen transplantierte Haare vor\u00fcbergehend ausfallen. Neues Wachstum beginnt h\u00e4ufig ab dem 3. Monat."
}
};

Object.assign(translations.en, {
  "Ki\u00c5\u0178iye \u00c3\u00b6zel planlama hatt\u00c4\u00b1": "Personalized planning support",
  "Estetik bir sonu\u00c3\u00a7 i\u00c3\u00a7in planlama ve konfor bir arada": "Planning and comfort for a natural-looking result",
  "\u00c3\u0153cretsiz": "Free",
  "\u00c3\u2013n g\u00c3\u00b6r\u00c3\u00bc\u00c5\u0178me \u00e2\u20ac\u201d planl\u00c4\u00b1 ve \u00c5\u0178effaf s\u00c3\u00bcre\u00c3\u00a7": "Free consultation - a clear, planned process",
  "\u00c4\u00b0lk ad\u00c4\u00b1m\u00c4\u00b1n\u00c4\u00b1z\u00c4\u00b1 bug\u00c3\u00bcn at\u00c4\u00b1n": "Take the first step today",
  "Formu doldurun, sizi arayal\u00c4\u00b1m": "Fill out the form and we will call you",
  "Size en uygun plan\u00c4\u00b1 birlikte olu\u00c5\u0178tural\u00c4\u00b1m. Bilgilerinizi b\u00c4\u00b1rak\u00c4\u00b1n,": "Let’s create the right plan for you. Leave your details,",
  "dan\u00c4\u00b1\u00c5\u0178man\u00c4\u00b1m\u00c4\u00b1z k\u00c4\u00b1sa s\u00c3\u00bcre i\u00c3\u00a7inde sizinle ileti\u00c5\u0178ime ge\u00c3\u00a7sin.": "and our consultant will contact you shortly.",
  "Hemen doldur": "Fill it out now",
  "Sosyal medya hesaplar\u00c4\u00b1m\u00c4\u00b1z": "Our social media accounts"
});
Object.assign(translations.de, {
  "Ki\u00c5\u0178iye \u00c3\u00b6zel planlama hatt\u00c4\u00b1": "Persönliche Beratung und Planung",
  "Estetik bir sonu\u00c3\u00a7 i\u00c3\u00a7in planlama ve konfor bir arada": "Planung und Komfort für ein natürliches Ergebnis",
  "\u00c3\u0153cretsiz": "Kostenlos",
  "\u00c3\u2013n g\u00c3\u00b6r\u00c3\u00bc\u00c5\u0178me \u00e2\u20ac\u201d planl\u00c4\u00b1 ve \u00c5\u0178effaf s\u00c3\u00bcre\u00c3\u00a7": "Kostenlose Beratung - klar und gut geplant",
  "\u00c4\u00b0lk ad\u00c4\u00b1m\u00c4\u00b1n\u00c4\u00b1z\u00c4\u00b1 bug\u00c3\u00bcn at\u00c4\u00b1n": "Machen Sie heute den ersten Schritt",
  "Formu doldurun, sizi arayal\u00c4\u00b1m": "F\u00fcllen Sie das Formular aus – wir rufen Sie an",
  "Size en uygun plan\u00c4\u00b1 birlikte olu\u00c5\u0178tural\u00c4\u00b1m. Bilgilerinizi b\u00c4\u00b1rak\u00c4\u00b1n,": "Gemeinsam finden wir den passenden Plan. Hinterlassen Sie Ihre Angaben,",
  "dan\u00c4\u00b1\u00c5\u0178man\u00c4\u00b1m\u00c4\u00b1z k\u00c4\u00b1sa s\u00c3\u00bcre i\u00c3\u00a7inde sizinle ileti\u00c5\u0178ime ge\u00c3\u00a7sin.": "und unser Beratungsteam meldet sich in Kürze bei Ihnen.",
  "Hemen doldur": "Jetzt ausfüllen",
  "Sosyal medya hesaplar\u00c4\u00b1m\u00c4\u00b1z": "Unsere Social-Media-Kanäle"
});
function updateConsultationToggle(language, expanded) {
  const toggle = document.querySelector(".contact-form-toggle");
  if (!toggle) return;
  const labels = {
    tr: expanded ? "Formu kapat" : "Hemen doldur",
    en: expanded ? "Close form" : "Fill it out now",
    de: expanded ? "Formular schließen" : "Jetzt ausfüllen"
  };
  toggle.innerHTML = `${labels[language]} <span aria-hidden="true">${expanded ? "↑" : "→"}</span>`;
}

function applyContactFooterLanguage(language) {
  const localizedText = {
    en: [
      "Personalized planning", "Free consultation appointment", "Send us your photos for a personalized graft estimate and travel plan.",
      "Phone / WhatsApp", "Email", "Availability", "International patient support, 24/7", "Take the first step today",
      "Fill out the form and we will call you", "Let us create the right plan for you. Leave your details and our consultant will contact you shortly.",
      "Part of Muş Hair", "Hair · Beard · Eyebrow design · Scalp micropigmentation · Aesthetics.", "Quick links", "Services", "Process",
      "Medical travel", "FAQ", "Contact", "A trusted team focused on experience and results.", "Our social media accounts"
    ],
    de: [
      "Individuelle Planung", "Kostenloses Beratungsgespräch", "Senden Sie uns Ihre Fotos für eine individuelle Graftschätzung und Reiseplanung.",
      "Telefon / WhatsApp", "E-Mail", "Erreichbarkeit", "Internationaler Patientenservice rund um die Uhr", "Machen Sie heute den ersten Schritt",
      "Füllen Sie das Formular aus – wir rufen Sie an", "Gemeinsam finden wir den passenden Plan. Hinterlassen Sie Ihre Angaben und unser Beratungsteam meldet sich in Kürze bei Ihnen.",
      "Teil von Muş Hair", "Haar · Bart · Augenbrauen · Kopfhaut-Mikropigmentierung · Ästhetik.", "Direktlinks", "Leistungen", "Ablauf",
      "Medizinische Reisen", "Häufige Fragen", "Kontakt", "Ein erfahrenes Team mit Blick auf natürliche Ergebnisse.", "Unsere Social-Media-Kanäle"
    ]
  };
  const targets = [
    ".contact-copy .eyebrow", ".contact-copy h2", ".contact-copy > p:not(.eyebrow)", ".contact-meta li:nth-child(1) span",
    ".contact-meta li:nth-child(2) span", ".contact-meta li:nth-child(3) span", ".contact-meta li:nth-child(3) strong",
    ".contact-form-intro .eyebrow", ".contact-form-intro h2", ".contact-form-intro > p:not(.eyebrow)", ".footer-brand small",
    ".footer-grid > div:first-child > p:not(.footer-brand)", ".footer-grid > div:nth-child(2) h3", '.footer-grid a[href="#hizmetler"]',
    '.footer-grid a[href="#surec"]', '.footer-grid a[href="#turizm"]', '.footer-grid a[href="#sss"]',
    ".footer-grid > div:nth-child(3) h3", ".footer-grid > div:nth-child(3) p", ".footer-social h3"
  ];
  targets.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (!element) return;
    if (!element.dataset.turkishText) element.dataset.turkishText = element.textContent.trim();
    element.textContent = language === "tr" ? element.dataset.turkishText : localizedText[language][index];
  });

  if (language === "tr" && document.documentElement.lang !== "tr") return;
  const iframe = document.querySelector("#consultationForm iframe");
  if (iframe) {
    const formUrl = new URL(iframe.src);
    formUrl.searchParams.set("hl", language);
    iframe.src = formUrl.href;
    iframe.title = language === "de" ? "Kostenloses Beratungsformular" : language === "en" ? "Free consultation form" : "Ücretsiz ön görüşme formu";
  }
}

function applyFaqLanguage(language) {
  const answers = {
    en: [
      "Grafts taken from the donor area are genetically resistant to hair loss. With proper planning and care, results are long-lasting; the final appearance usually settles by month 12.",
      "With FUE, channels are opened before grafts are placed. DHI places grafts directly with an implanter pen and can allow closer placement and controlled angles. We determine the suitable technique during your consultation.",
      "The procedure is performed under local anaesthesia. Most patients return to their hotel the same day. It usually takes around 6–8 hours, depending on the number of grafts.",
      "A stay of 3 nights / 4 days is usually enough for the consultation, procedure, first wash and check-up. We will confirm flight timing with your coordinator.",
      "Yes. Transplanted hairs may shed temporarily during the first weeks. New growth often starts around month 3 and becomes more noticeable between months 6 and 12."
    ],
    de: [
      "Grafts aus dem Spenderbereich sind genetisch resistent gegen Haarausfall. Bei guter Planung und Pflege hält das Ergebnis lange an; das endgültige Erscheinungsbild entwickelt sich meist bis zum 12. Monat.",
      "Bei FUE werden vor dem Einsetzen der Grafts Kanäle geöffnet. Bei DHI werden die Grafts direkt mit einem Implanter eingesetzt; dadurch sind eine dichtere Platzierung und kontrollierte Winkel möglich. Welche Technik passt, klären wir im Beratungsgespräch.",
      "Der Eingriff erfolgt unter örtlicher Betäubung. Die meisten Patienten kehren noch am selben Tag ins Hotel zurück. Je nach Graftzahl dauert er etwa 6–8 Stunden.",
      "In der Regel reichen 3 Nächte / 4 Tage für Beratung, Eingriff, erste Haarwäsche und Kontrolle. Die Flugplanung stimmen wir mit Ihrem Ansprechpartner ab.",
      "Ja. In den ersten Wochen können transplantierte Haare vorübergehend ausfallen. Neues Wachstum beginnt häufig ab dem 3. Monat und wird zwischen dem 6. und 12. Monat deutlicher."
    ]
  };
  document.querySelectorAll(".faq-list details p").forEach((answer, index) => {
    if (!answer.dataset.turkishText) answer.dataset.turkishText = answer.textContent.trim();
    answer.textContent = language === "tr" ? answer.dataset.turkishText : answers[language][index];
  });
}

function applyTestimonialsLanguage(language) {
  const translationsByLanguage = {
    en: [
      "Patient experiences", "A well-planned, comfortable journey",
      "I travelled from Berlin. Everything from airport pickup to the hotel and clinic was planned in advance. My hairline looks natural; no one can tell.",
      "Markus K. · 38 · Germany",
      "I considered a beard transplant. The free consultation gave me a realistic graft estimate. There was no exaggeration, and the process was transparent.",
      "Emre A. · 29 · Istanbul",
      "I had eyebrow micropigmentation. It looks natural without makeup. My consultant followed up with photos at every stage.",
      "Leyla S. · 34 · Netherlands"
    ],
    de: [
      "Patientenerfahrungen", "Ein gut geplanter und angenehmer Ablauf",
      "Ich bin aus Berlin angereist. Von der Abholung am Flughafen bis zum Hotel und zur Klinik war alles im Voraus geplant. Meine Haarlinie wirkt natürlich; niemand bemerkt etwas.",
      "Markus K. · 38 · Deutschland",
      "Ich habe über eine Barttransplantation nachgedacht. In der kostenlosen Beratung erhielt ich eine realistische Graftschätzung. Es wurde nichts übertrieben, und der Ablauf war transparent.",
      "Emre A. · 29 · Istanbul",
      "Ich habe eine Augenbrauen-Mikropigmentierung machen lassen. Sie wirkt auch ohne Make-up natürlich. Meine Beraterin hat mich in jeder Phase mit Fotos begleitet.",
      "Leyla S. · 34 · Niederlande"
    ]
  };
  const elements = [
    document.querySelector(".quotes .section-head .eyebrow"),
    document.querySelector(".quotes .section-head h2"),
    ...[...document.querySelectorAll(".quote-grid blockquote")].flatMap((quote) => [quote.querySelector("p"), quote.querySelector("footer")])
  ];
  elements.forEach((element, index) => {
    if (!element) return;
    if (!element.dataset.turkishText) element.dataset.turkishText = element.textContent.trim();
    element.textContent = language === "tr" ? element.dataset.turkishText : translationsByLanguage[language][index];
  });
}

function applyComfortLanguage(language) {
  const translationsByLanguage = {
    en: [
      "Patient comfort",
      "Your comfort comes first. We provide a quiet rest area, arrangements for companions and support at every step on the day of your procedure.",
      "International standards",
      "We provide safe care with sterilization, single-use materials and a documented patient record.",
      "Transparent communication",
      "Graft estimate, technique and price are agreed in advance. There are no surprise charges on the day of your procedure."
    ],
    de: [
      "Patientenkomfort",
      "Ihr Wohlbefinden steht an erster Stelle. Wir bieten einen ruhigen Ruhebereich, organisieren die Betreuung von Begleitpersonen und unterstützen Sie am Behandlungstag bei jedem Schritt.",
      "Internationale Standards",
      "Sterilisation, Einwegmaterialien und eine dokumentierte Patientenakte unterstützen eine sichere Behandlung.",
      "Transparente Kommunikation",
      "Graftschätzung, Technik und Preis werden vorab abgestimmt. Am Behandlungstag gibt es keine unerwarteten Zusatzkosten."
    ]
  };
  const elements = [...document.querySelectorAll(".comfort-card")].flatMap((card) => [card.querySelector("h3"), card.querySelector("p")]);
  elements.forEach((element, index) => {
    if (!element) return;
    if (!element.dataset.turkishText) element.dataset.turkishText = element.textContent.trim();
    element.textContent = language === "tr" ? element.dataset.turkishText : translationsByLanguage[language][index];
  });
}

function applyTrustBarLanguage(language) {
  const translationsByLanguage = {
    en: [
      "FUE & DHI", "Natural-looking, lasting results", "MST", "International hair restoration services",
      "7/24", "Personalized planning support", "Free", "Free consultation - a clear, planned process"
    ],
    de: [
      "FUE & DHI", "Natürlich wirkende, langanhaltende Ergebnisse", "MST", "Internationale Haartransplantation",
      "7/24", "Persönliche Beratung und Planung", "Kostenlos", "Kostenlose Beratung - klar und gut geplant"
    ]
  };
  const elements = [...document.querySelectorAll(".trust-grid > div")].flatMap((item) => [item.querySelector("strong"), item.querySelector("span")]);
  elements.forEach((element, index) => {
    if (!element) return;
    if (!element.dataset.turkishText) element.dataset.turkishText = element.textContent.trim();
    element.textContent = language === "tr" ? element.dataset.turkishText : translationsByLanguage[language][index];
  });
}

function applyWholeElementTranslations(language) {
  const elements = [...document.querySelectorAll("h2, h3, p, li, summary, figcaption, small, strong")]
    .filter((element) => !element.querySelector("h2, h3, p, ul, ol, span, em, strong, svg"));
  elements.forEach((element) => {
    if (!element.dataset.originalCopy) element.dataset.originalCopy = element.textContent.trim().replace(/\s+/g, " ");
    const original = element.dataset.originalCopy;
    element.textContent = language === "tr" ? original : (translations[language][original] || original);
  });
}

// Replace matching text nodes only, so form controls and SVG markup remain intact.
function translateText(language) {
  const dictionary = translations[language];
  applyContactFooterLanguage("tr");
  applyFaqLanguage("tr");
  applyTestimonialsLanguage("tr");
  applyComfortLanguage("tr");
  applyTrustBarLanguage("tr");
  applyWholeElementTranslations("tr");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const source = node.__sourceText || (node.__sourceText = node.nodeValue.trim());
    const translated = language === "tr" ? source : (dictionary[source] || source);
    if (source) node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), translated);
  }

  applyWholeElementTranslations(language);
  applyContactFooterLanguage(language);
  applyFaqLanguage(language);
  applyTestimonialsLanguage(language);
  applyComfortLanguage(language);
  applyTrustBarLanguage(language);

  document.documentElement.lang = language;
  languageSelect.value = language;
  updateConsultationToggle(language, document.querySelector(".contact-form-toggle")?.getAttribute("aria-expanded") === "true");
  document.querySelector('nav[aria-label]')?.setAttribute("aria-label", language === "de" ? "Hauptnavigation" : "Main navigation");
  document.getElementById("menuBtn")?.setAttribute("aria-label", language === "de" ? "Menü öffnen" : language === "en" ? "Open menu" : "Menüyü aç");
  document.title = language === "de"
    ? "Berlin Hair Clinic MST | Haartransplantation und Patientenbetreuung"
    : language === "en"
      ? "Berlin Hair Clinic MST | Hair Transplant and Patient Care"
      : "Berlin Hair Clinic MST | Muş Hair Bünyesinde Uluslararası Saç Ekimi";
  document.querySelector('meta[name="description"]')?.setAttribute("content", language === "de"
    ? "FUE- und DHI-Haartransplantation, Barttransplantation und internationale Patientenbetreuung. Kostenlose Beratung: +90 532 204 49 49"
    : language === "en"
      ? "FUE and DHI hair transplant, beard restoration and international patient support. Free consultation: +90 532 204 49 49"
      : "Berlin Hair Clinic MST — Muş Hair bünyesinde FUE ve DHI saç ekimi, sakal ekimi, kaş simülasyonu ve sağlık turizmi.");
  document.querySelectorAll(".hero-photo img, .about-visual img, .tourism-gallery img, .results-grid img").forEach((img) => {
    img.alt = language === "de" ? img.alt.replace("Berlin Hair Clinic tedavi odası", "Behandlungsraum der Berlin Hair Clinic") : language === "en" ? img.alt.replace("Berlin Hair Clinic tedavi odası", "Berlin Hair Clinic treatment room") : img.alt;
  });
  const placeholders = language === "de"
    ? { name: "Ihr Name", phone: "+49 ...", message: "Beschreiben Sie kurz Ihre Wünsche" }
    : language === "en" ? { name: "Your name", phone: "+44 ...", message: "Briefly describe your goals" }
      : { name: "Adınız", phone: "+90 ...", message: "Saç dökülmenizi ve beklentinizi kısaca yazın" };
  form?.querySelector('[name="name"]')?.setAttribute("placeholder", placeholders.name);
  form?.querySelector('[name="phone"]')?.setAttribute("placeholder", placeholders.phone);
  form?.querySelector('[name="message"]')?.setAttribute("placeholder", placeholders.message);
  const whatsappText = {
    tr: "Merhaba, ücretsiz ön görüşme almak istiyorum.",
    en: "Hello, I would like to book a free consultation.",
    de: "Guten Tag, ich möchte eine kostenlose Beratung vereinbaren."
  }[language];
  const whatsappHref = `https://wa.me/905322044949?text=${encodeURIComponent(whatsappText)}`;
  document.querySelector(".hero-actions .btn-gold")?.setAttribute("href", whatsappHref);
  document.querySelector(".whatsapp")?.setAttribute("href", whatsappHref);
}

function detectLanguage() {
  const stored = localStorage.getItem(languageKey);
  if (["tr", "en", "de"].includes(stored)) return stored;
  const locale = [...(navigator.languages || []), navigator.language || ""].join(" ").toLowerCase();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  if (locale.includes("de") || timezone.startsWith("Europe/Berlin")) return "de";
  if (locale.includes("tr") || timezone.startsWith("Europe/Istanbul")) return "tr";
  return "en";
}

translateText(detectLanguage());
languageSelect.addEventListener("change", () => {
  localStorage.setItem(languageKey, languageSelect.value);
  translateText(languageSelect.value);
});

window.addEventListener("scroll", () => {
  if (header) header.style.boxShadow = window.scrollY > 12 ? "0 10px 40px rgba(0,0,0,.25)" : "none";
});

menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

const consultationToggle = document.querySelector(".contact-form-toggle");
const consultationForm = document.getElementById("consultationForm");
consultationToggle?.addEventListener("click", () => {
  const isOpening = consultationForm.hidden;
  consultationForm.hidden = !isOpening;
  consultationToggle.setAttribute("aria-expanded", String(isOpening));
  updateConsultationToggle(document.documentElement.lang, isOpening);
  if (isOpening) {
    consultationForm.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

const resultImages = [...document.querySelectorAll(".results-grid img")];
let lightbox;
let previouslyFocusedImage;

function closeLightbox() {
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  document.body.style.overflow = "";
  previouslyFocusedImage?.focus();
}

function openLightbox(image) {
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.innerHTML = `
      <figure class="image-lightbox-content">
        <button class="lightbox-close" type="button" aria-label="Close image">&times;</button>
        <img alt="">
        <figcaption></figcaption>
      </figure>`;
    document.body.append(lightbox);
    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (!event.target.closest(".image-lightbox img, .lightbox-close")) closeLightbox();
    });
  }

  const expandedImage = lightbox.querySelector("img");
  expandedImage.src = image.currentSrc || image.src;
  expandedImage.alt = image.alt;
  lightbox.querySelector("figcaption").textContent = image.closest("figure")?.querySelector("figcaption")?.textContent || image.alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  previouslyFocusedImage = image;
  lightbox.querySelector(".lightbox-close").focus();
}

resultImages.forEach((image) => {
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-haspopup", "dialog");
  image.addEventListener("click", () => openLightbox(image));
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

