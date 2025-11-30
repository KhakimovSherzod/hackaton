import BusinessPlanSection from './sections/BusinessPlanSection'
import Overview from './sections/Overview'
import Participants from './sections/Participants'
import ProblemSolution from './sections/ProblemSolution'
import Roadmap from './sections/Roadmap'
import TechnicalImplementationSection from './sections/TechnicalImplementationSection'
import WhyOurTeamSection from './sections/WhyOurTeamSection'

const page = () => {
  return (
    <div>
      <ProblemSolution />
      <Overview />
      <Participants />
      <BusinessPlanSection />
      <WhyOurTeamSection />
      <Roadmap />
      <TechnicalImplementationSection />
    </div>
  )
}

export default page
