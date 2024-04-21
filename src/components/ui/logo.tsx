import Image from "next/image";

export interface LogoProps {
  size: number;
  className?: string;
}

const Logo = ({ size, className }: LogoProps) => {
  return (
    <div>
      <Image
        src={"/assets/images/logo.png"}
        alt="Winzoria's Logo"
        width={size}
        height={size}
        className={`mx-auto ${className}`}
      />
    </div>
  );
};

export default Logo;
