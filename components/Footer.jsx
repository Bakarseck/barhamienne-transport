import { Bus, Calendar, Clock, MapPin, Phone, Mail, MapPinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-800">
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
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-500" />
                  <a href="tel:78-427-10-52" className="hover:text-red-500">barhamiennetransport@gmail.com</a>
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
    );
  }
  