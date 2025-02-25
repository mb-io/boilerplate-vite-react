import { FC, useState, useEffect } from 'react'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { SwitchProps, useSwitch } from '@heroui/switch'
import clsx from 'clsx'

import { useTheme } from '@/hooks/use-theme/use-theme'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'

export interface ThemeSwitchProps {
  className?: string
  classNames?: SwitchProps['classNames']
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className, classNames }) => {
  const [isMounted, setIsMounted] = useState(false)

  const { theme, toggleTheme } = useTheme('dark')

  const onChange = toggleTheme

  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch({
    isSelected: theme === 'light',
    onChange
  })

  useEffect(() => {
    setIsMounted(true)
  }, [isMounted])

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="size-6" />

  return (
    <Component
      aria-label={isSelected ? 'Switch to dark mode' : 'Switch to light mode'}
      {...getBaseProps({
        className: clsx('cursor-pointer px-px transition-opacity hover:opacity-80', className, classNames?.base)
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              'size-auto',
              'bg-transparent',
              'rounded-lg',
              'flex items-center justify-center',
              'group-data-[selected=true]:bg-transparent',
              '!text-default-500',
              'pt-px',
              'px-0',
              'mx-0'
            ],
            classNames?.wrapper
          )
        })}
      >
        {isSelected ? <IoMdMoon size={22} /> : <IoMdSunny size={22} />}
      </div>
    </Component>
  )
}
