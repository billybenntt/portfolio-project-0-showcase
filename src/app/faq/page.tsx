'use client'
import dynamic from "next/dynamic";
import {MessageCircleQuestion} from "lucide-react";

const AccordionComponent = dynamic(() => import('@/components/AccordionComponent'), {ssr: false});


function FAQPage() {
    return (
        <main className="offset">

            <section className="section">
                <div className="section-title">
                    <MessageCircleQuestion/>
                    <h1>Frequent Asked Questions</h1>
                </div>

                <div className="section-center">
                    <AccordionComponent/>
                </div>
            </section>
        </main>
    )
}

export default FAQPage
