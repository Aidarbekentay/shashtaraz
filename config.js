// 1) Firebase Console → Project settings → Your apps → Web app → firebaseConfig
//    мәндерін осы жерге көшіріп қойыңыз.
export const firebaseConfig = {
  apiKey: "AIzaSyAkofRCDx7oRXbKK_4rRcro80LzvQTnJOo",
  authDomain: "shashtaraz-e1518.firebaseapp.com",
  projectId: "shashtaraz-e1518",
  storageBucket: "shashtaraz-e1518.firebasestorage.app",
  messagingSenderId: "726443173155",
  appId: "1:726443173155:web:62c10f0b9004cc2be61896"
};

// 2) Әкімші (сіз) кіретін Google аккаунты. firestore.rules ішіндегі email-мен бірдей болуы керек.
export const ADMIN_EMAIL = "aidarbekentay@gmail.com";

// 3) Шаштараз туралы мәлімет
export const SHOP = {
  name: "Шаштараз",
  phone: "+7 771 614 20 59",
  whatsapp: "77716142059",
  openHour: 10,        // 10:00
  closeHour: 22,       // 22:00
  stepMin: 30,         // бір бронь — 30 минут
  daysAhead: 14,       // неше күн алға брондауға болады (ережеде 30 күннен аспауы керек)
  tzOffsetHours: 5     // Қазақстан уақыты (UTC+5)
};
