import Image from 'next/image';

export const StudentsUnionIcon = ({ size }: { size: number }) => {
  return (
    <Image src={'/logo.svg'} alt={'Logo Samorządu Studentów PWr'} width={size} height={size} />
  )
}