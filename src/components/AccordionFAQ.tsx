import * as Accordion from '@radix-ui/react-accordion';
import {PlusIcon, MinusIcon} from 'lucide-react'
import {kurewaSerif} from "@/styles/fonts/fonts";

function AccordionFAQ() {
    return (
        <Accordion.Root type="single" defaultValue="item-1" collapsible>
            <div className=" accordion-center">
                <Accordion.Item value="item-1">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span className={kurewaSerif.className}>中文可以嗎?</span>
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        <span className={kurewaSerif.className}>非常可以的</span>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-2">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Lorem ipsum dolor sit amet, elit. Consequuntur, tempore?</span>
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
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
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
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

export default AccordionFAQ
