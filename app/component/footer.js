import { FaInstagram,FaGithub } from "react-icons/fa";

const year = new Date().getFullYear();

function SocialLinks(){
    return (
        <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
            <a href="https://github.com/guntrx"><FaGithub/></a>
            <a href="https://www.instagram.com/gunt_trx"><FaInstagram/></a>
        </div>
    )
}

export default function Footer(){
    return (
        <small className="block mt-16 lg:mt-24 text-[#1C1C1C]">
            <time>{year}</time>
            <SocialLinks/>
        </small>
    )
}