const Participants = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Хакимов Шерзод',
      age: 20,
      role: 'Full Stack Web Developer & Frontend Team Lead',
      experience: '5 лет опыта',
      skills: [
        'React/Next.js',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Tailwind CSS',
        'Three.js',
        'Основы DevOps',
      ],
      techStack: [
        'Frontend: React, Next.js, TypeScript, Tailwind CSS, Three.js',
        'Backend: Node.js, Express, REST API',
        'Базы данных: PostgreSQL, MongoDB',
        'DevOps: Docker, AWS, CI/CD',
      ],
      description:
        'Разработка frontend интерфейса для AI платформы здоровья. Создание визуализации цифрового двойника и пользовательского интерфейса.',
      emoji: '👨‍💻',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      name: 'Жасур',
      age: 20,
      role: 'AI/ML Специалист',
      experience: '4 года опыта',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Python',
        'PyTorch',
        'TensorFlow',
        'Data Science',
        'Neural Networks',
      ],
      techStack: [
        'AI Framework: PyTorch, TensorFlow, Keras',
        'Программирование: Python, R, Jupyter',
        'ML Алгоритмы: LSTM, GRU, CNN, Random Forest',
        'Анализ данных: Pandas, NumPy, Scikit-learn',
      ],
      description:
        'Разработка и обучение моделей искусственного интеллекта для прогнозирования здоровья и оценки рисков. Работа с временными рядами медицинских данных.',
      emoji: '🤖',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      name: 'Шерзод',
      age: 20,
      role: 'DevOps & Кибербезопасность Специалист',
      experience: '4 года опыта',
      skills: [
        'Cloud Infrastructure',
        'Кибербезопасность',
        'Docker',
        'Kubernetes',
        'AWS',
        'Security Monitoring',
        'CI/CD',
      ],
      techStack: [
        'Cloud: AWS, Google Cloud, Azure',
        'Container: Docker, Kubernetes, Docker Compose',
        'Monitoring: Prometheus, Grafana, ELK Stack',
        'Безопасность: VPN, Firewall, Encryption, HIPAA Compliance',
      ],
      description:
        'Управление системной инфраструктурой и обеспечение безопасности данных. Гарантирует конфиденциальность медицинских данных и надежность системы.',
      emoji: '🔒',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  const teamStatistics = [
    { number: '3', title: 'Члена Команды' },
    { number: '13+', title: 'Лет Общего Опыта' },
    { number: '10+', title: 'Успешных Проектов' },
    { number: '100%', title: 'Посвящены HealthTech' },
  ]

  const technologies = [
    {
      name: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    },
    { name: 'Backend', technologies: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'] },
    {
      name: 'AI/ML',
      technologies: ['PyTorch', 'TensorFlow', 'LSTM', 'LightGBM', 'Scikit-learn'],
    },
    { name: 'DevOps', technologies: ['Docker', 'AWS', 'Kubernetes', 'CI/CD', 'Monitoring'] },
  ]

  return (
    <section id='team' className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Заголовок */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Наша <span className='text-blue-600'>Профессиональная Команда</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Команда опытных специалистов, создающих инновационные решения в сфере медицинских
            технологий
          </p>
        </div>

        {/* Статистика Команды */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
          {teamStatistics.map((stat, index) => (
            <div
              key={index}
              className='text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100'
            >
              <div className='text-3xl md:text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>
              <div className='text-gray-600 font-medium'>{stat.title}</div>
            </div>
          ))}
        </div>

        {/* Члены Команды */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          {teamMembers.map(member => (
            <div
              key={member.id}
              className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
            >
              {/* Градиентный заголовок */}
              <div className={`bg-gradient-to-r ${member.gradient} p-6 text-white`}>
                <div className='flex items-center space-x-4'>
                  <div className='text-4xl'>{member.emoji}</div>
                  <div>
                    <h3 className='text-xl font-bold'>{member.name}</h3>
                    <p className='text-blue-100'>{member.age} лет</p>
                  </div>
                </div>
              </div>

              {/* Основной контент */}
              <div className='p-6'>
                {/* Роль и опыт */}
                <div className='mb-4'>
                  <h4 className='text-lg font-semibold text-gray-900 mb-1'>{member.role}</h4>
                  <p className='text-blue-600 font-medium text-sm'>{member.experience}</p>
                </div>

                {/* Описание */}
                <p className='text-gray-600 mb-4 text-sm leading-relaxed'>{member.description}</p>

                {/* Основные навыки */}
                <div className='space-y-3 mb-4'>
                  <h5 className='font-medium text-gray-900 text-sm'>Основные Навыки:</h5>
                  <div className='flex flex-wrap gap-2'>
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Технологический стек */}
                <div className='space-y-2'>
                  <h5 className='font-medium text-gray-900 text-sm'>Технологический Стек:</h5>
                  <div className='space-y-1'>
                    {member.techStack.map((stack, index) => (
                      <div
                        key={index}
                        className='text-xs text-gray-600 bg-gray-50 rounded-lg px-3 py-2'
                      >
                        {stack}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Раздел Технологий */}
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-16'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
            Используемые Технологии
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {technologies.map((tech, index) => (
              <div key={index} className='text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>
                    {index === 0 ? '🎨' : index === 1 ? '⚙️' : index === 2 ? '🧠' : '🔧'}
                  </span>
                </div>
                <h4 className='text-lg font-semibold text-gray-900 mb-3'>{tech.name}</h4>
                <div className='space-y-2'>
                  {tech.technologies.map((technology, techIndex) => (
                    <div
                      key={techIndex}
                      className='text-sm text-gray-600 bg-gray-50 rounded-lg py-2'
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Структура Команды */}
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
            Структура Команды и Обязанности
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Frontend Команда */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎨</span>
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>Frontend Разработка</h4>
              <p className='text-gray-600 text-sm mb-3'>
                Создание пользовательского интерфейса и визуализации цифрового двойника. Отображение
                данных в реальном времени и интерактивный опыт.
              </p>
              <div className='space-y-1 text-xs text-gray-500'>
                <div>• React/Next.js приложение</div>
                <div>• 3D визуализация (Three.js)</div>
                <div>• Адаптивный дизайн</div>
              </div>
            </div>

            {/* AI & Backend Команда */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🧠</span>
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>AI & Backend</h4>
              <p className='text-gray-600 text-sm mb-3'>
                Разработка моделей искусственного интеллекта и серверной части. Обработка
                медицинских данных и создание прогнозов.
              </p>
              <div className='space-y-1 text-xs text-gray-500'>
                <div>• Machine Learning модели</div>
                <div>• Анализ данных</div>
                <div>• API и базы данных</div>
              </div>
            </div>

            {/* DevOps & Безопасность Команда */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🔧</span>
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>DevOps & Безопасность</h4>
              <p className='text-gray-600 text-sm mb-3'>
                Инфраструктура, безопасность и развертывание. Обеспечение конфиденциальности
                медицинских данных и надежности системы.
              </p>
              <div className='space-y-1 text-xs text-gray-500'>
                <div>• Облачная инфраструктура</div>
                <div>• Кибербезопасность</div>
                <div>• CI/CD и мониторинг</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Participants
