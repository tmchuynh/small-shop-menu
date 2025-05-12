import Image from "next/image";

export default function LogoCloud({
  title,
  data,
}: {
  title?: string;
  data: string[];
}) {
  return (
    <div className="mx-auto mt-8 md:mt-12 w-2/3 md:w-4/5 lg:w-5/6">
      {title && <h2>{title}</h2>}
      <div className="items-center gap-x-8 gap-y-10 sm:gap-x-10 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 mx-auto lg:mx-0 mt-10 max-w-lg sm:max-w-xl lg:max-w-none">
        {data.map((logo, index) => (
          <Image
            key={index}
            alt=""
            src={logo}
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
