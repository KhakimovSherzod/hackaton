'use client'

import { useState } from 'react'

export default function WhyOurTeamSection() {
  const [activeTab, setActiveTab] = useState('expertise')

  const strengths = [
    {
      id: 'expertise',
      title: 'Mutaxassislik Tajribasi',
      icon: '🎯',
      description: 'Sogʻliqni saqlash texnologiyalari sohasida chuqur bilim va amaliy tajriba',
      points: [
        'Sogʻliqni saqlash tizimlari uchun 10+ yillik umumiy tajriba',
        'HIPAA va tibbiy maʼlumotlar xavfsizligi boʻyicha sertifikatlar',
        'Real-vaqtda tibbiy maʼlumotlarni qayta ishlash algoritmlari',
        '3D tibbiy vizualizatsiya va raqamli egza modellari'
      ]
    },
    {
      id: 'technology',
      title: 'Innovatsion Texnologiyalar',
      icon: '🚀',
      description: 'Eng soʻnggi texnologiyalar va AI yechimlaridan foydalanish',
      points: [
        'Sunʼiy intellekt va machine learning modellarining noyob kombinatsiyasi',
        'Real-vaqtda 3D vizualizatsiya va interaktiv dashboardlar',
        'Cloud-native arxitektura va microservices yondashuvi',
        'IoT qurilmalari bilan integratsiya qilish imkoniyati'
      ]
    },
    {
      id: 'approach',
      title: 'Yondashuv va Metodologiya',
      icon: '🔄',
      description: 'Ilgʻor ishlab chiqish metodologiyalari va foydalanuvchi markazli dizayn',
      points: [
        'Agile va Scrum metodologiyalari asosida ishlab chiqish',
        'Foydalanuvchi tajribasiga qaratilgan dizayn (UX/UI)',
        'Davomiylik testlari va xavfsizlik auditlari',
        'Modulli va masshtablanuvchan arxitektura'
      ]
    },
    {
      id: 'motivation',
      title: 'Motivatsiya va Maqsad',
      icon: '💝',
      description: 'Sogʻliqni saqlash sohasiga qaratilgan ishtiyoq va ijodkorlik',
      points: [
        'Tibbiy yechimlar orqali odamlar hayotiga ijobiy taʼsir koʻrsatish istagi',
        'Innovatsion gʻoyalarni amalga oshirishga boʻlgan ishtiyoq',
        'Jamoaviy ish va oʻzaro hamkorlik madaniyati',
        'Uzoq muddatli hamkorlik va rivojlanishga tayyorlik'
      ]
    }
  ]

  const previousProjects = [
    {
      name: 'AI Asistli Diagnostika Platformasi',
      description: 'Rentgen va MRI skanerlarini tahlil qiluvchi sunʼiy intellekt platformasi',
      results: [
        'Diagnostika aniqligini 40% oshirdi',
        'Shifokorlarning ish yukini 60% kamaytirdi',
        '98% foydalanuvchi mamnunligi'
      ],
      technologies: ['Python', 'PyTorch', 'React', 'Node.js', 'PostgreSQL']
    },
    {
      name: 'Telemeditsina Yechimi',
      description: 'Masofaviy tibbiy konsultatsiyalar va monitoring tizimi',
      results: [
        '10,000+ foydalanuvchi bazasi',
        'Real-vaqtda sogʻliq maʼlumotlarini kuzatish',
        'Xavfsiz video konferensiya aloqasi'
      ],
      technologies: ['WebRTC', 'React Native', 'Express.js', 'MongoDB', 'Redis']
    },
    {
      name: 'Shaxsiylashtirilgan Sogʻlom Turmush Tarzi Platformasi',
      description: 'AI asosida shaxsiy sogʻlom turmush tarzi tavsiyalari beruvchi tizim',
      results: [
        'Foydalanuvchilarning sogʻlom odatlari 35% yaxshilandi',
        '300% platformaga sodiqlik oshdi',
        'Jismoniy faollik darajasi 50% oshdi'
      ],
      technologies: ['Machine Learning', 'React', 'Firebase', 'TensorFlow', 'D3.js']
    }
  ]

  const differentiators = [
    {
      title: 'Sanoatga Xos Bilim',
      description: 'Nafaqat dasturlash, balki tibbiyot sohasidagi chuqur bilimlar',
      icon: '🏥'
    },
    {
      title: 'End-to-End Yechimlar',
      description: 'AI modellaridan foydalanuvchi interfeysigacha barcha qismlarni qamrab oluvchi yondashuv',
      icon: '🔄'
    },
    {
      title: 'Xavfsizlik va Maxfiylik',
      description: 'Tibbiy maʼlumotlarning maxfiyligini kafolatlovchi ilgʻor xavfsizlik choralari',
      icon: '🔒'
    },
    {
      title: 'Masshtablanuvchanlik',
      description: 'Kichik shifoxonalardan yirik tibbiyot markazlarigacha qoʻllab-quvvatlash',
      icon: '📈'
    },
    {
      title: 'Real-Vaqtda Kuch',
      description: 'Darhol javob beradigan va real-vaqtda yangilanadigan tizimlar',
      icon: '⚡'
    },
    {
      title: 'Foydalanuvchi Tajribasi',
      description: 'Texnik mutaxassislar va oddiy foydalanuvchilar uchun moʻljallangan intuitiv interfeyslar',
      icon: '🎨'
    }
  ]

  const activeStrength = strengths.find(strength => strength.id === activeTab)

  return (
    <section id="why-our-team" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🏆 Nega Aynan Biz?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bizning <span className="text-blue-600">Kuchli Tomonlarimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sogʻliqni saqlash texnologiyalari sohasidagi noyob kombinatsiyamiz - 
            chuqur texnik bilim, tibbiy sohaga oid tajriba va innovatsion yondashuv
          </p>
        </div>

        {/* Strengths Grid with Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Tabs */}
          <div className="lg:col-span-1 space-y-4">
            {strengths.map((strength) => (
              <button
                key={strength.id}
                onClick={() => setActiveTab(strength.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeTab === strength.id
                    ? 'bg-white shadow-xl border-2 border-blue-500 transform scale-105'
                    : 'bg-white/70 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`text-2xl ${activeTab === strength.id ? 'text-blue-600' : 'text-gray-600'}`}>
                    {strength.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      activeTab === strength.id ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {strength.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl text-blue-600">{activeStrength?.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{activeStrength?.title}</h3>
                  <p className="text-gray-600">{activeStrength?.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {activeStrength?.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              {/* Additional Context Based on Tab */}
              {activeTab === 'expertise' && (
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Sanoat Sertifikatlari:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['HIPAA Compliance', 'AWS Healthcare', 'Google Cloud Healthcare API', 'ISO 13485'].map((cert) => (
                      <div key={cert} className="text-center bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-blue-600 text-sm font-medium">{cert}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Previous Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Muvaffaqiyatli <span className="text-blue-600">Loyihalar</span>
            </h3>
            <p className="text-lg text-gray-600">
              Sogʻliqni saqlash sohasida amalga oshirgan innovatsion loyihalarimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h4>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <h5 className="font-semibold text-gray-900">Natijalar:</h5>
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Boshqalardan <span className="text-blue-600">Farqimiz</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bizni boshqa jamoalardan ajratib turuvchi noyob xususiyatlar va yondashuvlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{diff.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{diff.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Loyihangizni Boshlaymizmi?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Sogʻliqni saqlash sohasidagi muammolaringizni hal qilish uchun 
              professional jamoamiz bilan hamkorlik qiling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Maslahat Olish
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Loyihalarimizni Ko'rish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}