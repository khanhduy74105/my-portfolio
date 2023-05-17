import { FiGithub, FiMail } from 'react-icons/fi'
import { TfiLinkedin } from 'react-icons/tfi'

const Footer = () => {
  return (
    <div className='h-16 bg-main flex items-center justify-between bg-gradient-to-r from-[#274046] dark:from-[#b3b8b3] to-[#616161] dark:to-[#f3f3f3] px-8'>
        <p className='text-white dark:text-black'>
          © Nguyễn Thái Khánh Duy
        </p>
        <div className="flex items-center justify-start gap-3">
          <a href='https://www.linkedin.com/in/duy-nguy%E1%BB%85n-th%C3%A1i-kh%C3%A1nh-837b0725b/' className="rounded-full border-2 p-2 social-item relative border-white dark:border-black">
            <TfiLinkedin size={20} className='fill-white dark:fill-black'/>
          </a>
          <a href="mailto:duyntk74105@gmail.com" className="rounded-full border-2 p-2 social-item relative border-white dark:border-black">
            <FiMail size={20} className='fill-white dark:fill-black'/>
          </a>
          <a href='https://github.com/khanhduy74105' className="rounded-full border-2 p-2 social-item relative border-white dark:border-black">
            <FiGithub size={20} className='fill-white dark:fill-black'/>
          </a>
          
        </div>
    </div>
  )
}

export default Footer