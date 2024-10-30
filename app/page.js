import Image from "next/image"

export default function Main(){
    return (
       <section>
            <Image
                src="/my-portfolio/profile.jpg"
                alt="profile photo"
                className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
                unoptimized
                width={160}
                height={160}
            />
            <div className="flex flex-row items-center mb-8">
                <h1 className="text-2xl font-medium tracking-tighter">Hello,I am Guntur</h1>
                <small>👋</small>
            </div>
            <div className="prose prose-neutral">
                <p>
                 A fullstack developer skilled in web application development using <strong>JavaScript</strong>, <strong>Next.js</strong>, <strong>Laravel</strong>, and <strong>MySQL</strong>.
                </p>
                <p>
                    With JavaScript as a foundation, I build interactive and dynamic frontend applications using Next.js. On the backend, I leverage Laravel and MySQL to develop APIs.
                </p>
            </div>
       </section>
    )
} 