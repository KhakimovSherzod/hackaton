'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const BusinessPlanSection = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Обзор' },
    { id: 'market', label: 'Рынок' },
    { id: 'revenue', label: 'Доходы' },
    { id: 'strategy', label: 'Стратегия' },
    { id: 'financials', label: 'Финансы' },
    { id: 'roadmap', label: 'План развития' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Бизнес План & Стратегия
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Коммерческая модель AgroHealth AI Digital Twin — создание нового рынка 
            превентивного здравоохранения в Узбекистане
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          
          {/* Overview Section */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Бизнес Модель</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Mission & Vision */}
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Миссия & Видение</h3>
                  <div className="space-y-4 text-blue-800">
                    <div className="flex items-start">
                      <span className="text-blue-500 text-2xl mr-3">🎯</span>
                      <div>
                        <h4 className="font-semibold">Миссия</h4>
                        <p>Сделать превентивное здравоохранение доступным через AI</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 text-2xl mr-3">👁️</span>
                      <div>
                        <h4 className="font-semibold">Видение</h4>
                        <p>Помогать людям жить дольше и healthier, а банкам создавать точные финансовые продукты</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Market Opportunity */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">Рыночная Возможность</h3>
                  <div className="space-y-3 text-green-800">
                    <div className="flex justify-between items-center">
                      <span>TAM (Total):</span>
                      <span className="font-bold">$50-100M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>SAM (Serviceable):</span>
                      <span className="font-bold">$10-20M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>SOM (Obtainable):</span>
                      <span className="font-bold">$2-5M</span>
                    </div>
                    <div className="text-sm text-green-600 mt-4">
                      * К 2027 году в Узбекистане
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Segments */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Целевые Сегменты</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Корпоративные Клиенты',
                      revenue: '35%',
                      pricing: '$5-15/сотрудник',
                      features: ['Wellness программы', 'Аналитика ROI', 'HR интеграция']
                    },
                    {
                      title: 'Индивидуальные Клиенты',
                      revenue: '40%',
                      pricing: '$3-15/месяц',
                      features: ['3D Digital Twin', 'AI предсказания', 'Рекомендации']
                    },
                    {
                      title: 'Банковская Интеграция',
                      revenue: '15%',
                      pricing: 'API + лицензия',
                      features: ['Скоринг здоровья', 'Страхование', 'Risk assessment']
                    }
                  ].map((segment, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{segment.title}</h4>
                      <div className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Доход: </span>{segment.revenue}
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        <span className="font-medium">Цена: </span>{segment.pricing}
                      </div>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {segment.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Market Analysis */}
          {activeTab === 'market' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Анализ Рынка</h2>
              
              {/* Global Market */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Глобальный Рынок</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">$350B</div>
                    <div className="text-purple-100">Digital Health 2024</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">$188B</div>
                    <div className="text-purple-100">AI in Healthcare 2030</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">47.6%</div>
                    <div className="text-purple-100">CAGR AI Healthcare</div>
                  </div>
                </div>
              </div>

              {/* Uzbekistan Market */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Узбекистан Демография</h3>
                  <div className="space-y-3 text-orange-800">
                    <div className="flex justify-between">
                      <span>Население:</span>
                      <span className="font-semibold">35M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Смартфоны:</span>
                      <span className="font-semibold">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Средний класс:</span>
                      <span className="font-semibold">15% рост/год</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Digital banking:</span>
                      <span className="font-semibold">Быстрый рост</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-4">Проблемы Здравоохранения</h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Ограниченная превентивная инфраструктура
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Высокая нагрузка хронических заболеваний
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Низкая health literacy
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Реактивная система вместо проактивной
                    </li>
                  </ul>
                </div>
              </div>

              {/* Competitive Landscape */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Конкурентные Преимущества</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'First-Mover Advantage',
                      description: 'Первый AI Digital Twin в Узбекистане',
                      icon: '🚀'
                    },
                    {
                      title: 'Banking Integration',
                      description: 'Уникальная интеграция с банкингом',
                      icon: '🏦'
                    },
                    {
                      title: 'Technology Superiority',
                      description: 'Real AI/ML, не просто дашборды',
                      icon: '🤖'
                    },
                    {
                      title: 'Local Market Knowledge',
                      description: 'Понимание местного рынка и культуры',
                      icon: '🎯'
                    }
                  ].map((advantage, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="text-2xl mb-3">{advantage.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Revenue Model */}
          {activeTab === 'revenue' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Модель Доходов</h2>
              
              {/* Revenue Streams */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'B2C Подписки',
                    revenue: '40%',
                    amount: '$600K',
                    tiers: [
                      { name: 'Basic', price: '$3/мес', features: ['Мониторинг', 'Базовые предсказания'] },
                      { name: 'Standard', price: '$7/мес', features: ['24h прогнозы', '3D Twin'] },
                      { name: 'Premium', price: '$15/мес', features: ['Генетика', 'Персональный коуч'] }
                    ]
                  },
                  {
                    title: 'Корпоративный Wellness',
                    revenue: '35%',
                    amount: '$500K',
                    tiers: [
                      { name: 'Small Biz', price: '$8/сотр', features: ['50-200 сотрудников'] },
                      { name: 'Medium Biz', price: '$6/сотр', features: ['200-1000 сотрудников'] },
                      { name: 'Enterprise', price: '$4/сотр', features: ['1000+ сотрудников'] }
                    ]
                  },
                  {
                    title: 'Банковская Интеграция',
                    revenue: '15%',
                    amount: '$200K',
                    tiers: [
                      { name: 'Credit Scoring', price: '$50K/год', features: ['API лицензия'] },
                      { name: 'Insurance', price: '5% revenue share', features: ['Оптимизация премий'] }
                    ]
                  }
                ].map((stream, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{stream.title}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Доля дохода:</span>
                      <span className="font-bold text-blue-600">{stream.revenue}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-600">Год 1:</span>
                      <span className="font-bold text-green-600">{stream.amount}</span>
                    </div>
                    <div className="space-y-3">
                      {stream.tiers.map((tier, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-3 border border-gray-200">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">{tier.name}</span>
                            <span className="font-bold text-blue-600">{tier.price}</span>
                          </div>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {tier.features.map((feature, fIdx) => (
                              <li key={fIdx}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Revenue Streams */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Дополнительные Потоки</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-purple-200">
                    <h4 className="text-lg font-semibold text-purple-900 mb-3">Data Analytics</h4>
                    <div className="text-purple-700 mb-4">
                      <span className="font-bold">Год 1: $80K</span> — 5% от общего дохода
                    </div>
                    <ul className="text-sm text-purple-600 space-y-1">
                      <li>• Анонимизированные health insights</li>
                      <li>• Market research reports</li>
                      <li>• Pharma research partnerships</li>
                      <li>• Government health agencies</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-orange-200">
                    <h4 className="text-lg font-semibold text-orange-900 mb-3">API Access</h4>
                    <div className="text-orange-700 mb-4">
                      <span className="font-bold">Год 1: $50K</span> — 5% от общего дохода
                    </div>
                    <div className="space-y-2 text-sm text-orange-600">
                      <div className="flex justify-between">
                        <span>Basic:</span>
                        <span className="font-medium">$500/мес (10K запросов)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Professional:</span>
                        <span className="font-medium">$2,000/мес (100K запросов)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Enterprise:</span>
                        <span className="font-medium">Custom pricing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Go-to-Market Strategy */}
          {activeTab === 'strategy' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Go-to-Market Стратегия</h2>
              
              {/* Strategy Timeline */}
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-green-200"></div>
                
                <div className="space-y-12">
                  {[
                    {
                      phase: 'Phase 1',
                      title: 'Launch (Q1-Q2 2026)',
                      focus: 'Proof of Concept with Agrobank',
                      actions: [
                        'Win AI500! Hackathon',
                        'Secure Agrobank partnership',
                        'Develop MVP (3 months)',
                        'Beta test with 100 employees',
                        'Refine based on feedback'
                      ],
                      target: '500 users, $20K MRR',
                      status: 'current'
                    },
                    {
                      phase: 'Phase 2',
                      title: 'Early Adoption (Q3-Q4 2026)',
                      focus: 'B2B2C through Agrobank',
                      actions: [
                        'Launch mobile apps',
                        'Integrate with Agrobank app',
                        'Marketing campaign',
                        'Insurance partnerships',
                        'Onboard 5-10 corporate clients'
                      ],
                      target: '5,000 users, $75K MRR',
                      status: 'upcoming'
                    },
                    {
                      phase: 'Phase 3',
                      title: 'Scale (2027)',
                      focus: 'Market expansion',
                      actions: [
                        'Partner with additional banks',
                        'Healthcare provider integration',
                        'Regional city expansion',
                        'Fitness partnerships',
                        'Wearable integrations'
                      ],
                      target: '25,000 users, $300K MRR',
                      status: 'upcoming'
                    },
                    {
                      phase: 'Phase 4',
                      title: 'Regional Expansion (2028+)',
                      focus: 'Central Asia markets',
                      actions: [
                        'Launch in Kazakhstan, Kyrgyzstan',
                        'Become regional leader',
                        'Strategic partnerships',
                        'Series A funding consideration'
                      ],
                      target: '100,000+ users, $1M+ MRR',
                      status: 'future'
                    }
                  ].map((phase, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row items-start">
                      <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white ${
                        phase.status === 'current' ? 'bg-green-500' : 
                        phase.status === 'upcoming' ? 'bg-blue-500' : 'bg-purple-500'
                      }`}></div>
                      
                      <div className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
                      }`}>
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="flex items-center justify-between mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              phase.status === 'current' ? 'bg-green-100 text-green-800' : 
                              phase.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                            }`}>
                              {phase.phase}
                            </span>
                            <span className="text-sm text-gray-500">{phase.title}</span>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.focus}</h3>
                          
                          <ul className="space-y-2 text-gray-600 mb-4">
                            {phase.actions.map((action, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {action}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="text-sm font-medium text-gray-900">Target:</div>
                            <div className="text-sm text-gray-600">{phase.target}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marketing Strategy */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Маркетинговая Стратегия</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-100 mb-3">Digital Marketing</h4>
                    <ul className="space-y-2 text-blue-100">
                      <li>• Content Marketing</li>
                      <li>• Social Media</li>
                      <li>• Google/Facebook Ads</li>
                      <li>• Influencer Partnerships</li>
                    </ul>
                    <div className="mt-3 text-sm text-blue-200">Budget: $25K/мес</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100 mb-3">Partnership Marketing</h4>
                    <ul className="space-y-2 text-blue-100">
                      <li>• Agrobank Co-Marketing</li>
                      <li>• Corporate Sales</li>
                      <li>• Industry Events</li>
                      <li>• Free Trials</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100 mb-3">PR & Brand Building</h4>
                    <ul className="space-y-2 text-blue-100">
                      <li>• Press Releases</li>
                      <li>• Media Coverage</li>
                      <li>• Awards & Competitions</li>
                      <li>• Thought Leadership</li>
                    </ul>
                    <div className="mt-3 text-sm text-blue-200">Budget: $5K/мес</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Financial Projections */}
          {activeTab === 'financials' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Финансовые Проекции</h2>
              
              {/* Yearly Projections */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    year: 'Year 1 (2026)',
                    revenue: '$1.4M',
                    costs: '$800K',
                    profit: '$600K',
                    growth: 'Launch Phase',
                    highlights: ['MVP Development', 'First 500 users', 'Agrobank integration']
                  },
                  {
                    year: 'Year 2 (2027)',
                    revenue: '$4.5M',
                    costs: '$2M',
                    profit: '$2.5M',
                    growth: '3x Growth',
                    highlights: ['Market expansion', '25,000 users', 'Multiple revenue streams']
                  },
                  {
                    year: 'Year 3 (2028)',
                    revenue: '$12M',
                    costs: '$5M',
                    profit: '$7M',
                    growth: '2.7x Growth',
                    highlights: ['Regional expansion', '100,000+ users', 'Market leadership']
                  }
                ].map((projection, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{projection.year}</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Revenue:</span>
                        <span className="font-bold text-green-600">{projection.revenue}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Costs:</span>
                        <span className="font-bold text-red-600">{projection.costs}</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-gray-200 pt-2">
                        <span className="text-gray-600">Net Profit:</span>
                        <span className="font-bold text-blue-600">{projection.profit}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-3">{projection.growth}</div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {projection.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Revenue Breakdown */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Распределение Доходов (Year 2)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">По Категориям</h4>
                    <div className="space-y-3">
                      {[
                        { category: 'B2C Subscriptions', amount: '$1.8M', percentage: '40%', color: 'bg-blue-500' },
                        { category: 'B2B Corporate', amount: '$2.0M', percentage: '44%', color: 'bg-green-500' },
                        { category: 'Banking Integration', amount: '$600K', percentage: '13%', color: 'bg-purple-500' },
                        { category: 'Other Revenue', amount: '$100K', percentage: '3%', color: 'bg-orange-500' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 ${item.color} rounded mr-3`}></div>
                            <span className="text-gray-700">{item.category}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">{item.amount}</div>
                            <div className="text-sm text-gray-500">{item.percentage}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Ключевые Метрики</h4>
                    <div className="space-y-4">
                      {[
                        { metric: 'Customer Acquisition Cost', target: '< $50' },
                        { metric: 'Lifetime Value', target: '> $500' },
                        { metric: 'LTV/CAC Ratio', target: '> 10x' },
                        { metric: 'Monthly Churn', target: '< 3%' },
                        { metric: 'Net Promoter Score', target: '> 60' }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-700">{item.metric}</span>
                          <span className="font-semibold text-green-600">{item.target}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Development Roadmap */}
          {activeTab === 'roadmap' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">План Разработки</h2>
              
              {/* Hackathon Timeline */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Hackathon Timeline (16 дней)</h3>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">Week 1</div>
                    <div className="text-orange-100">Foundation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Week 2</div>
                    <div className="text-orange-100">Core Features</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Final Week</div>
                    <div className="text-orange-100">Presentation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Dec 13</div>
                    <div className="text-orange-100">Hackathon Final!</div>
                  </div>
                </div>
              </div>

              {/* MVP Scope */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">Must Have (MVP)</h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✅</span>
                      3D Digital Twin Visualization
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✅</span>
                      AI Prediction Engine
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✅</span>
                      Health Dashboard
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✅</span>
                      Recommendations System
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✅</span>
                      Professional UI/UX
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✅</span>
                      Live Demo
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Team Roles</h3>
                  <div className="space-y-3 text-blue-800">
                    <div>
                      <div className="font-semibold">Backend Lead</div>
                      <div className="text-sm">FastAPI, Database, DevOps</div>
                    </div>
                    <div>
                      <div className="font-semibold">Frontend + 3D</div>
                      <div className="text-sm">React, Three.js, UI Components</div>
                    </div>
                    <div>
                      <div className="font-semibold">ML/AI Engineer</div>
                      <div className="text-sm">LSTM, LightGBM, Training</div>
                    </div>
                    <div>
                      <div className="font-semibold">Full-Stack + Design</div>
                      <div className="text-sm">UI/UX, Analytics, Presentation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Criteria */}
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Критерии Успеха</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">🏆</div>
                    <div className="font-semibold text-purple-800">Win Hackathon</div>
                    <div className="text-sm text-purple-600">1st, 2nd or 3rd place</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">🤝</div>
                    <div className="font-semibold text-purple-800">Agrobank Partnership</div>
                    <div className="text-sm text-purple-600">Secure interest/partnership</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">📱</div>
                    <div className="font-semibold text-purple-800">Working MVP</div>
                    <div className="text-sm text-purple-600">Stable, bug-free demo</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

        
      </div>
    </div>
  )
}

export default BusinessPlanSection