import Card from "@/app/globalComponents/card/Card"
import scalabilityLogo from "../../../../public/assets/logos/scalability.webp"
import fullpowerLogo from "../../../../public/assets/logos/full power.webp"
import coworkerLogo from "../../../../public/assets/logos/coworker.webp"
import employeeLogo from "../../../../public/assets/logos/address employrr challenges.webp"


const CardSection = () => {
    return (
        <div className="flex flex-col md:flex-row p-3 md:p-10 gap-10">
            <Card logo={scalabilityLogo} title="Scalability" paragraph="1 platform manages thousands of AI agents"/>
            <Card logo={fullpowerLogo} title="Full power control" paragraph="Covering reporting, access and token consumption."/>
            <Card logo={coworkerLogo} title="Be a co-worker" paragraph="Setting up workflows between AI agents and humans"/>
            <Card logo={employeeLogo} title="Address employee challenges" paragraph="With frequently changing data"/>

        </div>
    )
}

export default CardSection