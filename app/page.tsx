import Participants from './sections/Participants'
import ProblemSolution from './sections/ProblemSolution'
import Roadmap from './sections/Roadmap'
import TechnicalImplementationSection from './sections/TechnicalImplementationSection'
import WhyOurTeamSection from './sections/WhyOurTeamSection'

const page = () => {
  return (
    <div>
      <ProblemSolution />
      <Participants />
      <WhyOurTeamSection />
      <Roadmap />
      <TechnicalImplementationSection />
    </div>
  )
}

export default page
