'use client'

import { useState } from 'react'

export default function TechnicalImplementationSection() {
  const [activePhase, setActivePhase] = useState('architecture')

  const implementationPhases = [
    {
      id: 'architecture',
      name: 'Архитектура & Проектирование',
      description: 'Проектирование системной архитектуры и разработка AI моделей',
      timeline: '1-2 месяца',
      components: [
        {
          title: 'Архитектура AI Моделей',
          description: 'Проектирование и оптимизация deep learning моделей',
          technologies: ['PyTorch', 'TensorFlow', 'LSTM', 'GRU', '1D-CNN'],
          tasks: [
            'Проектирование LSTM/GRU сетей для обработки биомаркеров',
            'Создание LightGBM и 1D-CNN моделей для прогнозирования рисков',
            'Построение pipeline обработки данных в реальном времени',
            'Разработка стратегии обучения и валидации моделей',
          ],
        },
        {
          title: 'Дизайн Базы Данных',
          description: 'Масштабируемая и безопасная инфраструктура данных',
          technologies: ['PostgreSQL', 'Redis', 'Data Pipeline', 'ETL'],
          tasks: [
            'Проектирование схемы для биомаркеров и пользовательских данных',
            'Настройка Redis для обработки данных в реальном времени',
            'Внедрение протоколов безопасности и конфиденциальности данных',
            'Разработка стратегии резервного копирования и восстановления',
          ],
        },
        {
          title: 'Архитектура 3D Визуализации',
          description: 'Система 3D визуализации цифрового двойника в реальном времени',
          technologies: ['Three.js', 'WebGL', 'WebSocket', 'Real-time Rendering'],
          tasks: [
            'Создание 3D модели человека и систем анимации',
            'Визуализация изменений биомаркеров в реальном времени',
            'Передача данных в реальном времени через WebSocket',
            'Оптимизация для мобильных и настольных устройств',
          ],
        },
      ],
    },
    {
      id: 'development',
      name: 'Основная Разработка',
      description: 'Обучение AI моделей и построение платформы',
      timeline: '3-6 месяцев',
      components: [
        {
          title: 'Обучение & Оптимизация AI Моделей',
          description: 'Обучение AI моделей на основе данных биомаркеров',
          technologies: ['PyTorch Lightning', 'MLflow', 'Hyperparameter Tuning'],
          tasks: [
            'Обучение моделей на синтетических и реальных данных биомаркеров',
            'Доведение точности модели до уровня 95%+',
            'Оптимизация производительности прогнозирования в реальном времени',
            'Создание pipeline мониторинга и переобучения моделей',
          ],
        },
        {
          title: 'Backend API & Микросервисы',
          description: 'Высокопроизводительная бэкенд система и AI сервисы',
          technologies: ['FastAPI', 'Python', 'Docker', 'Redis', 'PostgreSQL'],
          tasks: [
            'Создание RESTful API и WebSocket серверов',
            'AI сервисы моделей и pipeline обработки данных',
            'Система аутентификации и авторизации пользователей',
            'Архитектура микросервисов и межсервисная коммуникация',
          ],
        },
        {
          title: 'Frontend & 3D Интерфейс',
          description: 'Интерактивный пользовательский интерфейс и 3D визуализация',
          technologies: ['React/Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'],
          tasks: [
            'Создание dashboard и панели аналитики в реальном времени',
            'Разработка 3D компонента цифрового двойника и анимаций',
            'Адаптивный дизайн и функциональность progressive web app',
            'Обновление данных и визуализация в реальном времени',
          ],
        },
      ],
    },
    {
      id: 'integration',
      name: 'Интеграция & Тестирование',
      description: 'Интеграция системных компонентов и комплексное тестирование',
      timeline: '7-8 месяцев',
      components: [
        {
          title: 'Интеграция Wearable Устройств',
          description: 'Интеграция с различными носимых устройствами и сенсорами',
          technologies: ['REST API', 'OAuth2', 'Webhooks', 'Bluetooth API'],
          tasks: [
            'Интеграция API Apple HealthKit и Google Fit',
            'Обмен данными с умными часами и фитнес-трекерами',
            'Обработка данных сенсоров в реальном времени',
            'Офлайн режим и синхронизация данных',
          ],
        },
        {
          title: 'Безопасность & Сертификация',
          description: 'Безопасность медицинских данных и отраслевые стандарты',
          technologies: ['HIPAA Compliance', 'GDPR', 'Encryption', 'OAuth2'],
          tasks: [
            'End-to-end шифрование и безопасность данных',
            'Соответствие требованиям HIPAA и конфиденциальности медицинских данных',
            'Security audit и penetration testing',
            'Документация соответствия и сертификация',
          ],
        },
        {
          title: 'Тестирование & Контроль Качества',
          description: 'Комплексное тестирование и обеспечение качества',
          technologies: ['Jest', 'Cypress', 'Pytest', 'Load Testing'],
          tasks: [
            'Тестирование точности и производительности AI моделей',
            'End-to-end тестирование и user acceptance testing',
            'Нагрузочное тестирование и тесты масштабируемости',
            'Тестирование безопасности и оценка уязвимостей',
          ],
        },
      ],
    },
    {
      id: 'deployment',
      name: 'Деплой & Мониторинг',
      description: 'Production деплой и система мониторинга в реальном времени',
      timeline: '9-12 месяцев',
      components: [
        {
          title: 'Cloud Инфраструктура',
          description: 'Масштабируемая и надежная облачная инфраструктура',
          technologies: ['AWS/GCP', 'Docker', 'Kubernetes', 'CI/CD'],
          tasks: [
            'Деплой микросервисов и оркестрация контейнеров',
            'Настройка автоскейлинга и балансировки нагрузки',
            'CI/CD pipeline и автоматизированный деплой',
            'Настройка disaster recovery и высокой доступности',
          ],
        },
        {
          title: 'Мониторинг & Аналитика в Реальном Времени',
          description: 'Мониторинг системы и аналитика пользователей',
          technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Custom Analytics'],
          tasks: [
            'Мониторинг состояния системы в реальном времени',
            'Мониторинг производительности и дрейфа AI моделей',
            'Аналитика поведения пользователей',
            'Кастомные dashboard и система отчетности',
          ],
        },
        {
          title: 'Непрерывное Улучшение',
          description: 'Постоянное совершенствование и обновление AI моделей',
          technologies: ['MLOps', 'A/B Testing', 'Feedback Loop'],
          tasks: [
            'Pipeline переобучения моделей в реальном времени',
            'A/B тестирование новых AI функций',
            'Петля обратной связи пользователей и улучшения моделей',
            'Автоматизированный деплой и версионирование моделей',
          ],
        },
      ],
    },
  ]

  const aiTechnologies = [
    {
      category: 'Machine Learning Модели',
      models: [
        {
          name: 'LSTM (Long Short-Term Memory)',
          purpose: 'Анализ временных рядов биомаркеров',
          application: 'Прогнозирование сердечного ритма, HRV, циклов сна',
          advantages: [
            'Обнаружение долгосрочных зависимостей',
            'Понимание изменений биомаркеров во времени',
            'Эффективная обработка данных в реальном времени',
          ],
        },
        {
          name: 'GRU (Gated Recurrent Units)',
          purpose: 'Упрощенная архитектура рекуррентной сети',
          application: 'Оценка уровня стресса и усталости',
          advantages: [
            'Высокая эффективность с меньшим количеством параметров',
            'Более быстрое обучение и время вывода',
            'Более простая архитектура по сравнению с LSTM',
          ],
        },
        {
          name: '1D-CNN (Convolutional Neural Networks)',
          purpose: 'Обнаружение сложных паттернов в биомаркерах',
          application: 'Обнаружение показателей риска и аномалий',
          advantages: [
            'Эффективное обнаружение локальных паттернов',
            'Translation invariant features',
            'Высокоточное обнаружение аномалий',
          ],
        },
        {
          name: 'LightGBM',
          purpose: 'Gradient boosting framework',
          application: 'Классификация рисков и приоритизация',
          advantages: [
            'Быстрый вывод с высокой точностью',
            'Эффективная обработка больших объемов данных',
            'Анализ важности признаков',
          ],
        },
      ],
    },
    {
      category: 'AI Решения & Алгоритмы',
      models: [
        {
          name: 'Health Condition Estimation',
          purpose: 'Оценка общего состояния здоровья',
          application: 'Состояние сердца, стресс, усталость, уровень восстановления',
          advantages: [
            'Объединяет мульти-модальные биомаркеры',
            'Оценивает состояние в реальном времени',
            'Сравнивает с персонализированным baseline',
          ],
        },
        {
          name: 'Risk Prediction Engine',
          purpose: 'Прогнозирование рисков для здоровья',
          application: '24-часовой риск инсульта, нарушение сна, риск перетренированности',
          advantages: [
            'Многофакторная оценка рисков',
            'Работает с probability score',
            'Предоставляет предупреждения в реальном времени',
          ],
        },
        {
          name: 'Digital Twin Personalization',
          purpose: 'Создание персонального цифрового двойника',
          application: 'Специальная модель для каждого пользователя',
          advantages: [
            'Персонализация с federated learning',
            'Privacy-preserving personalization',
            'Непрерывная адаптация и обучение',
          ],
        },
        {
          name: 'Recommendation AI',
          purpose: 'Персонализированные рекомендации',
          application: 'Сон, питание, упражнения, отдых',
          advantages: [
            'Context-aware recommendations',
            'Оптимизация с reinforcement learning',
            'Адаптация к пользовательским предпочтениям',
          ],
        },
      ],
    },
  ]

  const techStack = {
    frontend: {
      framework: 'React/Next.js',
      language: 'TypeScript',
      visualization: 'Three.js, D3.js, Recharts',
      styling: 'Tailwind CSS, Framer Motion',
      state: 'Zustand, React Query',
    },
    backend: {
      framework: 'FastAPI (Python)',
      language: 'Python 3.9+',
      database: 'PostgreSQL, Redis',
      auth: 'JWT, OAuth2',
      realtime: 'WebSocket, Server-Sent Events',
    },
    ai: {
      framework: 'PyTorch, PyTorch Lightning',
      libraries: 'Scikit-learn, Pandas, NumPy',
      deployment: 'FastAPI, Docker',
      monitoring: 'MLflow, Weights & Biases',
    },
    infrastructure: {
      containers: 'Docker, Docker Compose',
      orchestration: 'Kubernetes (future)',
      cloud: 'AWS/GCP (EC2/Compute Engine, RDS/Cloud SQL)',
      monitoring: 'Prometheus, Grafana, ELK Stack',
      cicd: 'GitHub Actions, GitLab CI',
    },
  }

  const dataProcessingPipeline = [
    {
      stage: 'Сбор Данных',
      description: 'Сбор биомаркеров из различных источников',
      technologies: ['REST API', 'WebSocket', 'Bluetooth', 'Manual Input'],
      data: ['Сердечный ритм', 'HRV', 'Данные сна', 'Активность', 'Стресс', 'Артериальное давление'],
    },
    {
      stage: 'Очистка Данных',
      description: 'Удаление шума и выбросов',
      technologies: ['Pandas', 'NumPy', 'Custom Filters'],
      data: [
        'Обработка сигналов',
        'Обнаружение выбросов',
        'Нормализация данных',
        'Восстановление пропущенных значений',
      ],
    },
    {
      stage: 'Feature Engineering',
      description: 'Создание признаков для AI моделей',
      technologies: ['Scikit-learn', 'Custom Transformers'],
      data: [
        'Признаки временных рядов',
        'Статистические признаки',
        'Доменно-специфичные признаки',
        'Скользящие окна',
      ],
    },
    {
      stage: 'AI Model Inference',
      description: 'Прогнозы и анализ в реальном времени',
      technologies: ['PyTorch', 'ONNX Runtime', 'TensorRT'],
      data: [
        'Оценки состояния здоровья',
        'Вероятности рисков',
        'Персональные инсайты',
        'Рекомендации',
      ],
    },
    {
      stage: 'Визуализация',
      description: 'Отображение в понятном для пользователя формате',
      technologies: ['Three.js', 'WebGL', 'D3.js', 'WebSocket'],
      data: [
        'Обновления 3D аватара',
        'Графики в реальном времени',
        'Индикаторы рисков',
        'Персональные рекомендации',
      ],
    },
  ]

  const currentPhaseData = implementationPhases.find(phase => phase.id === activePhase)

  return (
    <section
      id='technical-implementation'
      className='py-20 bg-linear-to-br from-slate-50 to-blue-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4'>
            🛠️ Техническое Решение & Внедрение
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Как Мы <span className='text-blue-600'>Решаем Проблему</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Технический подход и стратегия внедрения для построения AI-платформы цифрового двойника
          </p>
        </div>

        {/* Implementation Phases */}
        <div className='mb-20'>
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4 lg:mb-0'>
              Этапы Внедрения
            </h3>
            <div className='flex flex-wrap gap-2'>
              {implementationPhases.map(phase => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activePhase === phase.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-200'
                  }`}
                >
                  {phase.name}
                </button>
              ))}
            </div>
          </div>

          {/* Current Phase Details */}
          <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-200'>
            <div className='mb-6'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h4 className='text-2xl font-bold text-gray-900'>{currentPhaseData?.name}</h4>
                  <p className='text-gray-600 mt-2'>{currentPhaseData?.description}</p>
                </div>
                <div className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>
                  ⏱️ {currentPhaseData?.timeline}
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {currentPhaseData?.components.map((component, index) => (
                <div key={index} className='bg-gray-50 rounded-xl p-6 border border-gray-200'>
                  <h5 className='text-lg font-semibold text-gray-900 mb-3'>{component.title}</h5>
                  <p className='text-gray-600 text-sm mb-4'>{component.description}</p>

                  <div className='mb-4'>
                    <h6 className='text-sm font-medium text-gray-700 mb-2'>Технологии:</h6>
                    <div className='flex flex-wrap gap-2'>
                      {component.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h6 className='text-sm font-medium text-gray-700 mb-2'>Ключевые Задачи:</h6>
                    <ul className='space-y-2'>
                      {component.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className='flex items-start space-x-2 text-sm text-gray-600'
                        >
                          <div className='w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0'></div>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Technologies Section */}
        <div className='mb-20'>
          <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            AI <span className='text-blue-600'>Технологии</span>
          </h3>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {aiTechnologies.map((category, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-lg p-6 border border-gray-200'
              >
                <h4 className='text-xl font-bold text-gray-900 mb-6 text-center'>
                  {category.category}
                </h4>
                <div className='space-y-6'>
                  {category.models.map((model, modelIndex) => (
                    <div
                      key={modelIndex}
                      className='bg-gray-50 rounded-xl p-4 border border-gray-200'
                    >
                      <h5 className='font-semibold text-gray-900 mb-2'>{model.name}</h5>
                      <p className='text-gray-600 text-sm mb-3'>{model.purpose}</p>
                      <div className='mb-3'>
                        <span className='text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded'>
                          Применение: {model.application}
                        </span>
                      </div>
                      <ul className='space-y-1'>
                        {model.advantages.map((advantage, advIndex) => (
                          <li
                            key={advIndex}
                            className='flex items-start space-x-2 text-xs text-gray-600'
                          >
                            <div className='w-1 h-1 bg-green-500 rounded-full mt-1.5 shrink-0'></div>
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Overview */}
        <div className='mb-20'>
          <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            Технологический <span className='text-blue-600'>Стек</span>
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Object.entries(techStack).map(([category, technologies]) => (
              <div
                key={category}
                className='bg-white rounded-2xl shadow-lg p-6 border border-gray-200 text-center'
              >
                <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>
                    {category === 'frontend'
                      ? '🎨'
                      : category === 'backend'
                      ? '⚙️'
                      : category === 'ai'
                      ? '🧠'
                      : '🏗️'}
                  </span>
                </div>
                <h4 className='text-lg font-semibold text-gray-900 mb-4 capitalize'>
                  {category === 'frontend' ? 'Фронтенд' : 
                   category === 'backend' ? 'Бэкенд' : 
                   category === 'ai' ? 'Искусственный Интеллект' : 
                   'Инфраструктура'}
                </h4>
                <div className='space-y-2 text-sm text-gray-600'>
                  {Object.entries(technologies).map(([key, value]) => (
                    <div key={key} className='text-center'>
                      <div className='font-medium text-gray-700 capitalize'>
                        {key === 'framework' ? 'Фреймворк' :
                         key === 'language' ? 'Язык' :
                         key === 'visualization' ? 'Визуализация' :
                         key === 'styling' ? 'Стилизация' :
                         key === 'state' ? 'Управление состоянием' :
                         key === 'database' ? 'База данных' :
                         key === 'auth' ? 'Аутентификация' :
                         key === 'realtime' ? 'Реальное время' :
                         key === 'libraries' ? 'Библиотеки' :
                         key === 'deployment' ? 'Деплой' :
                         key === 'monitoring' ? 'Мониторинг' :
                         key === 'containers' ? 'Контейнеры' :
                         key === 'orchestration' ? 'Оркестрация' :
                         key === 'cloud' ? 'Облако' :
                         key === 'cicd' ? 'CI/CD' : key}
                      </div>
                      <div className='text-gray-600'>{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Processing Pipeline */}
        <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-200'>
          <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            Pipeline <span className='text-blue-600'>Обработки Данных</span>
          </h3>

          <div className='relative'>
            {/* Connection Lines */}
            <div className='absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 hidden lg:block'></div>

            <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 relative'>
              {dataProcessingPipeline.map((stage, index) => (
                <div key={index} className='text-center relative'>
                  {/* Stage Number */}
                  <div className='w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold relative z-10'>
                    {index + 1}
                  </div>

                  {/* Stage Content */}
                  <div className='bg-gray-50 rounded-xl p-6 border border-gray-200 h-full'>
                    <h4 className='font-semibold text-gray-900 mb-3'>{stage.stage}</h4>
                    <p className='text-gray-600 text-sm mb-4'>{stage.description}</p>

                    <div className='mb-4'>
                      <h5 className='text-xs font-medium text-gray-700 mb-2'>Технологии:</h5>
                      <div className='flex flex-wrap gap-1 justify-center'>
                        {stage.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className='text-xs font-medium text-gray-700 mb-2'>
                        Обрабатываемые Данные:
                      </h5>
                      <ul className='space-y-1 text-xs text-gray-600'>
                        {stage.data.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className='flex items-center justify-center space-x-1'
                          >
                            <div className='w-1 h-1 bg-green-500 rounded-full'></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className='text-center mt-16'>
          <div className='bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white'>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>Наши Технические Преимущества</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
              <div className='text-center'>
                <div className='text-3xl mb-2'>🎯</div>
                <h4 className='font-semibold mb-2'>AI First Approach</h4>
                <p className='text-blue-100 text-sm'>
                  Каждый компонент основан на AI и обработке данных
                </p>
              </div>
              <div className='text-center'>
                <div className='text-3xl mb-2'>⚡</div>
                <h4 className='font-semibold mb-2'>Обработка в Реальном Времени</h4>
                <p className='text-blue-100 text-sm'>
                  Мгновенные прогнозы и визуализация
                </p>
              </div>
              <div className='text-center'>
                <div className='text-3xl mb-2'>🛡️</div>
                <h4 className='font-semibold mb-2'>Privacy by Design</h4>
                <p className='text-blue-100 text-sm'>
                  Конфиденциальность и безопасность гарантированы на каждом этапе
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}