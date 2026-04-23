'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-bg.jpg"
            alt=""
            width={600}
            height={400}
            className="w-screen h-screen object-cover"
          />
          <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" />
        </div>

        {/* NAV / BRAND */}
        <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl flex items-center justify-between rounded-xl border bg-background/80 backdrop-blur px-4 py-3 z-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted border flex items-center justify-center text-xs">
              LOGO
            </div>
            <span className="font-semibold text-lg">MoreiraCode</span>
          </div>

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
              Como funciona
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Contato
            </Link>

            <Button className="rounded-xl">Falar no WhatsApp</Button>
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
                  <Link href="#">Falar no WhatsApp</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-screen grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
                Sistemas e automações para empresas que querem crescer
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Na MoreiraCode, desenvolvemos soluções sob medida para organizar
                sua operação e escalar com tecnologia.
              </p>

              <div className="flex gap-4">
                <Button className="px-6 py-5 text-lg rounded-xl">
                  Solicitar orçamento
                </Button>

                <Button
                  variant="outline"
                  className="px-6 py-5 text-lg rounded-xl"
                >
                  <Link href="#process">Ver como funciona</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
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
    </main>
  )
}
