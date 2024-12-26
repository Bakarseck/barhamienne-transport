import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
      <Image 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-26%20at%2015.42.00-AvQON2h9Bu1kf52xYUT08KM9gkBQwK.jpeg"
        alt="Barhamienne Transport Bus"
        fill
        style={{ objectFit: 'cover' }}
        className="object-center"
        priority
      />
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-4">Voyagez en Toute Sérénité</h1>
        <p className="text-xl text-red-500">SÉCURITÉ - CONFORT - PROXIMITÉ</p>
      </div>
    </section>
  );
}
