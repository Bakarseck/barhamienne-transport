

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Vos questions féquentes</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
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
    </div>
  )
}

