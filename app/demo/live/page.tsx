'use client'

import {
  Activity,
  ActivitySquare,
  AlertCircle,
  AlertTriangle,
  Apple,
  BarChart3,
  Battery,
  Bed,
  Brain,
  BrainCircuit,
  Brain as BrainIcon,
  CheckCircle,
  ChevronRight,
  Clock,
  Download,
  Droplets,
  Dumbbell,
  Eye,
  Heart,
  HeartPulse,
  Leaf,
  Moon,
  RefreshCw,
  Shield,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Utensils,
  Waves,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Определение типов для AI рекомендаций
type NutritionItem = {
  name: string
  description: string
  icon: string
  calories: string
  nutrients: string
}

type SupplementItem = {
  name: string
  dosage: string
  time?: string
  timing?: string
  reason?: string
  benefits?: string
  evidence?: string
  icon?: string
}

type ActivityItem = {
  type: string
  duration: string
  intensity: string
  heartZone?: string
  exercises?: string
  activity?: string
  icon: string
  benefits: string
}

type RecommendationItem = {
  area: string
  action: string
  icon: string
  impact: string
}

type AIRecommendationCard = {
  id: number
  title: string
  icon: React.ReactNode
  color: string
  borderColor: string
  items?: NutritionItem[]
  supplements?: SupplementItem[]
  activities?: ActivityItem[]
  recommendations?: RecommendationItem[]
  timing?: string
  calories?: string
  note?: string
}

const MedicalDemoDashboard = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [stressLevel, setStressLevel] = useState(45)
  const [heartLoad, setHeartLoad] = useState(65)
  const [recoveryQuality, setRecoveryQuality] = useState(78)
  const [hrv, setHRV] = useState(65)
  const [sleepScore, setSleepScore] = useState(85)
  const [metabolicScore, setMetabolicScore] = useState(82)
  const [avatarHeartColor, setAvatarHeartColor] = useState('#22c55e')
  const [auraIntensity, setAuraIntensity] = useState(30)
  const [heartRhythm, setHeartRhythm] = useState<'normal' | 'irregular' | 'tachy'>('normal')

  const heartBeatRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Анимация сердцебиения
  useEffect(() => {
    if (!heartBeatRef.current) return

    const interval = setInterval(() => {
      heartBeatRef.current?.classList.toggle('heart-beat')
      setTimeout(() => {
        heartBeatRef.current?.classList.toggle('heart-beat')
      }, 300)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Обновление аватара на основе метрик здоровья
  useEffect(() => {
    const updateAvatar = () => {
      if (analysisComplete) {
        let heartColor = '#22c55e' // Зеленый
        let rhythm: 'normal' | 'irregular' | 'tachy' = 'normal'

        if (heartLoad > 70) heartColor = '#f59e0b' // Желтый
        if (heartLoad > 85) {
          heartColor = '#ef4444' // Красный
          rhythm = 'tachy'
        } else if (hrv < 55) {
          rhythm = 'irregular'
        }

        // Расчет ауры на основе стресса
        let aura = stressLevel
        if (stressLevel > 70) aura = 70 + (stressLevel - 70) * 1.5

        setAvatarHeartColor(heartColor)
        setAuraIntensity(Math.min(aura, 100))
        setHeartRhythm(rhythm)
      }
    }

    updateAvatar()
  }, [analysisComplete, heartLoad, stressLevel, hrv])

  const simulateAnalysis = () => {
    setIsAnalyzing(true)

    // Сброс в начальное состояние с анимацией
    setAnalysisComplete(false)
    setHeartLoad(65)
    setStressLevel(45)
    setRecoveryQuality(78)
    setHRV(65)
    setSleepScore(85)
    setMetabolicScore(82)

    // Анимация временной шкалы
    if (timelineRef.current) {
      const steps = timelineRef.current.querySelectorAll('.timeline-step')
      steps.forEach((step, index) => {
        setTimeout(() => {
          step.classList.remove('bg-gray-700', 'text-gray-400')
          step.classList.add('bg-blue-500', 'text-white')
        }, index * 500)
      })
    }

    // Симуляция обработки ИИ
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)

      // Генерация реалистичных случайных данных
      setStressLevel(Math.floor(Math.random() * 30) + 40) // 40-70
      setHeartLoad(Math.floor(Math.random() * 30) + 60) // 60-90
      setRecoveryQuality(Math.floor(Math.random() * 30) + 65) // 65-95
      setHRV(Math.floor(Math.random() * 40) + 50) // 50-90
      setSleepScore(Math.floor(Math.random() * 30) + 70) // 70-100
      setMetabolicScore(Math.floor(Math.random() * 30) + 65) // 65-95

      // Сброс анимации временной шкалы
      setTimeout(() => {
        if (timelineRef.current) {
          const steps = timelineRef.current.querySelectorAll('.timeline-step')
          steps.forEach(step => {
            step.classList.remove('bg-blue-500', 'text-white')
            step.classList.add('bg-gray-700', 'text-gray-400')
          })
        }
      }, 3000)
    }, 3500)
  }

  const resetDemo = () => {
    setAnalysisComplete(false)
    setHeartLoad(65)
    setStressLevel(45)
    setRecoveryQuality(78)
    setHRV(65)
    setSleepScore(85)
    setMetabolicScore(82)
    setAvatarHeartColor('#22c55e')
    setAuraIntensity(30)
    setHeartRhythm('normal')
  }

  const exportReport = () => {
    alert(
      'Медицинский отчет экспортирован в PDF. В рабочей версии это бы создало комплексный отчет о здоровье.'
    )
  }

  const healthMetrics = [
    {
      icon: <HeartPulse className='w-5 h-5' />,
      label: 'Нагрузка на сердце',
      value: `${heartLoad}%`,
      status: heartLoad > 85 ? 'Критическая' : heartLoad > 70 ? 'Умеренная' : 'Оптимальная',
      color:
        heartLoad > 85 ? 'text-rose-500' : heartLoad > 70 ? 'text-amber-500' : 'text-emerald-500',
      bg:
        heartLoad > 85
          ? 'bg-rose-500/10'
          : heartLoad > 70
          ? 'bg-amber-500/10'
          : 'bg-emerald-500/10',
      border:
        heartLoad > 85
          ? 'border-rose-500/30'
          : heartLoad > 70
          ? 'border-amber-500/30'
          : 'border-emerald-500/30',
    },
    {
      icon: <BrainCircuit className='w-5 h-5' />,
      label: 'Нейро-стресс индекс',
      value: `${stressLevel}%`,
      status: stressLevel > 70 ? 'Высокий' : stressLevel > 50 ? 'Повышенный' : 'Нормальный',
      color:
        stressLevel > 70 ? 'text-rose-500' : stressLevel > 50 ? 'text-amber-500' : 'text-blue-500',
      bg:
        stressLevel > 70
          ? 'bg-rose-500/10'
          : stressLevel > 50
          ? 'bg-amber-500/10'
          : 'bg-blue-500/10',
      border:
        stressLevel > 70
          ? 'border-rose-500/30'
          : stressLevel > 50
          ? 'border-amber-500/30'
          : 'border-blue-500/30',
    },
    {
      icon: <Bed className='w-5 h-5' />,
      label: 'Качество восстановления',
      value: `${recoveryQuality}%`,
      status: recoveryQuality > 85 ? 'Отличное' : recoveryQuality > 75 ? 'Хорошее' : 'Умеренное',
      color:
        recoveryQuality > 85
          ? 'text-emerald-500'
          : recoveryQuality > 75
          ? 'text-emerald-400'
          : 'text-amber-500',
      bg:
        recoveryQuality > 85
          ? 'bg-emerald-500/10'
          : recoveryQuality > 75
          ? 'bg-emerald-500/10'
          : 'bg-amber-500/10',
      border:
        recoveryQuality > 85
          ? 'border-emerald-500/30'
          : recoveryQuality > 75
          ? 'border-emerald-500/30'
          : 'border-amber-500/30',
    },
    {
      icon: <ActivitySquare className='w-5 h-5' />,
      label: 'Показатель ВСР',
      value: `${hrv} мс`,
      status: hrv > 75 ? 'Отличный' : hrv > 60 ? 'Хороший' : 'Низкий',
      color: hrv > 75 ? 'text-emerald-500' : hrv > 60 ? 'text-blue-500' : 'text-amber-500',
      bg: hrv > 75 ? 'bg-emerald-500/10' : hrv > 60 ? 'bg-blue-500/10' : 'bg-amber-500/10',
      border:
        hrv > 75
          ? 'border-emerald-500/30'
          : hrv > 60
          ? 'border-blue-500/30'
          : 'border-amber-500/30',
    },
    {
      icon: <Battery className='w-5 h-5' />,
      label: 'Метаболическая эффективность',
      value: `${metabolicScore}/100`,
      status: metabolicScore > 85 ? 'Оптимальная' : metabolicScore > 70 ? 'Нормальная' : 'Ниже среднего',
      color:
        metabolicScore > 85
          ? 'text-emerald-500'
          : metabolicScore > 70
          ? 'text-emerald-400'
          : 'text-amber-500',
      bg:
        metabolicScore > 85
          ? 'bg-emerald-500/10'
          : metabolicScore > 70
          ? 'bg-emerald-500/10'
          : 'bg-amber-500/10',
      border:
        metabolicScore > 85
          ? 'border-emerald-500/30'
          : metabolicScore > 70
          ? 'border-emerald-500/30'
          : 'border-amber-500/30',
    },
    {
      icon: <Shield className='w-5 h-5' />,
      label: 'Устойчивость системы',
      value: `${Math.round((heartLoad + recoveryQuality + metabolicScore) / 3)}%`,
      status: 'Стабильная',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
    },
  ]

  const riskPredictions = [
    {
      type: 'Риск сердечного события',
      risk: heartLoad > 85 ? 'ВЫСОКИЙ' : heartLoad > 70 ? 'СРЕДНИЙ' : 'НИЗКИЙ',
      probability: heartLoad > 85 ? '32%' : heartLoad > 70 ? '18%' : '5%',
      color: heartLoad > 85 ? 'bg-rose-500' : heartLoad > 70 ? 'bg-amber-500' : 'bg-emerald-500',
      icon: <Heart className='w-5 h-5' />,
      timeframe: 'Следующие 24 часа',
    },
    {
      type: 'Нарушение сна',
      risk: sleepScore < 70 ? 'СРЕДНИЙ' : 'НИЗКИЙ',
      probability: sleepScore < 70 ? '28%' : '12%',
      color: sleepScore < 70 ? 'bg-amber-500' : 'bg-emerald-500',
      icon: <Moon className='w-5 h-5' />,
      timeframe: 'Сегодня ночью',
    },
    {
      type: 'Хроническая усталость',
      risk: recoveryQuality < 70 ? 'ВЫСОКИЙ' : recoveryQuality < 80 ? 'СРЕДНИЙ' : 'НИЗКИЙ',
      probability: recoveryQuality < 70 ? '45%' : recoveryQuality < 80 ? '25%' : '8%',
      color:
        recoveryQuality < 70
          ? 'bg-rose-500'
          : recoveryQuality < 80
          ? 'bg-amber-500'
          : 'bg-emerald-500',
      icon: <AlertCircle className='w-5 h-5' />,
      timeframe: 'Следующие 48 часов',
    },
    {
      type: 'Эпизод тахикардии',
      risk: hrv < 60 ? 'СРЕДНИЙ' : 'НИЗКИЙ',
      probability: hrv < 60 ? '22%' : '9%',
      color: hrv < 60 ? 'bg-amber-500' : 'bg-emerald-500',
      icon: <Activity className='w-5 h-5' />,
      timeframe: 'Следующие 12 часов',
    },
  ]

  const recommendations = [
    {
      icon: '🛌',
      title: 'Оптимизация сна',
      desc: 'Целевое окно сна: 22:30 - 06:30. Поддерживайте эффективность сна >85%',
      priority: sleepScore < 80 ? 'high' : 'medium',
      action: 'Запланировать сон',
    },
    {
      icon: '💧',
      title: 'Протокол гидратации',
      desc: 'Выпейте 2.8 л воды сегодня. Осталось выпить: 1.3 л',
      priority: 'medium',
      action: 'Записать прием',
    },
    {
      icon: '🏃',
      title: 'План активности',
      desc:
        heartLoad > 70 ? 'Только легкая активность: 20 мин ходьбы' : 'Умеренные упражнения: 40 мин кардио',
      priority: heartLoad > 70 ? 'high' : 'medium',
      action: 'Посмотреть план',
    },
    {
      icon: '🧘',
      title: 'Управление стрессом',
      desc:
        stressLevel > 60
          ? 'Обязательно: 15 мин медитации + дыхательные упражнения'
          : 'Рекомендуется: 10 мин осознанности',
      priority: stressLevel > 60 ? 'high' : 'medium',
      action: 'Начать сессию',
    },
    {
      icon: '🥗',
      title: 'Рекомендации по питанию',
      desc: 'Увеличьте потребление магния и калия. Добавьте листовую зелень к обеду/ужину',
      priority: 'medium',
      action: 'Посмотреть диету',
    },
    {
      icon: '📊',
      title: 'Протокол мониторинга',
      desc: 'Проверьте АД в 18:00. Примечание: Систолическое давление +5 мм рт.ст. от базового',
      priority: 'medium',
      action: 'Установить напоминание',
    },
  ]

  const forecastData = [
    { time: '6:00', hrv: 65, sleep: 85, load: 30, risk: 'low' },
    { time: '9:00', hrv: 68, sleep: 88, load: 45, risk: 'low' },
    { time: '12:00', hrv: 62, sleep: 82, load: 60, risk: 'medium' },
    { time: '15:00', hrv: 58, sleep: 75, load: 70, risk: 'medium' },
    { time: '18:00', hrv: 55, sleep: 70, load: 50, risk: 'medium' },
    { time: '21:00', hrv: 70, sleep: 90, load: 25, risk: 'low' },
    { time: '00:00', hrv: 75, sleep: 95, load: 10, risk: 'low' },
  ]

  const biomarkerData = [
    {
      biomarker: 'Частота сердцебиения',
      value: '72 уд/мин',
      range: '60-100',
      status: 'норма',
      trend: 'стабильно',
    },
    {
      biomarker: 'ВСР (RMSSD)',
      value: '65 мс',
      range: '>50 мс',
      status: 'норма',
      trend: 'улучшается',
    },
    {
      biomarker: 'Продолжительность сна',
      value: '7ч 24м',
      range: '7-9ч',
      status: 'оптимально',
      trend: 'стабильно',
    },
    {
      biomarker: 'Эффективность сна',
      value: '94%',
      range: '>85%',
      status: 'отлично',
      trend: 'улучшается',
    },
    { biomarker: 'Уровень стресса', value: '42/100', range: '<60', status: 'низкий', trend: 'стабильно' },
    {
      biomarker: 'Систолическое АД',
      value: '122 мм рт.ст.',
      range: '<130',
      status: 'норма',
      trend: 'мониторить',
    },
    {
      biomarker: 'Диастолическое АД',
      value: '78 мм рт.ст.',
      range: '<85',
      status: 'оптимально',
      trend: 'стабильно',
    },
    {
      biomarker: 'Глюкоза крови',
      value: '5.4 ммоль/л',
      range: '4.0-6.0',
      status: 'норма',
      trend: 'стабильно',
    },
  ]

  // Данные AI рекомендаций с правильной типизацией
  const aiRecommendationCards: AIRecommendationCard[] = [
    {
      id: 1,
      title: 'Питание на сегодня',
      icon: <Utensils className='w-6 h-6 text-amber-500' />,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      items: [
        {
          name: 'Завтрак',
          description: 'Овсянка с ягодами + 2 вареных яйца',
          icon: '🥣',
          calories: '320 ккал',
          nutrients: 'Высокое содержание клетчатки, белка',
        },
        {
          name: 'Обед',
          description: 'Гриль-лосось + киноа + приготовленная на пару брокколи',
          icon: '🐟',
          calories: '450 ккал',
          nutrients: 'Омега-3, антиоксиданты',
        },
        {
          name: 'Ужин',
          description: 'Куриный салат с авокадо и оливковым маслом',
          icon: '🥗',
          calories: '380 ккал',
          nutrients: 'Постный белок, полезные жиры',
        },
      ],
      supplements: [
        { name: 'Магний', dosage: '400мг', time: 'Вечер', reason: 'Снижение стресса' },
        { name: 'Омега-3', dosage: '1000мг', time: 'Во время еды', reason: 'Здоровье сердца' },
      ],
    },
    {
      id: 2,
      title: 'План упражнений',
      icon: <Dumbbell className='w-6 h-6 text-blue-500' />,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      activities: [
        {
          type: 'Кардио',
          duration: '30 мин',
          intensity: 'Умеренная',
          heartZone: 'Зона 2 (120-140 уд/мин)',
          icon: '🏃',
          benefits: 'Улучшает ВСР, снижает стресс',
        },
        {
          type: 'Силовые',
          duration: '20 мин',
          intensity: 'Легкая',
          exercises: 'Только с весом тела',
          icon: '💪',
          benefits: 'Поддерживает мышечную массу',
        },
        {
          type: 'Восстановление',
          duration: '15 мин',
          intensity: 'Легкая',
          exercises: 'Йога и растяжка',
          icon: '🧘',
          benefits: 'Улучшает гибкость, снижает кортизол',
        },
      ],
      timing: 'Лучшее время: 10:00 (на основе вашего циркадного ритма)',
      calories: 'Ориентировочный расход: 420 ккал',
    },
    {
      id: 3,
      title: 'Оптимизация образа жизни',
      icon: <Sun className='w-6 h-6 text-emerald-500' />,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      recommendations: [
        {
          area: 'Качество сна',
          action: 'Фильтр синего света после 20:00',
          icon: '🌙',
          impact: '+15% эффективности сна',
        },
        {
          area: 'Гидратация',
          action: 'Выпейте 500 мл воды после пробуждения',
          icon: '💧',
          impact: 'Ускоряет метаболизм на 30%',
        },
        {
          area: 'Управление стрессом',
          action: '10 мин медитации в 15:00',
          icon: '😌',
          impact: 'Снижает кортизол на 25%',
        },
        {
          area: 'Когнитивные функции',
          action: '20 мин фокусированной работы + 5 мин перерыв',
          icon: '🧠',
          impact: 'Поддерживает ясность ума',
        },
      ],
    },
    {
      id: 4,
      title: 'Умные добавки',
      icon: <Leaf className='w-6 h-6 text-purple-500' />,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      supplements: [
        {
          name: 'Ашваганда',
          dosage: '600мг',
          timing: 'Утро и вечер',
          benefits: 'Адаптоген для стресса',
          evidence: 'Сильная клиническая поддержка',
          icon: '🌿',
        },
        {
          name: 'L-Теанин',
          dosage: '200мг',
          timing: 'По необходимости при стрессе',
          benefits: 'Способствует спокойной фокусировке',
          evidence: 'Умеренные доказательства',
          icon: '🍵',
        },
        {
          name: 'Витамин D3',
          dosage: '2000 МЕ',
          timing: 'Утро с едой',
          benefits: 'Иммунитет и здоровье костей',
          evidence: 'Необходимая добавка',
          icon: '☀️',
        },
      ],
      note: 'На основе вашего метаболического профиля и генетических предрасположенностей',
    },
  ]

  // Вспомогательная функция для безопасного отображения содержимого карточки
  const renderCardContent = (card: AIRecommendationCard) => {
    switch (card.id) {
      case 1:
        return (
          <div className='space-y-4'>
            <div className='grid gap-3'>
              {card.items?.map((item, idx) => (
                <div key={idx} className='flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg'>
                  <div className='text-2xl'>{item.icon}</div>
                  <div className='flex-1'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <h4 className='font-semibold text-sm'>{item.name}</h4>
                        <p className='text-xs text-gray-400'>{item.description}</p>
                      </div>
                      <span className='text-xs bg-gray-700 px-2 py-1 rounded-full'>
                        {item.calories}
                      </span>
                    </div>
                    <div className='text-xs text-emerald-400 mt-2'>{item.nutrients}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className='pt-4 border-t border-gray-700'>
              <h4 className='font-semibold text-sm mb-2'>Рекомендуемые добавки</h4>
              <div className='flex flex-wrap gap-2'>
                {card.supplements?.map((supp, idx) => (
                  <div
                    key={idx}
                    className='text-xs bg-gray-800/50 px-3 py-1.5 rounded-lg'
                  >
                    <span className='font-medium'>{supp.name}</span>
                    <span className='text-gray-400'>
                      {' '}
                      • {supp.dosage} • {supp.time || supp.timing}
                    </span>
                    <div className='text-emerald-400 text-[10px] mt-0.5'>
                      {supp.reason || supp.benefits}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className='space-y-4'>
            <div className='grid gap-3'>
              {card.activities?.map((activity, idx) => (
                <div key={idx} className='flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg'>
                  <div className='text-2xl'>{activity.icon}</div>
                  <div className='flex-1'>
                    <div className='flex justify-between items-start mb-1'>
                      <h4 className='font-semibold text-sm'>{activity.type}</h4>
                      <span className='text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full'>
                        {activity.duration}
                      </span>
                    </div>
                    <div className='text-xs text-gray-400 mb-2'>
                      Интенсивность:{' '}
                      <span className='text-white'>{activity.intensity}</span>
                      {activity.heartZone && ` • ${activity.heartZone}`}
                      {activity.exercises && ` • ${activity.exercises}`}
                      {activity.activity && ` • ${activity.activity}`}
                    </div>
                    <div className='text-xs text-emerald-400'>{activity.benefits}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className='pt-4 border-t border-gray-700'>
              <div className='text-sm text-gray-300'>{card.timing}</div>
              <div className='flex justify-between items-center mt-2'>
                <span className='text-xs text-gray-400'>Расход калорий</span>
                <span className='font-bold text-amber-400'>{card.calories}</span>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className='space-y-3'>
            {card.recommendations?.map((rec, idx) => (
              <div key={idx} className='flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg'>
                <div className='text-2xl'>{rec.icon}</div>
                <div className='flex-1'>
                  <div className='flex justify-between items-start'>
                    <h4 className='font-semibold text-sm'>{rec.area}</h4>
                    <span className='text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full'>
                      {rec.impact}
                    </span>
                  </div>
                  <p className='text-xs text-gray-400 mt-1'>{rec.action}</p>
                </div>
              </div>
            ))}
            <div className='mt-4 p-3 bg-linear-to-r from-emerald-500/10 to-teal-500/10 rounded-lg'>
              <div className='text-xs text-gray-300'>
                <span className='font-semibold'>Примечание:</span> Эти небольшие изменения могут
                улучшить ваш общий показатель здоровья до 18% на этой неделе.
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className='space-y-4'>
            <div className='grid gap-3'>
              {card.supplements?.map((supp, idx) => (
                <div key={idx} className='flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg'>
                  <div className='text-2xl'>{supp.icon}</div>
                  <div className='flex-1'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <h4 className='font-semibold text-sm'>{supp.name}</h4>
                        <div className='text-xs text-gray-400'>
                          {supp.dosage} • {supp.timing}
                        </div>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          supp.evidence?.includes('Сильная')
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : supp.evidence?.includes('Умеренные')
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {supp.evidence}
                      </span>
                    </div>
                    <div className='text-xs text-emerald-400 mt-2'>{supp.benefits}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className='pt-4 border-t border-gray-700'>
              <div className='text-xs text-gray-400'>{card.note}</div>
              <button className='mt-3 w-full text-xs bg-linear-to-r from-purple-500/20 to-pink-500/20 text-purple-400 hover:text-purple-300 px-4 py-2 rounded-lg transition-colors'>
                Посмотреть полный протокол добавок
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className='min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-white'>
      {/* Навигация */}
      <nav className='border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center space-x-8'>
              <div className='flex items-center space-x-2'>
                <div className='p-2 bg-linear-to-br from-blue-500 to-emerald-500 rounded-lg'>
                  <Heart className='w-6 h-6 text-white' />
                </div>
                <span className='text-xl font-bold bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent'>
                  HealthTwin AI
                </span>
              </div>
              <div className='hidden md:flex space-x-6'>
                {['Панель', 'Цифровой двойник', 'Аналитика', 'Отчеты', 'Протоколы'].map(item => (
                  <button
                    key={item}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === item.toLowerCase()
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setActiveTab(item.toLowerCase())}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <button className='px-4 py-2 text-sm bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors'>
                Режим пациента
              </button>
              <button className='px-4 py-2 text-sm bg-linear-to-r from-blue-600 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity'>
                Вид врача
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className='max-w-7xl mx-auto p-4 md:p-8'>
        {/* Заголовок */}
        <div className='mb-8'>
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6'>
            <div>
              <h1 className='text-3xl md:text-4xl font-bold mb-2'>
                AI-Цифровой Двойник Здоровья
                <span className='ml-3 px-3 py-1 text-xs bg-linear-to-r from-blue-500/20 to-emerald-500/20 text-blue-400 rounded-full'>
                  ДЕМО РЕЖИМ
                </span>
              </h1>
              <p className='text-gray-400 text-lg'>
                Моделирование физиологии в реальном времени и прогнозная аналитика здоровья
              </p>
            </div>

            <div className='flex flex-wrap gap-3'>
              {!analysisComplete ? (
                <button
                  onClick={simulateAnalysis}
                  disabled={isAnalyzing}
                  className='px-8 py-3 bg-linear-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center gap-3 shadow-lg shadow-blue-500/20'
                >
                  {isAnalyzing ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      <span>Обработка биомаркеров...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className='w-5 h-5' />
                      <span>Запустить AI анализ</span>
                    </>
                  )}
                </button>
              ) : (
                <div className='flex gap-3'>
                  <button
                    onClick={exportReport}
                    className='px-6 py-3 bg-gray-800 rounded-xl font-semibold hover:bg-gray-700 transition-all flex items-center gap-2'
                  >
                    <Download className='w-4 h-4' />
                    Экспорт отчета
                  </button>
                  <button
                    onClick={resetDemo}
                    className='px-6 py-3 bg-linear-to-r from-gray-800 to-gray-700 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center gap-2'
                  >
                    <RefreshCw className='w-4 h-4' />
                    Сбросить демо
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Временная шкала анализа */}
          <div
            ref={timelineRef}
            className='mt-8 p-6 bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-800'
          >
            <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
              <BarChart3 className='w-5 h-5 text-blue-400' />
              Пайплайн AI анализа
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              {[
                { step: '1', label: 'Сбор биомаркеров', desc: 'Получение данных с устройств' },
                { step: '2', label: 'Обработка сигналов', desc: 'Фильтрация и нормализация' },
                { step: '3', label: 'Вывод модели', desc: 'Распознавание паттернов AI' },
                { step: '4', label: 'Оценка рисков', desc: 'Прогнозная аналитика' },
              ].map(item => (
                <div
                  key={item.step}
                  className='timeline-step p-4 bg-gray-700/50 rounded-xl border border-gray-700 text-gray-400 transition-all duration-500'
                >
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold'>
                      {item.step}
                    </div>
                    <span className='font-semibold'>{item.label}</span>
                  </div>
                  <p className='text-sm'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Основная панель */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Левая колонка - Цифровой двойник и метрики */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Визуализация цифрового двойника */}
            <div className='bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h2 className='text-2xl font-bold mb-1 flex items-center gap-3'>
                    <Target className='w-6 h-6 text-blue-400' />
                    Визуализация цифрового двойника
                  </h2>
                  <p className='text-gray-400'>Моделирование физиологии в реальном времени</p>
                </div>
                <div className='text-sm px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2'>
                  <Eye className='w-4 h-4' />
                  Живой монитор
                </div>
              </div>

              <div className='flex flex-col xl:flex-row items-center justify-between gap-8'>
                {/* Аватар человека */}
                <div className='relative flex-1'>
                  <div className='relative w-80 h-80 mx-auto'>
                    {/* Аура */}
                    <div
                      className='absolute inset-0 rounded-full'
                      style={{
                        background: `radial-gradient(circle at center, rgba(99, 102, 241, ${
                          auraIntensity / 150
                        }) 0%, transparent 70%)`,
                        filter: 'blur(30px)',
                        transition: 'all 2s ease',
                      }}
                    />

                    {/* Наложение систем организма */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='relative w-60 h-96'>
                        {/* Контур тела */}
                        <div className='absolute inset-0 bg-linear-to-b from-gray-800 to-gray-900 rounded-full opacity-50'></div>

                        {/* Сердечно-сосудистая система */}
                        <div className='absolute left-1/2 top-1/4 -translate-x-1/2'>
                          <div className='relative'>
                            <div
                              ref={heartBeatRef}
                              className={`w-20 h-20 rounded-full ${
                                heartRhythm === 'tachy' ? 'animate-pulse' : ''
                              }`}
                              style={{
                                backgroundColor: avatarHeartColor,
                                boxShadow: `0 0 50px ${avatarHeartColor}80`,
                                animation:
                                  heartRhythm === 'irregular'
                                    ? 'pulse 1.5s ease-in-out infinite'
                                    : '',
                              }}
                            >
                              <Heart className='absolute inset-0 m-auto w-10 h-10 text-white' />
                            </div>
                            {/* Линии кровотока */}
                            <div className='absolute top-full left-1/2 -translate-x-1/2 w-1 h-32 bg-linear-to-b from-rose-500/50 to-transparent'></div>
                          </div>
                        </div>

                        {/* Нейронная сеть */}
                        <div className='absolute right-1/4 top-1/3 w-16 h-16 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm'>
                          <div className='absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full'></div>
                        </div>

                        {/* Дыхательная система */}
                        <div className='absolute left-1/4 top-2/3 w-14 h-14 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-sm'>
                          <div className='absolute inset-0 bg-linear-to-r from-emerald-500/10 to-teal-500/10 rounded-full animate-pulse'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Жизненные показатели */}
                <div className='flex-1 space-y-6 min-w-[300px]'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-linear-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700'>
                      <div className='text-sm text-gray-400 mb-3 flex items-center gap-2'>
                        <Activity className='w-4 h-4' />
                        Состояние сердца
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-3'>
                          <div
                            className={`w-3 h-3 rounded-full ${
                              heartRhythm === 'tachy'
                                ? 'animate-ping'
                                : heartRhythm === 'irregular'
                                ? 'animate-pulse'
                                : ''
                            }`}
                            style={{ backgroundColor: avatarHeartColor }}
                          ></div>
                          <span className='font-semibold text-lg'>
                            {heartLoad > 85
                              ? 'Критическая нагрузка'
                              : heartLoad > 70
                              ? 'Повышенная'
                              : 'Оптимальная'}
                          </span>
                        </div>
                        <div className='text-3xl font-bold' style={{ color: avatarHeartColor }}>
                          {heartLoad}%
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <div className='text-xs text-gray-400 flex justify-between'>
                          <span>Базовый уровень</span>
                          <span>Порог</span>
                        </div>
                        <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                          <div
                            className='h-full rounded-full transition-all duration-1000'
                            style={{ width: `${heartLoad}%`, backgroundColor: avatarHeartColor }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className='bg-linear-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700'>
                      <div className='text-sm text-gray-400 mb-3 flex items-center gap-2'>
                        <Brain className='w-4 h-4' />
                        Нейронная нагрузка
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-3'>
                          <div
                            className='w-3 h-3 rounded-full'
                            style={{
                              backgroundColor: `rgb(99 102 241 / ${auraIntensity / 100})`,
                              boxShadow: `0 0 10px rgb(99 102 241 / ${auraIntensity / 100})`,
                            }}
                          ></div>
                          <span className='font-semibold text-lg'>
                            {stressLevel > 70
                              ? 'Высокий стресс'
                              : stressLevel > 50
                              ? 'Умеренный'
                              : 'Спокойный'}
                          </span>
                        </div>
                        <div className='text-3xl font-bold text-indigo-400'>{stressLevel}%</div>
                      </div>
                      <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                        <div
                          className='h-full rounded-full transition-all duration-1000'
                          style={{
                            width: `${stressLevel}%`,
                            background: 'linear-gradient(to right, #6366f1, #a855f7)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Статус системы */}
                  <div className='bg-linear-to-r from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700'>
                    <div className='text-sm text-gray-400 mb-4'>Обзор статуса системы</div>
                    <div className='grid grid-cols-3 gap-4'>
                      {[
                        {
                          name: 'Сердечно-сосудистая',
                          status: heartLoad > 70 ? 'warning' : 'normal',
                          icon: '❤️',
                        },
                        {
                          name: 'Нейронная',
                          status: stressLevel > 60 ? 'warning' : 'normal',
                          icon: '🧠',
                        },
                        {
                          name: 'Метаболическая',
                          status: metabolicScore > 70 ? 'normal' : 'warning',
                          icon: '⚡',
                        },
                      ].map(system => (
                        <div
                          key={system.name}
                          className='text-center p-3 bg-gray-800/50 rounded-lg'
                        >
                          <div className='text-2xl mb-2'>{system.icon}</div>
                          <div className='text-sm font-medium mb-1'>{system.name}</div>
                          <div
                            className={`text-xs px-2 py-1 rounded-full ${
                              system.status === 'warning'
                                ? 'bg-amber-500/20 text-amber-400'
                                : 'bg-emerald-500/20 text-emerald-400'
                            }`}
                          >
                            {system.status === 'warning' ? 'Мониторить' : 'Стабильно'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Сетка метрик здоровья */}
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
              {healthMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl border transition-all duration-700 ${
                    analysisComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${metric.bg} ${metric.border}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className='flex items-center justify-between mb-4'>
                    <div className={`p-2.5 rounded-lg ${metric.bg} border ${metric.border}`}>
                      <div className={metric.color}>{metric.icon}</div>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold ${metric.color} ${metric.bg}`}
                    >
                      {metric.status}
                    </span>
                  </div>
                  <div className='text-3xl font-bold mb-2'>{metric.value}</div>
                  <div className='text-sm text-gray-400'>{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Секция AI рекомендаций */}
            <div className='bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h2 className='text-2xl font-bold mb-1 flex items-center gap-3'>
                    <BrainIcon className='w-6 h-6 text-purple-400' />
                    AI-Сгенерированный Протокол Здоровья
                  </h2>
                  <p className='text-gray-400'>
                    Персонализированные рекомендации на основе ваших биомаркеров
                  </p>
                </div>
                <span className='text-xs bg-linear-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-3 py-1.5 rounded-full font-semibold'>
                  Обновляется ежедневно
                </span>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {aiRecommendationCards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`bg-linear-to-br ${card.color} rounded-xl border ${
                      card.borderColor
                    } p-5 transition-all duration-500 ${
                      analysisComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    } hover:scale-[1.02] hover:shadow-xl`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className='flex items-center gap-3 mb-4'>
                      <div
                        className={`p-2.5 rounded-lg ${card.color
                          .split(' ')[0]
                          .replace('/20', '/30')}`}
                      >
                        {card.icon}
                      </div>
                      <h3 className='text-lg font-bold'>{card.title}</h3>
                    </div>
                    {renderCardContent(card)}
                  </div>
                ))}
              </div>

              {/* Быстрые действия */}
              <div className='mt-6 pt-6 border-t border-gray-700'>
                <h4 className='font-semibold mb-3'>Быстрые действия</h4>
                <div className='flex flex-wrap gap-3'>
                  <button className='text-xs bg-linear-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 hover:text-blue-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2'>
                    <Apple className='w-3 h-3' />
                    Создать список покупок
                  </button>
                  <button className='text-xs bg-linear-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 hover:text-emerald-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2'>
                    <Dumbbell className='w-3 h-3' />
                    Запланировать тренировки
                  </button>
                  <button className='text-xs bg-linear-to-r from-amber-500/20 to-orange-500/20 text-amber-400 hover:text-amber-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2'>
                    <Waves className='w-3 h-3' />
                    Установить напоминания о воде
                  </button>
                  <button className='text-xs bg-linear-to-r from-purple-500/20 to-pink-500/20 text-purple-400 hover:text-purple-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2'>
                    <BrainIcon className='w-3 h-3' />
                    Когнитивные тренировки
                  </button>
                </div>
              </div>
            </div>

            {/* Движок прогнозирования рисков */}
            <div className='bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <div className='flex items-center justify-between mb-8'>
                <div>
                  <h2 className='text-2xl font-bold mb-1 flex items-center gap-3'>
                    <AlertTriangle className='w-6 h-6 text-amber-400' />
                    Движок Прогнозирования Рисков
                  </h2>
                  <p className='text-gray-400'>24-часовая прогнозная аналитика</p>
                </div>
                <div className='text-sm px-4 py-2 bg-amber-500/20 text-amber-400 rounded-lg'>
                  Клинический уровень
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {riskPredictions.map((risk, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-xl border border-gray-700 bg-linear-to-b from-gray-900 to-gray-800 transition-all duration-700 ${
                      analysisComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <div className='p-2.5 bg-gray-800 rounded-lg'>
                        <div className='text-blue-400'>{risk.icon}</div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          risk.risk === 'ВЫСОКИЙ'
                            ? 'bg-rose-500/20 text-rose-400'
                            : risk.risk === 'СРЕДНИЙ'
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-emerald-500/20 text-emerald-400'
                        }`}
                      >
                        {risk.risk}
                      </div>
                    </div>
                    <div className='text-lg font-bold mb-2'>{risk.type}</div>
                    <div className='text-sm text-gray-400 mb-1'>
                      Вероятность: {risk.probability}
                    </div>
                    <div className='text-xs text-gray-500 mb-4'>{risk.timeframe}</div>
                    <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                      <div
                        className={`h-full rounded-full ${risk.color} transition-all duration-1000`}
                        style={{
                          width: parseFloat(risk.probability) + '%',
                          transitionDelay: `${index * 200}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className='space-y-6'>
            {/* 24-часовой прогноз здоровья */}
            <div className='bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h2 className='text-2xl font-bold mb-1 flex items-center gap-3'>
                    <TrendingUp className='w-6 h-6 text-purple-400' />
                    Прогноз здоровья на 24 часа
                  </h2>
                  <p className='text-gray-400'>Прогнозное моделирование</p>
                </div>
                <Clock className='w-5 h-5 text-gray-400' />
              </div>

              <div className='space-y-4'>
                {forecastData.map((point, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between group hover:bg-gray-800/50 p-2 rounded-lg transition-colors'
                  >
                    <div className='w-16 text-sm text-gray-400 font-medium'>{point.time}</div>
                    <div className='flex-1 mx-4'>
                      <div className='flex items-center space-x-4'>
                        <div className='flex-1'>
                          <div className='text-xs text-blue-400 mb-1'>ВСР</div>
                          <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                            <div
                              className='h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-500 transition-all duration-1000'
                              style={{ width: `${point.hrv}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className='flex-1'>
                          <div className='text-xs text-emerald-400 mb-1'>Сон</div>
                          <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                            <div
                              className='h-full rounded-full bg-linear-to-r from-emerald-500 to-teal-500 transition-all duration-1000'
                              style={{ width: `${point.sleep}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className='flex-1'>
                          <div className='text-xs text-amber-400 mb-1'>Нагрузка</div>
                          <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                            <div
                              className='h-full rounded-full bg-linear-to-r from-amber-500 to-orange-500 transition-all duration-1000'
                              style={{ width: `${point.load}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        point.risk === 'high'
                          ? 'bg-rose-500'
                          : point.risk === 'medium'
                          ? 'bg-amber-500'
                          : 'bg-emerald-500'
                      }`}
                    ></div>
                  </div>
                ))}
              </div>

              <div className='mt-8 pt-6 border-t border-gray-800'>
                <div className='text-sm text-gray-400 mb-3 flex items-center justify-between'>
                  <span>Оценка риска</span>
                  <span className='text-xs'>Текущий: {heartLoad > 70 ? 'Повышенный' : 'Нормальный'}</span>
                </div>
                <div className='relative h-4 bg-linear-to-r from-emerald-500 via-amber-500 to-rose-500 rounded-full overflow-hidden'>
                  <div
                    className='absolute top-1/2 w-6 h-8 -translate-y-1/2 bg-white rounded-sm shadow-lg transform -rotate-12'
                    style={{ left: `${Math.min(heartLoad + 5, 95)}%` }}
                  ></div>
                  <div className='absolute inset-0 bg-linear-to-r from-transparent via-transparent to-gray-900/30'></div>
                </div>
                <div className='flex items-center justify-between mt-2 text-xs'>
                  <div className='text-emerald-400'>Низкий риск</div>
                  <div className='text-amber-400'>Умеренный</div>
                  <div className='text-rose-400'>Высокий риск</div>
                </div>
              </div>
            </div>

            {/* AI рекомендации */}
            <div className='bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h2 className='text-2xl font-bold mb-1 flex items-center gap-3'>
                    <Droplets className='w-6 h-6 text-emerald-400' />
                    Персонализированные рекомендации
                  </h2>
                  <p className='text-gray-400'>AI-сгенерированный протокол здоровья</p>
                </div>
                <span className='text-xs bg-linear-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 px-3 py-1.5 rounded-full font-semibold'>
                  Обновлено
                </span>
              </div>

              <div className='space-y-4'>
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border ${
                      rec.priority === 'high'
                        ? 'border-rose-500/30 bg-rose-500/5'
                        : 'border-gray-700 bg-gray-800/30'
                    } transition-all duration-500 ${
                      analysisComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    } hover:border-gray-600 hover:bg-gray-800/50`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className='flex items-start gap-4'>
                      <div
                        className={`text-2xl p-2 rounded-lg ${
                          rec.priority === 'high' ? 'bg-rose-500/20' : 'bg-blue-500/20'
                        }`}
                      >
                        {rec.icon}
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <h4 className='font-bold text-sm'>{rec.title}</h4>
                          {rec.priority === 'high' && (
                            <span className='text-xs bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded-full'>
                              ВЫСОКИЙ ПРИОРИТЕТ
                            </span>
                          )}
                        </div>
                        <p className='text-sm text-gray-400 mb-3'>{rec.desc}</p>
                        <button className='text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group'>
                          {rec.action}
                          <ChevronRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Панель биомаркеров */}
            <div className='bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <h3 className='text-xl font-bold mb-6 flex items-center gap-3'>
                <CheckCircle className='w-5 h-5 text-blue-400' />
                Входные данные биомаркеров
              </h3>

              <div className='space-y-3'>
                {biomarkerData.map((item, index) => (
                  <div
                    key={index}
                    className='p-3 rounded-lg bg-gray-800/30 border border-gray-700 hover:bg-gray-800/50 transition-colors'
                  >
                    <div className='flex items-center justify-between mb-2'>
                      <div className='text-sm font-medium'>{item.biomarker}</div>
                      <div
                        className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'оптимально'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : item.status === 'отлично'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : item.status === 'норма'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-amber-500/20 text-amber-400'
                        }`}
                      >
                        {item.status}
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='text-lg font-bold'>{item.value}</div>
                      <div className='text-xs text-gray-500'>{item.range}</div>
                    </div>
                    <div className='text-xs text-gray-400 mt-1'>Тренд: {item.trend}</div>
                  </div>
                ))}
              </div>

              <div className='mt-6 p-4 bg-linear-to-r from-blue-500/10 to-emerald-500/10 rounded-xl border border-blue-500/20'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-blue-500/20 rounded-lg'>
                    <Activity className='w-4 h-4 text-blue-400' />
                  </div>
                  <div>
                    <div className='text-sm font-medium'>Источники данных</div>
                    <div className='text-xs text-gray-400'>
                      Умные устройства • Ручной ввод • Результаты анализов
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Подвал */}
        <div className='mt-12 pt-8 border-t border-gray-800'>
          <div className='text-center'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 mb-4'>
              <div className='text-sm text-gray-400'>
                <span className='font-medium text-gray-300'>AI Платформа Цифрового Двойника Здоровья</span> •
                Демо версия v2.1
              </div>
              <div className='flex items-center gap-4'>
                <span className='text-xs px-3 py-1 bg-gray-800 rounded-full'>
                  Клиническая симуляция
                </span>
                <span className='text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full'>
                  Прогнозная аналитика
                </span>
                <span className='text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full'>
                  Моделирование в реальном времени
                </span>
              </div>
            </div>
            <p className='text-gray-500 text-sm max-w-2xl mx-auto'>
              Эта визуализация демонстрирует прогнозную аналитику здоровья с использованием симулированных данных.
              В рабочей версии система интегрируется с медицинскими устройствами и электронными медицинскими картами
              для клинического мониторинга.
            </p>
          </div>
        </div>
      </div>

      {/* Глобальные стили */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.8;
          }
        }

        @keyframes irregular-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(0.95);
          }
          75% {
            transform: scale(1.05);
          }
        }

        .heart-beat {
          animation: pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        ::selection {
          background: rgba(59, 130, 246, 0.3);
        }

        /* Плавный скроллбар */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  )
}

export default MedicalDemoDashboard