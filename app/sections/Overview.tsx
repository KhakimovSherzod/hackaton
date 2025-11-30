'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Overview = () => {
  const [activeTab, setActiveTab] = useState('problem')

  const tabs = [
    { id: 'problem', label: 'Проблема' },
    { id: 'solution', label: 'Решение' },
    { id: 'features', label: 'Функции' },
    { id: 'technology', label: 'Технологии' },
    { id: 'business', label: 'Бизнес-модель' },
    { id: 'roadmap', label: 'План развития' },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-16'
        >
          <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>AgroHealth AI</h1>
          <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
            Искусственный интеллект, который строит цифрового двойника человека на основе
            биомаркеров, предсказывает состояния организма и даёт персональные рекомендации для
            здоровой жизни
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-12'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className='bg-white rounded-3xl shadow-2xl p-8'>
          {/* Problem Section */}
          {activeTab === 'problem' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>Глобальная Проблема</h2>

              <div className='grid md:grid-cols-2 gap-8'>
                <div className='space-y-6'>
                  <div className='bg-red-50 rounded-2xl p-6'>
                    <h3 className='text-xl font-semibold text-red-800 mb-3'>Здоровье населения</h3>
                    <ul className='space-y-2 text-red-700'>
                      <li className='flex items-start'>
                        <span className='text-red-500 mr-2'>•</span>
                        17.9 миллионов человек умирают от сердечно-сосудистых заболеваний ежегодно
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-500 mr-2'>•</span>
                        70% взрослых имеют проблемы со сном
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-500 mr-2'>•</span>
                        80% серьёзных заболеваний можно предотвратить ранней диагностикой
                      </li>
                    </ul>
                  </div>

                  <div className='bg-yellow-50 rounded-2xl p-6'>
                    <h3 className='text-xl font-semibold text-yellow-800 mb-3'>Экономические потери</h3>
                    <ul className='space-y-2 text-yellow-700'>
                      <li className='flex items-start'>
                        <span className='text-yellow-500 mr-2'>•</span>
                        $1 трлн ежегодных потерь от низкой продуктивности
                      </li>
                      <li className='flex items-start'>
                        <span className='text-yellow-500 mr-2'>•</span>
                        Рост расходов на здравоохранение на 40% за последние 5 лет
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='space-y-6'>
                  <div className='bg-orange-50 rounded-2xl p-6'>
                    <h3 className='text-xl font-semibold text-orange-800 mb-3'>
                      Проблемы для Агробанка
                    </h3>
                    <ul className='space-y-2 text-orange-700'>
                      <li className='flex items-start'>
                        <span className='text-orange-500 mr-2'>•</span>
                        Высокие риски при кредитовании
                      </li>
                      <li className='flex items-start'>
                        <span className='text-orange-500 mr-2'>•</span>
                        Сложность оценки рисков для страхования
                      </li>
                      <li className='flex items-start'>
                        <span className='text-orange-500 mr-2'>•</span>
                        Отсутствие wellness-программ
                      </li>
                      <li className='flex items-start'>
                        <span className='text-orange-500 mr-2'>•</span>
                        Низкая лояльность клиентов
                      </li>
                    </ul>
                  </div>

                  <div className='bg-purple-50 rounded-2xl p-6'>
                    <h3 className='text-xl font-semibold text-purple-800 mb-3'>Данные и диагностика</h3>
                    <ul className='space-y-2 text-purple-700'>
                      <li className='flex items-start'>
                        <span className='text-purple-500 mr-2'>•</span>
                        Отсутствие персонализированного подхода
                      </li>
                      <li className='flex items-start'>
                        <span className='text-purple-500 mr-2'>•</span>
                        Позднее выявление заболеваний
                      </li>
                      <li className='flex items-start'>
                        <span className='text-purple-500 mr-2'>•</span>
                        Недостаток превентивной медицины
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Solution Section */}
          {activeTab === 'solution' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>Наше Решение</h2>

              <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white'>
                <h3 className='text-2xl font-bold mb-4'>AgroHealth AI Digital Twin</h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-4'>
                    <div className='flex items-start'>
                      <div className='bg-white/20 rounded-lg p-2 mr-4'>
                        <span className='text-2xl'>👤</span>
                      </div>
                      <div>
                        <h4 className='font-semibold'>Цифровой Двойник</h4>
                        <p className='text-blue-100'>На основе биометрических данных</p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <div className='bg-white/20 rounded-lg p-2 mr-4'>
                        <span className='text-2xl'>🔮</span>
                      </div>
                      <div>
                        <h4 className='font-semibold'>Предсказания</h4>
                        <p className='text-blue-100'>Здоровье на 24-48 часов вперёд</p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <div className='bg-white/20 rounded-lg p-2 mr-4'>
                        <span className='text-2xl'>📊</span>
                      </div>
                      <div>
                        <h4 className='font-semibold'>Аналитика в реальном времени</h4>
                        <p className='text-blue-100'>Постоянный мониторинг состояния</p>
                      </div>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div className='flex items-start'>
                      <div className='bg-white/20 rounded-lg p-2 mr-4'>
                        <span className='text-2xl'>⚡</span>
                      </div>
                      <div>
                        <h4 className='font-semibold'>Оценка Рисков</h4>
                        <p className='text-blue-100'>Сердце, сон, стресс, метаболизм</p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <div className='bg-white/20 rounded-lg p-2 mr-4'>
                        <span className='text-2xl'>🏦</span>
                      </div>
                      <div>
                        <h4 className='font-semibold'>Интеграция с Банком</h4>
                        <p className='text-blue-100'>Персонализированные финансовые продукты</p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <div className='bg-white/20 rounded-lg p-2 mr-4'>
                        <span className='text-2xl'>💡</span>
                      </div>
                      <div>
                        <h4 className='font-semibold'>Рекомендации</h4>
                        <p className='text-blue-100'>Персональные советы для улучшения здоровья</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid md:grid-cols-3 gap-6 mt-8'>
                <div className='bg-green-50 rounded-2xl p-6 text-center'>
                  <div className='text-4xl mb-4'>🎯</div>
                  <h4 className='font-semibold text-green-800 mb-2'>Точность</h4>
                  <p className='text-green-600'>Точность предсказаний 94%</p>
                </div>
                <div className='bg-blue-50 rounded-2xl p-6 text-center'>
                  <div className='text-4xl mb-4'>🚀</div>
                  <h4 className='font-semibold text-blue-800 mb-2'>Скорость</h4>
                  <p className='text-blue-600'>Анализ в реальном времени</p>
                </div>
                <div className='bg-purple-50 rounded-2xl p-6 text-center'>
                  <div className='text-4xl mb-4'>🛡️</div>
                  <h4 className='font-semibold text-purple-800 mb-2'>Безопасность</h4>
                  <p className='text-purple-600'>Полная конфиденциальность данных</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Section */}
          {activeTab === 'features' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>Ключевые Функции (MVP)</h2>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[
                  {
                    icon: '❤️',
                    title: 'Оценка Состояния Здоровья',
                    features: ['Анализ сердца', 'Уровень стресса', 'Качество восстановления', 'Метаболические показатели'],
                  },
                  {
                    icon: '📊',
                    title: 'Предсказание Рисков',
                    features: ['Сердечно-сосудистые риски', 'Качество сна', 'Риск переутомления', 'Уровень энергии'],
                  },
                  {
                    icon: '👥',
                    title: '3D Digital Twin',
                    features: ['Интерактивный аватар', 'Анимация пульса', 'Визуализация стресса', 'История изменений'],
                  },
                  {
                    icon: '💡',
                    title: 'AI Рекомендации',
                    features: ['Персональные советы', 'Режим активности', 'Снижение стресса', 'Оптимизация сна'],
                  },
                  {
                    icon: '🏦',
                    title: 'Банковская Интеграция',
                    features: ['Скоринг здоровья', 'Страхование жизни', 'Wellness-программы', 'Персональные предложения'],
                  },
                  {
                    icon: '📱',
                    title: 'Мобильное Приложение',
                    features: ['Удобный интерфейс', 'Push-уведомления', 'Отчёты', 'История прогресса'],
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className='bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300'
                  >
                    <div className='text-3xl mb-4'>{feature.icon}</div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>{feature.title}</h3>
                    <ul className='space-y-2'>
                      {feature.features.map((item, idx) => (
                        <li key={idx} className='flex items-center text-gray-600'>
                          <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technology Section */}
          {activeTab === 'technology' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>Технологический Стек</h2>

              <div className='grid md:grid-cols-3 gap-8'>
                <div className='bg-blue-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-blue-900 mb-4'>Frontend</h3>
                  <ul className='space-y-3 text-blue-800'>
                    <li className='flex items-center'>
                      <span className='bg-blue-500 text-white rounded px-2 py-1 text-sm mr-3'>React</span>
                      <span>React.js / Next.js</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-blue-500 text-white rounded px-2 py-1 text-sm mr-3'>3D</span>
                      <span>Three.js (3D визуализация)</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-blue-500 text-white rounded px-2 py-1 text-sm mr-3'>Charts</span>
                      <span>Recharts / D3.js</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-blue-500 text-white rounded px-2 py-1 text-sm mr-3'>CSS</span>
                      <span>TailwindCSS</span>
                    </li>
                  </ul>
                </div>

                <div className='bg-green-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-green-900 mb-4'>Backend & AI</h3>
                  <ul className='space-y-3 text-green-800'>
                    <li className='flex items-center'>
                      <span className='bg-green-500 text-white rounded px-2 py-1 text-sm mr-3'>API</span>
                      <span>FastAPI (Python)</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-green-500 text-white rounded px-2 py-1 text-sm mr-3'>ML</span>
                      <span>PyTorch / LSTM / GRU</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-green-500 text-white rounded px-2 py-1 text-sm mr-3'>Models</span>
                      <span>1D-CNN / LightGBM</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-green-500 text-white rounded px-2 py-1 text-sm mr-3'>DB</span>
                      <span>PostgreSQL / Redis</span>
                    </li>
                  </ul>
                </div>

                <div className='bg-purple-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-purple-900 mb-4'>DevOps & Data</h3>
                  <ul className='space-y-3 text-purple-800'>
                    <li className='flex items-center'>
                      <span className='bg-purple-500 text-white rounded px-2 py-1 text-sm mr-3'>Cloud</span>
                      <span>Docker / Kubernetes</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-purple-500 text-white rounded px-2 py-1 text-sm mr-3'>CI/CD</span>
                      <span>GitHub Actions</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-purple-500 text-white rounded px-2 py-1 text-sm mr-3'>Wearables</span>
                      <span>Умные часы и трекеры</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-purple-500 text-white rounded px-2 py-1 text-sm mr-3'>Medical</span>
                      <span>Медицинские интеграции</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* AI Architecture */}
              <div className='bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mt-8'>
                <h3 className='text-2xl font-bold mb-4'>Архитектура AI Моделей</h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold text-orange-100 mb-2'>Модели предсказания</h4>
                    <ul className='space-y-2 text-orange-100'>
                      <li>• LSTM для временных рядов</li>
                      <li>• 1D-CNN для анализа сигналов</li>
                      <li>• LightGBM для классификации</li>
                      <li>• Ансамблирование моделей</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-orange-100 mb-2'>Обработка данных</h4>
                    <ul className='space-y-2 text-orange-100'>
                      <li>• Предобработка сигналов ЭКГ</li>
                      <li>• Анализ вариабельности сердца</li>
                      <li>• Детекция аномалий</li>
                      <li>• Feature engineering</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Business Model Section */}
          {activeTab === 'business' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>Бизнес-Модель & ROI</h2>

              <div className='grid md:grid-cols-2 gap-8'>
                <div className='space-y-6'>
                  <div className='bg-indigo-50 rounded-2xl p-6'>
                    <h3 className='text-xl font-semibold text-indigo-900 mb-4'>Монетизация</h3>
                    <ul className='space-y-3 text-indigo-800'>
                      <li className='flex items-start'>
                        <span className='bg-indigo-500 text-white rounded px-2 py-1 text-sm mr-3'>
                          B2B2C
                        </span>
                        <span>Премиум-сервис через Агробанк ($15/мес)</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='bg-indigo-500 text-white rounded px-2 py-1 text-sm mr-3'>
                          Corporate
                        </span>
                        <span>Wellness-программы для компаний ($50/сотрудник)</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='bg-indigo-500 text-white rounded px-2 py-1 text-sm mr-3'>
                          Insurance
                        </span>
                        <span>Персонализация страховых полисов (20% комиссия)</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='bg-indigo-500 text-white rounded px-2 py-1 text-sm mr-3'>
                          API
                        </span>
                        <span>Партнёрства с мед. учреждениями</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='space-y-6'>
                  <div className='bg-emerald-50 rounded-2xl p-6'>
                    <h3 className='text-xl font-semibold text-emerald-900 mb-4'>
                      ROI для Агробанка
                    </h3>
                    <ul className='space-y-3 text-emerald-800'>
                      <li className='flex items-center'>
                        <div className='w-3 h-3 bg-emerald-500 rounded-full mr-3'></div>
                        Снижение рисков на 15-20%
                      </li>
                      <li className='flex items-center'>
                        <div className='w-3 h-3 bg-emerald-500 rounded-full mr-3'></div>
                        Рост продаж страховки на 30%
                      </li>
                      <li className='flex items-center'>
                        <div className='w-3 h-3 bg-emerald-500 rounded-full mr-3'></div>
                        Повышение лояльности клиентов на 25%
                      </li>
                      <li className='flex items-center'>
                        <div className='w-3 h-3 bg-emerald-500 rounded-full mr-3'></div>
                        Увеличение lifetime value клиента
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Market Size */}
              <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-white'>
                <h3 className='text-2xl font-bold mb-4'>Размер Рынка</h3>
                <div className='grid md:grid-cols-3 gap-6'>
                  <div>
                    <h4 className='font-semibold text-cyan-100'>Global HealthTech</h4>
                    <p className='text-3xl font-bold'>$350B</p>
                    <p className='text-cyan-100'>к 2025 году</p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-cyan-100'>Узбекистан</h4>
                    <p className='text-3xl font-bold'>$100M</p>
                    <p className='text-cyan-100'>к 2026 году</p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-cyan-100'>ЦА Регион</h4>
                    <p className='text-3xl font-bold'>$500M</p>
                    <p className='text-cyan-100'>потенциальный рынок</p>
                  </div>
                </div>
              </div>

              {/* Financial Projections */}
              <div className='grid md:grid-cols-3 gap-6'>
                <div className='bg-white border border-gray-200 rounded-2xl p-6 text-center'>
                  <div className='text-2xl font-bold text-green-600 mb-2'>$2.5M</div>
                  <div className='text-gray-600'>Годовая выручка (год 2)</div>
                </div>
                <div className='bg-white border border-gray-200 rounded-2xl p-6 text-center'>
                  <div className='text-2xl font-bold text-blue-600 mb-2'>45%</div>
                  <div className='text-gray-600'>Маржинальность</div>
                </div>
                <div className='bg-white border border-gray-200 rounded-2xl p-6 text-center'>
                  <div className='text-2xl font-bold text-purple-600 mb-2'>18 мес</div>
                  <div className='text-gray-600'>Окупаемость инвестиций</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Roadmap Section */}
          {activeTab === 'roadmap' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>План Развития</h2>

              <div className='relative'>
                {/* Timeline */}
                <div className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200'></div>

                <div className='space-y-8'>
                  {[
                    {
                      phase: 'Фаза 1',
                      title: 'MVP (Hackathon - Декабрь 2025)',
                      items: [
                        'Core AI модели',
                        '3D Digital Twin',
                        'Базовая аналитика',
                        'Web-приложение',
                        'Интеграция с wearables',
                      ],
                      status: 'current',
                    },
                    {
                      phase: 'Фаза 2',
                      title: 'Beta (Q1 2026)',
                      items: [
                        'Мобильное приложение',
                        'Расширенная аналитика',
                        'API для Агробанка',
                        'Пилот с первыми клиентами',
                      ],
                      status: 'upcoming',
                    },
                    {
                      phase: 'Фаза 3',
                      title: 'Launch (Q2 2026)',
                      items: [
                        'Публичный запуск', 
                        'Монетизация',
                        'Партнёрства с клиниками',
                        'Массовый маркетинг'
                      ],
                      status: 'upcoming',
                    },
                    {
                      phase: 'Фаза 4',
                      title: 'Scale (Q3-Q4 2026)',
                      items: [
                        'Генетические данные',
                        'Расширенная аналитика',
                        'Региональная экспансия',
                        'Новые рынки',
                      ],
                      status: 'upcoming',
                    },
                  ].map((phase, index) => (
                    <div key={index} className='relative flex flex-col md:flex-row items-start'>
                      <div
                        className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white ${
                          phase.status === 'current' 
                            ? 'bg-green-500 shadow-lg' 
                            : 'bg-blue-500'
                        }`}
                      ></div>

                      <div
                        className={`ml-12 md:ml-0 md:w-1/2 ${
                          index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                        }`}
                      >
                        <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                          <div className='flex items-center mb-3'>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                phase.status === 'current'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {phase.phase}
                            </span>
                          </div>
                          <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                            {phase.title}
                          </h3>
                          <ul className='space-y-2 text-gray-600'>
                            {phase.items.map((item, idx) => (
                              <li key={idx} className='flex items-center'>
                                <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Team & Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mt-16 text-center'
        >
          <div className='bg-white rounded-3xl shadow-2xl p-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Команда & Контакты</h2>

            <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <div className='text-left'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Наша Команда</h3>
                <div className='space-y-4 text-gray-600'>
                  <div className='bg-gray-50 rounded-lg p-4'>
                    <p className='font-semibold'>Lead Developer</p>
                    <p className='text-sm'>Архитектура, backend, AI/ML модели</p>
                  </div>
                  <div className='bg-gray-50 rounded-lg p-4'>
                    <p className='font-semibold'>Full-Stack Developer</p>
                    <p className='text-sm'>Frontend, 3D визуализация, мобильное приложение</p>
                  </div>
                  <div className='bg-gray-50 rounded-lg p-4'>
                    <p className='font-semibold'>Data Scientist / ML Engineer</p>
                    <p className='text-sm'>Модели предсказаний, анализ данных</p>
                  </div>
                  <div className='bg-gray-50 rounded-lg p-4'>
                    <p className='font-semibold'>UI/UX Designer</p>
                    <p className='text-sm'>Дизайн, пользовательский опыт, презентация</p>
                  </div>
                </div>
              </div>

              <div className='text-left'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Контакты</h3>
                <div className='space-y-4 text-gray-600'>
                  <div className='bg-blue-50 rounded-lg p-4'>
                    <p className='font-semibold'>Название команды</p>
                    <p>Tech Titans</p>
                  </div>
                  <div className='bg-green-50 rounded-lg p-4'>
                    <p className='font-semibold'>Team Lead</p>
                    <p>Jasurbek</p>
                  </div>
                  <div className='bg-purple-50 rounded-lg p-4'>
                    <p className='font-semibold'>Email</p>
                    <p>Jasur10.12.22@gmail.com</p>
                  </div>
                  <div className='bg-orange-50 rounded-lg p-4'>
                    <p className='font-semibold'>Статус</p>
                    <p>Готовы к сотрудничеству с Агробанком</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Overview