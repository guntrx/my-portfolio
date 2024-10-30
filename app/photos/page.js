import { Img } from "../component/image";

export default function Photos(){
    return (
        <section>
             <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
             <Img
                images={[
                    { src:"/my-portfolio/app/cuan-pulsa.png" },
                    { src:"/my-portfolio/app/apps.jpeg" },
                    { src:"/my-portfolio/app/rapat.jpeg" }
                ]}
             />
        </section>
    )
}