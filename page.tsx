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
      <nav className="bg-zinc-900 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Barhamienne Transport</Link>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-red-500">Accueil</Link></li>
            <li><Link href="/reservations" className="hover:text-red-500">Réservations</Link></li>
            <li><Link href="/horaires" className="hover:text-red-500">Horaires</Link></li>
            <li><Link href="/faq" className="hover:text-red-500">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-26%20at%2015.42.00-AvQON2h9Bu1kf52xYUT08KM9gkBQwK.jpeg"
            alt="Barhamienne Transport Logo"
            fill
            style={{ objectFit: 'cover' }}
            className="object-center"
            priority
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Qui Sommes Nous</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Bienvenue sur le site de Barhamienne Transport, votre partenaire de confiance pour tous vos besoins en matière de transport. Nous sommes spécialisés dans la prestation de services de transport adaptés à vos exigences, spécialement pour simplifier les déplacements des étudiants.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notre équipe dévouée met un point d'honneur à garantir un service rapide, confortable et sécurisé, afin de satisfaire toutes vos attentes. Chez Barhamienne Transport, nous comprenons l'importance de la ponctualité et de la qualité du service.
              </p>
              <p className="text-gray-300 leading-relaxed">
                C'est pourquoi nous utilisons des véhicules modernes et bien entretenus, équipés. Notre personnel professionnel et expérimenté est à votre disposition pour vous accompagner à chaque étape de votre trajet.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Nos différentes Caravanes</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Bus className="text-red-500" />
                  <span>UGB-THIES-DAKAR</span>
                </li>
                <li className="flex items-center gap-3">
                  <Bus className="text-red-500" />
                  <span>DAKAR-THIES-UGB</span>
                </li>
                <li className="flex items-center gap-3">
                  <Bus className="text-red-500" />
                  <span>UGB-DAKAR-MBOUR</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-2xl">Réserver votre trajet</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="matin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-zinc-800">
                <TabsTrigger value="matin">Matin</TabsTrigger>
                <TabsTrigger value="apres-midi">Après-midi</TabsTrigger>
              </TabsList>
              <TabsContent value="matin">
                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-4 text-white">
                    <Bus className="h-5 w-5" />
                    <span className="text-lg font-medium">DAKAR-THIES-UGB (Matin)</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Dakar - Patte d'oie", time: "05h-40" },
                      { name: "Bountou Pikine - Station", time: "05h45" },
                      { name: "Fass mbao - Arrêt ICS", time: "06h-10" },
                      { name: "Keur Mbaye fall", time: "06h-20" },
                      { name: "Bargny-Edk", time: "06-55" },
                      { name: "Diamniadio - Station olibya", time: "07h05" },
                      { name: "Sébikhotane - niari poto", time: "07h-20" },
                      { name: "Km50 - Station clean oil", time: "07h35" },
                      { name: "Pout- Ciel oil", time: "07h-45" },
                      { name: "Mairie - Thies", time: "08h00" },
                      { name: "Tivaoune - Edk", time: "08h45" },
                      { name: "Tivaoune - Prefecture", time: "08h55" },
                      { name: "Pire - Garage", time: "09h10" },
                      { name: "Ngay - Station Star", time: "09h25" },
                      { name: "Ndande", time: "09h40" },
                      { name: "Kebemer", time: "09h55" },
                      { name: "Louga", time: "10h30" }
                    ].map((stop, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-zinc-800 py-2">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-red-500" />
                          <span>{stop.name}</span>
                        </div>
                        <span className="text-white">{stop.time}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-red-500 hover:bg-red-600">
                    Réservez
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="apres-midi">
                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-4 text-white">
                    <Bus className="h-5 w-5" />
                    <span className="text-lg font-medium">DAKAR-THIES-UGB (Après-midi)</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Dakar - Ecole Normale", time: "12h30" },
                      { name: "Bountou Pikine - Station", time: "12h50" },
                      { name: "Fass mbao - Arrêt ICS", time: "13h10" },
                      { name: "Keur Mbaye fall", time: "13h25" },
                      { name: "Bargny-Edk", time: "13h55" },
                      { name: "Diamniadio - Station olibya", time: "14h10" },
                      { name: "Sébikhotane - niari poto", time: "14h25" },
                      { name: "Km50 - Station clean oil", time: "14h35" },
                      { name: "Pout- Ciel oil", time: "14h45" },
                      { name: "Mairie - Thies", time: "15h00" },
                      { name: "Tivaoune - Edk", time: "15h45" },
                      { name: "Tivaoune - Prefecture", time: "15h55" },
                      { name: "Pire - Garage", time: "16h10" },
                      { name: "Ngay - Station Star", time: "16h25" },
                      { name: "Ndande", time: "16h40" },
                      { name: "Kebemer", time: "16h55" },
                      { name: "Louga", time: "17h30" }
                    ].map((stop, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-zinc-800 py-2">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-red-500" />
                          <span>{stop.name}</span>
                        </div>
                        <span className="text-white">{stop.time}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-red-500 hover:bg-red-600">
                    Réservez
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Vos questions fréquentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Comment effectuer une réservation?</AccordionTrigger>
                <AccordionContent>
                  Pour effectuer une réservation, vous pouvez utiliser notre formulaire en ligne ou nous contacter directement par téléphone. Sélectionnez votre itinéraire, la date et l'heure de départ, et suivez les instructions pour finaliser votre réservation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Comment savoir si ma réservation est effective?</AccordionTrigger>
                <AccordionContent>
                  Après votre réservation, vous recevrez une confirmation par SMS. Vous pouvez également vérifier le statut de votre réservation en nous contactant directement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Où se situe votre siège principal?</AccordionTrigger>
                <AccordionContent>
                  Notre siège principal est situé au Campus 1 entre Village B et Village C.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Comment se déroulent les caravanes de Mbour et du week-end?</AccordionTrigger>
                <AccordionContent>
                  Les caravanes de Mbour et du week-end suivent un horaire spécial. Nous proposons des départs réguliers avec des arrêts aux points principaux. Contactez-nous pour plus de détails sur les horaires spécifiques.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-zinc-900 py-12">
        <div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-3">
          <Card className="bg-black border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-red-500" />
                Sécurité
              </CardTitle>
            </CardHeader>
            <CardContent>
              Voyagez en toute tranquillité avec nos services de transport sécurisés
            </CardContent>
          </Card>
          <Card className="bg-black border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-red-500" />
                Confort
              </CardTitle>
            </CardHeader>
            <CardContent>
              Profitez d'un voyage confortable dans nos bus modernes et bien entretenus
            </CardContent>
          </Card>
          <Card className="bg-black border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                Proximité
              </CardTitle>
            </CardHeader>
            <CardContent>
              Des arrêts stratégiquement situés pour votre commodité
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <a href="tel:78-427-10-52" className="hover:text-red-500">78-427-10-52</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <a href="tel:77-358-68-75" className="hover:text-red-500">77-358-68-75</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <span>Commercial: </span>
                  <a href="tel:78-191-82-82" className="hover:text-red-500">78-191-82-82</a>
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
                <li><Link href="/reservations" className="hover:text-red-500">Réservations</Link></li>
                <li><Link href="/horaires" className="hover:text-red-500">Horaires</Link></li>
                <li><Link href="/faq" className="hover:text-red-500">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
            <p>&copy; {new Date().getFullYear()} Barhamienne Transport. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

