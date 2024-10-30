import { Img } from "../component/image";

export default function Photos(){
    return (
        <section>
             <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
             <Img
                images={[
                    { src:"/app/cuan-pulsa.png" },
                    { src:"/app/apps.jpeg" },
                    { src:"/app/rapat.jpeg" }
                ]}
             />
        </section>
    )
}