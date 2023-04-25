import { FiGithub, FiMail } from 'react-icons/fi'
import { TfiLinkedin } from 'react-icons/tfi'

const Footer = () => {
  return (
    <div className='h-16 bg-main flex items-center justify-between bg-gradient-to-r from-[#274046] dark:from-[#b3b8b3] to-[#616161] dark:to-[#bfbbbb] px-8'>
        <p className="">
          © Nguyễn Thái Khánh Duy
        </p>
        <div className="flex items-center justify-start gap-3">
          <a href='/' className="rounded-full border-2 p-2 social-item relative">
            <TfiLinkedin size={20}/>
          </a>
          <a href='/' className="rounded-full border-2 p-2 social-item relative">
            <FiMail size={20}/>
          </a>
          <a href='/' className="rounded-full border-2 p-2 social-item relative">
            <FiGithub size={20}/>
          </a>
          
        </div>
    </div>
  )
}

export default Footer