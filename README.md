Система с возможностью офлайн платежей под контолем блокчейн
=============
Бизнес система тип - "УБЕР"
Предусматривается 2 типа пользователь: Арендодатель и Арендатор
Арендатор заключает договор с Нашей организацией и получает гаджет-блокиратор (далее устройство) на любое двух колесное средство передвижения
Мы создаем ранговость велосипеду(продумать:ценовой сегмент(велосипедо до 300,до 500/ или подсчитать отдельн остоимость всех обвесов за одно занести их в реестр чтобы возмещать если их украдут)
Блокиратор также является крипто кошельком и нодой
При получении гаджета, Арендодатель генерирует секретный приватный ключ
Данный ключ хардверно прошивается в устройстве и привязывается к аккаунту Арендодателя
На основании сгенерированного секретного ключа в создается УНИКАЛЬНЫЙ ТОКЕН (именно этого устройства) 
При создании аккаунта любым типом пользователя им принимается, участие в СМАРТ КОНТРАКТЕ на оплату полученных ТОКЕНОВ (для оплаты в криптовалюте)
Арендатор сканирует QR код на устройсте с помощью мобильного прилажения
Выбирает способ оплаты (Крипто кошелек, карта)
Блокиратор разблокирует средство передвижения
в мобильном прилажение начинается отсчет времени аренды (сек)
После эксплуатации Арендатор также сканирует QR код и нажимает кнопку конец поездки
Блокиратор замыкает средство передвижения
В мобильном прилажении Показывается длительность (время) аренды и сумма списанных средств (Данный ключ хардверно прошивается в устройстве и привязывается к аккаунту Арендодателя и/или карта)
Если оба устройства (Гаджет блокиратор, мобильный телефон Арендатора) находятся в сети то:
На аккаунт(кошелек Арендатора) начисляется Токены 
стоимость токена = 1 сек аренды
Итоговая стоимость аренды = количество сек аренды * токен
По смарт контракту

система защиты в случае ФОРС МАЖОР неполадки телефона и выхода в слепую зону разместить на устройстве КРАСНУЮ кнопку прикращения списания средств,моментальная блокировка замка

Если ОБА устройства не в сети то:
записывается в реквест публичный и приватный ключи,
Ждем когда ктото из двух участников появится в сети и передаст данные 
происходит сверка и закрытие сделки

Если ОДНО ИЗ устройств не в сети то:
второй передает записанный реквест в сеть
второе устройсто по выходу в сеть так же отсылает данные 
происходит сверка и закрытие сделки( или отказ если данные подделаны\соответствуют)


1 транзакция решает 3 задачи:
-Дешевый(удешевление) билилнга(кто когда кому сколько должен)
-Доступность сервиса
-Оффлайн оплата услуги

При появлении в сети любого из устройств сделка закрывается
