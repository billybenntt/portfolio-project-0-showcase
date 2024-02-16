import * as Accordion from '@radix-ui/react-accordion';
import {PlusIcon} from 'lucide-react'

function AccordionComponent() {
    return (
        <Accordion.Root type="single" defaultValue="item-1" collapsible>

            <div className=" accordion-center">
                <Accordion.Item value="item-1">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Lorem ipsum dolor sit amet, elit. Consequuntur, tempore?</span>
                            <PlusIcon/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        Lorem ipsum dolor sit amet.
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Lorem ipsum dolor sit amet, elit. Consequuntur, tempore?</span>
                            <PlusIcon/>

                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        Lorem ipsum dolor sit amet.
                    </Accordion.Content>
                </Accordion.Item>


                <Accordion.Item value="item-3">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Lorem ipsum dolor sit amet, elit. Consequuntur, tempore?</span>
                            <PlusIcon/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        Lorem ipsum dolor sit amet.
                    </Accordion.Content>
                </Accordion.Item>


            </div>


        </Accordion.Root>
    )
}

export default AccordionComponent
