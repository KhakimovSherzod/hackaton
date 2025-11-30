const Participants = () => {
  const jamoaAzolari = [
    {
      id: 1,
      ism: 'Khakimov Sherzod',
      yosh: 20,
      rol: 'Full Stack Web Developer & Frontend Team Lead',
      tajriba: '5 yillik tajriba',
      konikmalar: [
        'React/Next.js',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Tailwind CSS',
        'Three.js',
        'DevOps Asoslari',
      ],
      texnologikStack: [
        'Frontend: React, Next.js, TypeScript, Tailwind CSS, Three.js',
        'Backend: Node.js, Express, REST API',
        "Ma'lumotlar Bazasi: PostgreSQL, MongoDB",
        'DevOps: Docker, AWS, CI/CD',
      ],
      tavsif:
        "AI sog'liq platformasi uchun frontend interfeysini ishlab chiqish. Raqamli egza vizualizatsiyasi va foydalanuvchi interfeysini yaratish.",
      rasm: '👨‍💻',
      rang: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      ism: 'Jasur',
      yosh: 20,
      rol: 'AI/ML Mutaxassisi',
      tajriba: '4 yillik tajriba',
      konikmalar: [
        'Machine Learning',
        'Deep Learning',
        'Python',
        'PyTorch',
        'TensorFlow',
        'Data Science',
        'Neural Networks',
      ],
      texnologikStack: [
        'AI Framework: PyTorch, TensorFlow, Keras',
        'Dasturlash: Python, R, Jupyter',
        'ML Algoritmlari: LSTM, GRU, CNN, Random Forest',
        "Ma'lumotlar Tahlili: Pandas, NumPy, Scikit-learn",
      ],
      tavsif:
        "Sog'liqni bashoratlash va risk baholash uchun sun'iy intellekt modellarini ishlab chiqish va trening qilish. Vaqt seriyali sog'liq ma'lumotlari bilan ishlash.",
      rasm: '🤖',
      rang: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      ism: 'Sherzod',
      yosh: 20,
      rol: 'DevOps & Kiberxavfsizlik Mutaxassisi',
      tajriba: '4 yillik tajriba',
      konikmalar: [
        'Cloud Infrastructure',
        'Kiberxavfsizlik',
        'Docker',
        'Kubernetes',
        'AWS',
        'Security Monitoring',
        'CI/CD',
      ],
      texnologikStack: [
        'Cloud: AWS, Google Cloud, Azure',
        'Container: Docker, Kubernetes, Docker Compose',
        'Monitoring: Prometheus, Grafana, ELK Stack',
        'Xavfsizlik: VPN, Firewall, Encryption, HIPAA Compliance',
      ],
      tavsif:
        "Tizim infratuzilmasini boshqarish va ma'lumotlar xavfsizligini ta'minlash. Tibbiy ma'lumotlarning maxfiyligi va tizimning ishonchliligini kafolatlaydi.",
      rasm: '🔒',
      rang: 'from-green-500 to-emerald-500',
    },
  ]

  const jamoaStatistikalari = [
    { son: '3', sarlavha: "Jamoa A'zolari" },
    { son: '13+', sarlavha: 'Jami Tajriba Yillari' },
    { son: '10+', sarlavha: 'Muvaffaqiyatli Loyihalar' },
    { son: '100%', sarlavha: "Sog'liq Texnologiyalariga Bag'ishlangan" },
  ]

  const texnologiyalar = [
    {
      nomi: 'Frontend',
      texnologiyalar: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    },
    { nomi: 'Backend', texnologiyalar: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'] },
    {
      nomi: 'AI/ML',
      texnologiyalar: ['PyTorch', 'TensorFlow', 'LSTM', 'LightGBM', 'Scikit-learn'],
    },
    { nomi: 'DevOps', texnologiyalar: ['Docker', 'AWS', 'Kubernetes', 'CI/CD', 'Monitoring'] },
  ]

  return (
    <section id='jamoa' className='py-20 bg-linear-to-br from-gray-50 to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Sarlavha */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Bizning <span className='text-blue-600'>Professional Jamoa</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Sog&apos;liqni saqlash texnologiyalari sohasida innovatsion yechimlar yaratish uchun
            tajribali mutaxassislardan iborat jamoa
          </p>
        </div>

        {/* Jamoa Statistikalari */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
          {jamoaStatistikalari.map((stat, index) => (
            <div
              key={index}
              className='text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100'
            >
              <div className='text-3xl md:text-4xl font-bold text-blue-600 mb-2'>{stat.son}</div>
              <div className='text-gray-600 font-medium'>{stat.sarlavha}</div>
            </div>
          ))}
        </div>

        {/* Jamoa A'zolari */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          {jamoaAzolari.map(azolar => (
            <div
              key={azolar.id}
              className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
            >
              {/* Gradient sarlavha */}
              <div className={`bg-linear-to-r ${azolar.rang} p-6 text-white`}>
                <div className='flex items-center space-x-4'>
                  <div className='text-4xl'>{azolar.rasm}</div>
                  <div>
                    <h3 className='text-xl font-bold'>{azolar.ism}</h3>
                    <p className='text-blue-100'>{azolar.yosh} yosh</p>
                  </div>
                </div>
              </div>

              {/* Asosiy kontent */}
              <div className='p-6'>
                {/* Rol va tajriba */}
                <div className='mb-4'>
                  <h4 className='text-lg font-semibold text-gray-900 mb-1'>{azolar.rol}</h4>
                  <p className='text-blue-600 font-medium text-sm'>{azolar.tajriba}</p>
                </div>

                {/* Tavsif */}
                <p className='text-gray-600 mb-4 text-sm leading-relaxed'>{azolar.tavsif}</p>

                {/* Asosiy ko'nikmalar */}
                <div className='space-y-3 mb-4'>
                  <h5 className='font-medium text-gray-900 text-sm'>Asosiy Ko&apos;nikmalar:</h5>
                  <div className='flex flex-wrap gap-2'>
                    {azolar.konikmalar.map((konikma, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium'
                      >
                        {konikma}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Texnologik stack */}
                <div className='space-y-2'>
                  <h5 className='font-medium text-gray-900 text-sm'>Texnologik Stack:</h5>
                  <div className='space-y-1'>
                    {azolar.texnologikStack.map((stack, index) => (
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

        {/* Texnologiyalar Bo'limi */}
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-16'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
            Ishlatiladigan Texnologiyalar
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {texnologiyalar.map((texno, index) => (
              <div key={index} className='text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>
                    {index === 0 ? '🎨' : index === 1 ? '⚙️' : index === 2 ? '🧠' : '🔧'}
                  </span>
                </div>
                <h4 className='text-lg font-semibold text-gray-900 mb-3'>{texno.nomi}</h4>
                <div className='space-y-2'>
                  {texno.texnologiyalar.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className='text-sm text-gray-600 bg-gray-50 rounded-lg py-2'
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jamoa Tuzilishi */}
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
            Jamoa Tuzilishi va Vazifalari
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Frontend Jamoa */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎨</span>
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>Frontend Rivojlantirish</h4>
              <p className='text-gray-600 text-sm mb-3'>
                Foydalanuvchi interfeysi va raqamli egza vizualizatsiyasini yaratish. Real-vaqt
                ma&apos;lumotlarini ko&apos;rsatish va interaktiv tajriba.
              </p>
              <div className='space-y-1 text-xs text-gray-500'>
                <div>• React/Next.js dasturi</div>
                <div>• 3D vizualizatsiya (Three.js)</div>
                <div>• Responsive dizayn</div>
              </div>
            </div>

            {/* AI & Backend Jamoa */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🧠</span>
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>AI & Backend</h4>
              <p className='text-gray-600 text-sm mb-3'>
                Sun&apos;iy intellekt modellari va server qismini ishlab chiqish. Sog&apos;liq ma&apos;lumotlarini
                qayta ishlash va bashoratlar yaratish.
              </p>
              <div className='space-y-1 text-xs text-gray-500'>
                <div>• Machine Learning modellari</div>
                <div>• Ma&apos;lumotlar tahlili</div>
                <div>• API va ma&apos;lumotlar bazasi</div>
              </div>
            </div>

            {/* DevOps & Xavfsizlik Jamoa */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🔧</span>
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>DevOps & Xavfsizlik</h4>
              <p className='text-gray-600 text-sm mb-3'>
                Infratuzilma, xavfsizlik va deploy. Tibbiy ma&apos;lumotlarning maxfiyligi va tizimning
                ishonchliligini ta&apos;minlash.
              </p>
              <div className='space-y-1 text-xs text-gray-500'>
                <div>• Cloud infratuzilma</div>
                <div>• Kiberxavfsizlik</div>
                <div>• CI/CD va monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Participants
