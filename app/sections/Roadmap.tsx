'use client'

import { useState } from 'react'

export default function Roadmap() {
  const [currentStage, setCurrentStage] = useState('mvp')

  const developmentStages = [
    {
      id: 'idea',
      name: 'Gʻoya / Prototip',
      status: 'completed',
      description: 'Asosiy kontseptsiya va AI arxitekturasini ishlab chiqish',
      timeline: '1-2 oy',
      features: [
        'Raqamli egza kontseptsiyasini ishlab chiqish',
        'AI model arxitekturasini loyihalash',
        'Dastlabki maʼlumotlar toʻplash strategiyasi',
        '3D vizualizatsiya prototipi'
      ],
      achievements: [
        'AI model loyihasi tasdiqlandi',
        '3D vizualizatsiya prototipi yaratildi',
        'Dastlabki maʼlumotlar bazasi tuzildi'
      ]
    },
    {
      id: 'prototype',
      name: 'Prototip',
      status: 'completed',
      description: 'Asosiy AI modellari va 3D vizualizatsiyani ishlab chiqish',
      timeline: '3-4 oy',
      features: [
        'Health Condition Estimation Model',
        'Risk Prediction Engine prototipi',
        '3D raqamli egza vizualizatsiyasi',
        'Asosiy biomerkerlarni qayta ishlash'
      ],
      achievements: [
        'Yurak holati bashorat modeli ishga tushirildi',
        '3D avatarning dastlabki versiyasi yaratildi',
        'Real-vaqtda maʼlumotlarni qayta ishlash tizimi'
      ]
    },
    {
      id: 'mvp',
      name: 'MVP (Minimal Viable Product)',
      status: 'current',
      description: 'Asosiy funksionallik bilan ishlaydigan mahsulot versiyasi',
      timeline: '5-8 oy',
      features: [
        'Toʻliq raqamli egza platformasi',
        '4 asosiy bashorat moduli',
        'Real-vaqtda 3D vizualizatsiya',
        'Shaxsiy tavsiyalar tizimi',
        'Mobil interfeys va API'
      ],
      achievements: [
        'Platforma foydalanuvchilar uchun ochildi',
        'Birinchi 1000 foydalanuvchi',
        '98% bashorat aniqligi'
      ]
    },
    {
      id: 'launched',
      name: 'Ishga Tushirilgan',
      status: 'upcoming',
      description: 'Toʻliq miqyosdagi platforma va yangi xususiyatlar',
      timeline: '9-12 oy',
      features: [
        'Kengaytirilgan biomerkerlar qoʻshish',
        'Genetika maʼlumotlarini integratsiya qilish',
        'Wearable qurilmalar bilan toʻliq integratsiya',
        'Xalqaro miqyosga chiqish',
        'Enterprise versiyasi'
      ],
      achievements: [
        '10,000+ faol foydalanuvchi',
        'Xalqaro sertifikatlar',
        'Yirik tibbiyot markazlari bilan hamkorlik'
      ]
    }
  ]

  const mvpFeatures = [
    {
      category: 'AI Asosiy Modullari',
      features: [
        {
          name: 'Health Condition Estimation',
          description: 'Yurak holati, stress, charchoq va tiklanish darajasini baholash',
          status: 'completed',
          tech: ['PyTorch', 'LSTM', 'GRU Networks']
        },
        {
          name: 'Risk Prediction Engine',
          description: '24 soatlik insult, uyqu buzilishi va ortiqcha mashqlash xavfini bashorat qilish',
          status: 'completed',
          tech: ['LightGBM', '1D-CNN', 'Ensemble Learning']
        },
        {
          name: 'Digital Twin AI',
          description: 'Biomerkerlar asosida shaxsiy raqamli egza yaratish',
          status: 'in-progress',
          tech: ['Neural Networks', 'Biomarker Fusion']
        },
        {
          name: 'Recommendation AI',
          description: 'Shaxsiylashtirilgan sogʻlom turmush tarzi tavsiyalari',
          status: 'in-progress',
          tech: ['Reinforcement Learning', 'Personalized ML']
        }
      ]
    },
    {
      category: 'Vizualizatsiya va Interfeys',
      features: [
        {
          name: '3D Raqamli Egza',
          description: 'Real-vaqtda yurak urishi, stress va holatni koʻrsatuvchi interaktiv avatar',
          status: 'completed',
          tech: ['Three.js', 'WebGL', 'Real-time Rendering']
        },
        {
          name: 'Health Forecast 24h',
          description: 'Keyingi 24 soat uchun HRV, uyqu sifatini bashorat qilish paneli',
          status: 'in-progress',
          tech: ['React', 'Recharts', 'D3.js']
        },
        {
          name: 'Risk Meter Dashboard',
          description: 'Xavf koʻrsatkichlari va ogohlantirishlar tizimi',
          status: 'in-progress',
          tech: ['Next.js', 'WebSocket', 'Real-time Alerts']
        }
      ]
    },
    {
      category: 'Maʼlumotlar va Integratsiya',
      features: [
        {
          name: 'Multi-source Data Fusion',
          description: 'Turli manbalardan biomerkerlarni birlashtirish va tahlil qilish',
          status: 'completed',
          tech: ['Data Pipeline', 'ETL Processes', 'API Integration']
        },
        {
          name: 'Wearable Devices API',
          description: 'Apple Watch, Fitbit va boshqa qurilmalar bilan integratsiya',
          status: 'in-progress',
          tech: ['REST API', 'OAuth2', 'Webhooks']
        },
        {
          name: 'Real-time Analytics',
          description: 'Darhol javob beradigan tahlil va vizualizatsiya',
          status: 'completed',
          tech: ['Redis', 'WebSocket', 'FastAPI']
        }
      ]
    }
  ]

  const technologyStack = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React / Next.js', purpose: 'Asosiy foydalanuvchi interfeysi' },
        { name: 'TypeScript', purpose: 'Type xavfsizligi va katta miqyosli rivojlanish' },
        { name: 'Three.js', purpose: '3D raqamli egza vizualizatsiyasi' },
        { name: 'Tailwind CSS', purpose: 'Zamonaviy va responsive dizayn' },
        { name: 'Recharts / D3.js', purpose: 'Analitika va bashorat grafiklari' }
      ]
    },
    {
      category: 'Backend & AI',
      technologies: [
        { name: 'FastAPI', purpose: 'Yuqori samarali Python backend' },
        { name: 'PyTorch', purpose: 'Deep learning modellari va bashoratlar' },
        { name: 'LSTM / GRU Networks', purpose: 'Vaqt seriyali biomerkerlarni tahlil qilish' },
        { name: 'LightGBM', purpose: 'Xavf bashorati va klassifikatsiya' },
        { name: '1D-CNN', purpose: 'Biomerkerlarning murakkab naqshlarini aniqlash' }
      ]
    },
    {
      category: 'Maʼlumotlar Bazasi & Infratuzilma',
      technologies: [
        { name: 'PostgreSQL', purpose: 'Asosiy maʼlumotlar bazasi' },
        { name: 'Redis', purpose: 'Real-vaqtda keshlash va sessiya boshqaruvi' },
        { name: 'Docker & Docker Compose', purpose: 'Konteynerizatsiya va deploy' },
        { name: 'AWS / Google Cloud', purpose: 'Cloud infratuzilma va masshtablanuvchanlik' }
      ]
    }
  ]

  const nextSteps = [
    {
      phase: 'Qisqa Muddat (3 oy)',
      goals: [
        'MVP ni yakunlash va test foydalanuvchilarni jalb qilish',
        'Bashorat modellarining aniqligini 95% dan yuqori darajaga olib chiqish',
        'Mobil ilova versiyasini ishlab chiqish',
        'Dastlabki 1000 foydalanuvchini qoʻlga kiritish'
      ]
    },
    {
      phase: 'Oʻrta Muddat (6-9 oy)',
      goals: [
        'Genetika maʼlumotlarini integratsiya qilish',
        'Xalqaro tibbiy sertifikatlar olish (HIPAA, ISO)',
        'Yirik tibbiyot markazlari bilan hamkorlik boshlash',
        'Platformani 10,000+ foydalanuvchi miqyosiga olib chiqish'
      ]
    },
    {
      phase: 'Uzoq Muddat (12-18 oy)',
      goals: [
        'AI modellarini uzluksiz oʻrganish va takomillashtirish',
        'Xalqaro bozorga chiqish va lokalizatsiya',
        'Enterprise versiyasini ishlab chiqish',
        'Ilmiy tadqiqotlar va klinik sinovlar oʻtkazish'
      ]
    }
  ]

  const currentStageData = developmentStages.find(stage => stage.id === currentStage)

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
            🗺️ Yo'l Xaritasi & Rivojlanish Bosqichlari
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bizning <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Rivojlanish Yo'limiz
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Raqamli egza platformasini gʻoyadan toʻliq miqyosli mahsulotgacha rivojlantirish jarayoni
          </p>
        </div>

        {/* Development Stages Timeline */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h3 className="text-2xl font-bold mb-4 md:mb-0">Rivojlanish Bosqichlari</h3>
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
                      {currentStageData?.status === 'completed' ? 'Yakunlangan' :
                       currentStageData?.status === 'current' ? 'Joriy' : 'Keyingi'}
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
                      Xususiyatlar
                    </h5>
                    <ul className="space-y-3">
                      {currentStageData?.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-4 flex items-center">
                      <span className="text-yellow-400 mr-2">🏆</span>
                      Erishilgan Natijalar
                    </h5>
                    <ul className="space-y-3">
                      {currentStageData?.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
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
            MVP <span className="text-cyan-400">Xususiyatlari</span>
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
                          {feature.status === 'completed' ? 'Yakunlangan' : 'Ish Jarayonida'}
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
            Texnologik <span className="text-cyan-400">Stack</span>
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
            Keyingi <span className="text-cyan-400">Qadamlar</span>
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
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Loyihada Ishtirok Etmoqchimisiz?
            </h3>
            <p className="text-cyan-100 text-lg mb-6 max-w-2xl mx-auto">
              Raqamli egza inqilobida ishtirok eting va sogʻliqni saqlashning kelajagiga hissa qoʻshing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-200">
                Demo Soʻrash
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors duration-200">
                Hamkorlik Taklifi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}