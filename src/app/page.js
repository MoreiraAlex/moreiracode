'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Bot, Code, Globe, Menu } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const services = [
    {
      icon: <Code />,
      title: 'Sistemas personalizados',
      sub: 'Feitos para realidade do seu negócio.',
      desc: 'Desenvolvemos sistemas sob medida para centralizar informações, simplificar processos e dar mais controle para você tomar decisões com segurança.',
    },
    {
      icon: <Bot />,
      title: 'Automações',
      sub: 'Menos tarefas manuais, mais produtividade.',
      desc: 'Automatize  processos repetitivos e integrações entre ferramentas para eliminar retrabalho, reduzi erros e liberar tempo da sua equipe para o que realmente importa.',
    },
    {
      icon: <Globe />,
      title: 'Sites e plataformas',
      sub: 'Presença difital que gera resultados.',
      desc: 'Criamos sittes e plataformas modernas, rápidas e responsivas para fortalecer sua marca, transmitir credibilidade e conquistar mais clientes.',
    },
  ]

  const process = [
    {
      title: 'Diagnóstico',
      desc: 'Entendemos sua operação e identificamos gargalos',
    },
    {
      title: 'Proposta',
      desc: 'Definimos a melhor solução para o seu cenário',
    },
    {
      title: 'Desenvolvimento',
      desc: 'Construímos o sistema ou automação sob medida',
    },
    {
      title: 'Entrega',
      desc: 'Implantamos e acompanhamos o uso na prática',
    },
  ]

  return (
    <main className="min-h-screen text-foreground">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 -z-10 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          ></div>
          <a
            className="hidden"
            href="https://br.freepik.com/vetores-gratis/numeros-de-queda-digitais-do-codigo-binario-do-estilo-da-matriz-fundo-azul_24600855.htm#fromView=keyword&page=1&position=1&uuid=2fd53dc6-1079-4694-91f5-c9528ff89c7e&query=Developer+background"
          >
            Imagem de starline no Freepik
          </a>

          <div className="absolute inset-0 bg-background/80 " />
        </div>

        {/* NAV / BRAND */}
        <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl flex items-center justify-between rounded-xl border bg-background/80 backdrop-blur px-4 py-3 z-50">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted border flex items-center justify-center text-xs">
              LOGO
            </div>
            <span className="font-semibold text-lg">MoreiraCode</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href="#services"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Serviços
            </Link>
            <Link
              href="#process"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Processo
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Contato
            </Link>

            <Link href=" https://wa.me/5511912372570" target="_blank">
              <Button className="rounded-xl">Falar no WhatsApp</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-xl">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-[85vw]">
                <DropdownMenuItem asChild>
                  <Link href="#services">Serviços</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#process">Como funciona</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#contact">Contato</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href=" https://wa.me/5511912372570" target="_blank">
                    Falar no WhatsApp
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 ">
          <div className="h-screen grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
                Sistemas e automações para empresas que querem crescer
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Na MoreiraCode, desenvolvemos soluções sob medida para organizar
                sua operação e escalar com tecnologia.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="https://lush-english-9a7.notion.site/13dee681d661814f8312f016e47cfc8c?pvs=105"
                  target="_blank"
                >
                  <Button className="px-6 py-5 text-lg rounded-xl">
                    Solicitar orçamento
                  </Button>
                </Link>

                <Link href="#process">
                  <Button
                    variant="outline"
                    className="px-6 py-5 text-lg rounded-xl"
                  >
                    Ver como funciona
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="p-6 rounded-xl border bg-background/50 backdrop-blur">
                <h3 className="text-xl font-medium">
                  Mais produtividade com menos esforço
                </h3>

                <p className="text-muted-foreground mt-2 mb-4">
                  Automatize tarefas repetitivas e foque no que realmente faz
                  sua empresa crescer.
                </p>

                <ul className="text-sm text-muted-foreground space-y-1 list-disc">
                  <li className="ml-10">Economia de tempo</li>
                  <li className="ml-10">Redução de custos</li>
                  <li className="ml-10">Escalabilidade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto bg-primary">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Sua empresa ainda depende de processos manuais?
          </h2>
          <p className="text-secondary-foreground text-lg">
            Planilhas, retrabalho e falta de controle atrasam seu crescimento.
            Nós resolvemos isso com sistemas e automações sob medida.
          </p>
          <Link
            href="https://lush-english-9a7.notion.site/13dee681d661814f8312f016e47cfc8c?pvs=105"
            target="_blank"
          >
            <Button
              variant="secondary"
              className="mt-6 px-8 py-6 text-lg rounded-xl"
            >
              Solicitar orçamento
            </Button>
          </Link>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="services" className="relative mx-auto min-h-screen">
        <div
          className="absolute inset-0 -z-10 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-background/80 " />
        </div>

        <div className="max-w-7xl  mx-auto flex flex-col justify-center items-center gap-24 px-6 py-28">
          <div className="text-center max-w-xl">
            <h2 className="font-semibold text-primary">SERVIÇOS</h2>
            <p className="text-3xl font-semibold mb-4">
              Soluções que impulsionam o crescimento da sua empresa
            </p>
            <p className="text-muted-foreground text-sm">
              Tecnologia sob medida para resolver problemas reais e gerar
              resultados.
            </p>
          </div>
          <div className="space-y-20">
            {services.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-16 ${
                  i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex justify-center items-start gap-4">
                  <span className="text-primary border p-2 rounded-lg">
                    {item.icon}
                  </span>

                  <div className="flex-1 max-w-[400px] rounded-xl backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold mt-2">
                      {item.title}
                    </h3>

                    <p className="text-primary mb-3">{item.sub}</p>

                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>

                <Image
                  src="/placeholder.jpg"
                  alt=""
                  width={500}
                  height={500}
                  className="w-96 hidden md:block object-cover rounded-2xl h-56"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="process" className="max-w-5xl mx-auto px-6 py-28">
        <div className="text-center">
          <h2 className="font-semibold text-primary">PROCESSO</h2>
          <p className="text-3xl font-semibold mb-4">Do problema à solução</p>
          <p className="text-muted-foreground text-sm">
            Um processo claro para entender sua operação, desenvolver a solução
            certa e entregar resultados reais.
          </p>
        </div>
        <div className="relative mt-16">
          {/* linha */}
          <div className="hidden md:block absolute top-5 left-0 w-full h-px bg-border" />

          <div className="grid md:grid-cols-4 gap-10 text-center">
            {process.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center">
                {/* bolinha */}
                <div className="w-10 h-10 rounded-full bg-secondary text-primary-foreground flex items-center justify-center font-semibold mb-4 z-10">
                  {i + 1}
                </div>

                <h3 className="font-semibold mb-2">{step.title}</h3>

                <p className="text-sm text-muted-foreground max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto min-h-screen">
        <div
          className="absolute inset-0 -z-10 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-background/80 " />
        </div>

        <div className="max-w-7xl  mx-auto flex flex-col justify-center items-center gap-10 px-6 py-28">
          <div className="text-center max-w-xl">
            <h2 className="font-semibold text-primary">CONTATO</h2>
            <p className="text-3xl font-semibold mb-4">
              Vamos entender sua operação e encontrar a melhor solução
            </p>
            <p className="text-muted-foreground text-sm">
              Me conte como funciona seu processo hoje e eu te mostro como
              podemos automatizar e organizar sua empresa com tecnologia.
            </p>
          </div>

          {/* <div className="max-w-4xl mx-auto px-6 py-20"> */}
          <iframe
            src="https://lush-english-9a7.notion.site/ebd//13dee681d661814f8312f016e47cfc8c"
            className="w-full h-[80vh] rounded-2xl border bg-background"
          />
        </div>
        {/* </div> */}
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto p-6 text-sm text-muted-foreground flex flex-col justify-between">
        <div className="flex gap-6 mb-2">
          <p>suporte@moreiracode.com</p>
          <Link href=" https://wa.me/5511912372570" target="_blank">
            (11) 91237-2570
          </Link>
        </div>

        <p className="border-t pt-2">
          Copyright © {new Date().getFullYear()} MoreiraCode. Todos os direitos
          reservados. 41.925.661 ALEX INOCENCIO MOREIRA. CNPJ:
          41.925.661/0001-05
        </p>
      </footer>
    </main>
  )
}
