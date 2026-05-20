import type { AvatarStackProps } from '@/common/avatar/types'
import Image from 'next/image'

/**
 * @description Renders a compact stack of decorative avatars.
 * @component
 * @param {AvatarStackProps} props - Component properties.
 * @param {AvatarStackProps['avatars']} props.avatars - Avatar items to render.
 * @param {AvatarStackProps['ariaLabel']} [props.ariaLabel] - Accessible avatar group label.
 * @returns A rendered stacked avatar group.
 */
export const AvatarStack = ({ avatars, ariaLabel }: AvatarStackProps) => {
  return (
    <div className="flex -space-x-2" aria-label={ariaLabel}>
      {avatars.map((avatar) => (
        <span
          key={avatar.id}
          className="border-river/40 relative inline-flex size-10 overflow-hidden rounded-full border-2"
        >
          <Image src={avatar.image} alt={avatar.imageAlt} fill sizes="2.5rem" className="object-cover" />
        </span>
      ))}
    </div>
  )
}
