import Image from "next/image"


export const Img = ({images})=>{
    return (
        <section>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 my-8">
                {images.map((image,i)=>(
                    <div key={i} className="relative aspect-square" >
                        <a href={image.src} target="_BLANK">
                            <Image
                                alt="image"
                                src={image.src}
                                fill
                                sizes="100vw"
                                priority
                                className="rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}