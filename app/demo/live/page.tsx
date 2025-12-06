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

  // Simulate heart beat animation
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

  // Update avatar based on health metrics
  useEffect(() => {
    if (analysisComplete) {
      let heartColor = '#22c55e' // Green
      let rhythm: 'normal' | 'irregular' | 'tachy' = 'normal'

      if (heartLoad > 70) heartColor = '#f59e0b' // Yellow
      if (heartLoad > 85) {
        heartColor = '#ef4444' // Red
        rhythm = 'tachy'
      } else if (hrv < 55) {
        rhythm = 'irregular'
      }

      // Calculate aura based on stress
      let aura = stressLevel
      if (stressLevel > 70) aura = 70 + (stressLevel - 70) * 1.5

      setAvatarHeartColor(heartColor)
      setAuraIntensity(Math.min(aura, 100))
      setHeartRhythm(rhythm)
    }
  }, [analysisComplete, heartLoad, stressLevel, hrv])

  const simulateAnalysis = () => {
    setIsAnalyzing(true)

    // Reset to initial state with animation
    setAnalysisComplete(false)
    setHeartLoad(65)
    setStressLevel(45)
    setRecoveryQuality(78)
    setHRV(65)
    setSleepScore(85)
    setMetabolicScore(82)

    // Animate timeline
    if (timelineRef.current) {
      const steps = timelineRef.current.querySelectorAll('.timeline-step')
      steps.forEach((step, index) => {
        setTimeout(() => {
          step.classList.remove('bg-gray-700', 'text-gray-400')
          step.classList.add('bg-blue-500', 'text-white')
        }, index * 500)
      })
    }

    // Simulate AI processing
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)

      // Generate random realistic data
      setStressLevel(Math.floor(Math.random() * 30) + 40) // 40-70
      setHeartLoad(Math.floor(Math.random() * 30) + 60) // 60-90
      setRecoveryQuality(Math.floor(Math.random() * 30) + 65) // 65-95
      setHRV(Math.floor(Math.random() * 40) + 50) // 50-90
      setSleepScore(Math.floor(Math.random() * 30) + 70) // 70-100
      setMetabolicScore(Math.floor(Math.random() * 30) + 65) // 65-95

      // Reset timeline animation
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
      'Medical Report exported as PDF. This would generate a comprehensive health report in production.'
    )
  }

  const healthMetrics = [
    {
      icon: <HeartPulse className='w-5 h-5' />,
      label: 'Cardiac Load',
      value: `${heartLoad}%`,
      status: heartLoad > 85 ? 'Critical' : heartLoad > 70 ? 'Moderate' : 'Optimal',
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
      label: 'Neuro-Stress Index',
      value: `${stressLevel}%`,
      status: stressLevel > 70 ? 'High' : stressLevel > 50 ? 'Elevated' : 'Normal',
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
      label: 'Recovery Quality',
      value: `${recoveryQuality}%`,
      status: recoveryQuality > 85 ? 'Excellent' : recoveryQuality > 75 ? 'Good' : 'Moderate',
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
      label: 'HRV Score',
      value: `${hrv} ms`,
      status: hrv > 75 ? 'Excellent' : hrv > 60 ? 'Good' : 'Low',
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
      label: 'Metabolic Efficiency',
      value: `${metabolicScore}/100`,
      status: metabolicScore > 85 ? 'Optimal' : metabolicScore > 70 ? 'Normal' : 'Below Avg',
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
      label: 'System Resilience',
      value: `${Math.round((heartLoad + recoveryQuality + metabolicScore) / 3)}%`,
      status: 'Stable',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
    },
  ]

  const riskPredictions = [
    {
      type: 'Cardiac Event Risk',
      risk: heartLoad > 85 ? 'HIGH' : heartLoad > 70 ? 'MEDIUM' : 'LOW',
      probability: heartLoad > 85 ? '32%' : heartLoad > 70 ? '18%' : '5%',
      color: heartLoad > 85 ? 'bg-rose-500' : heartLoad > 70 ? 'bg-amber-500' : 'bg-emerald-500',
      icon: <Heart className='w-5 h-5' />,
      timeframe: 'Next 24 hours',
    },
    {
      type: 'Sleep Disorder Onset',
      risk: sleepScore < 70 ? 'MEDIUM' : 'LOW',
      probability: sleepScore < 70 ? '28%' : '12%',
      color: sleepScore < 70 ? 'bg-amber-500' : 'bg-emerald-500',
      icon: <Moon className='w-5 h-5' />,
      timeframe: 'Tonight',
    },
    {
      type: 'Chronic Fatigue',
      risk: recoveryQuality < 70 ? 'HIGH' : recoveryQuality < 80 ? 'MEDIUM' : 'LOW',
      probability: recoveryQuality < 70 ? '45%' : recoveryQuality < 80 ? '25%' : '8%',
      color:
        recoveryQuality < 70
          ? 'bg-rose-500'
          : recoveryQuality < 80
          ? 'bg-amber-500'
          : 'bg-emerald-500',
      icon: <AlertCircle className='w-5 h-5' />,
      timeframe: 'Next 48 hours',
    },
    {
      type: 'Tachycardia Episode',
      risk: hrv < 60 ? 'MEDIUM' : 'LOW',
      probability: hrv < 60 ? '22%' : '9%',
      color: hrv < 60 ? 'bg-amber-500' : 'bg-emerald-500',
      icon: <Activity className='w-5 h-5' />,
      timeframe: 'Next 12 hours',
    },
  ]

  const recommendations = [
    {
      icon: '🛌',
      title: 'Sleep Optimization',
      desc: 'Target sleep window: 22:30 - 06:30. Maintain sleep efficiency >85%',
      priority: sleepScore < 80 ? 'high' : 'medium',
      action: 'Schedule Sleep',
    },
    {
      icon: '💧',
      title: 'Hydration Protocol',
      desc: 'Drink 2.8L water today. Current intake: 1.3L remaining',
      priority: 'medium',
      action: 'Log Intake',
    },
    {
      icon: '🏃',
      title: 'Activity Prescription',
      desc:
        heartLoad > 70 ? 'Light activity only: 20 min walking' : 'Moderate exercise: 40 min cardio',
      priority: heartLoad > 70 ? 'high' : 'medium',
      action: 'View Plan',
    },
    {
      icon: '🧘',
      title: 'Stress Management',
      desc:
        stressLevel > 60
          ? 'Required: 15 min meditation + breathing exercises'
          : 'Recommended: 10 min mindfulness',
      priority: stressLevel > 60 ? 'high' : 'medium',
      action: 'Start Session',
    },
    {
      icon: '🥗',
      title: 'Nutrition Guidance',
      desc: 'Increase magnesium & potassium. Add leafy greens to lunch/dinner',
      priority: 'medium',
      action: 'View Diet',
    },
    {
      icon: '📊',
      title: 'Monitoring Protocol',
      desc: 'Check BP at 18:00. Note: Systolic trending +5mmHg from baseline',
      priority: 'medium',
      action: 'Set Reminder',
    },
  ]

  const forecastData = [
    { time: '6 AM', hrv: 65, sleep: 85, load: 30, risk: 'low' },
    { time: '9 AM', hrv: 68, sleep: 88, load: 45, risk: 'low' },
    { time: '12 PM', hrv: 62, sleep: 82, load: 60, risk: 'medium' },
    { time: '3 PM', hrv: 58, sleep: 75, load: 70, risk: 'medium' },
    { time: '6 PM', hrv: 55, sleep: 70, load: 50, risk: 'medium' },
    { time: '9 PM', hrv: 70, sleep: 90, load: 25, risk: 'low' },
    { time: '12 AM', hrv: 75, sleep: 95, load: 10, risk: 'low' },
  ]

  const biomarkerData = [
    {
      biomarker: 'Heart Rate',
      value: '72 bpm',
      range: '60-100',
      status: 'normal',
      trend: 'stable',
    },
    {
      biomarker: 'HRV (RMSSD)',
      value: '65 ms',
      range: '>50 ms',
      status: 'normal',
      trend: 'improving',
    },
    {
      biomarker: 'Sleep Duration',
      value: '7h 24m',
      range: '7-9h',
      status: 'optimal',
      trend: 'stable',
    },
    {
      biomarker: 'Sleep Efficiency',
      value: '94%',
      range: '>85%',
      status: 'excellent',
      trend: 'improving',
    },
    { biomarker: 'Stress Score', value: '42/100', range: '<60', status: 'low', trend: 'stable' },
    {
      biomarker: 'Systolic BP',
      value: '122 mmHg',
      range: '<130',
      status: 'normal',
      trend: 'monitor',
    },
    {
      biomarker: 'Diastolic BP',
      value: '78 mmHg',
      range: '<85',
      status: 'optimal',
      trend: 'stable',
    },
    {
      biomarker: 'Blood Glucose',
      value: '5.4 mmol/L',
      range: '4.0-6.0',
      status: 'normal',
      trend: 'stable',
    },
  ]

  // AI-Generated Visual Cards Data
  const aiRecommendationCards = [
    {
      id: 1,
      title: 'Nutrition Today',
      icon: <Utensils className='w-6 h-6 text-amber-500' />,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      items: [
        {
          name: 'Breakfast',
          description: 'Oatmeal with berries + 2 boiled eggs',
          icon: '🥣',
          calories: '320 kcal',
          nutrients: 'High fiber, protein',
        },
        {
          name: 'Lunch',
          description: 'Grilled salmon + quinoa + steamed broccoli',
          icon: '🐟',
          calories: '450 kcal',
          nutrients: 'Omega-3, antioxidants',
        },
        {
          name: 'Dinner',
          description: 'Chicken salad with avocado & olive oil',
          icon: '🥗',
          calories: '380 kcal',
          nutrients: 'Lean protein, healthy fats',
        },
      ],
      supplements: [
        { name: 'Magnesium', dosage: '400mg', time: 'Evening', reason: 'Stress reduction' },
        { name: 'Omega-3', dosage: '1000mg', time: 'With meals', reason: 'Cardiac health' },
      ],
    },
    {
      id: 2,
      title: 'Exercise Plan',
      icon: <Dumbbell className='w-6 h-6 text-blue-500' />,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      activities: [
        {
          type: 'Cardio',
          duration: '30 min',
          intensity: 'Moderate',
          heartZone: 'Zone 2 (120-140 bpm)',
          icon: '🏃',
          benefits: 'Improves HRV, reduces stress',
        },
        {
          type: 'Strength',
          duration: '20 min',
          intensity: 'Light',
          exercises: 'Bodyweight only',
          icon: '💪',
          benefits: 'Maintains muscle mass',
        },
        {
          type: 'Recovery',
          duration: '15 min',
          activity: 'Yoga stretching',
          icon: '🧘',
          benefits: 'Enhances flexibility, reduces cortisol',
        },
      ],
      timing: 'Best time: 10:00 AM (based on your circadian rhythm)',
      calories: 'Estimated burn: 420 kcal',
    },
    {
      id: 3,
      title: 'Lifestyle Optimization',
      icon: <Sun className='w-6 h-6 text-emerald-500' />,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      recommendations: [
        {
          area: 'Sleep Quality',
          action: 'Blue light filter after 8 PM',
          icon: '🌙',
          impact: '+15% sleep efficiency',
        },
        {
          area: 'Hydration',
          action: 'Drink 500ml water upon waking',
          icon: '💧',
          impact: 'Boosts metabolism by 30%',
        },
        {
          area: 'Stress Management',
          action: '10 min meditation at 3 PM',
          icon: '😌',
          impact: 'Reduces cortisol by 25%',
        },
        {
          area: 'Cognitive Performance',
          action: '20 min focused work + 5 min break',
          icon: '🧠',
          impact: 'Maintains mental clarity',
        },
      ],
    },
    {
      id: 4,
      title: 'Smart Supplements',
      icon: <Leaf className='w-6 h-6 text-purple-500' />,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      supplements: [
        {
          name: 'Ashwagandha',
          dosage: '600mg',
          timing: 'Morning & Evening',
          benefits: 'Adaptogen for stress',
          evidence: 'Strong clinical support',
          icon: '🌿',
        },
        {
          name: 'L-Theanine',
          dosage: '200mg',
          timing: 'As needed for stress',
          benefits: 'Promotes calm focus',
          evidence: 'Moderate evidence',
          icon: '🍵',
        },
        {
          name: 'Vitamin D3',
          dosage: '2000 IU',
          timing: 'Morning with food',
          benefits: 'Immune & bone health',
          evidence: 'Essential supplement',
          icon: '☀️',
        },
      ],
      note: 'Based on your metabolic profile & genetic predispositions',
    },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white'>
      {/* Navigation */}
      <nav className='border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center space-x-8'>
              <div className='flex items-center space-x-2'>
                <div className='p-2 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg'>
                  <Heart className='w-6 h-6 text-white' />
                </div>
                <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent'>
                  HealthTwin AI
                </span>
              </div>
              <div className='hidden md:flex space-x-6'>
                {['Dashboard', 'Digital Twin', 'Analytics', 'Reports', 'Protocols'].map(item => (
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
                Patient Mode
              </button>
              <button className='px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity'>
                Physician View
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className='max-w-7xl mx-auto p-4 md:p-8'>
        {/* Header */}
        <div className='mb-8'>
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6'>
            <div>
              <h1 className='text-3xl md:text-4xl font-bold mb-2'>
                AI-Powered Health Digital Twin
                <span className='ml-3 px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-emerald-500/20 text-blue-400 rounded-full'>
                  DEMO MODE
                </span>
              </h1>
              <p className='text-gray-400 text-lg'>
                Real-time physiological modeling & predictive health analytics
              </p>
            </div>

            <div className='flex flex-wrap gap-3'>
              {!analysisComplete ? (
                <button
                  onClick={simulateAnalysis}
                  disabled={isAnalyzing}
                  className='px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center gap-3 shadow-lg shadow-blue-500/20'
                >
                  {isAnalyzing ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      <span>Processing Biomarkers...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className='w-5 h-5' />
                      <span>Start AI Analysis</span>
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
                    Export Report
                  </button>
                  <button
                    onClick={resetDemo}
                    className='px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center gap-2'
                  >
                    <RefreshCw className='w-4 h-4' />
                    Reset Demo
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Analysis Timeline */}
          <div
            ref={timelineRef}
            className='mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-800'
          >
            <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
              <BarChart3 className='w-5 h-5 text-blue-400' />
              AI Analysis Pipeline
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              {[
                { step: '1', label: 'Biomarker Collection', desc: 'Data ingestion from devices' },
                { step: '2', label: 'Signal Processing', desc: 'Filtering & normalization' },
                { step: '3', label: 'Model Inference', desc: 'AI pattern recognition' },
                { step: '4', label: 'Risk Assessment', desc: 'Predictive analytics' },
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

        {/* Main Dashboard */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Left Column - Digital Twin & Metrics */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Digital Twin Visualization */}
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h2 className='text-2xl font-bold mb-1 flex items-center gap-3'>
                    <Target className='w-6 h-6 text-blue-400' />
                    Digital Twin Visualization
                  </h2>
                  <p className='text-gray-400'>Real-time physiological modeling</p>
                </div>
                <div className='text-sm px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2'>
                  <Eye className='w-4 h-4' />
                  Live Monitor
                </div>
              </div>

              <div className='flex flex-col xl:flex-row items-center justify-between gap-8'>
                {/* Human Avatar */}
                <div className='relative flex-1'>
                  <div className='relative w-80 h-80 mx-auto'>
                    {/* Aura */}
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

                    {/* Body System Overlay */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='relative w-60 h-96'>
                        {/* Body Outline */}
                        <div className='absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full opacity-50'></div>

                        {/* Cardiovascular System */}
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
                            {/* Blood Flow Lines */}
                            <div className='absolute top-full left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-rose-500/50 to-transparent'></div>
                          </div>
                        </div>

                        {/* Neural Network */}
                        <div className='absolute right-1/4 top-1/3 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm'>
                          <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full'></div>
                        </div>

                        {/* Respiratory System */}
                        <div className='absolute left-1/4 top-2/3 w-14 h-14 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-sm'>
                          <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full animate-pulse'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vital Indicators */}
                <div className='flex-1 space-y-6 min-w-[300px]'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700'>
                      <div className='text-sm text-gray-400 mb-3 flex items-center gap-2'>
                        <Activity className='w-4 h-4' />
                        Cardiac Status
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
                              ? 'Critical Load'
                              : heartLoad > 70
                              ? 'Elevated'
                              : 'Optimal'}
                          </span>
                        </div>
                        <div className='text-3xl font-bold' style={{ color: avatarHeartColor }}>
                          {heartLoad}%
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <div className='text-xs text-gray-400 flex justify-between'>
                          <span>Baseline</span>
                          <span>Threshold</span>
                        </div>
                        <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                          <div
                            className='h-full rounded-full transition-all duration-1000'
                            style={{ width: `${heartLoad}%`, backgroundColor: avatarHeartColor }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700'>
                      <div className='text-sm text-gray-400 mb-3 flex items-center gap-2'>
                        <Brain className='w-4 h-4' />
                        Neural Load
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
                              ? 'High Stress'
                              : stressLevel > 50
                              ? 'Moderate'
                              : 'Calm'}
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

                  {/* System Status */}
                  <div className='bg-gradient-to-r from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700'>
                    <div className='text-sm text-gray-400 mb-4'>System Status Overview</div>
                    <div className='grid grid-cols-3 gap-4'>
                      {[
                        {
                          name: 'Cardiovascular',
                          status: heartLoad > 70 ? 'warning' : 'normal',
                          icon: '❤️',
                        },
                        {
                          name: 'Neural',
                          status: stressLevel > 60 ? 'warning' : 'normal',
                          icon: '🧠',
                        },
                        {
                          name: 'Metabolic',
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
                            {system.status === 'warning' ? 'Monitor' : 'Stable'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Metrics Grid */}
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

            {/* AI-Generated Visual Cards Section */}
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h2 className='text-2xl font-bold mb-1 flex items-center gap-3'>
                    <BrainIcon className='w-6 h-6 text-purple-400' />
                    AI-Generated Health Protocol
                  </h2>
                  <p className='text-gray-400'>
                    Personalized recommendations based on your biomarkers
                  </p>
                </div>
                <span className='text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-3 py-1.5 rounded-full font-semibold'>
                  Updated Daily
                </span>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {aiRecommendationCards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`bg-gradient-to-br ${card.color} rounded-xl border ${
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

                    {card.id === 1 && (
                      <div className='space-y-4'>
                        <div className='grid gap-3'>
                          {card.items.map((item, idx) => (
                            <div
                              key={idx}
                              className='flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg'
                            >
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
                                <div className='text-xs text-emerald-400 mt-2'>
                                  {item.nutrients}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className='pt-4 border-t border-gray-700'>
                          <h4 className='font-semibold text-sm mb-2'>Recommended Supplements</h4>
                          <div className='flex flex-wrap gap-2'>
                            {card.supplements.map((supp, idx) => (
                              <div
                                key={idx}
                                className='text-xs bg-gray-800/50 px-3 py-1.5 rounded-lg'
                              >
                                <span className='font-medium'>{supp.name}</span>
                                <span className='text-gray-400'>
                                  {' '}
                                  • {supp.dosage} • {supp.time}
                                </span>
                                <div className='text-emerald-400 text-[10px] mt-0.5'>
                                  {supp.reason}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {card.id === 2 && (
                      <div className='space-y-4'>
                        <div className='grid gap-3'>
                          {card.activities.map((activity, idx) => (
                            <div
                              key={idx}
                              className='flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg'
                            >
                              <div className='text-2xl'>{activity.icon}</div>
                              <div className='flex-1'>
                                <div className='flex justify-between items-start mb-1'>
                                  <h4 className='font-semibold text-sm'>{activity.type}</h4>
                                  <span className='text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full'>
                                    {activity.duration}
                                  </span>
                                </div>
                                <div className='text-xs text-gray-400 mb-2'>
                                  Intensity:{' '}
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
                            <span className='text-xs text-gray-400'>Calorie expenditure</span>
                            <span className='font-bold text-amber-400'>{card.calories}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {card.id === 3 && (
                      <div className='space-y-3'>
                        {card.recommendations.map((rec, idx) => (
                          <div
                            key={idx}
                            className='flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg'
                          >
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
                        <div className='mt-4 p-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg'>
                          <div className='text-xs text-gray-300'>
                            <span className='font-semibold'>Note:</span> These small changes can
                            improve your overall health score by up to 18% this week.
                          </div>
                        </div>
                      </div>
                    )}

                    {card.id === 4 && (
                      <div className='space-y-4'>
                        <div className='grid gap-3'>
                          {card.supplements.map((supp, idx) => (
                            <div
                              key={idx}
                              className='flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg'
                            >
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
                                      supp.evidence.includes('Strong')
                                        ? 'bg-emerald-500/20 text-emerald-400'
                                        : supp.evidence.includes('Moderate')
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
                          <button className='mt-3 w-full text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 hover:text-purple-300 px-4 py-2 rounded-lg transition-colors'>
                            View Full Supplement Protocol
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className='mt-6 pt-6 border-t border-gray-700'>
                <h4 className='font-semibold mb-3'>Quick Actions</h4>
                <div className='flex flex-wrap gap-3'>
                  <button className='text-xs bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 hover:text-blue-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2'>
                    <Apple className='w-3 h-3' />
                    Generate Shopping List
                  </button>
                  <button className='text-xs bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 hover:text-emerald-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2'>
                    <Dumbbell className='w-3 h-3' />
                    Schedule Workouts
                  </button>
                  <button className='text-xs bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 hover:text-amber-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2'>
                    <Waves className='w-3 h-3' />
                    Set Hydration Reminders
                  </button>
                  <button className='text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 hover:text-purple-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2'>
                    <BrainIcon className='w-3 h-3' />
                    Cognitive Training
                  </button>
                </div>
              </div>
            </div>

            {/* Risk Prediction Engine */}
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <div className='flex items-center justify-between mb-8'>
                <div>
                  <h2 className='text-2xl font-bold mb-1 flex items-center gap-3'>
                    <AlertTriangle className='w-6 h-6 text-amber-400' />
                    Risk Prediction Engine
                  </h2>
                  <p className='text-gray-400'>24-hour predictive analytics</p>
                </div>
                <div className='text-sm px-4 py-2 bg-amber-500/20 text-amber-400 rounded-lg'>
                  Clinical Grade
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {riskPredictions.map((risk, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-xl border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 transition-all duration-700 ${
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
                          risk.risk === 'HIGH'
                            ? 'bg-rose-500/20 text-rose-400'
                            : risk.risk === 'MEDIUM'
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-emerald-500/20 text-emerald-400'
                        }`}
                      >
                        {risk.risk}
                      </div>
                    </div>
                    <div className='text-lg font-bold mb-2'>{risk.type}</div>
                    <div className='text-sm text-gray-400 mb-1'>
                      Probability: {risk.probability}
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

          {/* Right Column */}
          <div className='space-y-6'>
            {/* 24h Health Forecast */}
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h2 className='text-2xl font-bold mb-1 flex items-center gap-3'>
                    <TrendingUp className='w-6 h-6 text-purple-400' />
                    Health Forecast 24h
                  </h2>
                  <p className='text-gray-400'>Predictive modeling</p>
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
                          <div className='text-xs text-blue-400 mb-1'>HRV</div>
                          <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                            <div
                              className='h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000'
                              style={{ width: `${point.hrv}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className='flex-1'>
                          <div className='text-xs text-emerald-400 mb-1'>Sleep</div>
                          <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                            <div
                              className='h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-1000'
                              style={{ width: `${point.sleep}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className='flex-1'>
                          <div className='text-xs text-amber-400 mb-1'>Load</div>
                          <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                            <div
                              className='h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-1000'
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
                  <span>Risk Assessment</span>
                  <span className='text-xs'>Current: {heartLoad > 70 ? 'Elevated' : 'Normal'}</span>
                </div>
                <div className='relative h-4 bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 rounded-full overflow-hidden'>
                  <div
                    className='absolute top-1/2 w-6 h-8 -translate-y-1/2 bg-white rounded-sm shadow-lg transform -rotate-12'
                    style={{ left: `${Math.min(heartLoad + 5, 95)}%` }}
                  ></div>
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-900/30'></div>
                </div>
                <div className='flex items-center justify-between mt-2 text-xs'>
                  <div className='text-emerald-400'>Low Risk</div>
                  <div className='text-amber-400'>Moderate</div>
                  <div className='text-rose-400'>High Risk</div>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h2 className='text-2xl font-bold mb-1 flex items-center gap-3'>
                    <Droplets className='w-6 h-6 text-emerald-400' />
                    Personalized Recommendations
                  </h2>
                  <p className='text-gray-400'>AI-generated health protocol</p>
                </div>
                <span className='text-xs bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 px-3 py-1.5 rounded-full font-semibold'>
                  Updated
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
                              HIGH PRIORITY
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

            {/* Biomarker Panel */}
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl'>
              <h3 className='text-xl font-bold mb-6 flex items-center gap-3'>
                <CheckCircle className='w-5 h-5 text-blue-400' />
                Biomarker Inputs
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
                          item.status === 'optimal'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : item.status === 'excellent'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : item.status === 'normal'
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
                    <div className='text-xs text-gray-400 mt-1'>Trend: {item.trend}</div>
                  </div>
                ))}
              </div>

              <div className='mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl border border-blue-500/20'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-blue-500/20 rounded-lg'>
                    <Activity className='w-4 h-4 text-blue-400' />
                  </div>
                  <div>
                    <div className='text-sm font-medium'>Data Sources</div>
                    <div className='text-xs text-gray-400'>
                      Wearables • Manual Input • Lab Results
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-12 pt-8 border-t border-gray-800'>
          <div className='text-center'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 mb-4'>
              <div className='text-sm text-gray-400'>
                <span className='font-medium text-gray-300'>AI Health Digital Twin Platform</span> •
                Demo Version v2.1
              </div>
              <div className='flex items-center gap-4'>
                <span className='text-xs px-3 py-1 bg-gray-800 rounded-full'>
                  Clinical Simulation
                </span>
                <span className='text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full'>
                  Predictive Analytics
                </span>
                <span className='text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full'>
                  Real-time Modeling
                </span>
              </div>
            </div>
            <p className='text-gray-500 text-sm max-w-2xl mx-auto'>
              This visualization demonstrates predictive health analytics using simulated data. In
              production, this system integrates with medical devices and electronic health records
              for clinical-grade monitoring.
            </p>
          </div>
        </div>
      </div>

      {/* Global Styles */}
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

        /* Smooth scrollbar */
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
