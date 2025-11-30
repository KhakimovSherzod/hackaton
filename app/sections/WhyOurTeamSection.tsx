'use client'

import { useState } from 'react'

export default function WhyOurTeamSection() {
  const [activeTab, setActiveTab] = useState('expertise')

  const strengths = [
    {
      id: 'expertise',
      title: 'Экспертиза и Опыт',
      icon: '🎯',
      description: 'Глубокие знания и практический опыт в сфере медицинских технологий',
      points: [
        'Более 10 лет общего опыта в системах здравоохранения',
        'Сертификаты по HIPAA и безопасности медицинских данных',
        'Алгоритмы обработки медицинских данных в реальном времени',
        '3D медицинская визуализация и цифровые двойники',
      ],
    },
    {
      id: 'technology',
      title: 'Инновационные Технологии',
      icon: '🚀',
      description: 'Использование передовых технологий и AI решений',
      points: [
        'Уникальная комбинация AI и machine learning моделей',
        '3D визуализация и интерактивные дашборды в реальном времени',
        'Cloud-native архитектура и микросервисный подход',
        'Возможность интеграции с IoT устройствами',
      ],
    },
    {
      id: 'approach',
      title: 'Подход и Методология',
      icon: '🔄',
      description: 'Передовые методологии разработки и пользовательский дизайн',
      points: [
        'Разработка на основе Agile и Scrum методологий',
        'Дизайн, ориентированный на пользовательский опыт (UX/UI)',
        'Непрерывное тестирование и аудиты безопасности',
        'Модульная и масштабируемая архитектура',
      ],
    },
    {
      id: 'motivation',
      title: 'Мотивация и Цели',
      icon: '💝',
      description: 'Страсть к сфере здравоохранения и творческий подход',
      points: [
        'Желание положительно влиять на жизнь людей через медицинские решения',
        'Энтузиазм в реализации инновационных идей',
        'Культура командной работы и взаимного сотрудничества',
        'Готовность к долгосрочному партнерству и развитию',
      ],
    },
  ]

  const differentiators = [
    {
      title: 'Отраслевые Знания',
      description: 'Не только программирование, но и глубокие знания в медицине',
      icon: '🏥',
    },
    {
      title: 'End-to-End Решения',
      description: 'Комплексный подход от AI моделей до пользовательских интерфейсов',
      icon: '🔄',
    },
    {
      title: 'Безопасность и Конфиденциальность',
      description:
        'Передовые меры безопасности, гарантирующие конфиденциальность медицинских данных',
      icon: '🔒',
    },
    {
      title: 'Масштабируемость',
      description: 'Поддержка от небольших клиник до крупных медицинских центров',
      icon: '📈',
    },
    {
      title: 'Мощь Реального Времени',
      description: 'Системы, которые мгновенно реагируют и обновляются в реальном времени',
      icon: '⚡',
    },
    {
      title: 'Пользовательский Опыт',
      description: 'Интуитивные интерфейсы для технических специалистов и обычных пользователей',
      icon: '🎨',
    },
  ]

  const activeStrength = strengths.find(strength => strength.id === activeTab)

  return (
    <section id='why-our-team' className='py-20 bg-linear-to-br from-slate-50 to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4'>
            🏆 Почему Именно Мы?
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Наши <span className='text-blue-600'>Сильные Стороны</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Наша уникальная комбинация в сфере медицинских технологий - глубокие технические знания,
            опыт в медицинской отрасли и инновационный подход
          </p>
        </div>

        {/* Strengths Grid with Tabs */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16'>
          {/* Tabs */}
          <div className='lg:col-span-1 space-y-4'>
            {strengths.map(strength => (
              <button
                key={strength.id}
                onClick={() => setActiveTab(strength.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeTab === strength.id
                    ? 'bg-white shadow-xl border-2 border-blue-500 transform scale-105'
                    : 'bg-white/70 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-300'
                }`}
              >
                <div className='flex items-center space-x-4'>
                  <div
                    className={`text-2xl ${
                      activeTab === strength.id ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {strength.icon}
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-lg ${
                        activeTab === strength.id ? 'text-blue-600' : 'text-gray-900'
                      }`}
                    >
                      {strength.title}
                    </h3>
                    <p className='text-sm text-gray-600 mt-1 line-clamp-2'>
                      {strength.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className='lg:col-span-3'>
            <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-200 h-full'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='text-3xl text-blue-600'>{activeStrength?.icon}</div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900'>{activeStrength?.title}</h3>
                  <p className='text-gray-600'>{activeStrength?.description}</p>
                </div>
              </div>

              <div className='space-y-4'>
                {activeStrength?.points.map((point, index) => (
                  <div key={index} className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-3 shrink-0'></div>
                    <p className='text-gray-700 text-lg leading-relaxed'>{point}</p>
                  </div>
                ))}
              </div>

              {/* Additional Context Based on Tab */}
              {activeTab === 'expertise' && (
                <div className='mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200'>
                  <h4 className='font-semibold text-blue-900 mb-3'>Отраслевые Сертификаты:</h4>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {[
                      'HIPAA Compliance',
                      'AWS Healthcare',
                      'Google Cloud Healthcare API',
                      'ISO 13485',
                    ].map(cert => (
                      <div key={cert} className='text-center bg-white rounded-lg p-3 shadow-sm'>
                        <div className='text-blue-600 text-sm font-medium'>{cert}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-200'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
              Чем Мы <span className='text-blue-600'>Отличаемся</span>
            </h3>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Уникальные особенности и подходы, которые отличают нас от других команд
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {differentiators.map((diff, index) => (
              <div
                key={index}
                className='text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300'
              >
                <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>{diff.icon}</span>
                </div>
                <h4 className='text-lg font-semibold text-gray-900 mb-3'>{diff.title}</h4>
                <p className='text-gray-600 text-sm leading-relaxed'>{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
