import {GraduationCap} from "lucide-react";
import {IconLinkedIn} from "@/assets";

function ContactPage() {
    return (
        <main className="offset">

            <section className="section">
                <div className="section-title">
                    <GraduationCap/>
                    <h1>Contact Me</h1>
                </div>

                <div className="section-center">
                    <div className="desktop">
                        <IconLinkedIn/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactPage
