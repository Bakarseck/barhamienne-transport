import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Booking() {


  return (
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Destinations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900  hover:border-white transition-colors group">
              <CardHeader className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="UGB-THIES-DAKAR"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <CardTitle className="absolute bottom-4 left-4 text-white">UGB-THIES-DAKAR</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-400 mb-4">Départs quotidiens avec arrêts stratégiques</p>
                <Button className="w-full bg-red-500 hover:bg-red-600">Réserver</Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900  hover:border-white transition-colors group">
              <CardHeader className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="DAKAR-THIES-UGB"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <CardTitle className="absolute bottom-4 left-4 text-white">DAKAR-THIES-UGB</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-400 mb-4">Service matin et après-midi disponible</p>
                <Button className="w-full bg-red-500 hover:bg-red-600">Réserver</Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900  hover:border-white transition-colors group">
              <CardHeader className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="UGB-DAKAR-MBOUR"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <CardTitle className="absolute bottom-4 left-4 text-white">UGB-DAKAR-MBOUR</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-400 mb-4">Weekend spécial et service régulier</p>
                <Button className="w-full bg-red-500 hover:bg-red-600">Réserver</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
}
