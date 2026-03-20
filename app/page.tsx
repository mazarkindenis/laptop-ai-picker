const laptopCards = [
  {
    name: 'Apple MacBook Air 13" (M3)',
    reason: 'Лёгкий и тихий ноутбук для работы, учёбы, браузера и повседневных задач.',
    pros: ['Автономность на весь день', 'Тихая работа без вентилятора', 'Яркий и качественный экран'],
    cons: ['Меньше портов', 'Ограниченная возможность апгрейда'],
    price: 'от 110 000 до 145 000 ₽'
  },
  {
    name: 'ASUS Zenbook 14 OLED',
    reason: 'Подойдёт тем, кому нужен баланс между мобильностью, экраном и производительностью.',
    pros: ['Контрастный OLED-дисплей', 'Компактный корпус', 'Хороший набор портов'],
    cons: ['Под нагрузкой становится шумнее', 'Автономность зависит от яркости OLED'],
    price: 'от 95 000 до 135 000 ₽'
  },
  {
    name: 'Lenovo Legion 5',
    reason: 'Надёжный вариант для игр, 3D, монтажа и других тяжёлых сценариев.',
    pros: ['Мощная графика', 'Эффективное охлаждение', 'Удобная клавиатура'],
    cons: ['Тяжелее ультрабуков', 'Меньше время работы без розетки'],
    price: 'от 120 000 до 180 000 ₽'
  }
];

const mockPrompt =
  'Нужен ноутбук для удалённой работы, множества вкладок в браузере, созвонов, иногда лёгкого монтажа и поездок.';

const recommendations = [
  'Смотреть на модели с 16 ГБ оперативной памяти и SSD от 512 ГБ.',
  'Если важна мобильность, выбирать вес до 1.5 кг и автономность от 10 часов.',
  'Для монтажа и графики лучше брать ноутбук с более мощным процессором и активным охлаждением.'
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                Минимальный MVP
              </span>
              <div className="space-y-3">
                <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  Подберу ноутбук под твою задачу
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                  Опиши, что тебе нужно, и сервис предложит подходящие варианты
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <label className="mb-3 block text-sm font-medium text-slate-700" htmlFor="prompt">
                Запрос
              </label>
              <textarea
                id="prompt"
                className="min-h-48 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 sm:text-base"
                defaultValue={mockPrompt}
                placeholder="Например: нужен лёгкий ноутбук для учёбы, работы в браузере и редких игр"
              />
              <button
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 sm:w-auto"
                type="button"
              >
                Подобрать
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-6">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Краткое описание запроса</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{mockPrompt}</p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Рекомендации</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                {recommendations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Карточки ноутбуков</h2>
                <p className="mt-1 text-sm text-slate-500">Пока используются моковые данные без подключения API и базы данных.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 xl:grid-cols-3">
              {laptopCards.map((card) => (
                <article
                  key={card.name}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Модель</p>
                      <h3 className="mt-1 text-xl font-semibold text-slate-900">{card.name}</h3>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Почему подходит</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{card.reason}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                      <div>
                        <p className="text-sm font-medium text-slate-900">Плюсы</p>
                        <ul className="mt-2 space-y-2 text-sm text-slate-600">
                          {card.pros.map((pro) => (
                            <li key={pro}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Минусы</p>
                        <ul className="mt-2 space-y-2 text-sm text-slate-600">
                          {card.cons.map((con) => (
                            <li key={con}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <p className="text-sm font-medium text-slate-900">Примерный диапазон цен</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">{card.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
