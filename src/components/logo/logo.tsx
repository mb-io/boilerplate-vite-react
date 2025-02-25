import { ThemeProps } from '@/hooks/use-theme/use-theme'
import useThemeStore from '@/stores/theme-store/theme-store'

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo(props?: LogoProps) {
  const { theme } = useThemeStore()
  let width
  let height
  if (props?.size === 'lg') {
    width = '400'
    height = '104'
  } else if (props?.size === 'md') {
    width = '300'
    height = '78'
  } else {
    width = '200'
    height = '52'
  }

  const pngSrc =
    theme === ThemeProps.dark
      ? `https://meteorbytemediablob.blob.core.windows.net/public-media/MeteorByte-Logo-Dark-${width}px.png`
      : `https://meteorbytemediablob.blob.core.windows.net/public-media/MeteorByte-Logo-Light-${width}px.png`

  const webpSrc =
    theme === ThemeProps.dark
      ? `https://meteorbytemediablob.blob.core.windows.net/public-media/MeteorByte-Logo-Dark-${width}px.webp`
      : `https://meteorbytemediablob.blob.core.windows.net/public-media/MeteorByte-Logo-Light-${width}px.webp`

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrc} />
      <source type="image/png" srcSet={pngSrc} />
      <img
        alt="MeteorByte Logo"
        className={props?.className}
        src={pngSrc}
        height={height + 'px'}
        width={width + 'px'}
      />
    </picture>
  )
}
