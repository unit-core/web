import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Denis Popov. I live in Spain, where I design my own services.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I was eight when my classmates started getting the first push-button phones.
              I still remember the moment I picked up a friend's Siemens and saw that the volume bar could be adjusted by half a notch.
              This tiny interface detail literally blew my mind with its logic and aesthetics.
            </p>
            <p>
              I read paper mobile phone store catalogs until they were tattered.
              By the age of ten, I knew the specifications of every model on the market better than my multiplication tables.
              It wasn't just a love of gadgets—it was a premonition of what I really wanted to do.
            </p>
            <p>
              But life took a sharp turn, and at 22, I found myself not behind a computer screen, but on a construction site.
              For five years, I worked as a polyethylene pipe welder.
              It was hard, grueling physical labor that left no room for creativity.
              At some point, I realized: either I take a risk now, or this "now" would never come.
              I quit my job "for nothing," pulled out my sister's old MacBook, and made a promise to myself and my parents: I had a year to learn how to create apps, or I'd go back to welding forever.
            </p>
            <p>
              Learning alone was incredibly difficult.
              Without a network or mentors, every step in Xcode felt like climbing Everest.
              But I learned the most important rule: just keep going.
              Eight months later, I received my first offer for $200.
              That money meant more to me than any millions—it was proof that I was finally in the right place.
            </p>
            <p>
              Today, having worked my way up to Senior iOS Developer, I'm building <strong>Unitcore</strong>.
              I create my own services and share my process publicly because I believe in transparency and clean code.
              I'm still that guy who admires a perfect interface, but now I don't just study catalogs—I create products that people use.
              And frankly, I still don't have enough.
            </p>
            {/* <p>
            Мне было восемь, когда у моих одноклассников начали появляться первые кнопочные телефоны. 
            Я до сих пор помню тот момент, когда взял в руки Siemens друга и увидел, что полоску громкости можно сдвинуть на «половинку» деления. 
            Эта крошечная деталь интерфейса буквально свела меня с ума своей логичностью и эстетикой.
            </p>
            <p>
            Я до дыр зачитывал бумажные каталоги сотовых магазинов. 
            К десяти годам я знал спецификации каждой модели на рынке лучше, чем таблицу умножения. 
            Это была не просто любовь к гаджетам — это было предчувствие того, чем я действительно хочу заниматься.
            </p>
            <p>
            Но жизнь сделала крутой поворот, и в 22 года я обнаружил себя не за экраном монитора, а на стройплощадке. 
            Пять лет я работал сварщиком полиэтиленовых труб. 
            Это был тяжелый, изматывающий физический труд, который не оставлял места для творчества. 
            В какой-то момент я понял: либо я рискну сейчас, либо это «сейчас» не наступит никогда. 
            Я уволился «в никуда», достал старый сестринский MacBook и дал себе и родителям обещание: у меня есть год, чтобы научиться создавать приложения, или я навсегда вернусь к сварке.
            </p>
            <p>
            Учиться в одиночку было чертовски сложно. 
            Без окружения и наставников, каждый шаг в Xcode казался восхождением на Эверест. 
            Но я усвоил главное правило: просто не останавливаться. 
            Спустя восемь месяцев я получил свой первый оффер на 200 долларов. 
            Эти деньги значили для меня больше, чем любые миллионы — они были доказательством того, что я наконец-то на своем месте.
            </p>
            <p>
            Сегодня, пройдя путь до Senior iOS Developer, я строю <strong>Unitcore</strong>. 
            Я создаю собственные сервисы и делюсь процессом публично, потому что верю в прозрачность и чистоту кода. 
            Я всё еще тот парень, которого восхищает идеальный интерфейс, но теперь я не просто изучаю каталоги — я сам создаю продукты, которыми пользуются люди. 
            И, честно говоря, мне всё еще мало.
            </p> */}
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
