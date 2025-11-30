'use client'

import { useState } from 'react'

export default function Roadmap() {
  const [currentStage, setCurrentStage] = useState('mvp')

  const developmentStages = [
    {
      id: 'idea',
      name: 'Идея / Прототип',
      status: 'completed',
      description: 'Разработка основной концепции и архитектуры ИИ',
      timeline: '1-2 месяца',
      features: [
        'Разработка концепции цифрового двойника',
        'Проектирование архитектуры ИИ моделей',
        'Стратегия сбора первоначальных данных',
        'Прототип 3D визуализации'
      ],
      achievements: [
        'Утвержден проект ИИ моделей',
        'Создан прототип 3D визуализации',
        'Сформирована первоначальная база данных'
      ]
    },
    {
      id: 'prototype',
      name: 'Прототип',
      status: 'completed',
      description: 'Разработка основных ИИ моделей и 3D визуализации',
      timeline: '3-4 месяца',
      features: [
        'Модель оценки состояния здоровья',
        'Прототип системы прогнозирования рисков',
        '3D визуализация цифрового двойника',
        'Обработка основных биомаркеров'
      ],
      achievements: [
        'Запущена модель прогнозирования состояния сердца',
        'Создана первая версия 3D аватара',
        'Система обработки данных в реальном времени'
      ]
    },
    {
      id: 'mvp',
      name: 'MVP (Минимальный Жизнеспособный Продукт)',
      status: 'current',
      description: 'Рабочая версия продукта с основной функциональностью',
      timeline: '5-8 месяцев',
      features: [
        'Полноценная платформа цифрового двойника',
        '4 основных модуля прогнозирования',
        '3D визуализация в реальном времени',
        'Система персональных рекомендаций',
        'Мобильный интерфейс и API'
      ],
      achievements: [
        'Платформа открыта для пользователей',
        'Первые 1000 пользователей',
        '98% точность прогнозирования'
      ]
    },
    {
      id: 'launched',
      name: 'Запущенный Продукт',
      status: 'upcoming',
      description: 'Полномасштабная платформа и новые функции',
      timeline: '9-12 месяцев',
      features: [
        'Добавление расширенных биомаркеров',
        'Интеграция генетических данных',
        'Полная интеграция с носимых устройствами',
        'Выход на международный уровень',
        'Enterprise версия'
      ],
      achievements: [
        '10,000+ активных пользователей',
        'Международные сертификаты',
        'Партнерство с крупными медицинскими центрами'
      ]
    }
  ]

  const mvpFeatures = [
    {
      category: 'Основные Модули ИИ',
      features: [
        {
          name: 'Оценка Состояния Здоровья',
          description: 'Оценка состояния сердца, стресса, усталости и уровня восстановления',
          status: 'completed',
          tech: ['PyTorch', 'LSTM', 'GRU Networks']
        },
        {
          name: 'Система Прогнозирования Рисков',
          description: 'Прогнозирование риска инсульта, нарушений сна и чрезмерных нагрузок на 24 часа',
          status: 'completed',
          tech: ['LightGBM', '1D-CNN', 'Ensemble Learning']
        },
        {
          name: 'ИИ Цифрового Двойника',
          description: 'Создание персонального цифрового двойника на основе биомаркеров',
          status: 'in-progress',
          tech: ['Neural Networks', 'Biomarker Fusion']
        },
        {
          name: 'Рекомендательный ИИ',
          description: 'Персонализированные рекомендации по здоровому образу жизни',
          status: 'in-progress',
          tech: ['Reinforcement Learning', 'Personalized ML']
        }
      ]
    },
    {
      category: 'Визуализация и Интерфейс',
      features: [
        {
          name: '3D Цифровой Двойник',
          description: 'Интерактивный аватар, показывающий сердцебиение, стресс и состояние в реальном времени',
          status: 'completed',
          tech: ['Three.js', 'WebGL', 'Real-time Rendering']
        },
        {
          name: 'Прогноз Здоровья на 24ч',
          description: 'Панель прогнозирования HRV, качества сна на следующие 24 часа',
          status: 'in-progress',
          tech: ['React', 'Recharts', 'D3.js']
        },
        {
          name: 'Панель Управления Рисками',
          description: 'Система показателей рисков и предупреждений',
          status: 'in-progress',
          tech: ['Next.js', 'WebSocket', 'Real-time Alerts']
        }
      ]
    },
    {
      category: 'Данные и Интеграция',
      features: [
        {
          name: 'Слияние Данных из Множества Источников',
          description: 'Объединение и анализ биомаркеров из различных источников',
          status: 'completed',
          tech: ['Data Pipeline', 'ETL Processes', 'API Integration']
        },
        {
          name: 'API Носимых Устройств',
          description: 'Интеграция с Apple Watch, Fitbit и другими устройствами',
          status: 'in-progress',
          tech: ['REST API', 'OAuth2', 'Webhooks']
        },
        {
          name: 'Аналитика в Реальном Времени',
          description: 'Мгновенная аналитика и визуализация',
          status: 'completed',
          tech: ['Redis', 'WebSocket', 'FastAPI']
        }
      ]
    }
  ]

  const technologyStack = [
    {
      category: 'Фронтенд',
      technologies: [
        { name: 'React / Next.js', purpose: 'Основной пользовательский интерфейс' },
        { name: 'TypeScript', purpose: 'Типобезопасность и масштабируемая разработка' },
        { name: 'Three.js', purpose: '3D визуализация цифрового двойника' },
        { name: 'Tailwind CSS', purpose: 'Современный и адаптивный дизайн' },
        { name: 'Recharts / D3.js', purpose: 'Графики аналитики и прогнозирования' }
      ]
    },
    {
      category: 'Бэкенд & ИИ',
      technologies: [
        { name: 'FastAPI', purpose: 'Высокопроизводительный Python бэкенд' },
        { name: 'PyTorch', purpose: 'Модели глубокого обучения и прогнозирования' },
        { name: 'LSTM / GRU Networks', purpose: 'Анализ временных рядов биомаркеров' },
        { name: 'LightGBM', purpose: 'Прогнозирование рисков и классификация' },
        { name: '1D-CNN', purpose: 'Обнаружение сложных паттернов в биомаркерах' }
      ]
    },
    {
      category: 'Базы Данных & Инфраструктура',
      technologies: [
        { name: 'PostgreSQL', purpose: 'Основная база данных' },
        { name: 'Redis', purpose: 'Кэширование в реальном времени и управление сессиями' },
        { name: 'Docker & Docker Compose', purpose: 'Контейнеризация и развертывание' },
        { name: 'AWS / Google Cloud', purpose: 'Облачная инфраструктура и масштабируемость' }
      ]
    }
  ]

  const nextSteps = [
    {
      phase: 'Краткосрочные (3 месяца)',
      goals: [
        'Завершение MVP и привлечение тестовых пользователей',
        'Повышение точности моделей прогнозирования выше 95%',
        'Разработка мобильной версии приложения',
        'Привлечение первых 1000 пользователей'
      ]
    },
    {
      phase: 'Среднесрочные (6-9 месяцев)',
      goals: [
        'Интеграция генетических данных',
        'Получение международных медицинских сертификатов (HIPAA, ISO)',
        'Начало партнерства с крупными медицинскими центрами',
        'Масштабирование платформы до 10,000+ пользователей'
      ]
    },
    {
      phase: 'Долгосрочные (12-18 месяцев)',
      goals: [
        'Непрерывное обучение и улучшение ИИ моделей',
        'Выход на международный рынок и локализация',
        'Разработка Enterprise версии',
        'Проведение научных исследований и клинических испытаний'
      ]
    }
  ]

  const currentStageData = developmentStages.find(stage => stage.id === currentStage)

  return (
    <section id="roadmap" className="py-20 bg-linear-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
            🗺️ Дорожная Карта & Этапы Развития
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наш <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Путь Развития
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Процесс разработки платформы цифрового двойника от идеи до полноценного продукта
          </p>
        </div>

        {/* Development Stages Timeline */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h3 className="text-2xl font-bold mb-4 md:mb-0">Этапы Разработки</h3>
            <div className="flex space-x-2 bg-gray-800 rounded-lg p-1">
              {developmentStages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setCurrentStage(stage.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentStage === stage.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {stage.name}
                </button>
              ))}
            </div>
          </div>

          {/* Current Stage Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Stage Overview */}
              <div className="lg:col-span-1">
                <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold">{currentStageData?.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      currentStageData?.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      currentStageData?.status === 'current' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {currentStageData?.status === 'completed' ? 'Завершен' :
                       currentStageData?.status === 'current' ? 'Текущий' : 'Следующий'}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{currentStageData?.description}</p>
                  <div className="flex items-center text-sm text-cyan-400">
                    <span>⏱️</span>
                    <span className="ml-2">{currentStageData?.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Features & Achievements */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-lg mb-4 flex items-center">
                      <span className="text-green-400 mr-2">✅</span>
                      Функциональность
                    </h5>
                    <ul className="space-y-3">
                      {currentStageData?.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-4 flex items-center">
                      <span className="text-yellow-400 mr-2">🏆</span>
                      Достигнутые Результаты
                    </h5>
                    <ul className="space-y-3">
                      {currentStageData?.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 shrink-0"></div>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MVP Features Detail */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Функциональность <span className="text-cyan-400">MVP</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mvpFeatures.map((category, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <h4 className="text-xl font-bold mb-6 text-cyan-400">{category.category}</h4>
                <div className="space-y-4">
                  {category.features.map((feature, featIndex) => (
                    <div key={featIndex} className="bg-gray-700/30 rounded-xl p-4 border border-gray-600">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-white">{feature.name}</h5>
                        <span className={`px-2 py-1 rounded text-xs ${
                          feature.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {feature.status === 'completed' ? 'Завершен' : 'В Процессе'}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {feature.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-600/50 text-gray-300 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Технологический <span className="text-cyan-400">Стек</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyStack.map((stack, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h4 className="text-xl font-bold mb-6 text-center text-cyan-400">{stack.category}</h4>
                <div className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                      <div className="font-semibold text-white mb-2">{tech.name}</div>
                      <div className="text-gray-300 text-sm">{tech.purpose}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-3xl font-bold text-center mb-12">
            Следующие <span className="text-cyan-400">Шаги</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                  <span className="text-2xl">
                    {index === 0 ? '🚀' : index === 1 ? '📈' : '🌍'}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-cyan-400">{step.phase}</h4>
                <ul className="space-y-3 text-left">
                  {step.goals.map((goal, goalIndex) => (
                    <li key={goalIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-300 text-sm">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}