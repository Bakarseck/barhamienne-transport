import { Bus, Calendar, Clock, MapPin, Phone, Mail, MapPinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TransportBooking() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Menu */}
      <nav className="bg-black py-4 sticky top-0 z-50 border-b ">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="w-48 h-12 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-26%20at%2015.20.55(3)-PwcOXCeCQqdMZLbJ6OME9C9lGAo3qD.jpeg"
              alt="Barhamienne Transport Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-red-500 transition-colors">Accueil</Link></li>
            <li><Link href="/contact" className="hover:text-red-500 transition-colors">Yobanté</Link></li>
            <li><Link href="/faq" className="hover:text-red-500 transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
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
      </section>

      {/* Booking Cards Section */}
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

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900  hover:border-white transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-red-500" />
                  Sécurité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Voyagez en toute tranquillité avec nos services de transport sécurisés</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900  hover:border-white transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-red-500" />
                  Confort
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Profitez d'un voyage confortable dans nos bus modernes et bien entretenus</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900  hover:border-white transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-red-500" />
                  Proximité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Des arrêts stratégiquement situés pour votre commodité</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="">
                <AccordionTrigger className="hover:text-red-500">Comment effectuer une réservation?</AccordionTrigger>
                <AccordionContent>
                  Pour effectuer une réservation, vous pouvez utiliser notre formulaire en ligne ou nous contacter directement par téléphone. Sélectionnez votre itinéraire, la date et l'heure de départ, et suivez les instructions pour finaliser votre réservation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="">
                <AccordionTrigger className="hover:text-red-500">Comment savoir si ma réservation est effective?</AccordionTrigger>
                <AccordionContent>
                  Après votre réservation, vous recevrez une confirmation par SMS. Vous pouvez également vérifier le statut de votre réservation en nous contactant directement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="">
                <AccordionTrigger className="hover:text-red-500">Où se situe votre siège principal?</AccordionTrigger>
                <AccordionContent>
                  Notre siège principal est situé au Campus 1 entre Village B et Village C.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="">
                <AccordionTrigger className="hover:text-red-500">Comment se déroulent les caravanes de Mbour et du week-end?</AccordionTrigger>
                <AccordionContent>
                  Les caravanes de Mbour et du week-end suivent un horaire spécial. Nous proposons des départs réguliers avec des arrêts aux points principaux. Contactez-nous pour plus de détails sur les horaires spécifiques.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t ">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <a href="tel:78-427-10-52" className="hover:text-red-500 transition-colors">78-427-10-52</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <a href="tel:77-358-68-75" className="hover:text-red-500 transition-colors">77-358-68-75</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <span>Commercial: </span>
                  <a href="tel:78-191-82-82" className="hover:text-red-500 transition-colors">78-191-82-82</a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Adresse</h3>
              <p className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-red-500" />
                Campus 1 entre Village B et Village C
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li><Link href="/reservations" className="hover:text-red-500 transition-colors">Réservations</Link></li>
                <li><Link href="/horaires" className="hover:text-red-500 transition-colors">Horaires</Link></li>
                <li><Link href="/faq" className="hover:text-red-500 transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t  text-center">
            <p>&copy; {new Date().getFullYear()} Barhamienne Transport. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

