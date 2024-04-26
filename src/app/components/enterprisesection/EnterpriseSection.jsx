import ModuleCard from "@/app/globalComponents/module-card/ModuleCard"
import KnowledgemanagementLogo from "../../../../public/assets/logos/knowledge management module.webp"
import AccuracyManagementLogo from "../../../../public/assets/logos/accuracy management.webp"
import IntegrationApiLogo from "../../../../public/assets/logos/integration of apis.webp"
import AIPerformoLogo from "../../../../public/assets/logos/ai perfo module.webp"
import ManagementLogo from "../../../../public/assets/logos/management and reporting module.webp"
import TouchpointLogo from "../../../../public/assets/logos/built in touchpoint.webp"

const EnterpriseSection = () => {
    const knowledgeModuleList = ["Data management system", "Data converter & organization system", "Multi language processing", "Data cleansing system for AI"]
    const accuracyModuleList = ["Search augmentation system", "Validation system", "Automated testing & fine-tuning system"]
    const integrationModuleList = ["Integration for Large Action Model (LAM) inside", "APIs for connection (input & output) for external systems"]
    const AIModuleList = ["Caching management system", "Monitoring the performance of your AI Agent", "Slot-filling system"]
    const managementModuleList = ["LLM management", "AI Agent management", "Analytics across usage and performance"]
    const touchpointsModuleList = ["Eko: AI Interfacing App for employees", "IVR system for voicebot", "Voicebot - Thai & Latin language conversations", "Specially-made kiosk for avatar AI"]

    return (
        <div className="flex flex-col items-center p-2">
            <div className="p-2 md:w-1/2 text-center  2xl:leading-[80px]">
                <span className=" text-4xl font-bold 2xl:text-[90px]">Meet "The Enterprise Grade AI Agents"</span>
            </div>
            <div className="flex flex-col md:grid md:grid-rows-2 md:grid-cols-3 gap-10 p-2 md:p-10">
            <ModuleCard image={KnowledgemanagementLogo} title="Knowledge Management Module" subtitle="Transform enterprise-specific knowledge into AI-first contents" listitems={knowledgeModuleList} />
            <ModuleCard image={AccuracyManagementLogo} title="Accuracy Management Module" subtitle="Control and Configuring AI agents to ensure accuracy" listitems={accuracyModuleList} />
            <ModuleCard image={IntegrationApiLogo} title="Integrations & APIs" subtitle="Connect to external systems via APIs" listitems={integrationModuleList} />
            <ModuleCard image={AIPerformoLogo} title="AI Performance Module" subtitle="Measure & tune AI performance" listitems={AIModuleList} />
            <ModuleCard image={ManagementLogo} title="Management & Reporting Module" subtitle="Monitor and draw insight from conversational data" listitems={managementModuleList} />
            <ModuleCard image={TouchpointLogo} title="Built-in Touchpoints" subtitle="Mainstream platforms (LINE, FB, Whatsapp, etc.)" listitems={touchpointsModuleList} />
            </div>
        </div>
    )
}

export default EnterpriseSection