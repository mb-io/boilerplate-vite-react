import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from '@heroui/link'
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@heroui/navbar'
import { link as linkStyles } from '@heroui/theme'
import clsx from 'clsx'

import Logo from '@/components/logo/logo'
import { siteConfig } from '@/configs/site'
import { ThemeSwitch } from '@/components/theme-switch/theme-switch'
import { SiGithub } from 'react-icons/si'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false)
    navigate(href)
  }

  return (
    <HeroUINavbar
      height="5rem"
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className="max-w-fit gap-3">
        <Link className="flex items-center justify-start gap-1" color="foreground" href="/" aria-label="Home">
          <Logo />
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="ml-2 hidden h-full basis-1/5 items-center justify-start gap-4 pt-7 sm:basis-full lg:flex"
        justify="start"
      >
        {siteConfig.routes.map(
          (item) =>
            item.visibleInNav && (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'text-lg data-[active=true]:font-medium data-[active=true]:text-primary'
                  )}
                  color="foreground"
                  href={item.href}
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            )
        )}
      </NavbarContent>

      <NavbarContent className="hidden basis-1/5 sm:flex sm:basis-full" justify="end">
        <NavbarItem className="hidden gap-2 sm:flex">
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <SiGithub className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{/** searchInput */}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <SiGithub className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarMenu>
        {/** searchInput */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.routes.map(
            (item, index) =>
              item.visibleInNav && (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    color={index === 2 ? 'primary' : index === siteConfig.routes.length - 1 ? 'danger' : 'foreground'}
                    href={item.href}
                    size="lg"
                    onPress={() => handleLinkClick(item.href)}
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              )
          )}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
