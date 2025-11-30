'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default function AdvancedHealthDashboard() {
  const [currentModel, setCurrentModel] = useState(0)
  const [currentView, setCurrentView] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const models = [
    {
      id: 'cardiovascular',
      name: 'Yurak-Qon Tomir Tizimi',
      color: '#ef4444',
      stats: {
        heartRate: 72,
        bloodPressure: '120/80',
        oxygen: 98,
        riskLevel: 'Past',
      },
    },
    {
      id: 'nervous',
      name: 'Asab Tizimi',
      color: '#8b5cf6',
      stats: {
        stressLevel: 65,
        sleepQuality: 78,
        cognitiveLoad: 42,
        recovery: 85,
      },
    },
    {
      id: 'respiratory',
      name: 'Nafas Olish Tizimi',
      color: '#06b6d4',
      stats: {
        respiratoryRate: 16,
        lungCapacity: 88,
        oxygenSaturation: 97,
        efficiency: 92,
      },
    },
  ]

  const views = [
    { id: 'overview', name: 'Umumiy Koʻrinish', icon: '👁️' },
    { id: 'cardiovascular', name: 'Yurak', icon: '💓' },
    { id: 'brain', name: 'Miya', icon: '🧠' },
    { id: 'respiratory', name: 'Nafas Olish', icon: '🌬️' },
    { id: 'muscular', name: 'Mushaklar', icon: '💪' },
  ]

  // Three.js Scene
  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0f172a)

    const camera = new THREE.PerspectiveCamera(45, 400 / 500, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(400, 500)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x4f46e5, 0.5, 100)
    pointLight.position.set(0, 5, 5)
    scene.add(pointLight)

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 3
    controls.maxDistance = 10

    // Create realistic human model
    const createHumanModel = () => {
      const group = new THREE.Group()

      // Enhanced materials
      const skinMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffdbac,
        roughness: 0.3,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      })

      const muscleMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xdc2626,
        transmission: 0.2,
        opacity: 0.8,
        transparent: true,
        roughness: 0.1,
        metalness: 0.0,
      })

      const organMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xef4444,
        transmission: 0.8,
        opacity: 0.6,
        transparent: true,
        roughness: 0.2,
      })

      // Torso with more detail
      const torsoGeometry = new THREE.CapsuleGeometry(0.8, 2.2, 8, 16)
      const torso = new THREE.Mesh(torsoGeometry, skinMaterial)
      torso.castShadow = true
      group.add(torso)

      // Head with face-like features
      const headGeometry = new THREE.SphereGeometry(0.5, 32, 32)
      const head = new THREE.Mesh(headGeometry, skinMaterial)
      head.position.y = 1.9
      head.castShadow = true
      group.add(head)

      // Enhanced arms with muscles
      const armGeometry = new THREE.CapsuleGeometry(0.25, 1.4, 8, 16)
      const leftArm = new THREE.Mesh(armGeometry, skinMaterial)
      leftArm.position.set(-0.9, 0.7, 0)
      leftArm.rotation.z = Math.PI / 6
      leftArm.castShadow = true
      group.add(leftArm)

      const rightArm = new THREE.Mesh(armGeometry, skinMaterial)
      rightArm.position.set(0.9, 0.7, 0)
      rightArm.rotation.z = -Math.PI / 6
      rightArm.castShadow = true
      group.add(rightArm)

      // Enhanced legs
      const legGeometry = new THREE.CapsuleGeometry(0.3, 1.6, 8, 16)
      const leftLeg = new THREE.Mesh(legGeometry, skinMaterial)
      leftLeg.position.set(-0.3, -1.4, 0)
      leftLeg.castShadow = true
      group.add(leftLeg)

      const rightLeg = new THREE.Mesh(legGeometry, skinMaterial)
      rightLeg.position.set(0.3, -1.4, 0)
      rightLeg.castShadow = true
      group.add(rightLeg)

      // Heart with realistic animation
      const heartGeometry = new THREE.SphereGeometry(0.2, 16, 16)
      const heart = new THREE.Mesh(heartGeometry, organMaterial)
      heart.position.set(0.3, 0.8, 0.4)
      heart.castShadow = true
      group.add(heart)

      // Brain
      const brainGeometry = new THREE.SphereGeometry(0.4, 32, 32)
      const brain = new THREE.Mesh(brainGeometry, muscleMaterial)
      brain.position.set(0, 1.9, 0.2)
      brain.castShadow = true
      group.add(brain)

      // Lungs
      const lungGeometry = new THREE.SphereGeometry(0.25, 16, 16)
      const leftLung = new THREE.Mesh(lungGeometry, organMaterial)
      leftLung.position.set(-0.4, 0.9, 0.3)
      leftLung.castShadow = true
      group.add(leftLung)

      const rightLung = new THREE.Mesh(lungGeometry, organMaterial)
      rightLung.position.set(0.4, 0.9, 0.3)
      rightLung.castShadow = true
      group.add(rightLung)

      // Muscle system visualization
      const muscleGroup = new THREE.Group()
      const majorMuscleGeometry = new THREE.SphereGeometry(0.15, 12, 12)

      // Key muscle points
      const musclePoints = [
        [0, 1.2, 0.5],
        [0, 0.5, 0.6],
        [0, -0.2, 0.5],
        [-0.6, 1.0, 0.3],
        [0.6, 1.0, 0.3],
        [-0.5, -0.5, 0.4],
        [0.5, -0.5, 0.4],
      ]

      musclePoints.forEach(point => {
        const muscle = new THREE.Mesh(majorMuscleGeometry, muscleMaterial)
        muscle.position.set(point[0], point[1], point[2])
        muscleGroup.add(muscle)
      })

      group.add(muscleGroup)

      return { group, heart, brain, leftLung, rightLung, muscleGroup }
    }

    const humanModel = createHumanModel()
    scene.add(humanModel.group)

    // System-specific visual effects
    const createSystemEffects = () => {
      // Cardiovascular system particles
      const heartParticles = new THREE.BufferGeometry()
      const particleCount = 50
      const posArray = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 2
      }

      heartParticles.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

      const heartParticleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xef4444,
        transparent: true,
        opacity: 0.6,
      })

      const heartParticleSystem = new THREE.Points(heartParticles, heartParticleMaterial)
      heartParticleSystem.position.copy(humanModel.heart.position)
      scene.add(heartParticleSystem)

      // Brain activity particles
      const brainParticles = new THREE.BufferGeometry()
      const brainPosArray = new Float32Array(30 * 3)

      for (let i = 0; i < 30 * 3; i++) {
        brainPosArray[i] = (Math.random() - 0.5) * 1
      }

      brainParticles.setAttribute('position', new THREE.BufferAttribute(brainPosArray, 3))

      const brainParticleMaterial = new THREE.PointsMaterial({
        size: 0.03,
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.8,
      })

      const brainParticleSystem = new THREE.Points(brainParticles, brainParticleMaterial)
      brainParticleSystem.position.copy(humanModel.brain.position)
      scene.add(brainParticleSystem)

      return { heartParticleSystem, brainParticleSystem }
    }

    const systemEffects = createSystemEffects()

    camera.position.set(0, 1, 5)
    controls.update()

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()
      const delta = clock.getDelta()

      // Smooth rotation
      humanModel.group.rotation.y = Math.sin(elapsedTime * 0.3) * 0.2

      // Heart pulse animation
      const heartScale = 1 + Math.sin(elapsedTime * 8) * 0.2
      humanModel.heart.scale.set(heartScale, heartScale, heartScale)

      // Breathing animation for lungs
      const breathScale = 1 + Math.sin(elapsedTime * 4) * 0.1
      humanModel.leftLung.scale.set(breathScale, breathScale, breathScale)
      humanModel.rightLung.scale.set(breathScale, breathScale, breathScale)

      // Brain activity
      humanModel.brain.rotation.y = elapsedTime * 0.5
      const brainScale = 1 + Math.sin(elapsedTime * 6) * 0.05
      humanModel.brain.scale.set(brainScale, brainScale, brainScale)

      // Particle animations
      systemEffects.heartParticleSystem.rotation.y += delta
      systemEffects.brainParticleSystem.rotation.x += delta * 0.5

      // Muscle subtle movement
      humanModel.muscleGroup.children.forEach((muscle, index) => {
        muscle.scale.x = 1 + Math.sin(elapsedTime * 4 + index) * 0.1
        muscle.scale.y = 1 + Math.sin(elapsedTime * 5 + index) * 0.1
      })

      controls.update()
      renderer.render(scene, camera)
    }

    animate()
    setTimeout(() => setIsLoading(false), 0)
    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return
      const container = canvasRef.current.parentElement
      if (container) {
        const width = container.clientWidth
        const height = Math.min(width * 1.25, 500)
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      controls.dispose()
    }
  }, [])

  const currentStats = models[currentModel].stats

  return (
    <section className='min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - 3D Model */}
          <div className='relative'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-600/50 p-6 shadow-2xl'>
              {/* Model Header */}
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold text-white'>{models[currentModel].name}</h2>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                  <span className='text-sm text-green-400'>Real vaqtda</span>
                </div>
              </div>

              {/* 3D Model Container */}
              <div className='relative h-[500px] bg-slate-900/50 rounded-2xl border border-slate-600/30 overflow-hidden'>
                {isLoading && (
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-white text-lg'>Model Yuklanmoqda...</div>
                  </div>
                )}
                <canvas
                  ref={canvasRef}
                  className={`w-full h-full transition-opacity duration-500 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                />

                {/* Model Controls Overlay */}
                <div className='absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                  <div className='text-xs text-gray-300 mb-1'>Koʻrinish</div>
                  <div className='flex space-x-1'>
                    {views.map(view => (
                      <button
                        key={view.id}
                        onClick={() => setCurrentView(view.id)}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          currentView === view.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                        title={view.name}
                      >
                        {view.icon}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Overlay */}
                <div className='absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-white/10'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <div className='text-sm text-gray-300'>Tizim Holati</div>
                      <div className='text-lg font-semibold text-green-400'>Normal</div>
                    </div>
                    <div className='text-right'>
                      <div className='text-sm text-gray-300'>Yangilandi</div>
                      <div className='text-sm text-white'>10 soniya oldin</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Model Selection */}
              <div className='grid grid-cols-3 gap-3 mt-6'>
                {models.map((model, index) => (
                  <button
                    key={model.id}
                    onClick={() => setCurrentModel(index)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      currentModel === index
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'
                    }`}
                  >
                    <div
                      className='w-3 h-3 rounded-full mx-auto mb-2'
                      style={{ backgroundColor: model.color }}
                    ></div>
                    <div className='text-sm font-medium text-white text-center'>{model.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Statistics */}
          <div className='space-y-6'>
            {/* Header */}
            <div className='space-y-4'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20'>
                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2'></div>
                <span className='text-sm font-medium'>Raqamli Salomatlik Monitori</span>
              </div>

              <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                Sizning{' '}
                <span className='bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                  Raqamli Egzagingiz
                </span>
              </h1>

              <p className='text-xl text-gray-300 leading-relaxed'>
                Sunʼiy intellekt asosida sizning tanalizning har bir tizimini real vaqtda kuzatib
                boring va salomatligingizni optimallashtiring.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className='grid grid-cols-2 gap-4'>
              {Object.entries(currentStats).map(([key, value]) => (
                <div
                  key={key}
                  className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'
                >
                  <div className='text-2xl font-bold text-cyan-400 mb-1'>
                    {typeof value === 'number' ? `${value}%` : value}
                  </div>
                  <div className='text-sm text-gray-400 capitalize'>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  {/* Progress bar for numeric values */}
                  {typeof value === 'number' && (
                    <div className='w-full bg-slate-700 rounded-full h-2 mt-2'>
                      <div
                        className='h-2 rounded-full transition-all duration-500'
                        style={{
                          width: `${value}%`,
                          backgroundColor: models[currentModel].color,
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Health Insights */}
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
              <h3 className='text-lg font-semibold mb-4 flex items-center'>
                <span className='text-cyan-400 mr-2'>💡</span>
                Salomatlik Tavsiyalari
              </h3>
              <div className='space-y-3'>
                <div className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0'></div>
                  <p className='text-gray-300 text-sm'>
                    Yurak urish tezligi normal doirada. Muntazam mashqlarni davom ettiring.
                  </p>
                </div>
                <div className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0'></div>
                  <p className='text-gray-300 text-sm'>
                    Stress darajasi oʻrtacha. Dam olish va meditatsiya qilish tavsiya etiladi.
                  </p>
                </div>
                <div className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0'></div>
                  <p className='text-gray-300 text-sm'>
                    Nafas olish tizimi yaxshi holatda. Havoni tozaligiga eʼtibor bering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className='mt-16 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8'>
          <h2 className='text-3xl font-bold text-center mb-8'>Qanday Ishlaydi?</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-3xl'>📱</span>
              </div>
              <h3 className='text-xl font-semibold mb-3'>Maʼlumotlarni Yigʻish</h3>
              <p className='text-gray-300'>
                Sensorlar va qurilmalar orqali real vaqtda sogʻliq maʼlumotlari toʻplanadi
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-3xl'>🤖</span>
              </div>
              <h3 className='text-xl font-semibold mb-3'>AI Tahlili</h3>
              <p className='text-gray-300'>
                Sunʼiy intellekt algoritmlari maʼlumotlarni tahlil qiladi va trendlarni aniqlaydi
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-3xl'>👁️</span>
              </div>
              <h3 className='text-xl font-semibold mb-3'>Vizualizatsiya</h3>
              <p className='text-gray-300'>
                Natijalar 3D model va interaktiv dashboard orqali vizuallashtiriladi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
