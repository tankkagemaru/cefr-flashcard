// ============================================================
// CEFR FLASHCARDS — VOCABULARY DATA
// ============================================================
//
// This file defines all word sets and their words.
// To load it in index.html, place this tag BEFORE the main <script>:
//
//   <script src="words.js"></script>
//   <script>
//     // main app code
//   </script>
//
// STRUCTURE
// ---------
// window.WORD_SETS = {
//   <setKey>: {
//     name: 'Display name',
//     desc: 'Short description',
//     icon: '🌍',                                         // emoji shown on the set card
//     iconBg: 'linear-gradient(135deg, #a, #b)',          // gradient behind icon
//     levels: {
//       A1: [ ...words ],
//       A2: [ ...words ],
//       B1: [ ...words ],
//       B2: [ ...words ],
//       C1: [ ...words ],
//       C2: [ ...words ],
//     },
//   },
// };
//
// WORD OBJECT
// -----------
// {
//   word:    'apple',          // English headword
//   ipa:     '/ˈæp.əl/',       // IPA pronunciation
//   pos:     'noun',           // part of speech
//   def:     'A round fruit.', // definition
//   example: 'I eat an apple.',// example sentence
//   ar:      'تفاحة',          // Arabic translation  (A1/A2 only)
//   zh:      '苹果',            // Mandarin translation (A1/A2 only)
//   glyph:   '🍎',             // emoji fallback (shown when no photo found)
//   theme:   'red',            // color theme — see list below
// }
//
// THEMES (pick one per word):
//   red · amber · green · blue · purple · teal · coral · pink · gray · indigo
//
// OPTIONAL: drop a photo at photos/<setKey>/<level>/<word>.{jpg,jpeg,png,webp}
// and it will automatically override the emoji glyph on that card.
// ============================================================

window.WORD_SETS = {

  // =========================================================
  // SET 1 — EVERYDAY ENGLISH
  // =========================================================
  general: {
    name: 'Everyday English',
    desc: 'Core vocabulary for daily life',
    icon: '🌍',
    iconBg: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    levels: {

      // ----- A1 -----
      A1: [
        { word: 'apple', ipa: '/ˈæp.əl/', pos: 'noun', def: 'A round fruit with red, green, or yellow skin.', example: 'I eat an apple every day.', ar: 'تفاحة', zh: '苹果', glyph: '🍎', theme: 'red' },
        { word: 'dog', ipa: '/dɒɡ/', pos: 'noun', def: 'A common animal kept as a pet.', example: 'My dog loves to play in the park.', ar: 'كلب', zh: '狗', glyph: '🐕', theme: 'amber' },
        { word: 'house', ipa: '/haʊs/', pos: 'noun', def: 'A building where people live.', example: 'They live in a big house.', ar: 'منزل', zh: '房子', glyph: '🏠', theme: 'coral' },
        { word: 'water', ipa: '/ˈwɔː.tər/', pos: 'noun', def: 'A clear liquid that we drink.', example: 'Please give me a glass of water.', ar: 'ماء', zh: '水', glyph: '💧', theme: 'blue' },
        { word: 'book', ipa: '/bʊk/', pos: 'noun', def: 'A set of printed pages bound together.', example: 'I am reading an interesting book.', ar: 'كتاب', zh: '书', glyph: '📖', theme: 'purple' },
        { word: 'cat', ipa: '/kæt/', pos: 'noun', def: 'A small furry animal often kept as a pet.', example: 'The cat is sleeping on the sofa.', ar: 'قطة', zh: '猫', glyph: '🐈', theme: 'gray' },
        { word: 'sun', ipa: '/sʌn/', pos: 'noun', def: 'The bright star that gives us light and heat.', example: 'The sun is shining today.', ar: 'شمس', zh: '太阳', glyph: '☀️', theme: 'amber' },
        { word: 'car', ipa: '/kɑːr/', pos: 'noun', def: 'A vehicle with four wheels used for transport.', example: 'My father bought a new car.', ar: 'سيارة', zh: '汽车', glyph: '🚗', theme: 'red' },
        { word: 'tree', ipa: '/triː/', pos: 'noun', def: 'A tall plant with a trunk and branches.', example: 'The tree in our garden is very old.', ar: 'شجرة', zh: '树', glyph: '🌳', theme: 'green' },
        { word: 'happy', ipa: '/ˈhæp.i/', pos: 'adjective', def: 'Feeling or showing pleasure.', example: 'She feels happy when she sees her friends.', ar: 'سعيد', zh: '开心', glyph: '😊', theme: 'amber' },
        { word: 'bread', ipa: '/bred/', pos: 'noun', def: 'A food made from flour and baked in an oven.', example: 'I buy fresh bread every morning.', ar: 'خبز', zh: '面包', glyph: '🍞', theme: 'amber' },
        { word: 'flower', ipa: '/ˈflaʊ.ər/', pos: 'noun', def: 'The colorful part of a plant.', example: 'He gave her a beautiful flower.', ar: 'زهرة', zh: '花', glyph: '🌸', theme: 'pink' },
        { word: 'fish', ipa: '/fɪʃ/', pos: 'noun', def: 'An animal that lives in water.', example: 'There are many fish in the sea.', ar: 'سمكة', zh: '鱼', glyph: '🐟', theme: 'blue' },
        { word: 'milk', ipa: '/mɪlk/', pos: 'noun', def: 'A white liquid drink from cows.', example: 'I drink milk with my breakfast.', ar: 'حليب', zh: '牛奶', glyph: '🥛', theme: 'gray' },
        { word: 'eat', ipa: '/iːt/', pos: 'verb', def: 'To put food into your mouth.', example: 'We eat dinner at seven.', ar: 'يأكل', zh: '吃', glyph: '🍽️', theme: 'coral' },
        { word: 'sleep', ipa: '/sliːp/', pos: 'verb', def: 'To rest with eyes closed.', example: 'Babies sleep a lot.', ar: 'ينام', zh: '睡觉', glyph: '😴', theme: 'purple' },
        { word: 'big', ipa: '/bɪɡ/', pos: 'adjective', def: 'Large in size.', example: 'An elephant is a big animal.', ar: 'كبير', zh: '大', glyph: '🐘', theme: 'gray' },
        { word: 'small', ipa: '/smɔːl/', pos: 'adjective', def: 'Little in size.', example: 'A mouse is a small animal.', ar: 'صغير', zh: '小', glyph: '🐭', theme: 'gray' },
        { word: 'red', ipa: '/red/', pos: 'adjective', def: 'The color of blood or fire.', example: 'She wore a red dress.', ar: 'أحمر', zh: '红色', glyph: '🔴', theme: 'red' },
        { word: 'blue', ipa: '/bluː/', pos: 'adjective', def: 'The color of the sky or sea.', example: 'The sky is bright blue.', ar: 'أزرق', zh: '蓝色', glyph: '🔵', theme: 'blue' },
        { word: 'ball', ipa: '/bɔːl/', pos: 'noun', def: 'A round object used in games.', example: 'The children play with a ball.', ar: 'كرة', zh: '球', glyph: '⚽', theme: 'green' },
        { word: 'baby', ipa: '/ˈbeɪ.bi/', pos: 'noun', def: 'A very young child.', example: 'The baby is sleeping quietly.', ar: 'طفل', zh: '宝宝', glyph: '👶', theme: 'pink' },
        { word: 'school', ipa: '/skuːl/', pos: 'noun', def: 'A place where children go to learn.', example: 'My school is near my house.', ar: 'مدرسة', zh: '学校', glyph: '🏫', theme: 'blue' },
        { word: 'drink', ipa: '/drɪŋk/', pos: 'verb', def: 'To take liquid into your body.', example: 'I drink coffee in the morning.', ar: 'يشرب', zh: '喝', glyph: '🥤', theme: 'blue' },
      ],

      // ----- A2 -----
      A2: [
        { word: 'travel', ipa: '/ˈtræv.əl/', pos: 'verb', def: 'To go from one place to another.', example: 'I love to travel to new countries.', ar: 'يسافر', zh: '旅行', glyph: '✈️', theme: 'blue' },
        { word: 'breakfast', ipa: '/ˈbrek.fəst/', pos: 'noun', def: 'The first meal of the day.', example: 'We have breakfast at seven.', ar: 'فطور', zh: '早餐', glyph: '🥐', theme: 'amber' },
        { word: 'weather', ipa: '/ˈweð.ər/', pos: 'noun', def: 'The conditions outside.', example: 'The weather is very nice today.', ar: 'طقس', zh: '天气', glyph: '⛅', theme: 'blue' },
        { word: 'friend', ipa: '/frend/', pos: 'noun', def: 'A person you like.', example: 'My best friend lives next door.', ar: 'صديق', zh: '朋友', glyph: '🤝', theme: 'amber' },
        { word: 'kitchen', ipa: '/ˈkɪtʃ.ən/', pos: 'noun', def: 'The room where food is prepared.', example: 'She is cooking in the kitchen.', ar: 'مطبخ', zh: '厨房', glyph: '🍳', theme: 'amber' },
        { word: 'busy', ipa: '/ˈbɪz.i/', pos: 'adjective', def: 'Having a lot to do.', example: 'I am very busy at work.', ar: 'مشغول', zh: '忙', glyph: '🏃', theme: 'coral' },
        { word: 'market', ipa: '/ˈmɑː.kɪt/', pos: 'noun', def: 'A place to buy and sell things.', example: 'I buy vegetables at the market.', ar: 'سوق', zh: '市场', glyph: '🛒', theme: 'green' },
        { word: 'enjoy', ipa: '/ɪnˈdʒɔɪ/', pos: 'verb', def: 'To get pleasure from something.', example: 'They enjoy watching movies.', ar: 'يستمتع', zh: '享受', glyph: '🎉', theme: 'pink' },
        { word: 'holiday', ipa: '/ˈhɒl.ə.deɪ/', pos: 'noun', def: 'A day when you do not work.', example: 'We are going to Spain for our holiday.', ar: 'عطلة', zh: '假期', glyph: '🏖️', theme: 'amber' },
        { word: 'office', ipa: '/ˈɒf.ɪs/', pos: 'noun', def: 'A place where people work.', example: 'My office is on the third floor.', ar: 'مكتب', zh: '办公室', glyph: '🏢', theme: 'gray' },
        { word: 'exercise', ipa: '/ˈek.sə.saɪz/', pos: 'noun', def: 'Physical activity for health.', example: 'Daily exercise is good for you.', ar: 'تمرين', zh: '运动', glyph: '🏋️', theme: 'red' },
        { word: 'delicious', ipa: '/dɪˈlɪʃ.əs/', pos: 'adjective', def: 'Having a very pleasant taste.', example: 'This cake is delicious.', ar: 'لذيذ', zh: '美味', glyph: '🍰', theme: 'pink' },
        { word: 'airport', ipa: '/ˈeə.pɔːt/', pos: 'noun', def: 'Where airplanes take off and land.', example: 'We arrived at the airport early.', ar: 'مطار', zh: '机场', glyph: '🛫', theme: 'blue' },
        { word: 'ticket', ipa: '/ˈtɪk.ɪt/', pos: 'noun', def: 'A small paper that gives entry.', example: 'I bought a concert ticket.', ar: 'تذكرة', zh: '票', glyph: '🎫', theme: 'amber' },
        { word: 'beach', ipa: '/biːtʃ/', pos: 'noun', def: 'An area of sand by the sea.', example: 'We spent the day at the beach.', ar: 'شاطئ', zh: '海滩', glyph: '🏝️', theme: 'amber' },
        { word: 'mountain', ipa: '/ˈmaʊn.tən/', pos: 'noun', def: 'A very high area of land.', example: 'They climbed the mountain.', ar: 'جبل', zh: '山', glyph: '⛰️', theme: 'gray' },
        { word: 'tired', ipa: '/taɪəd/', pos: 'adjective', def: 'Needing rest or sleep.', example: 'I feel tired after the walk.', ar: 'متعب', zh: '累', glyph: '😪', theme: 'purple' },
        { word: 'medicine', ipa: '/ˈmed.ɪ.sən/', pos: 'noun', def: 'Something you take when ill.', example: 'Take this medicine three times a day.', ar: 'دواء', zh: '药', glyph: '💊', theme: 'red' },
        { word: 'party', ipa: '/ˈpɑː.ti/', pos: 'noun', def: 'A social gathering.', example: 'We had a great party last night.', ar: 'حفلة', zh: '派对', glyph: '🎊', theme: 'pink' },
        { word: 'garden', ipa: '/ˈɡɑː.dən/', pos: 'noun', def: 'An area with plants.', example: 'She grows flowers in her garden.', ar: 'حديقة', zh: '花园', glyph: '🌻', theme: 'green' },
        { word: 'music', ipa: '/ˈmjuː.zɪk/', pos: 'noun', def: 'Sounds arranged pleasingly.', example: 'I listen to music while studying.', ar: 'موسيقى', zh: '音乐', glyph: '🎵', theme: 'purple' },
        { word: 'hungry', ipa: '/ˈhʌŋ.ɡri/', pos: 'adjective', def: 'Wanting or needing food.', example: 'I am hungry, let us eat.', ar: 'جائع', zh: '饿', glyph: '🍔', theme: 'coral' },
        { word: 'learn', ipa: '/lɜːn/', pos: 'verb', def: 'To gain knowledge.', example: 'Children learn quickly.', ar: 'يتعلم', zh: '学习', glyph: '🎓', theme: 'blue' },
        { word: 'gift', ipa: '/ɡɪft/', pos: 'noun', def: 'Something given to someone.', example: 'She gave me a lovely gift.', ar: 'هدية', zh: '礼物', glyph: '🎁', theme: 'pink' },
      ],

      // ----- B1 -----
      B1: [
        { word: 'achieve', ipa: '/əˈtʃiːv/', pos: 'verb', def: 'To succeed after trying hard.', example: 'She worked hard to achieve her goals.', glyph: '🏆', theme: 'amber' },
        { word: 'opinion', ipa: '/əˈpɪn.jən/', pos: 'noun', def: 'A thought or belief about something.', example: 'In my opinion, this is the best book.', glyph: '💭', theme: 'blue' },
        { word: 'experience', ipa: '/ɪkˈspɪə.ri.əns/', pos: 'noun', def: 'Knowledge from doing something.', example: 'Living abroad was an amazing experience.', glyph: '🌟', theme: 'amber' },
        { word: 'suggest', ipa: '/səˈdʒest/', pos: 'verb', def: 'To offer an idea.', example: 'I suggest we meet tomorrow.', glyph: '💡', theme: 'amber' },
        { word: 'depend', ipa: '/dɪˈpend/', pos: 'verb', def: 'To rely on something.', example: 'Success depends on hard work.', glyph: '🔗', theme: 'gray' },
        { word: 'environment', ipa: '/ɪnˈvaɪ.rən.mənt/', pos: 'noun', def: 'The natural world.', example: 'We must protect the environment.', glyph: '🌱', theme: 'green' },
        { word: 'community', ipa: '/kəˈmjuː.nə.ti/', pos: 'noun', def: 'People living in the same area.', example: 'Our community is close-knit.', glyph: '🏘️', theme: 'coral' },
        { word: 'challenge', ipa: '/ˈtʃæl.ɪndʒ/', pos: 'noun', def: 'A difficult test of ability.', example: 'Learning a language is a challenge.', glyph: '⚡', theme: 'amber' },
        { word: 'improve', ipa: '/ɪmˈpruːv/', pos: 'verb', def: 'To make or become better.', example: 'She wants to improve her skills.', glyph: '📈', theme: 'green' },
        { word: 'culture', ipa: '/ˈkʌl.tʃər/', pos: 'noun', def: 'Customs and arts of a society.', example: 'Japanese culture fascinates me.', glyph: '🎭', theme: 'purple' },
        { word: 'advice', ipa: '/ədˈvaɪs/', pos: 'noun', def: 'A suggestion on what to do.', example: 'My teacher gave useful advice.', glyph: '🗣️', theme: 'blue' },
        { word: 'careful', ipa: '/ˈkeə.fəl/', pos: 'adjective', def: 'Paying attention to avoid mistakes.', example: 'Be careful crossing the road.', glyph: '⚠️', theme: 'amber' },
        { word: 'decision', ipa: '/dɪˈsɪʒ.ən/', pos: 'noun', def: 'A choice made after thinking.', example: 'That was a difficult decision.', glyph: '🤔', theme: 'purple' },
        { word: 'trust', ipa: '/trʌst/', pos: 'verb', def: 'To believe someone is honest.', example: 'I trust her with this task.', glyph: '🤲', theme: 'teal' },
        { word: 'behavior', ipa: '/bɪˈheɪ.vjər/', pos: 'noun', def: 'The way a person acts.', example: 'His behavior was strange.', glyph: '👥', theme: 'gray' },
        { word: 'recommend', ipa: '/ˌrek.əˈmend/', pos: 'verb', def: 'To suggest something as good.', example: 'I recommend this restaurant.', glyph: '👍', theme: 'green' },
        { word: 'discover', ipa: '/dɪˈskʌv.ər/', pos: 'verb', def: 'To find for the first time.', example: 'Scientists discover new species.', glyph: '🔍', theme: 'blue' },
        { word: 'memory', ipa: '/ˈmem.ər.i/', pos: 'noun', def: 'Something remembered.', example: 'I have happy memories.', glyph: '🧠', theme: 'pink' },
        { word: 'pressure', ipa: '/ˈpreʃ.ər/', pos: 'noun', def: 'Stress or force to do something.', example: 'He feels pressure at work.', glyph: '⚙️', theme: 'red' },
        { word: 'vehicle', ipa: '/ˈviː.ɪ.kəl/', pos: 'noun', def: 'A machine for transport.', example: 'Electric vehicles are popular.', glyph: '🚙', theme: 'gray' },
      ],

      // ----- B2 -----
      B2: [
        { word: 'acquire', ipa: '/əˈkwaɪər/', pos: 'verb', def: 'To get or obtain something.', example: 'She acquired her skills through practice.', glyph: '🎯', theme: 'red' },
        { word: 'controversy', ipa: '/ˈkɒn.trə.vɜː.si/', pos: 'noun', def: 'A public disagreement.', example: 'The policy sparked controversy.', glyph: '⚔️', theme: 'red' },
        { word: 'perceive', ipa: '/pəˈsiːv/', pos: 'verb', def: 'To understand in a particular way.', example: 'People perceive success differently.', glyph: '👁️', theme: 'purple' },
        { word: 'inevitable', ipa: '/ɪˈnev.ɪ.tə.bəl/', pos: 'adjective', def: 'Certain to happen.', example: 'Change is inevitable.', glyph: '⏳', theme: 'gray' },
        { word: 'advocate', ipa: '/ˈæd.və.keɪt/', pos: 'verb', def: 'To publicly support.', example: 'She advocates for rights.', glyph: '📣', theme: 'coral' },
        { word: 'endeavor', ipa: '/ɪnˈdev.ər/', pos: 'noun', def: 'A serious attempt.', example: 'Their endeavor was successful.', glyph: '🧗', theme: 'amber' },
        { word: 'coincide', ipa: '/ˌkəʊ.ɪnˈsaɪd/', pos: 'verb', def: 'To happen at the same time.', example: 'Our vacations coincided.', glyph: '🔄', theme: 'teal' },
        { word: 'tremendous', ipa: '/trɪˈmen.dəs/', pos: 'adjective', def: 'Very great in intensity.', example: 'They made tremendous progress.', glyph: '🚀', theme: 'purple' },
        { word: 'diminish', ipa: '/dɪˈmɪn.ɪʃ/', pos: 'verb', def: 'To become smaller.', example: 'His influence diminished.', glyph: '📉', theme: 'red' },
        { word: 'prominent', ipa: '/ˈprɒm.ɪ.nənt/', pos: 'adjective', def: 'Important or famous.', example: 'He is a prominent scientist.', glyph: '⭐', theme: 'amber' },
        { word: 'sustain', ipa: '/səˈsteɪn/', pos: 'verb', def: 'To keep going over time.', example: 'We must sustain our efforts.', glyph: '♻️', theme: 'green' },
        { word: 'elaborate', ipa: '/ɪˈlæb.ə.reɪt/', pos: 'verb', def: 'To explain in more detail.', example: 'Could you elaborate on that?', glyph: '📝', theme: 'blue' },
        { word: 'resilient', ipa: '/rɪˈzɪl.i.ənt/', pos: 'adjective', def: 'Able to recover quickly.', example: 'Children are resilient.', glyph: '🛡️', theme: 'teal' },
        { word: 'ambiguous', ipa: '/æmˈbɪɡ.ju.əs/', pos: 'adjective', def: 'Having multiple meanings.', example: 'Her answer was ambiguous.', glyph: '❓', theme: 'purple' },
        { word: 'diligent', ipa: '/ˈdɪl.ɪ.dʒənt/', pos: 'adjective', def: 'Careful and thorough.', example: 'She is a diligent student.', glyph: '📚', theme: 'blue' },
        { word: 'reluctant', ipa: '/rɪˈlʌk.tənt/', pos: 'adjective', def: 'Unwilling and hesitant.', example: 'He was reluctant to share.', glyph: '😐', theme: 'gray' },
        { word: 'inherent', ipa: '/ɪnˈher.ənt/', pos: 'adjective', def: 'Existing as a natural part.', example: 'Risk is inherent in investing.', glyph: '🧬', theme: 'teal' },
        { word: 'compelling', ipa: '/kəmˈpel.ɪŋ/', pos: 'adjective', def: 'Powerful and convincing.', example: 'She made a compelling argument.', glyph: '🎬', theme: 'coral' },
        { word: 'anticipate', ipa: '/ænˈtɪs.ɪ.peɪt/', pos: 'verb', def: 'To expect to happen.', example: 'We anticipate strong demand.', glyph: '🔮', theme: 'purple' },
        { word: 'integrity', ipa: '/ɪnˈteɡ.rə.ti/', pos: 'noun', def: 'Strong moral principles.', example: 'She is known for her integrity.', glyph: '💎', theme: 'blue' },
      ],

      // ----- C1 -----
      C1: [
        { word: 'ubiquitous', ipa: '/juːˈbɪk.wɪ.təs/', pos: 'adjective', def: 'Present everywhere.', example: 'Smartphones are ubiquitous.', glyph: '📱', theme: 'blue' },
        { word: 'meticulous', ipa: '/məˈtɪk.jə.ləs/', pos: 'adjective', def: 'Showing great attention to detail.', example: 'She is meticulous about records.', glyph: '🔬', theme: 'teal' },
        { word: 'paradigm', ipa: '/ˈpær.ə.daɪm/', pos: 'noun', def: 'A typical example or pattern.', example: 'The discovery led to a new paradigm.', glyph: '🧩', theme: 'purple' },
        { word: 'scrutinize', ipa: '/ˈskruː.tɪ.naɪz/', pos: 'verb', def: 'To examine very carefully.', example: 'They scrutinize every proposal.', glyph: '🔎', theme: 'gray' },
        { word: 'contingent', ipa: '/kənˈtɪn.dʒənt/', pos: 'adjective', def: 'Depending on conditions.', example: 'Plans are contingent on weather.', glyph: '🎲', theme: 'coral' },
        { word: 'articulate', ipa: '/ɑːˈtɪk.jə.leɪt/', pos: 'verb', def: 'To express clearly.', example: 'He articulates complex ideas easily.', glyph: '🗨️', theme: 'blue' },
        { word: 'pertinent', ipa: '/ˈpɜː.tɪ.nənt/', pos: 'adjective', def: 'Relevant to the matter.', example: 'She raised pertinent questions.', glyph: '📌', theme: 'red' },
        { word: 'epitome', ipa: '/ɪˈpɪt.ə.mi/', pos: 'noun', def: 'A perfect example.', example: 'She is the epitome of grace.', glyph: '👑', theme: 'amber' },
        { word: 'ambivalent', ipa: '/æmˈbɪv.ə.lənt/', pos: 'adjective', def: 'Having mixed feelings.', example: 'I feel ambivalent about moving.', glyph: '⚖️', theme: 'gray' },
        { word: 'discern', ipa: '/dɪˈsɜːn/', pos: 'verb', def: 'To recognize clearly.', example: 'Its hard to discern his intent.', glyph: '🎯', theme: 'teal' },
        { word: 'pragmatic', ipa: '/præɡˈmæt.ɪk/', pos: 'adjective', def: 'Sensible and realistic.', example: 'We need a pragmatic approach.', glyph: '🛠️', theme: 'amber' },
        { word: 'conducive', ipa: '/kənˈdjuː.sɪv/', pos: 'adjective', def: 'Providing a favorable environment.', example: 'Quiet is conducive to study.', glyph: '🏛️', theme: 'blue' },
        { word: 'eloquent', ipa: '/ˈel.ə.kwənt/', pos: 'adjective', def: 'Fluent and persuasive.', example: 'Her eloquent speech moved us.', glyph: '🎤', theme: 'coral' },
        { word: 'nuance', ipa: '/ˈnjuː.ɑːns/', pos: 'noun', def: 'A subtle difference.', example: 'The translation missed the nuance.', glyph: '🎨', theme: 'pink' },
        { word: 'formidable', ipa: '/ˈfɔː.mɪ.də.bəl/', pos: 'adjective', def: 'Causing fear or respect.', example: 'She is a formidable opponent.', glyph: '🦁', theme: 'amber' },
        { word: 'tenacious', ipa: '/təˈneɪ.ʃəs/', pos: 'adjective', def: 'Persistent and determined.', example: 'His tenacious spirit never gave up.', glyph: '🧗‍♀️', theme: 'red' },
        { word: 'candor', ipa: '/ˈkæn.dər/', pos: 'noun', def: 'Honest and open expression.', example: 'I appreciate your candor.', glyph: '💬', theme: 'teal' },
        { word: 'proliferate', ipa: '/prəˈlɪf.ər.eɪt/', pos: 'verb', def: 'To increase rapidly.', example: 'Apps continue to proliferate.', glyph: '🌐', theme: 'green' },
        { word: 'austere', ipa: '/ɒˈstɪər/', pos: 'adjective', def: 'Severe or strict.', example: 'The room had an austere style.', glyph: '⬜', theme: 'gray' },
        { word: 'emulate', ipa: '/ˈem.jə.leɪt/', pos: 'verb', def: 'To imitate to equal.', example: 'Many artists emulate their heroes.', glyph: '🪞', theme: 'purple' },
      ],

      // ----- C2 -----
      C2: [
        { word: 'ephemeral', ipa: '/ɪˈfem.ər.əl/', pos: 'adjective', def: 'Lasting a very short time.', example: 'The cherry blossoms are ephemeral.', glyph: '🌸', theme: 'pink' },
        { word: 'quintessential', ipa: '/ˌkwɪn.tɪˈsen.ʃəl/', pos: 'adjective', def: 'The most perfect example.', example: 'Paris is the quintessential romantic city.', glyph: '🗼', theme: 'coral' },
        { word: 'obfuscate', ipa: '/ˈɒb.fə.skeɪt/', pos: 'verb', def: 'To make unclear.', example: 'Politicians obfuscate the truth.', glyph: '🌫️', theme: 'gray' },
        { word: 'serendipity', ipa: '/ˌser.ənˈdɪp.ə.ti/', pos: 'noun', def: 'Finding good things by chance.', example: 'Meeting him was serendipity.', glyph: '🍀', theme: 'green' },
        { word: 'magnanimous', ipa: '/mæɡˈnæn.ɪ.məs/', pos: 'adjective', def: 'Very generous or forgiving.', example: 'Her magnanimous gesture touched us.', glyph: '🕊️', theme: 'teal' },
        { word: 'cacophony', ipa: '/kəˈkɒf.ə.ni/', pos: 'noun', def: 'A harsh mix of sounds.', example: 'The cacophony kept me awake.', glyph: '📢', theme: 'red' },
        { word: 'perfunctory', ipa: '/pəˈfʌŋk.tər.i/', pos: 'adjective', def: 'Done with minimal effort.', example: 'He gave a perfunctory nod.', glyph: '🤷', theme: 'gray' },
        { word: 'iconoclast', ipa: '/aɪˈkɒn.ə.klæst/', pos: 'noun', def: 'Attacker of traditions.', example: 'He was an iconoclast in art.', glyph: '🔨', theme: 'red' },
        { word: 'perspicacious', ipa: '/ˌpɜː.spɪˈkeɪ.ʃəs/', pos: 'adjective', def: 'Having ready insight.', example: 'Her perspicacious remarks impressed us.', glyph: '🦉', theme: 'purple' },
        { word: 'ineffable', ipa: '/ɪnˈef.ə.bəl/', pos: 'adjective', def: 'Too great for words.', example: 'The sunset had ineffable beauty.', glyph: '🌅', theme: 'amber' },
        { word: 'sycophant', ipa: '/ˈsɪk.ə.fænt/', pos: 'noun', def: 'One who flatters for gain.', example: 'The king had many sycophants.', glyph: '🎭', theme: 'pink' },
        { word: 'equanimity', ipa: '/ˌek.wəˈnɪm.ə.ti/', pos: 'noun', def: 'Mental calmness.', example: 'She faced the crisis with equanimity.', glyph: '🧘', theme: 'teal' },
        { word: 'sanguine', ipa: '/ˈsæŋ.ɡwɪn/', pos: 'adjective', def: 'Optimistic in bad situations.', example: 'He remained sanguine despite setbacks.', glyph: '☀️', theme: 'amber' },
        { word: 'mellifluous', ipa: '/məˈlɪf.lu.əs/', pos: 'adjective', def: 'Sweet and smooth sounding.', example: 'Her mellifluous voice captivated us.', glyph: '🎶', theme: 'purple' },
        { word: 'pernicious', ipa: '/pəˈnɪʃ.əs/', pos: 'adjective', def: 'Harmful in a subtle way.', example: 'Gossip can be pernicious.', glyph: '☠️', theme: 'red' },
        { word: 'loquacious', ipa: '/ləˈkweɪ.ʃəs/', pos: 'adjective', def: 'Very talkative.', example: 'The loquacious host kept us laughing.', glyph: '🗣️', theme: 'coral' },
        { word: 'halcyon', ipa: '/ˈhæl.si.ən/', pos: 'adjective', def: 'Denoting past happiness.', example: 'The halcyon days of youth.', glyph: '🌊', theme: 'blue' },
        { word: 'lugubrious', ipa: '/ləˈɡuː.bri.əs/', pos: 'adjective', def: 'Looking or sounding sad.', example: 'He spoke in a lugubrious tone.', glyph: '🌧️', theme: 'blue' },
        { word: 'sisyphean', ipa: '/ˌsɪs.ɪˈfiː.ən/', pos: 'adjective', def: 'Endless and unavailing.', example: 'Fighting spam feels sisyphean.', glyph: '⛰️', theme: 'gray' },
        { word: 'bucolic', ipa: '/bjuːˈkɒl.ɪk/', pos: 'adjective', def: 'Relating to countryside.', example: 'We stayed at a bucolic farm.', glyph: '🌾', theme: 'amber' },
      ],
    },
  },

  // =========================================================
  // SET 2 — BUSINESS & WORK
  // =========================================================
  business: {
    name: 'Business & Work',
    desc: 'Professional vocabulary',
    icon: '💼',
    iconBg: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    levels: {

      // ----- A1 -----
      A1: [
        { word: 'job', ipa: '/dʒɒb/', pos: 'noun', def: 'Work to earn money.', example: 'She has a good job.', ar: 'وظيفة', zh: '工作', glyph: '💼', theme: 'blue' },
        { word: 'boss', ipa: '/bɒs/', pos: 'noun', def: 'A person in charge.', example: 'My boss is kind.', ar: 'مدير', zh: '老板', glyph: '👔', theme: 'gray' },
        { word: 'money', ipa: '/ˈmʌn.i/', pos: 'noun', def: 'Coins or notes to buy things.', example: 'I need money for food.', ar: 'مال', zh: '钱', glyph: '💰', theme: 'amber' },
        { word: 'work', ipa: '/wɜːk/', pos: 'verb', def: 'To do a job.', example: 'I work five days a week.', ar: 'يعمل', zh: '工作', glyph: '⚒️', theme: 'coral' },
        { word: 'team', ipa: '/tiːm/', pos: 'noun', def: 'A group working together.', example: 'Our team has ten people.', ar: 'فريق', zh: '团队', glyph: '👥', theme: 'teal' },
        { word: 'email', ipa: '/ˈiː.meɪl/', pos: 'noun', def: 'A message sent by computer.', example: 'Please send me an email.', ar: 'بريد', zh: '邮件', glyph: '📧', theme: 'blue' },
        { word: 'meeting', ipa: '/ˈmiː.tɪŋ/', pos: 'noun', def: 'A gathering for work.', example: 'We have a meeting at ten.', ar: 'اجتماع', zh: '会议', glyph: '🤝', theme: 'purple' },
        { word: 'phone', ipa: '/fəʊn/', pos: 'noun', def: 'A device to talk at distance.', example: 'I will call you.', ar: 'هاتف', zh: '电话', glyph: '📞', theme: 'green' },
        { word: 'company', ipa: '/ˈkʌm.pə.ni/', pos: 'noun', def: 'A business organization.', example: 'He works for a big company.', ar: 'شركة', zh: '公司', glyph: '🏢', theme: 'blue' },
        { word: 'pay', ipa: '/peɪ/', pos: 'verb', def: 'To give money for something.', example: 'I will pay for lunch.', ar: 'يدفع', zh: '付钱', glyph: '💳', theme: 'green' },
        { word: 'desk', ipa: '/desk/', pos: 'noun', def: 'A table for working.', example: 'My desk is by the window.', ar: 'مكتب', zh: '桌子', glyph: '🖥️', theme: 'gray' },
        { word: 'paper', ipa: '/ˈpeɪ.pər/', pos: 'noun', def: 'Thin material for writing.', example: 'Write on the paper.', ar: 'ورقة', zh: '纸', glyph: '📄', theme: 'gray' },
      ],

      // ----- A2 -----
      A2: [
        { word: 'salary', ipa: '/ˈsæl.ə.ri/', pos: 'noun', def: 'Money paid regularly.', example: 'His monthly salary is good.', ar: 'راتب', zh: '工资', glyph: '💵', theme: 'green' },
        { word: 'employee', ipa: '/ɪmˈplɔɪ.iː/', pos: 'noun', def: 'A person who works for a company.', example: 'The company has 500 employees.', ar: 'موظف', zh: '员工', glyph: '👨‍💼', theme: 'blue' },
        { word: 'customer', ipa: '/ˈkʌs.tə.mər/', pos: 'noun', def: 'A person who buys things.', example: 'We treat every customer well.', ar: 'عميل', zh: '顾客', glyph: '🛍️', theme: 'coral' },
        { word: 'project', ipa: '/ˈprɒdʒ.ekt/', pos: 'noun', def: 'A planned piece of work.', example: 'Our project starts Monday.', ar: 'مشروع', zh: '项目', glyph: '📋', theme: 'amber' },
        { word: 'schedule', ipa: '/ˈʃedʒ.uːl/', pos: 'noun', def: 'A plan of when things happen.', example: 'Check the schedule.', ar: 'جدول', zh: '日程', glyph: '📅', theme: 'purple' },
        { word: 'report', ipa: '/rɪˈpɔːt/', pos: 'noun', def: 'A written document.', example: 'I wrote a sales report.', ar: 'تقرير', zh: '报告', glyph: '📊', theme: 'blue' },
        { word: 'deadline', ipa: '/ˈded.laɪn/', pos: 'noun', def: 'Latest time to finish.', example: 'The deadline is Friday.', ar: 'موعد نهائي', zh: '截止日期', glyph: '⏰', theme: 'red' },
        { word: 'client', ipa: '/ˈklaɪ.ənt/', pos: 'noun', def: 'Someone who pays for a service.', example: 'Our client is happy.', ar: 'زبون', zh: '客户', glyph: '🤵', theme: 'gray' },
        { word: 'colleague', ipa: '/ˈkɒl.iːɡ/', pos: 'noun', def: 'Someone you work with.', example: 'My colleagues are friendly.', ar: 'زميل', zh: '同事', glyph: '👫', theme: 'teal' },
        { word: 'contract', ipa: '/ˈkɒn.trækt/', pos: 'noun', def: 'A written agreement.', example: 'Please sign the contract.', ar: 'عقد', zh: '合同', glyph: '📜', theme: 'amber' },
        { word: 'profit', ipa: '/ˈprɒf.ɪt/', pos: 'noun', def: 'Money earned after costs.', example: 'Profit is high this year.', ar: 'ربح', zh: '利润', glyph: '📈', theme: 'green' },
        { word: 'budget', ipa: '/ˈbʌdʒ.ɪt/', pos: 'noun', def: 'A plan for spending.', example: 'Stay within budget.', ar: 'ميزانية', zh: '预算', glyph: '💹', theme: 'amber' },
      ],

      // ----- B1 -----
      B1: [
        { word: 'negotiate', ipa: '/nɪˈɡəʊ.ʃi.eɪt/', pos: 'verb', def: 'To discuss to reach agreement.', example: 'We will negotiate the terms.', glyph: '🤝', theme: 'blue' },
        { word: 'strategy', ipa: '/ˈstræt.ə.dʒi/', pos: 'noun', def: 'A plan for achieving a goal.', example: 'Our strategy works well.', glyph: '♟️', theme: 'purple' },
        { word: 'promote', ipa: '/prəˈməʊt/', pos: 'verb', def: 'To advance or advertise.', example: 'She was promoted to manager.', glyph: '📢', theme: 'coral' },
        { word: 'launch', ipa: '/lɔːntʃ/', pos: 'verb', def: 'To start something new.', example: 'We launch the product in June.', glyph: '🚀', theme: 'red' },
        { word: 'revenue', ipa: '/ˈrev.ən.juː/', pos: 'noun', def: 'Total income from business.', example: 'Revenue increased 20 percent.', glyph: '💰', theme: 'green' },
        { word: 'efficient', ipa: '/ɪˈfɪʃ.ənt/', pos: 'adjective', def: 'Working without waste.', example: 'She is an efficient worker.', glyph: '⚡', theme: 'amber' },
        { word: 'feedback', ipa: '/ˈfiːd.bæk/', pos: 'noun', def: 'Comments about performance.', example: 'Her feedback was helpful.', glyph: '💬', theme: 'teal' },
        { word: 'invest', ipa: '/ɪnˈvest/', pos: 'verb', def: 'To put money for profit.', example: 'They invest in technology.', glyph: '📊', theme: 'blue' },
        { word: 'industry', ipa: '/ˈɪn.də.stri/', pos: 'noun', def: 'A branch of economic activity.', example: 'The tech industry grows fast.', glyph: '🏭', theme: 'gray' },
        { word: 'brand', ipa: '/brænd/', pos: 'noun', def: 'A product name and image.', example: 'Apple is a famous brand.', glyph: '🏷️', theme: 'coral' },
        { word: 'network', ipa: '/ˈnet.wɜːk/', pos: 'verb', def: 'To meet people for business.', example: 'Network at conferences.', glyph: '🌐', theme: 'blue' },
        { word: 'supplier', ipa: '/səˈplaɪ.ər/', pos: 'noun', def: 'A company that provides goods.', example: 'We need a new supplier.', glyph: '📦', theme: 'amber' },
      ],

      // ----- B2 -----
      B2: [
        { word: 'leverage', ipa: '/ˈliː.və.rɪdʒ/', pos: 'verb', def: 'To use for advantage.', example: 'We leverage data for decisions.', glyph: '⚖️', theme: 'purple' },
        { word: 'stakeholder', ipa: '/ˈsteɪk.həʊl.dər/', pos: 'noun', def: 'A person with business interest.', example: 'All stakeholders approved.', glyph: '🤝', theme: 'blue' },
        { word: 'streamline', ipa: '/ˈstriːm.laɪn/', pos: 'verb', def: 'To make more efficient.', example: 'We streamline the process.', glyph: '🔧', theme: 'teal' },
        { word: 'synergy', ipa: '/ˈsɪn.ə.dʒi/', pos: 'noun', def: 'Combined effort greater than parts.', example: 'The teams show synergy.', glyph: '🔗', theme: 'coral' },
        { word: 'scalable', ipa: '/ˈskeɪ.lə.bəl/', pos: 'adjective', def: 'Able to grow.', example: 'Our platform is scalable.', glyph: '📈', theme: 'green' },
        { word: 'delegate', ipa: '/ˈdel.ɪ.ɡeɪt/', pos: 'verb', def: 'To give a task to others.', example: 'Good managers delegate.', glyph: '📨', theme: 'blue' },
        { word: 'innovation', ipa: '/ˌɪn.əˈveɪ.ʃən/', pos: 'noun', def: 'New ideas or methods.', example: 'Innovation drives us.', glyph: '💡', theme: 'amber' },
        { word: 'compliance', ipa: '/kəmˈplaɪ.əns/', pos: 'noun', def: 'Following rules.', example: 'Compliance is essential.', glyph: '✅', theme: 'green' },
        { word: 'acquisition', ipa: '/ˌæk.wɪˈzɪʃ.ən/', pos: 'noun', def: 'Buying another company.', example: 'The acquisition cost 2 billion.', glyph: '🏢', theme: 'gray' },
        { word: 'liability', ipa: '/ˌlaɪ.əˈbɪl.ə.ti/', pos: 'noun', def: 'A debt or obligation.', example: 'The company has liabilities.', glyph: '📉', theme: 'red' },
        { word: 'portfolio', ipa: '/pɔːtˈfəʊ.li.əʊ/', pos: 'noun', def: 'A collection of investments.', example: 'Diversify your portfolio.', glyph: '📁', theme: 'purple' },
        { word: 'outsource', ipa: '/ˈaʊt.sɔːs/', pos: 'verb', def: 'To hire outside for work.', example: 'We outsource support.', glyph: '🌍', theme: 'blue' },
      ],

      // ----- C1 -----
      C1: [
        { word: 'paradigm', ipa: '/ˈpær.ə.daɪm/', pos: 'noun', def: 'A standard model.', example: 'Remote work is the new paradigm.', glyph: '🧩', theme: 'purple' },
        { word: 'consolidate', ipa: '/kənˈsɒl.ɪ.deɪt/', pos: 'verb', def: 'To combine into one.', example: 'The firm will consolidate.', glyph: '🔗', theme: 'teal' },
        { word: 'disruptive', ipa: '/dɪsˈrʌp.tɪv/', pos: 'adjective', def: 'Causing radical change.', example: 'Disruptive tech changes markets.', glyph: '⚡', theme: 'red' },
        { word: 'proprietary', ipa: '/prəˈpraɪə.tər.i/', pos: 'adjective', def: 'Owned by a company.', example: 'They use proprietary software.', glyph: '🔐', theme: 'blue' },
        { word: 'mitigate', ipa: '/ˈmɪt.ɪ.ɡeɪt/', pos: 'verb', def: 'To make less severe.', example: 'We mitigate risk with insurance.', glyph: '🛡️', theme: 'green' },
        { word: 'underwrite', ipa: '/ˈʌn.də.raɪt/', pos: 'verb', def: 'To agree to support financially.', example: 'Banks underwrite bonds.', glyph: '✍️', theme: 'amber' },
        { word: 'arbitrage', ipa: '/ˈɑː.bɪ.trɑːʒ/', pos: 'noun', def: 'Profiting from price differences.', example: 'Currency arbitrage is fast.', glyph: '🔄', theme: 'coral' },
        { word: 'solvent', ipa: '/ˈsɒl.vənt/', pos: 'adjective', def: 'Able to pay debts.', example: 'The company remains solvent.', glyph: '💵', theme: 'green' },
        { word: 'overhead', ipa: '/ˈəʊ.və.hed/', pos: 'noun', def: 'Ongoing business expenses.', example: 'Reduce overhead to profit.', glyph: '🏛️', theme: 'gray' },
        { word: 'quorum', ipa: '/ˈkwɔː.rəm/', pos: 'noun', def: 'Minimum members to vote.', example: 'We need a quorum.', glyph: '👥', theme: 'blue' },
        { word: 'incentivize', ipa: '/ɪnˈsen.tɪ.vaɪz/', pos: 'verb', def: 'To motivate with rewards.', example: 'We incentivize performance.', glyph: '🎁', theme: 'pink' },
        { word: 'prerequisite', ipa: '/ˌpriːˈrek.wɪ.zɪt/', pos: 'noun', def: 'Something required in advance.', example: 'Experience is a prerequisite.', glyph: '🎯', theme: 'red' },
      ],

      // ----- C2 -----
      C2: [
        { word: 'fiduciary', ipa: '/fɪˈdjuː.ʃər.i/', pos: 'adjective', def: 'Involving financial trust.', example: 'Directors have fiduciary duties.', glyph: '⚖️', theme: 'blue' },
        { word: 'oligopoly', ipa: '/ˌɒl.ɪˈɡɒp.əl.i/', pos: 'noun', def: 'Market controlled by few.', example: 'Telecom is an oligopoly.', glyph: '🏛️', theme: 'gray' },
        { word: 'hegemony', ipa: '/hɪˈɡem.ə.ni/', pos: 'noun', def: 'Dominance over others.', example: 'The firm achieved hegemony.', glyph: '👑', theme: 'amber' },
        { word: 'amortize', ipa: '/əˈmɔː.taɪz/', pos: 'verb', def: 'To pay off debt gradually.', example: 'We amortize the loan.', glyph: '📉', theme: 'red' },
        { word: 'indemnity', ipa: '/ɪnˈdem.nə.ti/', pos: 'noun', def: 'Protection against loss.', example: 'The contract has indemnity clauses.', glyph: '🛡️', theme: 'teal' },
        { word: 'escrow', ipa: '/ˈes.krəʊ/', pos: 'noun', def: 'Funds held by third party.', example: 'Money stays in escrow.', glyph: '🔒', theme: 'purple' },
        { word: 'dividend', ipa: '/ˈdɪv.ɪ.dend/', pos: 'noun', def: 'Profit shared with shareholders.', example: 'Shareholders get dividends.', glyph: '💎', theme: 'green' },
        { word: 'perquisite', ipa: '/ˈpɜː.kwɪ.zɪt/', pos: 'noun', def: 'An extra job benefit.', example: 'Insurance is a perquisite.', glyph: '🎁', theme: 'pink' },
        { word: 'cartel', ipa: '/kɑːˈtel/', pos: 'noun', def: 'A group fixing prices.', example: 'The cartel controlled prices.', glyph: '⛽', theme: 'coral' },
        { word: 'arbitrator', ipa: '/ˈɑː.bɪ.treɪ.tər/', pos: 'noun', def: 'Neutral dispute resolver.', example: 'An arbitrator settled it.', glyph: '⚖️', theme: 'blue' },
        { word: 'preeminent', ipa: '/priˈem.ɪ.nənt/', pos: 'adjective', def: 'Surpassing all others.', example: 'She is preeminent in her field.', glyph: '🥇', theme: 'amber' },
        { word: 'autonomy', ipa: '/ɔːˈtɒn.ə.mi/', pos: 'noun', def: 'Independence and self-governance.', example: 'Employees value autonomy.', glyph: '🗝️', theme: 'purple' },
      ],
    },
  },

  // =========================================================
  // SET 3 — TRAVEL & PLACES
  // =========================================================
  travel: {
    name: 'Travel & Places',
    desc: 'Vocabulary for exploring',
    icon: '✈️',
    iconBg: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    levels: {

      // ----- A1 -----
      A1: [
        { word: 'map', ipa: '/mæp/', pos: 'noun', def: 'A drawing of an area.', example: 'I use a map to find the way.', ar: 'خريطة', zh: '地图', glyph: '🗺️', theme: 'blue' },
        { word: 'city', ipa: '/ˈsɪt.i/', pos: 'noun', def: 'A large town.', example: 'Paris is a beautiful city.', ar: 'مدينة', zh: '城市', glyph: '🏙️', theme: 'gray' },
        { word: 'bag', ipa: '/bæɡ/', pos: 'noun', def: 'Container for things.', example: 'My bag is heavy.', ar: 'حقيبة', zh: '包', glyph: '🎒', theme: 'coral' },
        { word: 'hotel', ipa: '/həʊˈtel/', pos: 'noun', def: 'Where travelers sleep.', example: 'Our hotel is near the beach.', ar: 'فندق', zh: '酒店', glyph: '🏨', theme: 'purple' },
        { word: 'plane', ipa: '/pleɪn/', pos: 'noun', def: 'A vehicle that flies.', example: 'The plane is fast.', ar: 'طائرة', zh: '飞机', glyph: '✈️', theme: 'blue' },
        { word: 'train', ipa: '/treɪn/', pos: 'noun', def: 'Long vehicle on rails.', example: 'The train leaves at nine.', ar: 'قطار', zh: '火车', glyph: '🚆', theme: 'red' },
        { word: 'bus', ipa: '/bʌs/', pos: 'noun', def: 'Large road vehicle.', example: 'I take the bus to school.', ar: 'حافلة', zh: '公共汽车', glyph: '🚌', theme: 'amber' },
        { word: 'street', ipa: '/striːt/', pos: 'noun', def: 'A road in a town.', example: 'My house is on this street.', ar: 'شارع', zh: '街道', glyph: '🛣️', theme: 'gray' },
        { word: 'sea', ipa: '/siː/', pos: 'noun', def: 'Large area of salt water.', example: 'The sea is blue and calm.', ar: 'بحر', zh: '海', glyph: '🌊', theme: 'blue' },
        { word: 'park', ipa: '/pɑːk/', pos: 'noun', def: 'Open area with grass.', example: 'We walk in the park.', ar: 'حديقة', zh: '公园', glyph: '🌳', theme: 'green' },
        { word: 'food', ipa: '/fuːd/', pos: 'noun', def: 'What we eat.', example: 'The food here is good.', ar: 'طعام', zh: '食物', glyph: '🍱', theme: 'coral' },
        { word: 'go', ipa: '/ɡəʊ/', pos: 'verb', def: 'To move to another place.', example: 'We go to the beach.', ar: 'يذهب', zh: '去', glyph: '🚶', theme: 'teal' },
      ],

      // ----- A2 -----
      A2: [
        { word: 'passport', ipa: '/ˈpɑːs.pɔːt/', pos: 'noun', def: 'Official travel document.', example: 'Bring your passport.', ar: 'جواز سفر', zh: '护照', glyph: '🛂', theme: 'blue' },
        { word: 'suitcase', ipa: '/ˈsuːt.keɪs/', pos: 'noun', def: 'Large bag for clothes.', example: 'My suitcase is full.', ar: 'حقيبة سفر', zh: '行李箱', glyph: '🧳', theme: 'coral' },
        { word: 'tourist', ipa: '/ˈtʊə.rɪst/', pos: 'noun', def: 'A person visiting for fun.', example: 'Many tourists visit Rome.', ar: 'سائح', zh: '游客', glyph: '📸', theme: 'amber' },
        { word: 'journey', ipa: '/ˈdʒɜː.ni/', pos: 'noun', def: 'A trip between places.', example: 'The journey took six hours.', ar: 'رحلة', zh: '旅程', glyph: '🗺️', theme: 'teal' },
        { word: 'luggage', ipa: '/ˈlʌɡ.ɪdʒ/', pos: 'noun', def: 'Bags for travel.', example: 'I lost my luggage.', ar: 'أمتعة', zh: '行李', glyph: '🧳', theme: 'purple' },
        { word: 'reservation', ipa: '/ˌrez.əˈveɪ.ʃən/', pos: 'noun', def: 'An arrangement booked.', example: 'I have a reservation for two.', ar: 'حجز', zh: '预订', glyph: '📝', theme: 'blue' },
        { word: 'souvenir', ipa: '/ˌsuː.vəˈnɪər/', pos: 'noun', def: 'Thing bought to remember trip.', example: 'I bought souvenirs.', ar: 'تذكار', zh: '纪念品', glyph: '🎁', theme: 'pink' },
        { word: 'foreign', ipa: '/ˈfɒr.ən/', pos: 'adjective', def: 'From another country.', example: 'I love foreign languages.', ar: 'أجنبي', zh: '外国的', glyph: '🌏', theme: 'green' },
        { word: 'currency', ipa: '/ˈkʌr.ən.si/', pos: 'noun', def: 'Money of a country.', example: 'The currency is the euro.', ar: 'عملة', zh: '货币', glyph: '💱', theme: 'amber' },
        { word: 'departure', ipa: '/dɪˈpɑː.tʃər/', pos: 'noun', def: 'The act of leaving.', example: 'Departure is at 8 PM.', ar: 'مغادرة', zh: '出发', glyph: '🛫', theme: 'blue' },
        { word: 'arrival', ipa: '/əˈraɪ.vəl/', pos: 'noun', def: 'The act of reaching a place.', example: 'Our arrival was delayed.', ar: 'وصول', zh: '到达', glyph: '🛬', theme: 'green' },
        { word: 'backpack', ipa: '/ˈbæk.pæk/', pos: 'noun', def: 'A bag on your back.', example: 'She travels with a backpack.', ar: 'حقيبة ظهر', zh: '背包', glyph: '🎒', theme: 'coral' },
      ],

      // ----- B1 -----
      B1: [
        { word: 'itinerary', ipa: '/aɪˈtɪn.ər.ər.i/', pos: 'noun', def: 'A plan of a trip.', example: 'Check tomorrows itinerary.', glyph: '📋', theme: 'blue' },
        { word: 'accommodation', ipa: '/əˌkɒm.əˈdeɪ.ʃən/', pos: 'noun', def: 'A place to stay.', example: 'We booked accommodation online.', glyph: '🏨', theme: 'purple' },
        { word: 'destination', ipa: '/ˌdes.tɪˈneɪ.ʃən/', pos: 'noun', def: 'Where you travel to.', example: 'Our destination is Tokyo.', glyph: '📍', theme: 'red' },
        { word: 'adventure', ipa: '/ədˈven.tʃər/', pos: 'noun', def: 'An exciting experience.', example: 'The hike was an adventure.', glyph: '🧗', theme: 'amber' },
        { word: 'scenic', ipa: '/ˈsiː.nɪk/', pos: 'adjective', def: 'Having beautiful views.', example: 'The scenic route is longer.', glyph: '🏞️', theme: 'green' },
        { word: 'local', ipa: '/ˈləʊ.kəl/', pos: 'adjective', def: 'Of the area youre in.', example: 'Try the local food.', glyph: '🏘️', theme: 'coral' },
        { word: 'cuisine', ipa: '/kwɪˈziːn/', pos: 'noun', def: 'A style of cooking.', example: 'Thai cuisine is spicy.', glyph: '🍜', theme: 'coral' },
        { word: 'landmark', ipa: '/ˈlænd.mɑːk/', pos: 'noun', def: 'A famous recognizable place.', example: 'The tower is a landmark.', glyph: '🗽', theme: 'gray' },
        { word: 'border', ipa: '/ˈbɔː.dər/', pos: 'noun', def: 'Line between countries.', example: 'We crossed the border.', glyph: '🚧', theme: 'amber' },
        { word: 'guide', ipa: '/ɡaɪd/', pos: 'noun', def: 'A person who shows the way.', example: 'Our guide spoke three languages.', glyph: '🧭', theme: 'blue' },
        { word: 'deposit', ipa: '/dɪˈpɒz.ɪt/', pos: 'noun', def: 'Money paid in advance.', example: 'Pay a 20 percent deposit.', glyph: '💰', theme: 'green' },
        { word: 'explore', ipa: '/ɪkˈsplɔːr/', pos: 'verb', def: 'To travel and discover.', example: 'Lets explore the old town.', glyph: '🔍', theme: 'teal' },
      ],

      // ----- B2 -----
      B2: [
        { word: 'excursion', ipa: '/ɪkˈskɜː.ʃən/', pos: 'noun', def: 'A short trip for pleasure.', example: 'The excursion included a boat.', glyph: '⛵', theme: 'blue' },
        { word: 'picturesque', ipa: '/ˌpɪk.tʃərˈesk/', pos: 'adjective', def: 'Pretty in a charming way.', example: 'The village is picturesque.', glyph: '🏡', theme: 'pink' },
        { word: 'nomadic', ipa: '/nəʊˈmæd.ɪk/', pos: 'adjective', def: 'Moving from place to place.', example: 'She leads a nomadic life.', glyph: '🐫', theme: 'amber' },
        { word: 'voyage', ipa: '/ˈvɔɪ.ɪdʒ/', pos: 'noun', def: 'Long sea journey.', example: 'The voyage took weeks.', glyph: '🚢', theme: 'blue' },
        { word: 'customs', ipa: '/ˈkʌs.təmz/', pos: 'noun', def: 'Border inspection officers.', example: 'Customs inspected our bags.', glyph: '🛃', theme: 'gray' },
        { word: 'cosmopolitan', ipa: '/ˌkɒz.məˈpɒl.ɪ.tən/', pos: 'adjective', def: 'Including many cultures.', example: 'Singapore is cosmopolitan.', glyph: '🌆', theme: 'purple' },
        { word: 'expedition', ipa: '/ˌek.spəˈdɪʃ.ən/', pos: 'noun', def: 'Organized journey for exploration.', example: 'The Antarctic expedition lasted months.', glyph: '⛺', theme: 'teal' },
        { word: 'remote', ipa: '/rɪˈməʊt/', pos: 'adjective', def: 'Far from people.', example: 'We hiked to a remote lake.', glyph: '🏔️', theme: 'gray' },
        { word: 'bustling', ipa: '/ˈbʌs.əl.ɪŋ/', pos: 'adjective', def: 'Full of busy activity.', example: 'The bustling market was colorful.', glyph: '🎪', theme: 'red' },
        { word: 'exotic', ipa: '/ɪɡˈzɒt.ɪk/', pos: 'adjective', def: 'Strikingly unusual.', example: 'The island has exotic fruits.', glyph: '🥭', theme: 'amber' },
        { word: 'panoramic', ipa: '/ˌpæn.əˈræm.ɪk/', pos: 'adjective', def: 'Showing a wide view.', example: 'The tower offers panoramic views.', glyph: '🌄', theme: 'green' },
        { word: 'itinerant', ipa: '/aɪˈtɪn.ər.ənt/', pos: 'adjective', def: 'Traveling place to place.', example: 'Itinerant workers follow harvests.', glyph: '🚶‍♂️', theme: 'coral' },
      ],

      // ----- C1 -----
      C1: [
        { word: 'sojourn', ipa: '/ˈsɒdʒ.ɜːn/', pos: 'noun', def: 'A temporary stay.', example: 'Her Paris sojourn lasted a year.', glyph: '🏛️', theme: 'purple' },
        { word: 'pilgrimage', ipa: '/ˈpɪl.ɡrɪ.mɪdʒ/', pos: 'noun', def: 'Journey to a holy place.', example: 'Many make the pilgrimage yearly.', glyph: '🕍', theme: 'amber' },
        { word: 'trek', ipa: '/trek/', pos: 'noun', def: 'A long difficult journey.', example: 'The mountain trek was hard.', glyph: '🥾', theme: 'coral' },
        { word: 'vestige', ipa: '/ˈves.tɪdʒ/', pos: 'noun', def: 'A small remaining part.', example: 'Ancient vestiges still stand.', glyph: '🏺', theme: 'gray' },
        { word: 'wayfarer', ipa: '/ˈweɪ.feə.rər/', pos: 'noun', def: 'A traveler on foot.', example: 'The wayfarer rested at dusk.', glyph: '🧳', theme: 'teal' },
        { word: 'odyssey', ipa: '/ˈɒd.ə.si/', pos: 'noun', def: 'Long eventful journey.', example: 'Her career was an odyssey.', glyph: '⛵', theme: 'blue' },
        { word: 'enclave', ipa: '/ˈen.kleɪv/', pos: 'noun', def: 'Distinct area within a larger one.', example: 'The quarter is an artistic enclave.', glyph: '🏘️', theme: 'pink' },
        { word: 'archipelago', ipa: '/ˌɑː.kɪˈpel.ə.ɡəʊ/', pos: 'noun', def: 'A group of islands.', example: 'Indonesia is a vast archipelago.', glyph: '🏝️', theme: 'blue' },
        { word: 'eclectic', ipa: '/ɪˈklek.tɪk/', pos: 'adjective', def: 'Drawing from varied sources.', example: 'The city has eclectic architecture.', glyph: '🎨', theme: 'purple' },
        { word: 'secluded', ipa: '/sɪˈkluː.dɪd/', pos: 'adjective', def: 'Quiet and away from others.', example: 'We found a secluded cove.', glyph: '🏝️', theme: 'green' },
        { word: 'redolent', ipa: '/ˈred.əl.ənt/', pos: 'adjective', def: 'Strongly reminiscent.', example: 'The streets were redolent of spices.', glyph: '🌶️', theme: 'red' },
        { word: 'meander', ipa: '/miˈæn.dər/', pos: 'verb', def: 'To follow a winding path.', example: 'We meandered through the old town.', glyph: '🏞️', theme: 'teal' },
      ],

      // ----- C2 -----
      C2: [
        { word: 'peripatetic', ipa: '/ˌper.ɪ.pəˈtet.ɪk/', pos: 'adjective', def: 'Traveling place to place.', example: 'She led a peripatetic life.', glyph: '🚶‍♀️', theme: 'coral' },
        { word: 'denizen', ipa: '/ˈden.ɪ.zən/', pos: 'noun', def: 'An inhabitant of a place.', example: 'Forest denizens include deer.', glyph: '🦌', theme: 'green' },
        { word: 'wanderlust', ipa: '/ˈwɒn.də.lʌst/', pos: 'noun', def: 'Strong desire to travel.', example: 'Her wanderlust took her far.', glyph: '🌍', theme: 'purple' },
        { word: 'emigre', ipa: '/ˈem.ɪ.ɡreɪ/', pos: 'noun', def: 'A person who left their country.', example: 'The emigre founded a society.', glyph: '🛂', theme: 'blue' },
        { word: 'verdant', ipa: '/ˈvɜː.dənt/', pos: 'adjective', def: 'Green with vegetation.', example: 'The verdant valley stretched wide.', glyph: '🌿', theme: 'green' },
        { word: 'littoral', ipa: '/ˈlɪt.ər.əl/', pos: 'adjective', def: 'Relating to the shore.', example: 'Littoral ecosystems are rich.', glyph: '🏖️', theme: 'amber' },
        { word: 'bucolic', ipa: '/bjuːˈkɒl.ɪk/', pos: 'adjective', def: 'Relating to countryside.', example: 'We stayed in a bucolic farmhouse.', glyph: '🌾', theme: 'amber' },
        { word: 'crepuscular', ipa: '/krɪˈpʌs.kjə.lər/', pos: 'adjective', def: 'Of or resembling twilight.', example: 'Crepuscular animals emerge at dusk.', glyph: '🌆', theme: 'purple' },
        { word: 'autochthonous', ipa: '/ɔːˈtɒk.θən.əs/', pos: 'adjective', def: 'Native to the place.', example: 'Autochthonous plants thrive here.', glyph: '🌱', theme: 'green' },
        { word: 'liminal', ipa: '/ˈlɪm.ɪ.nəl/', pos: 'adjective', def: 'At a boundary or transition.', example: 'Airports feel liminal.', glyph: '🚪', theme: 'teal' },
        { word: 'transmigration', ipa: '/ˌtrænz.maɪˈɡreɪ.ʃən/', pos: 'noun', def: 'Movement between places.', example: 'Seasonal transmigration defines the species.', glyph: '🦅', theme: 'blue' },
        { word: 'chthonic', ipa: '/ˈkθɒn.ɪk/', pos: 'adjective', def: 'Relating to the underworld.', example: 'Chthonic caverns lie beneath.', glyph: '🕳️', theme: 'gray' },
      ],
    },
  },

};
