'use client'

import { useState } from 'react'

export default function TechnicalImplementationSection() {
  const [activePhase, setActivePhase] = useState('architecture')

  const implementationPhases = [
    {
      id: 'architecture',
      name: 'Arxitektura & Loyihalash',
      description: 'Tizim arxitekturasini loyihalash va AI modellarini ishlab chiqish',
      timeline: '1-2 oy',
      components: [
        {
          title: 'AI Model Arxitektura',
          description: 'Deep learning modellarini loyihalash va optimallashtirish',
          technologies: ['PyTorch', 'TensorFlow', 'LSTM', 'GRU', '1D-CNN'],
          tasks: [
            'Biomerkerlarni qayta ishlash uchun LSTM/GRU tarmoqlarini loyihalash',
            'Xavf bashorati uchun LightGBM va 1D-CNN modellarini yaratish',
            'Real-vaqtda maʼlumotlarni qayta ishlash pipeline ni qurish',
            'Model training va validatsiya strategiyasini ishlab chiqish',
          ],
        },
        {
          title: 'Maʼlumotlar Bazasi Dizayn',
          description: 'Masshtablanuvchan va xavfsiz maʼlumotlar infratuzilmasi',
          technologies: ['PostgreSQL', 'Redis', 'Data Pipeline', 'ETL'],
          tasks: [
            'Biomerkerlar va foydalanuvchi maʼlumotlari uchun schema loyihalash',
            'Real-vaqtda maʼlumotlarni qayta ishlash uchun Redis konfiguratsiyasi',
            'Maʼlumotlar xavfsizligi va maxfiylik protokollarini oʻrnatish',
            'Backup va recovery strategiyasini ishlab chiqish',
          ],
        },
        {
          title: '3D Vizualizatsiya Arxitektura',
          description: 'Real-vaqtda 3D raqamli egza vizualizatsiya tizimi',
          technologies: ['Three.js', 'WebGL', 'WebSocket', 'Real-time Rendering'],
          tasks: [
            '3D inson modeli va animatsiya sistemalarini yaratish',
            'Real-vaqtda biomerker oʻzgarishlarini vizuallashtirish',
            'WebSocket orqali real-vaqtda maʼlumotlar uzatish',
            'Mobile va desktop qurilmalar uchun optimallashtirish',
          ],
        },
      ],
    },
    {
      id: 'development',
      name: 'Asosiy Rivojlanish',
      description: 'AI modellarini trening qilish va platformani qurish',
      timeline: '3-6 oy',
      components: [
        {
          title: 'AI Model Trening & Optimizatsiya',
          description: 'Biomerker maʼlumotlari asosida AI modellarini trening qilish',
          technologies: ['PyTorch Lightning', 'MLflow', 'Hyperparameter Tuning'],
          tasks: [
            'Sintetik va real biomerker maʼlumotlari bilan modellarni trening qilish',
            'Model aniqligini 95%+ darajasiga olib chiqish',
            'Real-vaqtda bashorat performansini optimallashtirish',
            'Model monitoring va retraining pipeline ni yaratish',
          ],
        },
        {
          title: 'Backend API & Microservices',
          description: 'Yuqori samarali backend tizimi va AI servislari',
          technologies: ['FastAPI', 'Python', 'Docker', 'Redis', 'PostgreSQL'],
          tasks: [
            'RESTful API va WebSocket serverlarini yaratish',
            'AI model servislari va maʼlumotlar qayta ishlash pipeline',
            'Foydalanuvchi autentifikatsiya va authorization tizimi',
            'Microservices arxitektura va inter-service communication',
          ],
        },
        {
          title: 'Frontend & 3D Interfeys',
          description: 'Interaktiv foydalanuvchi interfeysi va 3D vizualizatsiya',
          technologies: ['React/Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'],
          tasks: [
            'Real-vaqtda dashboard va analitika panelini yaratish',
            '3D raqamli egza komponenti va animatsiyalarni ishlab chiqish',
            'Mobile-responsive dizayn va progressive web app funksionalligi',
            'Real-vaqtda maʼlumotlar yangilanishi va vizualizatsiya',
          ],
        },
      ],
    },
    {
      id: 'integration',
      name: 'Integratsiya & Testing',
      description: 'Tizim komponentlarini birlashtirish va keng qamrovli testing',
      timeline: '7-8 oy',
      components: [
        {
          title: 'Wearable Devices Integratsiya',
          description: 'Turli wearable qurilmalar va sensorlar bilan integratsiya',
          technologies: ['REST API', 'OAuth2', 'Webhooks', 'Bluetooth API'],
          tasks: [
            'Apple HealthKit va Google Fit API integratsiyasi',
            'Smart watch va fitness trackerlar bilan maʼlumotlar almashinuvi',
            'Real-vaqtda sensor maʼlumotlarini qayta ishlash',
            'Offline mode va maʼlumotlar sinxronizatsiyasi',
          ],
        },
        {
          title: 'Xavfsizlik & Sertifikatsiya',
          description: 'Tibbiy maʼlumotlar xavfsizligi va sanoat standartlari',
          technologies: ['HIPAA Compliance', 'GDPR', 'Encryption', 'OAuth2'],
          tasks: [
            'End-to-end encryption va maʼlumotlar xavfsizligi',
            'HIPAA va tibbiy maʼlumotlar maxfiyligi talablariga moslashtirish',
            'Security audit va penetration testing',
            'Compliance dokumentatsiyasi va sertifikatsiya',
          ],
        },
        {
          title: 'Testing & Quality Assurance',
          description: 'Keng qamrovli testing va sifat kafolati',
          technologies: ['Jest', 'Cypress', 'Pytest', 'Load Testing'],
          tasks: [
            'AI model accuracy va performance testing',
            'End-to-end testing va user acceptance testing',
            'Load testing va masshtablanuvchanlik testlari',
            'Security testing va vulnerability assessment',
          ],
        },
      ],
    },
    {
      id: 'deployment',
      name: 'Deploy & Monitoring',
      description: 'Production deploy va real-vaqtda monitoring tizimi',
      timeline: '9-12 oy',
      components: [
        {
          title: 'Cloud Infrastructure',
          description: 'Masshtablanuvchan va ishonchli cloud infratuzilmasi',
          technologies: ['AWS/GCP', 'Docker', 'Kubernetes', 'CI/CD'],
          tasks: [
            'Microservices deployment va container orchestration',
            'Auto-scaling va load balancing konfiguratsiyasi',
            'CI/CD pipeline va automated deployment',
            'Disaster recovery va high availability setup',
          ],
        },
        {
          title: 'Real-time Monitoring & Analytics',
          description: 'Tizim monitoring va foydalanuvchi analytics',
          technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Custom Analytics'],
          tasks: [
            'Real-vaqtda tizim health monitoring',
            'AI model performance va drift monitoring',
            'Foydalanuvchi behavior analytics',
            'Custom dashboard va reporting tizimi',
          ],
        },
        {
          title: 'Continuous Improvement',
          description: 'AI modellarini uzluksiz takomillashtirish va yangilash',
          technologies: ['MLOps', 'A/B Testing', 'Feedback Loop'],
          tasks: [
            'Real-vaqtda model retraining pipeline',
            'A/B testing yangi AI xususiyatlari uchun',
            'Foydalanuvchi feedback va model improvement loop',
            'Automated model deployment va versioning',
          ],
        },
      ],
    },
  ]

  const aiTechnologies = [
    {
      category: 'Machine Learning Modellari',
      models: [
        {
          name: 'LSTM (Long Short-Term Memory)',
          purpose: 'Vaqt seriyali biomerkerlarni tahlil qilish',
          application: 'Yurak urishi, HRV, uyqu sikllarini bashorat qilish',
          advantages: [
            'Uzoq muddatli bogʻliqliklarni aniqlaydi',
            'Biomerkerlarning vaqt oʻtishi bilan oʻzgarishlarini tushunadi',
            'Real-vaqtda maʼlumotlarni samarali qayta ishlaydi',
          ],
        },
        {
          name: 'GRU (Gated Recurrent Units)',
          purpose: 'Soddalashtirilgan rekurrent tarmoq arxitekturasi',
          application: 'Stress darajasi va charchoqni baholash',
          advantages: [
            'Kamroq parametr bilan yuqori samaradorlik',
            'Tezroq trening va inferens vaqti',
            'LSTM ga qaraganda soddaroq arxitektura',
          ],
        },
        {
          name: '1D-CNN (Convolutional Neural Networks)',
          purpose: 'Biomerkerlarning murakkab naqshlarini aniqlash',
          application: 'Xavf koʻrsatkichlari va anomaliyalarni topish',
          advantages: [
            'Mahalliy naqshlarni samarali aniqlaydi',
            'Translation invariant xususiyatlar',
            'Yuqori aniqdagi anomaliya deteksiyasi',
          ],
        },
        {
          name: 'LightGBM',
          purpose: 'Gradient boosting framework',
          application: 'Xavf klassifikatsiyasi va prioritizatsiya',
          advantages: [
            'Yuqori aniqlik bilan tez inferens',
            'Katta hajmdagi maʼlumotlarni samarali qayta ishlaydi',
            'Feature importance tahlili',
          ],
        },
      ],
    },
    {
      category: 'AI Yechimlari & Algoritmlar',
      models: [
        {
          name: 'Health Condition Estimation',
          purpose: 'Umumiy sogʻliq holatini baholash',
          application: 'Yurak holati, stress, charchoq, tiklanish darajasi',
          advantages: [
            'Multi-modal biomerkerlarni birlashtiradi',
            'Real-vaqtda holatni baholaydi',
            'Shaxsiylashtirilgan baseline bilan solishtiradi',
          ],
        },
        {
          name: 'Risk Prediction Engine',
          purpose: 'Salomatlik xavflarini bashorat qilish',
          application: '24-soatlik insult, uyqu buzilishi, ortiqcha mashqlash xavfi',
          advantages: [
            'Koʻp faktorli risk baholash',
            'Probability score bilan ishlaydi',
            'Real-vaqtda ogohlantirishlar beradi',
          ],
        },
        {
          name: 'Digital Twin Personalization',
          purpose: 'Shaxsiy raqamli egza yaratish',
          application: 'Har bir foydalanuvchi uchun maxsus model',
          advantages: [
            'Federated learning bilan shaxsiylashtirish',
            'Privacy-preserving personalization',
            'Continuous adaptation va oʻrganish',
          ],
        },
        {
          name: 'Recommendation AI',
          purpose: 'Shaxsiylashtirilgan tavsiyalar',
          application: 'Uyqu, ovqatlanish, mashqlar, dam olish',
          advantages: [
            'Context-aware recommendations',
            'Reinforcement learning bilan optimallashtirish',
            'Foydalanuvchi preferensiyalariga moslashish',
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
      stage: 'Maʼlumotlarni Yigʻish',
      description: 'Turli manbalardan biomerkerlarni toʻplash',
      technologies: ['REST API', 'WebSocket', 'Bluetooth', 'Manual Input'],
      data: ['Yurak urishi', 'HRV', 'Uyqu maʼlumotlari', 'Faollik', 'Stress', 'Qon bosimi'],
    },
    {
      stage: 'Maʼlumotlarni Tozalash',
      description: 'Noise va outlierlarni olib tashlash',
      technologies: ['Pandas', 'NumPy', 'Custom Filters'],
      data: [
        'Signal processing',
        'Outlier detection',
        'Data normalization',
        'Missing value imputation',
      ],
    },
    {
      stage: 'Feature Engineering',
      description: 'AI modellari uchun xususiyatlarni yaratish',
      technologies: ['Scikit-learn', 'Custom Transformers'],
      data: [
        'Time-series features',
        'Statistical features',
        'Domain-specific features',
        'Rolling windows',
      ],
    },
    {
      stage: 'AI Model Inference',
      description: 'Real-vaqtda bashoratlar va tahlillar',
      technologies: ['PyTorch', 'ONNX Runtime', 'TensorRT'],
      data: [
        'Health condition scores',
        'Risk probabilities',
        'Personal insights',
        'Recommendations',
      ],
    },
    {
      stage: 'Vizualizatsiya',
      description: 'Foydalanuvchiga tushunarli formatda koʻrsatish',
      technologies: ['Three.js', 'WebGL', 'D3.js', 'WebSocket'],
      data: [
        '3D avatar updates',
        'Real-time charts',
        'Risk indicators',
        'Personal recommendations',
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
            🛠️ Texnik Yechim & Implementatsiya
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Muammoni <span className='text-blue-600'>Qanday Hal Qilamiz</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            AI asosidagi raqamli egza platformasini qurish uchun texnik yondashuv va implementatsiya
            strategiyasi
          </p>
        </div>

        {/* Implementation Phases */}
        <div className='mb-20'>
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4 lg:mb-0'>
              Implementatsiya Bosqichlari
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
                    <h6 className='text-sm font-medium text-gray-700 mb-2'>Texnologiyalar:</h6>
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
                    <h6 className='text-sm font-medium text-gray-700 mb-2'>Asosiy Vazifalar:</h6>
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
            AI <span className='text-blue-600'>Texnologiyalari</span>
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
                          Qoʻllanilishi: {model.application}
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
            Texnologik <span className='text-blue-600'>Stack</span>
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
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className='space-y-2 text-sm text-gray-600'>
                  {Object.entries(technologies).map(([key, value]) => (
                    <div key={key} className='text-center'>
                      <div className='font-medium text-gray-700 capitalize'>
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
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
            Maʼlumotlarni Qayta Ishlash <span className='text-blue-600'>Pipelinesi</span>
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
                      <h5 className='text-xs font-medium text-gray-700 mb-2'>Texnologiyalar:</h5>
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
                        Qayta Ishlanadigan Maʼlumotlar:
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
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>Bizning Texnik Afzalliklarimiz</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
              <div className='text-center'>
                <div className='text-3xl mb-2'>🎯</div>
                <h4 className='font-semibold mb-2'>AI First Approach</h4>
                <p className='text-blue-100 text-sm'>
                  Har bir komponent AI va maʼlumotlar qayta ishlashga asoslangan
                </p>
              </div>
              <div className='text-center'>
                <div className='text-3xl mb-2'>⚡</div>
                <h4 className='font-semibold mb-2'>Real-time Processing</h4>
                <p className='text-blue-100 text-sm'>
                  Darhol javob beradigan bashoratlar va vizualizatsiya
                </p>
              </div>
              <div className='text-center'>
                <div className='text-3xl mb-2'>🛡️</div>
                <h4 className='font-semibold mb-2'>Privacy by Design</h4>
                <p className='text-blue-100 text-sm'>
                  Maxfiylik va xavfsizlik har bir bosqichda kafolatlangan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
