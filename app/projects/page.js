import { projects } from "./project-data";

export const metadata = {
    title: "Projects",
    description: "My Projects",
  };

export default function Projects(){
    return (
        <section>
            <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
            <div className="space-y-6">
                {projects.map((val,i)=>(
                    <div 
                        key={i}
                        className="flex flex-col"
                    >
                        <div className="w-full flex justify-between items-baseline">
                            <span className="text-black font-semibold tracking-tight">
                                {val.title}
                            </span>
                        </div>
                        <p className="prose prose-neutral pt-3">
                            {val.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}