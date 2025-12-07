// app/demo/page.tsx
import {
  Activity,
  BarChart3,
  Brain,
  Clock,
  Code2,
  Cpu,
  FileText,
  Heart,
  HeartPulse,
  Moon,
  Play,
  Rocket,
  Shield,
  Smartphone,
  Target,
  TrendingUp,
} from 'lucide-react'

export default function DemoPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-950 to-black text-white'>
      {/* Hero Section with Video */}
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10' />
        <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent'>
                Демо: HealthTwin AI
              </span>
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Платформа цифрового двойника в реальном времени для прогнозной аналитики здоровья
            </p>
          </div>

          {/* Video Container - ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ 1 */}
          <div className='max-w-5xl mx-auto mb-16'>
            <div className='relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border-2 border-gray-800 group'>
              <div className='aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative'>
                <video
                  controls
                  className='w-full h-full object-cover'
                  autoPlay={true}
                  poster='/thumbnail.png'
                  src={'/main.mkv'}
                >
                  <source src='/demo-video.mkv' type='video/x-matroska' />
                  Ваш браузер не поддерживает тег video.
                </video>
              </div>

              {/* Video Controls Info */}
              <div className='absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2'>
                <Clock className='w-4 h-4' />
                <span className='text-sm font-mono'>3:45</span>
              </div>
            </div>

            {/* Video Chapters */}
            <div className='grid grid-cols-3 gap-4 mt-6'>
              <div className='bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-xl border border-blue-500/20'>
                <div className='text-sm text-blue-400 mb-1'>0:00 - 1:00</div>
                <div className='font-semibold'>Проблема & Решение</div>
              </div>
              <div className='bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 p-4 rounded-xl border border-emerald-500/20'>
                <div className='text-sm text-emerald-400 mb-1'>1:00 - 3:00</div>
                <div className='font-semibold'>Живая демонстрация</div>
              </div>
              <div className='bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-4 rounded-xl border border-purple-500/20'>
                <div className='text-sm text-purple-400 mb-1'>3:00 - 5:03</div>
                <div className='font-semibold'>Рынок & Бизнес-модель</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Description - ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ 2 */}
      <div className='py-16 bg-gradient-to-b from-black to-gray-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-800'>
            <div className='flex items-center gap-3 mb-8'>
              <FileText className='w-8 h-8 text-blue-400' />
              <h2 className='text-3xl font-bold'>Описание видео</h2>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='space-y-6'>
                <div>
                  <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                    <Play className='w-5 h-5 text-emerald-400' />
                    Что показано в видео
                  </h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start gap-3'>
                      <div className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5'>
                        <span className='text-blue-400 text-sm'>1</span>
                      </div>
                      <div>
                        <span className='font-semibold'>Проблема и решение (0:00-1:00):</span>
                        <p className='text-gray-300 mt-1'>
                          Ежегодно 17.9 миллионов человек умирают от предотвратимых болезней. Люди
                          не понимают состояние своего здоровья, пока не становится поздно.
                        </p>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <div className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5'>
                        <span className='text-blue-400 text-sm'>2</span>
                      </div>
                      <div>
                        <span className='font-semibold'>
                          Демонстрация Digital Twin (1:00-2:30):
                        </span>
                        <p className='text-gray-300 mt-1'>
                          Digital Twin модель Алишера. Показано изменение цвета сердца, уровня
                          стресса. AI прогнозирует качество сна, уровень стресса и дает
                          рекомендации.
                        </p>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <div className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5'>
                        <span className='text-blue-400 text-sm'>3</span>
                      </div>
                      <div>
                        <span className='font-semibold'>Бизнес-модель (2:30-3:45):</span>
                        <p className='text-gray-300 mt-1'>
                          Рынок HealthTech - $350 миллиардов, в Узбекистане - 35 миллионов
                          потенциальных пользователей. Возможности интеграции с АгроБанком.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                    <Activity className='w-5 h-5 text-rose-400' />
                    Связь проблемы и решения
                  </h3>
                  <div className='space-y-4'>
                    <div className='p-4 bg-gradient-to-r from-rose-500/10 to-rose-600/10 rounded-xl'>
                      <div className='font-bold text-rose-400 mb-2'>ПРОБЛЕМА:</div>
                      <p className='text-gray-300'>
                        Люди не понимают состояние своего здоровья в реальном времени. Болезни
                        обнаруживаются слишком поздно.
                      </p>
                    </div>
                    <div className='p-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-xl'>
                      <div className='font-bold text-emerald-400 mb-2'>РЕШЕНИЕ:</div>
                      <p className='text-gray-300'>
                        Моделирование физиологии человека через digital twin в реальном времени.
                        Прогнозирование рисков за 24 часа и персонализированные рекомендации.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                <div>
                  <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                    <Code2 className='w-5 h-5 text-purple-400' />
                    Технологии и стек
                  </h3>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='p-4 bg-gray-800/30 rounded-xl'>
                      <div className='font-bold text-blue-400 mb-2'>Frontend</div>
                      <ul className='text-sm space-y-1'>
                        <li>• Next.js 14 / React</li>
                        <li>• TypeScript</li>
                        <li>• Tailwind CSS</li>
                        <li>• Three.js (3D визуализация)</li>
                      </ul>
                    </div>
                    <div className='p-4 bg-gray-800/30 rounded-xl'>
                      <div className='font-bold text-emerald-400 mb-2'>Backend</div>
                      <ul className='text-sm space-y-1'>
                        <li>• FastAPI (Python)</li>
                        <li>• PostgreSQL</li>
                        <li>• Redis</li>
                        <li>• Docker</li>
                      </ul>
                    </div>
                    <div className='p-4 bg-gray-800/30 rounded-xl'>
                      <div className='font-bold text-purple-400 mb-2'>AI/ML</div>
                      <ul className='text-sm space-y-1'>
                        <li>• PyTorch / TensorFlow</li>
                        <li>• LSTM / GRU сети</li>
                        <li>• LightGBM (прогнозирование рисков)</li>
                        <li>• Scikit-learn</li>
                      </ul>
                    </div>
                    <div className='p-4 bg-gray-800/30 rounded-xl'>
                      <div className='font-bold text-amber-400 mb-2'>Интеграция</div>
                      <ul className='text-sm space-y-1'>
                        <li>• Wearable API (Fitbit/Apple)</li>
                        <li>• Биометрические сенсоры</li>
                        <li>• Medical Device APIs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                    <Rocket className='w-5 h-5 text-amber-400' />
                    Статус проекта и следующие шаги
                  </h3>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl'>
                      <div>
                        <div className='font-bold'>Статус проекта:</div>
                        <div className='text-2xl font-bold text-blue-400 mt-1'>MVP</div>
                      </div>
                      <div className='text-right'>
                        <div className='text-sm text-gray-400'>Прогресс</div>
                        <div className='text-2xl font-bold'>75%</div>
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <h4 className='font-bold'>Следующие шаги:</h4>
                      <div className='space-y-2'>
                        {[
                          {
                            step: '1',
                            text: 'Тренировка AI моделей (90% выполнено)',
                            status: 'active',
                          },
                          {
                            step: '2',
                            text: 'Разработка мобильного приложения (iOS/Android)',
                            status: 'pending',
                          },
                          {
                            step: '3',
                            text: 'Протокол интеграции с АгроБанком',
                            status: 'pending',
                          },
                          { step: '4', text: 'Начало клинических испытаний', status: 'planned' },
                        ].map(item => (
                          <div
                            key={item.step}
                            className='flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg'
                          >
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                item.status === 'active'
                                  ? 'bg-emerald-500/20 text-emerald-400'
                                  : item.status === 'pending'
                                  ? 'bg-amber-500/20 text-amber-400'
                                  : 'bg-blue-500/20 text-blue-400'
                              }`}
                            >
                              {item.step}
                            </div>
                            <span className='flex-1'>{item.text}</span>
                            {item.status === 'active' && (
                              <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Features Shown in Video */}
      <div className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Основные функции, показанные в видео</h2>
            <p className='text-gray-400'>Все основные функции, продемонстрированные в демо-видео</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                icon: <HeartPulse className='w-8 h-8' />,
                title: 'Визуализация Digital Twin',
                desc: "3D модель человека, изменение цвета сердца, 'аура' стресса",
                color: 'from-rose-500 to-pink-500',
                time: '1:15-1:45',
              },
              {
                icon: <Brain className='w-8 h-8' />,
                title: 'AI Аналитическая панель',
                desc: 'Анализ и прогнозирование биомаркеров в реальном времени',
                color: 'from-blue-500 to-cyan-500',
                time: '1:45-2:15',
              },
              {
                icon: <Shield className='w-8 h-8' />,
                title: 'Прогнозирование рисков',
                desc: 'Определение рисков заболеваний за 24 часа',
                color: 'from-amber-500 to-orange-500',
                time: '2:15-2:30',
              },
              {
                icon: <BarChart3 className='w-8 h-8' />,
                title: 'Прогноз здоровья',
                desc: 'Прогнозирование состояния здоровья на следующие 24 часа',
                color: 'from-emerald-500 to-teal-500',
                time: '2:30-2:45',
              },
              {
                icon: <Target className='w-8 h-8' />,
                title: 'Персонализированные рекомендации',
                desc: 'Индивидуальные рекомендации от AI',
                color: 'from-purple-500 to-violet-500',
                time: '2:45-3:00',
              },
              {
                icon: <Smartphone className='w-8 h-8' />,
                title: 'Мобильная интеграция',
                desc: 'Интеграция со смарт-часами и телефонами',
                color: 'from-indigo-500 to-blue-500',
                time: '3:00-3:15',
              },
              {
                icon: <TrendingUp className='w-8 h-8' />,
                title: 'Отслеживание прогресса',
                desc: 'Мониторинг изменений состояния здоровья',
                color: 'from-green-500 to-emerald-500',
                time: '3:15-3:30',
              },
              {
                icon: <Moon className='w-8 h-8' />,
                title: 'Оптимизация сна',
                desc: 'Оптимизация качества и времени сна',
                color: 'from-violet-500 to-purple-500',
                time: '3:30-3:45',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all group'
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <div className='text-white'>{feature.icon}</div>
                </div>
                <h3 className='text-lg font-bold mb-2'>{feature.title}</h3>
                <p className='text-sm text-gray-400 mb-3'>{feature.desc}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-xs text-gray-500'>Показано в видео:</span>
                  <span className='text-xs font-mono bg-gray-800 px-2 py-1 rounded'>
                    {feature.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Deep Dive */}
      <div className='py-16 bg-gradient-to-b from-gray-950 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-800'>
            <div className='flex items-center gap-3 mb-8'>
              <Cpu className='w-8 h-8 text-purple-400' />
              <h2 className='text-3xl font-bold'>AI решения и технологии</h2>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='p-6 bg-gray-800/30 rounded-xl'>
                <div className='w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4'>
                  <Brain className='w-6 h-6 text-blue-400' />
                </div>
                <h3 className='text-xl font-bold mb-3'>Модель состояния здоровья</h3>
                <ul className='space-y-2 text-sm text-gray-300'>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-blue-500' />
                    LSTM сети - анализ временных рядов
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-blue-500' />
                    Обработка биометрических данных в реальном времени
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-blue-500' />
                    Алгоритмы обнаружения аномалий
                  </li>
                </ul>
              </div>

              <div className='p-6 bg-gray-800/30 rounded-xl'>
                <div className='w-12 h-12 bg-gradient-to-r from-rose-500/20 to-rose-600/20 rounded-xl flex items-center justify-center mb-4'>
                  <Shield className='w-6 h-6 text-rose-400' />
                </div>
                <h3 className='text-xl font-bold mb-3'>Движок прогнозирования рисков</h3>
                <ul className='space-y-2 text-sm text-gray-300'>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-rose-500' />
                    LightGBM - прогнозирование рисков с точностью 94%
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-rose-500' />
                    24-часовой прогноз
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-rose-500' />
                    Мониторинг рисков в реальном времени
                  </li>
                </ul>
              </div>

              <div className='p-6 bg-gray-800/30 rounded-xl'>
                <div className='w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center mb-4'>
                  <Target className='w-6 h-6 text-emerald-400' />
                </div>
                <h3 className='text-xl font-bold mb-3'>Recommendation AI</h3>
                <ul className='space-y-2 text-sm text-gray-300'>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-emerald-500' />
                    Персонализированные протоколы здоровья
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-emerald-500' />
                    Адаптивные алгоритмы обучения
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-emerald-500' />
                    Контекстно-зависимые рекомендации
                  </li>
                </ul>
              </div>
            </div>

            <div className='mt-8 pt-8 border-t border-gray-700'>
              <h4 className='text-lg font-bold mb-4'>Источники данных и интеграции</h4>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {[
                  { name: 'Wearable устройства', count: '10+', icon: '⌚' },
                  { name: 'Медицинские API', count: '15+', icon: '🏥' },
                  { name: 'Биометрические сенсоры', count: '25+', icon: '📊' },
                  { name: 'Медицинские записи', count: 'EMR/EHR', icon: '📋' },
                ].map((source, idx) => (
                  <div key={idx} className='p-4 bg-gray-800/30 rounded-lg text-center'>
                    <div className='text-2xl mb-2'>{source.icon}</div>
                    <div className='font-semibold'>{source.name}</div>
                    <div className='text-sm text-gray-400'>{source.count} интеграций</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Roadmap */}
      <div className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Этапы развития проекта</h2>
            <p className='text-gray-400'>Путь от MVP до запуска на рынке</p>
          </div>

          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500'></div>

            {/* Timeline Items */}
            <div className='space-y-12'>
              {[
                {
                  phase: 'ИДЕЯ',
                  title: 'Первоначальная идея',
                  date: 'Q1 2024',
                  status: 'completed',
                  desc: 'Разработка концепции digital twin. Исследование рынка.',
                  features: ['Валидация концепции', 'Анализ рынка'],
                },
                {
                  phase: 'ПРОТОТИП',
                  title: 'Создание прототипа',
                  date: 'Q2 2024',
                  status: 'completed',
                  desc: 'Первая рабочая версия прототипа. Начальные версии AI моделей.',
                  features: ['Базовые AI модели', 'UI прототип'],
                },
                {
                  phase: 'MVP',
                  title: 'Минимально жизнеспособный продукт',
                  date: 'Q3-Q4 2024',
                  status: 'current',
                  desc: 'Полностью работоспособный MVP. Работа с реальными биометрическими данными.',
                  features: ['Полная интеграция', 'Бета-тестирование'],
                },
                {
                  phase: 'ЗАПУСК',
                  title: 'Выход на рынок',
                  date: 'Q1 2025',
                  status: 'planned',
                  desc: 'Выпуск полной версии. Партнерство с АгроБанком.',
                  features: ['Запуск на рынке', 'Партнерства'],
                },
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${
                    idx % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-64 ${
                      idx % 2 === 0 ? 'mr-auto pr-12 text-right' : 'ml-auto pl-12'
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl border ${
                        phase.status === 'completed'
                          ? 'border-emerald-500/30 bg-emerald-500/5'
                          : phase.status === 'current'
                          ? 'border-blue-500/30 bg-blue-500/5'
                          : 'border-gray-700 bg-gray-800/30'
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                          phase.status === 'completed'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : phase.status === 'current'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-gray-700 text-gray-400'
                        }`}
                      >
                        {phase.phase}
                      </div>
                      <h3 className='text-xl font-bold mb-2'>{phase.title}</h3>
                      <div className='text-sm text-gray-400 mb-3'>{phase.date}</div>
                      <p className='text-sm mb-4'>{phase.desc}</p>
                      <div className='space-y-2'>
                        {phase.features.map((feature, fIdx) => (
                          <div key={fIdx} className='text-xs bg-gray-800/50 px-3 py-1.5 rounded-lg'>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                      phase.status === 'completed'
                        ? 'border-emerald-500 bg-emerald-500'
                        : phase.status === 'current'
                        ? 'border-blue-500 bg-blue-500 animate-pulse'
                        : 'border-gray-600 bg-gray-700'
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='py-8 border-t border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 text-center text-gray-500'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <div className='p-2 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg'>
              <Heart className='w-5 h-5 text-white' />
            </div>
            <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent'>
              HealthTwin AI
            </span>
          </div>
          <p className='mb-4'>© 2024 Демо HealthTwin AI. Все права защищены.</p>
          <p className='text-sm'>
            Демо видео: 3:45 • Статус MVP: 75% • Следующий этап: Запуск на рынке Q1 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
